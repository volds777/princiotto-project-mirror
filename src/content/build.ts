import type { Entity, Location, Section } from "./types";

/** Compact section tuple: [title, paragraphs, bullets?]. Pure data helper. */
export type S = [string, string[], string[]?];
export type F = [string, string][];

export const sec = (s: S[]): Section[] =>
  s.map(([title, paragraphs, bullets]) => ({ title, paragraphs, ...(bullets ? { bullets } : {}) }));

const faqs = (f: F) => f.map(([question, answer], i) => ({ id: `faq-${i}`, question, answer }));

interface LocInput {
  id: string; n: string; c: string; g: string;
  t: string; d: string; h: string; l: string;
  s: S[]; f: F; r: string[]; nb: string[]; cta: string;
}

/** Regional page definition (content is always written per locality). */
export const loc = (x: LocInput): Location => ({
  kind: "location",
  id: x.id,
  name: x.n,
  city: x.c,
  state: "SP",
  group: x.g,
  seoTitle: x.t,
  seoDescription: x.d,
  hero: { eyebrow: `Síndico profissional · ${x.n}`, title: x.h, lede: x.l },
  sections: sec(x.s),
  faqs: faqs(x.f),
  related: x.r,
  nearby: x.nb,
  areaServed: x.c === x.n ? `${x.n}, SP` : `${x.n}, ${x.c}, SP`,
  cta: {
    title: x.cta,
    description: "Uma conversa inicial para entender o momento do condomínio, a rotina com o conselho e as prioridades de gestão.",
    waMessage: `Olá Ricardo, gostaria de conversar sobre a gestão do meu condomínio em ${x.n}.`,
  },
});

interface PageInput {
  id: string; n: string; e: string;
  t: string; d: string; h: string; l: string;
  s: S[]; f: F; r: string[]; cta: string; cases?: string[];
}

/** Intent page definition (service, problem, audience, condo type, decision guide). */
export const page = <K extends Exclude<Entity["kind"], "location">>(kind: K, x: PageInput) =>
  ({
    kind,
    id: x.id,
    name: x.n,
    seoTitle: x.t,
    seoDescription: x.d,
    hero: { eyebrow: x.e, title: x.h, lede: x.l },
    sections: sec(x.s),
    faqs: faqs(x.f),
    related: x.r,
    ...(x.cases ? { caseIds: x.cases } : {}),
    cta: {
      title: x.cta,
      waMessage: `Olá Ricardo, li sobre "${x.n}" e gostaria de conversar sobre o meu condomínio.`,
    },
  }) as Extract<Entity, { kind: K }>;
