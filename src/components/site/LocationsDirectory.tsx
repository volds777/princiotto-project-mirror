import { Link } from "@tanstack/react-router";
import { locations } from "@/content/collections";

const GROUPS = ["São Paulo", "Osasco", "Barueri", "Santana de Parnaíba", "Grande São Paulo", "Interior"];

/** Crawlable directory of every registered neighbourhood page, grouped by region. */
export const LocationsDirectory = ({ title = "Bairros e cidades atendidos" }: { title?: string }) => (
  <section className="border-t border-border">
    <div className="container-prose py-20 md:py-24">
      <p className="eyebrow mb-4">Atendimento por localidade</p>
      <h2 className="display text-primary text-balance mb-12">{title}</h2>
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {GROUPS.map((g) => {
          const items = locations.filter((l) => l.group === g);
          if (!items.length) return null;
          return (
            <div key={g}>
              <h3 className="font-serif text-xl text-primary mb-4">{g}</h3>
              <ul className="space-y-2 text-sm">
                {items.map((l) => (
                  <li key={l.id}>
                    <Link to="/$slug" params={{ slug: l.id }} className="text-muted-foreground hover:text-primary hover:underline underline-offset-4">
                      Síndico profissional em {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <Link to="/gestao-condominial" className="mt-12 inline-block text-sm text-primary underline underline-offset-4">
        Ver todos os guias, serviços e regiões
      </Link>
    </div>
  </section>
);
