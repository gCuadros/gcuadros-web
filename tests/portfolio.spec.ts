import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 390, 768, 1440]) {
  test(`home and layer interaction are accessible at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Gonzalo",
    );
    await expect(page.getByRole("heading", { level: 1 })).toContainText(
      "Cuadros",
    );
    await page.getByRole("button", { name: "02 Validación" }).click();
    await expect(
      page.getByRole("button", { name: "02 Validación" }),
    ).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#layer-detail")).toContainText(
      "Lo que compruebas.",
    );
    await page.getByRole("button", { name: "03 Producción" }).focus();
    await page.keyboard.press("Enter");
    await expect(page.locator("#layer-detail")).toContainText(
      "Lo que sucede después.",
    );
    await expect(page.locator(".layer-explorer")).toHaveAttribute(
      "data-active",
      "2",
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > innerWidth,
      ),
    ).toBe(false);
    expect(
      (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
          .analyze()
      ).violations,
    ).toEqual([]);
    const hrefs = await page
      .locator(".desktop-navigation a")
      .evaluateAll((nodes) => nodes.map((n) => n.getAttribute("href")));
    expect(hrefs).toEqual([
      "/",
      "/proyectos",
      "/docencia",
      "/blog",
      "/sobre-mi",
    ]);
  });
}

for (const locale of ["es", "en"]) {
  const prefix = locale === "en" ? "/en" : "";
  for (const width of [320, 1440]) {
    test(`pages, blog and CV work in ${locale} at ${width}px`, async ({
      page,
      request,
    }) => {
      await page.setViewportSize({ width, height: 900 });
      for (const path of [
        "/proyectos",
        "/blog",
        "/sobre-mi",
        "/docencia",
        "/blog/cicd-frontend",
        "/blog/fabrics-2025",
        "/proyectos/hevy",
      ]) {
        const response = await page.goto(prefix + path);
        expect(response?.status()).toBe(200);
        await expect(page.locator("html")).toHaveAttribute("lang", locale);
        await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth,
          ),
        ).toBe(false);
        expect(
          (
            await new AxeBuilder({ page })
              .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
              .analyze()
          ).violations,
        ).toEqual([]);
        const other = locale === "en" ? "es" : "en";
        const otherPrefix = other === "en" ? "/en" : "";
        await expect(
          page.locator(`.language-switch a[lang="${other}"]`),
        ).toHaveAttribute("href", otherPrefix + path);
      }
      await page.goto(prefix + "/sobre-mi");
      const cvLink = page.getByRole("link", {
        name: locale === "en" ? "Download CV (PDF)" : "Descargar CV (PDF)",
        exact: true,
      });
      const expectedCV =
        locale === "en"
          ? "/cv/gonzalo-cuadros-cv-en.pdf"
          : "/cv/gonzalo-cuadros-cv.pdf";
      await expect(cvLink).toHaveAttribute("href", expectedCV);
      await expect(cvLink).toHaveAttribute("download", "");
      const cv = await request.get(expectedCV);
      expect(cv.status()).toBe(200);
      expect((await cv.body()).subarray(0, 5).toString()).toBe("%PDF-");
      await page.goto(prefix + "/blog");
      await page.locator('h2 a[href$="/blog/cicd-frontend"]').click();
      await expect(page).toHaveURL(new RegExp(`${prefix}/blog/cicd-frontend$`));
      await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
        "content",
        "article",
      );
      await expect(page.locator(".article-body")).toContainText("manual");
      await page
        .locator(`.language-switch a[lang="${locale === "en" ? "es" : "en"}"]`)
        .click();
      await expect(page).toHaveURL(
        new RegExp(`${locale === "en" ? "" : "/en"}/blog/cicd-frontend$`),
      );
      await expect(page.locator("html")).toHaveAttribute(
        "lang",
        locale === "en" ? "es" : "en",
      );
    });
  }
}

test("mobile menu preserves keyboard focus, closes and navigates to real pages", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menú" });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Menú de navegación" });
  await expect(
    dialog.getByRole("link", { name: "Inicio", exact: true }),
  ).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  expect((await new AxeBuilder({ page }).analyze()).violations).toEqual([]);
  await dialog.getByRole("link", { name: "Conectar", exact: true }).focus();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("button", { name: "Cerrar menú" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
  await expect(dialog).not.toBeVisible();
  await trigger.click();
  await dialog.getByRole("link", { name: "Blog", exact: true }).click();
  await expect(page).toHaveURL(/\/blog$/);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Pensar");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
});

test("reduced motion keeps interaction and skip navigation usable", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Saltar al contenido" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  expect(
    await page
      .locator(".hero h1 > span")
      .first()
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  expect(
    await page
      .locator(".layer-front")
      .evaluate((el) => getComputedStyle(el).transitionDuration),
  ).toBe("0s");
  await page.getByRole("button", { name: "03 Producción" }).click();
  await expect(page.locator("#layer-detail")).toContainText(
    "Lo que sucede después.",
  );
});

test("core navigation and article language switching work without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/`);
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Gonzalo",
  );
  await page.getByRole("link", { name: "Entrar al blog" }).click();
  await page.locator('h2 a[href$="/blog/cicd-frontend"]').click();
  await page.getByRole("link", { name: "EN — English", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator(".article-body")).toContainText(
    "Start with what can break",
  );
  await context.close();
});

test("legacy articles redirect, RSS is localized and unknown articles are 404", async ({
  request,
}) => {
  for (const prefix of ["", "/en"]) {
    const old = await request.get(prefix + "/notas/cicd-frontend", {
      maxRedirects: 0,
    });
    expect(old.status()).toBe(308);
    expect(old.headers().location).toBe(prefix + "/blog/cicd-frontend");
    const feed = await request.get(prefix + "/blog/feed.xml");
    expect(feed.status()).toBe(200);
    expect(feed.headers()["content-type"]).toContain("application/rss+xml");
    const xml = await feed.text();
    expect(xml).toContain(`<language>${prefix ? "en" : "es"}</language>`);
    expect(xml).toContain(
      `https://gcuadros-web.vercel.app${prefix}/blog/cicd-frontend`,
    );
    expect(
      (await request.get(prefix + "/blog/not-a-real-article")).status(),
    ).toBe(404);
  }
});

test("project links and social images are real", async ({ page, request }) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Ver la sesión" }),
  ).toHaveAttribute("href", "https://www.youtube.com/watch?v=J4FLmBctSBs");
  await page
    .getByRole("link", { name: /Proyecto propio.*Hevy Coach MCP/ })
    .click();
  await expect(page).toHaveURL(/\/proyectos\/hevy$/);
  for (const route of ["/", "/en"]) {
    await page.goto(route);
    const src = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    const res = await request.get(new URL(src!).pathname);
    expect(res.status()).toBe(200);
    expect((await res.body()).subarray(0, 8).toString("hex")).toBe(
      "89504e470d0a1a0a",
    );
  }
});
