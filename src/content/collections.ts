import type {
  Audience, CaseStudy, CondoType, Decision, Entity, FaqItem, Location, Problem, Proof, Service,
} from "./types";

/**
 * Entity collections for future entry pages. Intentionally empty — fill one
 * entry, then register its URL in ./routes.ts (see README in AGENTS.md).
 */
export const services: Service[] = [];
export const problems: Problem[] = [];
export const audiences: Audience[] = [];
export const condoTypes: CondoType[] = [];
export const locations: Location[] = [];
export const decisions: Decision[] = [];

export const proofs: Proof[] = [];
export const cases: CaseStudy[] = [];
export const faqs: FaqItem[] = [];

const byCollection: Record<string, Entity[]> = {
  service: services,
  problem: problems,
  audience: audiences,
  condoType: condoTypes,
  location: locations,
  decision: decisions,
};

export const getEntity = (collection: string, id: string): Entity | undefined =>
  byCollection[collection]?.find((e) => e.id === id);

export const getFaqs = (ids: string[] = []) => faqs.filter((f) => ids.includes(f.id));
export const getProofs = (ids: string[] = []) => proofs.filter((p) => ids.includes(p.id));
export const getCases = (ids: string[] = []) => cases.filter((c) => ids.includes(c.id));
