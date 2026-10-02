import { Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CTASection } from "@/components/site/CTASection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { getCases, getFaqs, getProofs } from "@/content/collections";
import { relatedRoutes } from "@/content/routes";
import type { Entity, RouteEntry } from "@/content/types";

/**
 * Shared skeleton for every data-driven archetype. Reuses the site's existing
 * PageHero / CTASection and design utilities so new pages match the current look.
 */
export const ArchetypePage = ({ entity, route, children }: { entity: Entity; route: RouteEntry; children?: React.ReactNode }) => {
  const faqs = getFaqs(entity.faqIds);
  const proofs = getProofs(entity.proofIds);
  const cases = getCases(entity.caseIds);
  const related = relatedRoutes(route.path);

  return (
    <>
      <PageHero
        eyebrow={entity.hero.eyebrow}
        title={entity.hero.title}
        lede={entity.hero.lede}
        breadcrumb={route.breadcrumbs?.map((b, i, a) => i < a.length - 1 ? { label: b.name, to: b.path } : { label: b.name })}
      />

      {children}

      {entity.sections.map((s) => (
        <section key={s.title} className="border-b border-border">
          <div className="container-prose py-16 md:py-20 max-w-3xl">
            <h2 className="display text-balance mb-6">{s.title}</h2>
            {s.paragraphs?.map((p) => <p key={p} className="text-muted-foreground leading-relaxed mb-4">{p}</p>)}
            {s.bullets && (
              <ul className="mt-4 space-y-2">
                {s.bullets.map((b) => <li key={b} className="text-foreground">— {b}</li>)}
              </ul>
            )}
          </div>
        </section>
      ))}

      {(proofs.length > 0 || cases.length > 0) && (
        <section className="border-b border-border">
          <div className="container-prose py-16 grid gap-6 md:grid-cols-3">
            {proofs.map((p) => (
              <div key={p.id}><p className="display">{p.value}</p><p className="text-muted-foreground">{p.label}</p></div>
            ))}
            {cases.map((c) => (
              <div key={c.id}><h3 className="font-medium mb-2">{c.title}</h3><p className="text-muted-foreground">{c.summary}</p></div>
            ))}
          </div>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="border-b border-border">
          <div className="container-prose py-16 max-w-3xl">
            <h2 className="display mb-6">Perguntas frequentes</h2>
            <Accordion type="single" collapsible>
              {faqs.map((f) => (
                <AccordionItem key={f.id} value={f.id}>
                  <AccordionTrigger>{f.question}</AccordionTrigger>
                  <AccordionContent>{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-b border-border">
          <div className="container-prose py-12">
            <p className="eyebrow mb-4">Veja também</p>
            <ul className="flex flex-wrap gap-4">
              {related.map((r) => (
                <li key={r.path}><Link to={r.path} className="underline underline-offset-4">{r.breadcrumbs?.at(-1)?.name ?? r.title}</Link></li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTASection {...entity.cta} />
    </>
  );
};
