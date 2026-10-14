import { expect, test } from "@playwright/test";

for (const locale of ["es", "en"]) {
  test(`icons keep their shape and accessible link names in ${locale}`, async ({
    page,
  }, testInfo) => {
    test.setTimeout(90_000);
    const prefix = locale === "en" ? "/en" : "";
    for (const dark of [false, true]) {
      await page.goto(prefix || "/");
      if (dark) {
        await page
          .getByRole("button", {
            name: locale === "en" ? "Dark mode" : "Modo oscuro",
          })
          .click();
      }
      const background = page.getByRole("link", {
        name: locale === "en" ? "My background" : "Conocer mi trayectoria",
        exact: true,
      });
      await expect(background.locator("svg")).toBeVisible();
      await expect(background).toHaveAccessibleName(
        locale === "en" ? "My background" : "Conocer mi trayectoria",
      );
      await page.screenshot({
        path: testInfo.outputPath(`home-${dark ? "dark" : "light"}.png`),
        fullPage: true,
        animations: "disabled",
      });
      for (const path of [
        "/",
        "/proyectos",
        "/docencia",
        "/blog",
        "/sobre-mi",
        "/blog/cicd-frontend",
        "/proyectos/hevy",
      ]) {
        await page.goto(path === "/" ? prefix || "/" : prefix + path);
        // Unicode arrows/play/check symbols can fall back to coloured emoji on iOS.
        await expect(page.locator("body")).not.toContainText(/[↗↖↘↙→←▶◀◐✓]/u);
        await expect(
          page.getByRole("button", {
            name: locale === "en" ? "Dark mode" : "Modo oscuro",
          }),
        ).toHaveAttribute("aria-pressed", String(dark));
        expect(await page.locator("svg.icon").count()).toBeGreaterThan(0);
        for (const icon of await page.locator("svg.icon").all()) {
          await expect(icon).toHaveAttribute("aria-hidden", "true");
          await expect(icon).toHaveAttribute("focusable", "false");
          const box = await icon.boundingBox();
          expect(box?.width).toBeGreaterThan(0);
          expect(box?.height).toBeGreaterThan(0);
        }
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth,
          ),
        ).toBe(false);
      }
    }
  });
}
