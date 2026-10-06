import type { Entity, RouteEntry } from "@/content/types";
import { ArchetypePage } from "./ArchetypePage";

type P = { entity: Entity; route: RouteEntry };

/** One component per archetype. Each starts from the shared skeleton and can add its own blocks. */
export const ServicePage = (p: P) => <ArchetypePage {...p} />;
export const ProblemPage = (p: P) => <ArchetypePage {...p} />;
export const AudiencePage = (p: P) => <ArchetypePage {...p} />;
export const CondoTypePage = (p: P) => <ArchetypePage {...p} />;
export const LocationPage = (p: P) => <ArchetypePage {...p} />;
export const DecisionPage = (p: P) => <ArchetypePage {...p} />;

export const archetypeComponents = {
  service: ServicePage,
  problem: ProblemPage,
  audience: AudiencePage,
  condoType: CondoTypePage,
  location: LocationPage,
  decision: DecisionPage,
} as const;
