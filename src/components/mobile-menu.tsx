"use client";

import { useEffect, useRef, useState } from "react";
import { links, navigation } from "@/lib/portfolio";

export function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);
  const destination = useRef<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = window.matchMedia("(min-width: 48rem)");
    const closeOnDesktop = () => {
      if (desktop.matches) dialog.current?.close();
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previous;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function handleClose() {
    setOpen(false);
    const id = destination.current;
    destination.current = null;
    if (id) document.getElementById(id)?.focus({ preventScroll: true });
    else trigger.current?.focus();
  }

  return (
    <div className="mobile-navigation">
      <button
        ref={trigger}
        className="menu-toggle"
        aria-label="Abrir menú"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-haspopup="dialog"
        onClick={() => {
          dialog.current?.showModal();
          setOpen(true);
          firstLink.current?.focus();
        }}
      >
        <span aria-hidden="true" className="menu-icon">
          <span />
          <span />
        </span>
      </button>
      <dialog
        ref={dialog}
        id="mobile-menu"
        className="mobile-menu"
        aria-label="Menú de navegación"
        onClose={handleClose}
        onKeyDown={(event) => {
          if (event.key !== "Tab") return;
          const controls =
            dialog.current?.querySelectorAll<HTMLElement>("button, a[href]");
          if (!controls?.length) return;
          const first = controls[0];
          const last = controls[controls.length - 1];
          if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
          } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
          }
        }}
      >
        <div className="mobile-menu-heading">
          <span className="brand">Gonzalo Cuadros</span>
          <button
            className="menu-toggle"
            aria-label="Cerrar menú"
            onClick={() => dialog.current?.close()}
          >
            <span aria-hidden="true" className="close-icon" />
          </button>
        </div>
        <nav aria-label="Navegación móvil">
          {navigation.map(({ href, label }, index) => (
            <a
              key={href}
              ref={index === 0 ? firstLink : undefined}
              href={href}
              onClick={() => {
                destination.current = href.slice(1);
                dialog.current?.close();
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={links.linkedin}
            className="button button-outline"
            onClick={() => dialog.current?.close()}
          >
            Conectar
          </a>
        </nav>
      </dialog>
    </div>
  );
}
