import type {
  Audience, CaseStudy, CondoType, Decision, Entity, FaqItem, Location, Problem, Proof, Service,
} from "./types";
import { priorityRegions } from "./pages/regions-priority";
import { attendRegions } from "./pages/regions-attend";
import { services as svc, problems as prb, audiences as aud, condoTypes as ct, decisions as dec } from "./pages/intents";

/** Entity collections for data-driven entry pages (see src/content/pages/*). */
export const services: Service[] = svc;
export const problems: Problem[] = prb;
export const audiences: Audience[] = aud;
export const condoTypes: CondoType[] = ct;
export const locations: Location[] = [...priorityRegions, ...attendRegions];
export const decisions: Decision[] = dec;

export const proofs: Proof[] = [];
/** Real cases authorised by the client briefing — never tie them to a neighbourhood. */
export const cases: CaseStudy[] = [
  { id: "case-clube", title: "Condomínio-clube: reconstrução do caixa", summary: "Caixa de aproximadamente R$ 60 mil no cenário inicial chegou a cerca de R$ 1,2 milhão em aproximadamente 3 anos, inclusive durante a pandemia. Resultado passado, não promessa." },
  { id: "case-obras", title: "Obras inacabadas e caixa negativo", summary: "Situação financeira inicial de aproximadamente R$ 50 mil negativos e obras paradas evoluiu para finanças saudáveis e obras finalizadas." },
  { id: "case-espacos", title: "Espaços ociosos transformados", summary: "Um espaço sem uso virou minimercado e uma área de terra virou pista de caminhada para os moradores." },
];
export const faqs: FaqItem[] = [];

export const allEntities: Entity[] = [...services, ...problems, ...audiences, ...condoTypes, ...locations, ...decisions];

export const getEntity = (collection: string, id: string): Entity | undefined =>
  allEntities.find((e) => e.kind === collection && e.id === id);

export const getFaqs = (ids: string[] = []) => faqs.filter((f) => ids.includes(f.id));
export const getProofs = (ids: string[] = []) => proofs.filter((p) => ids.includes(p.id));
export const getCases = (ids: string[] = []) => cases.filter((c) => ids.includes(c.id));
