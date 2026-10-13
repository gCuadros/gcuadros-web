import { expect, test } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import {
  baseline,
  bestEstimate,
  estimateSet,
  scenarios,
} from "../src/lib/hevy-demo";

test("demo calculation distinguishes missing data from a measured value", () => {
  expect(bestEstimate(baseline)).toBe(76);
  expect(bestEstimate(scenarios[0].sets)).toBeCloseTo(82.33333333);
  expect(bestEstimate(scenarios[1].sets)).toBeCloseTo(80.16666667);
  expect(bestEstimate(scenarios[2].sets)).toBeNull();
  expect(bestEstimate([])).toBeNull();
  for (const set of [
    { weightKg: 0, reps: 8 },
    { weightKg: 60, reps: 0 },
    { weightKg: -1, reps: 8 },
    { weightKg: 60, reps: null },
    { weightKg: Number.NaN, reps: 8 },
    { weightKg: 60, reps: Number.POSITIVE_INFINITY },
  ])
    expect(estimateSet(set)).toBeNull();
});

for (const locale of ["es", "en"]) {
  for (const width of [320, 1440]) {
    test(`Hevy demo is traceable and accessible in ${locale} at ${width}px`, async ({
      page,
    }) => {
      const en = locale === "en";
      const prefix = en ? "/en" : "";
      await page.setViewportSize({ width, height: 1000 });
      await page.emulateMedia({ reducedMotion: "reduce" });
      const externalRequests: string[] = [];
      page.on("request", (request) => {
        if (
          request.url().startsWith("http") &&
          new URL(request.url()).hostname !== "127.0.0.1"
        )
          externalRequests.push(request.url());
      });
      await page.goto(prefix || "/");
      await page.locator(".demo-entry").click();
      await expect(page).toHaveURL(
        new RegExp(`${prefix}/proyectos/hevy#demo$`),
      );
      await expect(page.locator(".demo-number")).toHaveText(
        en ? "+8.3 %" : "+8,3 %",
      );
      await expect(page.locator(".demo-disclosure")).toContainText(
        en ? "without a Hevy connection" : "sin conexión a Hevy",
      );
      await page
        .getByRole("button", {
          name: en ? "One value missing" : "Falta un dato",
        })
        .focus();
      await page.keyboard.press("Enter");
      await expect(page.locator(".demo-number")).toHaveText(
        en ? "+5.5 %" : "+5,5 %",
      );
      await expect(page.locator("tr[data-excluded]")).toHaveCount(1);
      await page
        .getByRole("button", {
          name: en ? "No valid sets" : "Sin series válidas",
        })
        .click();
      await expect(page.locator(".demo-number")).toHaveText("—");
      await expect(page.locator("tr[data-excluded]")).toHaveCount(3);
      await expect(page.locator(".demo-answer")).toContainText(
        en ? "Not enough data" : "No hay datos suficientes",
      );
      await page
        .getByRole("button", {
          name: en ? "Complete records" : "Registros completos",
        })
        .click();
      await expect(page.locator(".demo-number")).toHaveText(
        en ? "+8.3 %" : "+8,3 %",
      );
      expect(externalRequests).toEqual([]);
      for (const dark of [false, true]) {
        if (dark)
          await page
            .getByRole("button", { name: en ? "Dark mode" : "Modo oscuro" })
            .click();
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth > innerWidth,
          ),
        ).toBe(false);
        expect(
          (
            await new AxeBuilder({ page })
              .include("#demo")
              .withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"])
              .analyze()
          ).violations,
        ).toEqual([]);
      }
    });
  }
}
