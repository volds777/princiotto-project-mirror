/**
 * Editorial photo library (Unsplash, downloaded and optimised locally as WebP).
 * Each photo has an 800w and 1600w version for responsive srcset.
 * Photos illustrate topics only — they never depict Ricardo's clients.
 */
import facade800 from "@/assets/photos/facade-800.webp";
import facade1600 from "@/assets/photos/facade-1600.webp";
import facadeDark800 from "@/assets/photos/facade-dark-800.webp";
import facadeDark1600 from "@/assets/photos/facade-dark-1600.webp";
import facadeGrid800 from "@/assets/photos/facade-grid-800.webp";
import facadeGrid1600 from "@/assets/photos/facade-grid-1600.webp";
import finance800 from "@/assets/photos/finance-800.webp";
import finance1600 from "@/assets/photos/finance-1600.webp";
import signing800 from "@/assets/photos/signing-800.webp";
import signing1600 from "@/assets/photos/signing-1600.webp";
import maintenance800 from "@/assets/photos/maintenance-800.webp";
import maintenance1600 from "@/assets/photos/maintenance-1600.webp";
import securityCam800 from "@/assets/photos/security-cam-800.webp";
import securityCam1600 from "@/assets/photos/security-cam-1600.webp";
import lobbyHall800 from "@/assets/photos/lobby-hall-800.webp";
import lobbyHall1600 from "@/assets/photos/lobby-hall-1600.webp";
import courtyard800 from "@/assets/photos/courtyard-800.webp";
import courtyard1600 from "@/assets/photos/courtyard-1600.webp";
import pool800 from "@/assets/photos/pool-800.webp";
import pool1600 from "@/assets/photos/pool-1600.webp";
import meetingRoom800 from "@/assets/photos/meeting-room-800.webp";
import meetingRoom1600 from "@/assets/photos/meeting-room-1600.webp";
import boardroom800 from "@/assets/photos/boardroom-800.webp";
import boardroom1600 from "@/assets/photos/boardroom-1600.webp";
import reception800 from "@/assets/photos/reception-800.webp";
import reception1600 from "@/assets/photos/reception-1600.webp";

export interface PhotoSrc {
  sm: string;
  lg: string;
  w: number;
  h: number;
  alt: string;
}

export const photos = {
  facade: { sm: facade800, lg: facade1600, w: 1600, h: 1067, alt: "Fachada de edifício residencial contemporâneo vista de baixo" },
  facadeDark: { sm: facadeDark800, lg: facadeDark1600, w: 1600, h: 2133, alt: "Edifício residencial com varandas sob céu claro" },
  facadeGrid: { sm: facadeGrid800, lg: facadeGrid1600, w: 1600, h: 2000, alt: "Fachada de prédio residencial com janelas em grade regular" },
  finance: { sm: finance800, lg: finance1600, w: 1600, h: 1068, alt: "Profissional analisando relatórios financeiros em tablet e papel" },
  signing: { sm: signing800, lg: signing1600, w: 1600, h: 1067, alt: "Duas pessoas revisando e assinando documentos em mesa de reunião" },
  maintenance: { sm: maintenance800, lg: maintenance1600, w: 1600, h: 1067, alt: "Técnico de manutenção trabalhando em instalação predial" },
  securityCam: { sm: securityCam800, lg: securityCam1600, w: 1600, h: 2223, alt: "Câmera de monitoramento instalada em fachada de edifício" },
  lobbyHall: { sm: lobbyHall800, lg: lobbyHall1600, w: 1600, h: 1067, alt: "Hall de entrada de edifício residencial com sofá e iluminação natural" },
  courtyard: { sm: courtyard800, lg: courtyard1600, w: 1600, h: 2000, alt: "Área comum de condomínio com paisagismo e iluminação" },
  pool: { sm: pool800, lg: pool1600, w: 1600, h: 1200, alt: "Piscina e área de lazer de condomínio residencial" },
  meetingRoom: { sm: meetingRoom800, lg: meetingRoom1600, w: 1600, h: 1065, alt: "Sala de reuniões com mesa oval preparada para assembleia" },
  boardroom: { sm: boardroom800, lg: boardroom1600, w: 1600, h: 1067, alt: "Sala ampla de reuniões com mesa longa e luz natural" },
  reception: { sm: reception800, lg: reception1600, w: 1600, h: 900, alt: "Recepção e hall de elevadores de edifício residencial" },
} satisfies Record<string, PhotoSrc>;

export type PhotoKey = keyof typeof photos;

/** Photo used for each service (by slug) — one distinct image per service. */
export const servicePhoto: Record<string, PhotoKey> = {
  "sindico-profissional": "facade",
  "consultoria-condominial": "meetingRoom",
  "gestao-administrativa": "finance",
  "operacao-prestadores": "maintenance",
  "seguranca-condominial": "securityCam",
  "apoio-juridico": "signing",
  "valorizacao-patrimonial": "pool",
  "relacionamento-condomino": "reception",
};
