import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { locations } from "@/content/collections";

const GROUPS = ["São Paulo", "Osasco", "Barueri", "Santana de Parnaíba", "Grande São Paulo", "Interior"];

/** Crawlable directory of every registered neighbourhood page, grouped by region. */
export const LocationsDirectory = ({ title = "Bairros e cidades atendidos" }: { title?: string }) => (
  <section className="border-t border-border bg-secondary/40">
    <div className="container-prose py-20 md:py-24">
      <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="eyebrow mb-4">Atendimento por localidade</p>
          <h2 className="display text-primary text-balance">{title}</h2>
        </div>
        <Link
          to="/gestao-condominial"
          className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          Ver todos os guias, serviços e regiões
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>

      <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g) => {
          const items = locations.filter((l) => l.group === g);
          if (!items.length) return null;
          return (
            <div
              key={g}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mb-4 flex items-center justify-between gap-3">
                <h3 className="font-serif text-xl text-primary">{g}</h3>
                <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground">
                  <MapPin className="h-3 w-3" />
                  {items.length} {items.length === 1 ? "localidade" : "localidades"}
                </span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {items.map((l) => (
                  <li key={l.id}>
                    <Link
                      to="/$slug"
                      params={{ slug: l.id }}
                      className="inline-block rounded-full border border-border bg-background px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground"
                    >
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
