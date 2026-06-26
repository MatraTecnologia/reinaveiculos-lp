"use client";

import { MessageCircle, Phone, MapPin } from "lucide-react";

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
  </svg>
);
import { Logo } from "@/components/ui/logo";
import { Reveal } from "@/components/ui/reveal";
import {
  site,
  nav,
  serviceTags,
  addresses,
  whatsappUrl,
} from "@/lib/site";

export const Footer = () => {
  return (
    <footer
      id="contato"
      className="relative border-t border-line bg-background pt-20"
    >
      <div className="container-px">
        <Reveal className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted">
              Estética automotiva premium para quem valoriza cada detalhe do
              seu veículo. Proteção, brilho e acabamento impecável.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="grid size-11 place-items-center rounded-full border border-line bg-card transition-colors hover:border-brand hover:text-brand"
              >
                <InstagramIcon className="size-5" />
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="grid size-11 place-items-center rounded-full border border-line bg-card transition-colors hover:border-brand hover:text-brand"
              >
                <MessageCircle className="size-5" />
              </a>
            </div>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Serviços
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceTags.map((tag) => (
                <li key={tag}>
                  <a
                    href="#servicos"
                    className="text-sm text-muted transition-colors hover:text-foreground"
                  >
                    {tag}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground">
              Contato
            </h3>
            <ul className="mt-5 space-y-4">
              <li>
                <a
                  href={`tel:+${site.phoneRaw}`}
                  className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-foreground"
                >
                  <Phone className="size-4 text-brand" />
                  {site.phoneDisplay}
                </a>
              </li>
              {addresses.map((addr) => (
                <li key={addr.label} className="flex gap-3 text-sm text-muted">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand" />
                  <span>
                    {addr.line}
                    <br />
                    {addr.city}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <div className="flex flex-col gap-3 border-t border-line py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.name}. Todos os direitos
            reservados.
          </p>
          <p className="text-xs text-muted">
            Estética Automotiva Premium · Londrina · PR
          </p>
        </div>
      </div>
    </footer>
  );
};
