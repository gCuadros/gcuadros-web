import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

for (const width of [320, 390, 768, 1440]) {
  test(`home is readable and accessible at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.evaluate(() => document.fonts.ready);
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Arquitectura frontend. De las decisiones a producción.",
    );
    for (const title of [
      "Plataformas, producción y equipos",
      "Una trayectoria construyendo frontend",
      "Hevy Coach MCP",
      "Compartir lo que aprendo",
    ]) {
      await expect(
        page.getByRole("heading", { name: title, exact: true }),
      ).toBeVisible();
    }
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > innerWidth,
    );
    expect(overflow).toBe(false);
    const inaccessible = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
      .analyze();
    expect(inaccessible.violations).toEqual([]);
    const brokenAnchors = await page
      .locator('a[href^="#"]')
      .evaluateAll((anchors) =>
        anchors
          .filter(
            (a) => !document.getElementById(a.getAttribute("href")!.slice(1)),
          )
          .map((a) => a.textContent),
      );
    expect(brokenAnchors).toEqual([]);
  });
}

test("mobile menu manages keyboard, escape, anchors and resizing", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Abrir menú" });
  const dialog = page.getByRole("dialog", { name: "Menú de navegación" });
  await trigger.click();
  await expect(trigger).toHaveAttribute("aria-expanded", "true");
  await expect(
    dialog.getByRole("link", { name: "Trabajo", exact: true }),
  ).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe(
    "hidden",
  );
  const axe = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
    .analyze();
  expect(axe.violations).toEqual([]);
  await dialog.getByRole("link", { name: "Conectar", exact: true }).focus();
  await page.keyboard.press("Tab");
  await expect(
    dialog.getByRole("button", { name: "Cerrar menú" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await expect(trigger).toBeFocused();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect
    .poll(() => page.evaluate(() => document.body.style.overflow))
    .toBe("");
  await trigger.click();
  await dialog.getByRole("link", { name: "Trayectoria", exact: true }).click();
  await expect(page).toHaveURL(/#trayectoria$/);
  await expect(dialog).not.toBeVisible();
  await expect(page.locator("#trayectoria")).toBeFocused();
  await trigger.click();
  await page.setViewportSize({ width: 1024, height: 900 });
  await expect(dialog).not.toBeVisible();
  await expect
    .poll(() => page.evaluate(() => document.body.style.overflow))
    .toBe("");
});

test("skip link and reduced motion work with keyboard", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Saltar al contenido" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("main")).toBeFocused();
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
});

test("project and talk links point to the real published work", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("link", { name: "Ver código en GitHub" }),
  ).toHaveAttribute("href", "https://github.com/gCuadros/hevy-mcp");
  await expect(page.getByRole("link", { name: "Ver sesión" })).toHaveAttribute(
    "href",
    "https://www.youtube.com/watch?v=J4FLmBctSBs",
  );
  await expect(page).toHaveTitle("Gonzalo Cuadros | Frontend Tech Lead");
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
});

test("CV download serves a PDF file", async ({ page, request }) => {
  await page.goto("/");
  const link = page.getByRole("link", {
    name: "Descargar CV (PDF)",
    exact: true,
  });
  await expect(link).toHaveAttribute("download", "");
  const href = await link.getAttribute("href");
  const response = await request.get(href!);
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("application/pdf");
  expect((await response.body()).subarray(0, 5).toString()).toBe("%PDF-");
});

for (const width of [320, 1440]) {
  test(`Hevy case is accessible and navigable at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.getByRole("link", { name: "Leer el caso técnico" }).click();
    await expect(page).toHaveURL(/\/proyectos\/hevy$/);
    await expect(
      page.getByRole("heading", { name: "Hevy Coach MCP", exact: true }),
    ).toBeVisible();
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
    await page
      .getByRole("main")
      .getByRole("link", { name: "Volver al portfolio" })
      .click();
    await expect(page).toHaveURL(/#proyecto$/);
  });
}

test("social image is declared and serves a PNG", async ({ page, request }) => {
  await page.goto("/");
  const src = await page
    .locator('meta[property="og:image"]')
    .getAttribute("content");
  expect(src).toBeTruthy();
  const response = await request.get(new URL(src!).pathname);
  expect(response.ok()).toBe(true);
  expect(response.headers()["content-type"]).toContain("image/png");
  expect((await response.body()).subarray(0, 8).toString("hex")).toBe(
    "89504e470d0a1a0a",
  );
});

for (const width of [320, 768, 1440]) {
  test(`English pages retain locale and remain accessible at ${width}px`, async ({
    page,
    request,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.getByRole("link", { name: "EN — English", exact: true }).click();
    await expect(page).toHaveURL(/\/en$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "en");
    await expect(page.getByRole("heading", { level: 1 })).toHaveText(
      "Frontend architecture. From decisions to production.",
    );
    await expect(
      page.getByRole("link", {
        name: "Download CV (PDF)",
        exact: true,
      }),
    ).toHaveAttribute("href", "/cv/gonzalo-cuadros-cv-en.pdf");
    const cv = await request.get("/cv/gonzalo-cuadros-cv-en.pdf");
    expect(cv.ok()).toBe(true);
    expect((await cv.body()).subarray(0, 5).toString()).toBe("%PDF-");
    await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
      "content",
      "en_GB",
    );
    expect(
      new URL((await page.locator('link[hreflang="es"]').getAttribute("href"))!)
        .pathname,
    ).toBe("/");
    await expect(
      page.getByRole("link", { name: "EN — English", exact: true }),
    ).toHaveAttribute("aria-current", "page");
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
    if (width === 320) {
      await page.getByRole("button", { name: "Open menu" }).click();
      const menu = page.getByRole("dialog", { name: "Navigation menu" });
      await expect(
        menu.getByRole("link", { name: "Experience", exact: true }),
      ).toBeVisible();
      await page.keyboard.press("Escape");
      await expect(menu).not.toBeVisible();
    }
    await page
      .getByRole("link", { name: "Read the technical case study" })
      .click();
    await expect(page).toHaveURL(/\/en\/proyectos\/hevy$/);
    await expect(
      page.getByRole("heading", {
        name: "Missing data does not mean zero progress",
      }),
    ).toBeVisible();
    await expect(
      page.getByRole("main").getByRole("link", { name: "Back to portfolio" }),
    ).toHaveAttribute("href", "/en#proyecto");
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
    const social = await page
      .locator('meta[property="og:image"]')
      .getAttribute("content");
    expect(social).toContain("/en/social-image");
    const image = await request.get(new URL(social!).pathname);
    expect(image.ok()).toBe(true);
    expect(image.headers()["content-type"]).toContain("image/png");
    await page.getByRole("link", { name: "ES — Español", exact: true }).click();
    await expect(page).toHaveURL(/\/proyectos\/hevy$/);
    await expect(page.locator("html")).toHaveAttribute("lang", "es");
    await expect(
      page.getByRole("heading", {
        name: "Ausencia de datos no significa progreso cero",
      }),
    ).toBeVisible();
  });
}

test("language routes render translated HTML and switch without JavaScript", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${baseURL}/en/proyectos/hevy`);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(
    page.getByRole("heading", {
      name: "Missing data does not mean zero progress",
    }),
  ).toBeVisible();
  await page.getByRole("link", { name: "ES — Español", exact: true }).click();
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await context.close();
});
