import type { ComponentPropsWithRef } from "react";
import type { Locale } from "@/lib/i18n";

export function SiteLink({
  locale = "es",
  href,
  children,
  ...props
}: ComponentPropsWithRef<"a"> & { locale?: Locale }) {
  const external = /^https?:\/\//i.test(href ?? "");
  const notice =
    locale === "en" ? "opens in a new tab" : "abre en otra pestaña";
  return (
    <a
      {...props}
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer", title: notice }
        : {})}
    >
      {children}
      {external && <span className="visually-hidden"> ({notice})</span>}
    </a>
  );
}
