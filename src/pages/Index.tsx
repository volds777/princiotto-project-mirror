import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Award, ShieldCheck, Sparkles, Check, Clock3, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Seo } from "@/components/site/Seo";
import { CTASection } from "@/components/site/CTASection";
import { Photo } from "@/components/site/Photo";
import { Expandable } from "@/components/site/Expandable";
import { servicePhoto } from "@/lib/photos";
import { SpinningBadge } from "@/components/site/SpinningBadge";
import { Reveal } from "@/components/site/Reveal";
import { Magnetic } from "@/components/site/Magnetic";
import { Testimonials } from "@/components/site/Testimonials";
import { LocationsDirectory } from "@/components/site/LocationsDirectory";
import { SITE, waLink } from "@/lib/site";
import { services, differentials, faqs } from "@/data/services";
import portrait from "@/assets/portrait-placeholder.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${SITE.name} — Síndico Profissional`,
    description:
      "Síndico profissional com mais de 20 anos de experiência. Gestão condominial estratégica em Osasco, Barueri, Alphaville, Santana de Parnaíba e São Paulo.",
    url: SITE.baseUrl,
    telephone: SITE.whatsappDisplay,
    areaServed: SITE.regions.map((r) => ({ "@type": "City", name: r })),
    serviceType: "Sindicatura Profissional",
  };

  return (
    <>
      <Seo
        title="Síndico Profissional em Osasco, Barueri, Alphaville e SP"
        description="Ricardo Princiotto — síndico profissional com 20+ anos de experiência, certificado Síndico 5 Estrelas. Gestão estratégica, transparente e presente para condomínios."
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO — claro, contemporâneo */}
      <section className="relative overflow-hidden bg-background pt-24 md:pt-28">
        {/* textura sutil de grade */}
        <div className="absolute inset-0 grid-bg opacity-[0.35] [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" aria-hidden />
        <div className="absolute inset-x-0 top-0 h-[420px] bg-gradient-soft" aria-hidden />

        <div className="container-prose relative grid lg:grid-cols-12 gap-12 lg:gap-16 pb-14 md:pb-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur pl-1.5 pr-3 py-1 mb-8"
            >
              <span className="grid h-5 w-5 place-items-center rounded-full bg-accent/15 text-accent text-[10px]">★</span>
              <span className="mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground">
                Bel. em Direito PUC/SP · Síndico 5 Estrelas
              </span>
            </motion.div>

            <h1 className="display-xl text-balance mb-6 max-w-[14ch] sm:max-w-none">
              Gestão condominial com{" "}
              <span className="serif-italic text-primary/90">autoridade</span>,
              presença e transparência.
            </h1>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
              className="lede max-w-xl mb-8"
            >
              Sindicatura profissional para condomínios em Osasco, Barueri, Alphaville,
              Santana de Parnaíba e São Paulo. Mais de duas décadas conduzindo condomínios
              com método, técnica e presença real.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.45 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              <Magnetic strength={10}>
                <motion.a
                  whileHover={{ y: -1 }} whileTap={{ scale: 0.98 }}
                  href={waLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground pl-6 pr-2 py-2 text-[14px] hover:bg-navy-deep transition-colors"
                >
                  Falar pelo WhatsApp
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent text-accent-foreground transition-transform group-hover:translate-x-0.5">
                    <ArrowUpRight size={15} />
                  </span>
                </motion.a>
              </Magnetic>
              <Magnetic strength={6}>
                <Link
                  to="/contato"
                  className="inline-flex items-center rounded-full border border-border px-5 py-2.5 text-[14px] text-primary hover:border-primary/40 transition-colors"
                >
                  Solicitar avaliação
                </Link>
              </Magnetic>
            </motion.div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-[13px] text-muted-foreground border-t border-border pt-6">
              <span className="flex items-center gap-2">
                <Award size={14} className="text-accent" /> Síndico 5 Estrelas
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-accent" /> RC R$ 1.000.000
              </span>
              <span className="flex items-center gap-2">
                <Sparkles size={14} className="text-accent" /> Segurança patrimonial e pessoal
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="lg:col-span-5"
          >
            <div className="relative">
              {/* moldura sutil */}
              <div className="absolute -inset-2 rounded-[10px] bg-gradient-to-br from-accent/20 via-transparent to-primary/10 -z-10" aria-hidden />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[6px] bg-muted shadow-elegant">
                <img
                  src={portrait}
                  alt="Ricardo Princiotto — síndico profissional"
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 12%" }}
                  width={896}
                  height={1216}
                />
                {/* etiqueta inferior */}
                <div className="absolute left-4 bottom-4 right-4 flex items-end justify-between">
                  <div className="rounded-md bg-background/85 backdrop-blur px-3 py-2">
                    <p className="mono text-[9.5px] uppercase tracking-[0.18em] text-muted-foreground">
                      Síndico Profissional
                    </p>
                    <p className="text-[14px] text-primary font-medium leading-tight">Ricardo Princiotto</p>
                  </div>
                </div>
                {/* badge giratório elegante */}
                <div className="absolute -right-5 -bottom-5">
                  <SpinningBadge
                    text="SÍNDICO 5 ESTRELAS · VANZOLINI USP · "
                    size={108}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CREDENCIAIS — faixa compacta de autoridade */}
      <section aria-label="Credenciais" className="bg-navy-deep text-primary-foreground">
        <div className="container-prose grid grid-cols-2 lg:grid-cols-4 divide-x divide-primary-foreground/10">
          {[
            [Clock3, "20+ anos", "de experiência em gestão condominial"],
            [Award, "Síndico 5 Estrelas", "certificação Fundação Vanzolini · USP"],
            [ShieldCheck, "Seguro RC", "profissional de R$ 1.000.000,00"],
            [MapPin, "Atuação presencial", "no dia a dia do condomínio"],
          ].map(([Icon, k, v], i) => {
            const I = Icon as typeof Award;
            return (
              <div key={k as string} className={`flex items-start gap-3 px-4 sm:px-6 py-7 md:py-9 ${i === 2 ? "border-l-0 lg:border-l" : ""} ${i >= 2 ? "border-t border-primary-foreground/10 lg:border-t-0" : ""}`}>
                <I size={20} strokeWidth={1.5} className="text-accent shrink-0 mt-1" aria-hidden />
                <div>
                  <p className="font-serif text-lg md:text-xl leading-tight">{k as string}</p>
                  <p className="text-[12.5px] text-primary-foreground/65 mt-1 leading-snug">{v as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* PRESENÇA — editorial com foto dominante */}
      <section className="container-prose section-y">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <Reveal className="lg:col-span-7">
            <div className="relative">
              <Photo name="lobbyHall" className="aspect-[4/3] rounded-[6px] shadow-elegant" sizes="(min-width: 1024px) 58vw, 100vw" />
              <Photo name="maintenance" className="hidden md:block absolute -bottom-8 -right-6 w-[38%] aspect-square rounded-[6px] border-4 border-background shadow-elegant" sizes="25vw" />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:pl-4">
            <p className="eyebrow mb-5">Presença real</p>
            <h2 className="display text-primary text-balance mb-5">
              A gestão acontece no condomínio, não só na planilha.
            </h2>
            <p className="lede mb-6">
              Visitas frequentes, contato direto com equipes e leitura dos contratos e números
              — cada decisão nasce da operação real.
            </p>
            <ul className="space-y-3 text-[15px] text-primary">
              {["Rotina acompanhada de perto", "Equipes e prestadores supervisionados", "Decisões documentadas e justificadas"].map((t) => (
                <li key={t} className="flex gap-3"><Check size={18} className="text-accent shrink-0 mt-0.5" /> {t}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* DIFERENCIAIS — cards enxutos com expansão */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-prose section-y">
          <div className="grid lg:grid-cols-12 gap-6 mb-12">
            <Reveal className="lg:col-span-6">
              <p className="eyebrow mb-5">Por que Ricardo Princiotto</p>
              <h2 className="display text-primary text-balance">Método, presença e responsabilidade.</h2>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 self-end">
              <p className="lede">Mais de duas décadas no campo, com técnica e prestação de contas clara.</p>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {differentials.slice(0, 4).map((d, i) => (
              <Reveal key={d.title} delay={i * 0.06}>
                <article className="h-full rounded-[6px] border border-border bg-background p-6 md:p-7 transition-shadow hover:shadow-elegant">
                  <p className="mono text-[11px] text-accent mb-4">{`0${i + 1}`}</p>
                  <h3 className="text-[17px] font-medium text-primary leading-snug tracking-[-0.01em] mb-4">{d.title}</h3>
                  <Expandable label="Saiba mais">
                    <p className="text-sm text-muted-foreground leading-relaxed">{d.description}</p>
                  </Expandable>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <Link to="/diferenciais" className="inline-flex items-center gap-2 text-sm text-primary border-b border-accent pb-1 hover:text-accent transition-colors">
              Ver todos os diferenciais <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVIÇOS — cards fotográficos, 2 em destaque + 6 compactos */}
      <section className="container-prose section-y">
        <div className="grid lg:grid-cols-12 gap-6 mb-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow mb-5">Serviços</p>
            <h2 className="display text-primary text-balance">Sindicatura completa, do dia a dia ao planejamento.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5 lg:col-start-8 self-end">
            <p className="lede">Gestão executiva integral ou consultoria pontual, com o mesmo padrão técnico.</p>
          </Reveal>
        </div>
        <div className="grid md:grid-cols-2 gap-5 mb-5">
          {services.slice(0, 2).map((s) => (
            <Reveal key={s.slug}>
              <article className="group h-full overflow-hidden rounded-[6px] border border-border bg-background">
                <Photo name={servicePhoto[s.slug]} className="aspect-[16/9]" imgClassName="group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" />
                <div className="p-6 md:p-8">
                  <h3 className="font-serif text-2xl text-primary mb-2">{s.title}</h3>
                  <p className="text-[15px] text-muted-foreground mb-5">{s.short}</p>
                  <Expandable>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.description}</p>
                    <ul className="space-y-1.5">
                      {s.benefits.map((b) => (
                        <li key={b} className="flex gap-2 text-sm text-primary"><Check size={16} className="text-accent shrink-0 mt-0.5" />{b}</li>
                      ))}
                    </ul>
                  </Expandable>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.slice(2, 8).map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <article className="group h-full overflow-hidden rounded-[6px] border border-border bg-background flex flex-col">
                <Photo name={servicePhoto[s.slug]} className="aspect-[3/2]" imgClassName="group-hover:scale-[1.03]" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-[17px] font-medium text-primary leading-snug mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{s.short}</p>
                  <Expandable className="mt-auto">
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
                  </Expandable>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-10">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-sm text-primary border-b border-accent pb-1 hover:text-accent transition-colors">
            Conhecer todos os serviços <ArrowUpRight size={14} />
          </Link>
        </div>
      </section>

      {/* SEGURANÇA — respiro editorial */}
      <section className="relative overflow-hidden bg-navy-deep text-primary-foreground">
        <div className="grid lg:grid-cols-2">
          <Photo name="securityCam" className="aspect-[4/3] lg:aspect-auto lg:min-h-[520px]" position="50% 35%" sizes="(min-width: 1024px) 50vw, 100vw" />
          <div className="container-prose lg:max-w-none lg:px-16 xl:px-20 py-14 md:py-20 flex flex-col justify-center">
            <p className="eyebrow !text-accent mb-5">Segurança patrimonial e pessoal</p>
            <h2 className="display text-balance !text-primary-foreground mb-5">Controle de acessos e protocolos tratados como sistema.</h2>
            <p className="lede !text-primary-foreground/70 max-w-lg mb-7">
              Revisão de portaria, procedimentos documentados e treinamento de equipe, sob a gestão do síndico.
            </p>
            <Link to="/servicos" className="inline-flex w-fit items-center gap-2 text-sm text-accent border-b border-accent pb-1 hover:text-gold-soft transition-colors">
              Conhecer o serviço <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CASE DESTAQUE */}
      <section className="container-prose section-y">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <Reveal className="lg:col-span-5 lg:order-2">
            <p className="eyebrow mb-5">Case de destaque</p>
            <h2 className="display text-primary text-balance mb-6">Recuperação financeira de um condomínio em crise.</h2>
            <dl className="space-y-4 mb-7">
              <div className="border-l-2 border-border pl-4">
                <dt className="mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">Desafio</dt>
                <dd className="text-[15px] text-primary mt-1">Alta inadimplência, reservas em queda e nenhum planejamento preventivo.</dd>
              </div>
              <div className="border-l-2 border-accent pl-4">
                <dt className="mono text-[11px] uppercase tracking-[0.16em] text-accent">Solução</dt>
                <dd className="text-[15px] text-primary mt-1">Gestão profissional que devolveu previsibilidade financeira e estabilidade.</dd>
              </div>
            </dl>
            <Link to="/cases" className="inline-flex items-center gap-2 text-sm text-primary border-b border-accent pb-1 hover:text-accent transition-colors">
              Ver o case completo <ArrowUpRight size={14} />
            </Link>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:order-1">
            <div className="grid grid-cols-5 gap-4">
              <Photo name="finance" className="col-span-5 sm:col-span-3 aspect-[4/3] sm:aspect-auto rounded-[6px]" sizes="(min-width: 1024px) 35vw, 100vw" />
              <div className="col-span-5 sm:col-span-2 grid grid-cols-2 sm:grid-cols-1 gap-px bg-border rounded-[6px] overflow-hidden border border-border">
                {[
                  ["−68%", "Inadimplência"],
                  ["+3,2x", "Fundo de obras"],
                  ["12 meses", "Estabilização"],
                ].map(([k, v]) => (
                  <div key={k} className="bg-background p-5">
                    <p className="font-serif text-2xl text-primary">{k}</p>
                    <p className="mono text-[10.5px] uppercase tracking-[0.16em] text-muted-foreground mt-1">{v}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-[11.5px] text-muted-foreground italic">
              * Indicadores ilustrativos representando ordem de grandeza típica de cases reais conduzidos. Imagem meramente ilustrativa.
            </p>
          </Reveal>
        </div>
      </section>

      {/* REGIÕES — 1 destaque + 4 */}
      <section className="bg-muted/40 border-y border-border">
        <div className="container-prose section-y">
          <Reveal className="mb-12 max-w-2xl">
            <p className="eyebrow mb-5">Regiões de atuação</p>
            <h2 className="display text-primary text-balance">Atendimento presencial na Grande São Paulo.</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-4 md:grid-rows-2">
            {[
              ["Osasco", "/sindico-profissional-osasco"],
              ["Barueri", "/sindico-profissional-barueri"],
              ["Alphaville", "/sindico-profissional-alphaville"],
              ["Santana de Parnaíba", "/sindico-profissional-santana-de-parnaiba"],
              ["São Paulo", "/sindico-profissional-sao-paulo"],
            ].map(([name, to], i) => (
              <Link
                key={to}
                to={to!}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-[6px] border border-border bg-background p-6 transition-colors hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${i === 0 ? "md:col-span-2 md:row-span-2 min-h-[220px] md:min-h-[340px] text-primary-foreground border-transparent" : "min-h-[140px]"}`}
              >
                {i === 0 && (
                  <>
                    <Photo name="facadeGrid" className="!absolute inset-0" imgClassName="group-hover:scale-[1.03]" sizes="(min-width: 768px) 50vw, 100vw" alt="" />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/85 via-navy-deep/25 to-transparent" aria-hidden />
                  </>
                )}
                <div className="relative">
                  <p className={`mono text-[10px] uppercase tracking-[0.22em] mb-2 ${i === 0 ? "text-accent" : "text-accent"}`}>Síndico profissional</p>
                  <p className={`font-serif ${i === 0 ? "text-3xl md:text-4xl" : "text-2xl text-primary"}`}>{name}</p>
                  <span className={`mt-4 inline-flex items-center gap-1 text-xs ${i === 0 ? "" : "text-muted-foreground group-hover:text-primary"}`}>
                    Ver página <ArrowUpRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* FAQ */}
      <section className="container-prose section-y">
        <div className="grid lg:grid-cols-12 gap-10">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow mb-5">Perguntas frequentes</p>
            <h2 className="display text-primary text-balance">Antes de contratar.</h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.slice(0, 6).map((f, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-serif text-lg text-primary hover:no-underline py-5">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-5">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </Reveal>
        </div>
      </section>

      <LocationsDirectory />

      <CTASection
        eyebrow="Próximo passo"
        title="Solicitar uma avaliação para meu condomínio"
        description="Uma conversa sem compromisso para entender o cenário do seu condomínio."
      />
    </>
  );
};

export default Index;
