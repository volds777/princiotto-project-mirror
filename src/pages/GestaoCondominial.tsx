import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { audiences, condoTypes, decisions, locations, problems, services } from "@/content/collections";
import type { Entity } from "@/content/types";

const GROUPS = ["São Paulo", "Osasco", "Barueri", "Santana de Parnaíba", "Grande São Paulo", "Interior"];

const List = ({ title, items }: { title: string; items: Entity[] }) =>
  items.length ? (
    <div>
      <h3 className="font-medium text-primary mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((e) => (
          <li key={e.id}>
            <Link to={`/${e.id}`} className="text-muted-foreground hover:text-primary underline-offset-4 hover:underline">{e.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  ) : null;

export default function GestaoCondominial() {
  return (
    <>
      <PageHero
        eyebrow="Gestão condominial"
        title="Guias, serviços e regiões atendidas"
        lede="Conteúdos organizados para quem está avaliando uma sindicatura profissional: dúvidas de contratação, problemas comuns, perfis de condomínio e localidades onde Ricardo Princiotto atua com presença."
        breadcrumb={[{ label: "Início", to: "/" }, { label: "Gestão condominial" }]}
      />
      <section className="border-b border-border">
        <div className="container-prose py-16 grid gap-12 md:grid-cols-3">
          <List title="Guias e decisões" items={decisions} />
          <List title="Serviços da sindicatura" items={services} />
          <div className="space-y-12">
            <List title="Problemas" items={problems} />
            <List title="Para quem" items={audiences} />
            <List title="Tipos de condomínio" items={condoTypes} />
          </div>
        </div>
      </section>
      <section className="border-b border-border">
        <div className="container-prose py-16">
          <h2 className="display mb-10">Localidades atendidas</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {GROUPS.map((g) => (
              <List key={g} title={g} items={locations.filter((l) => l.group === g)} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
