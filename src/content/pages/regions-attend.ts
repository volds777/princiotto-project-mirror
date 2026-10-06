import { loc } from "../build";
import type { Location } from "../types";

/**
 * Prioridade 2 — localidades "ATENDER" do briefing.
 * Cada página traz contexto, desafios, atuação e FAQs próprios da localidade.
 * Sem números, dados ou resultados inventados.
 */
interface A {
  slug: string; n: string; c: string; g: string;
  t: string; d: string; h: string;
  ctx: string[]; ch: string[]; act: string; fq: [string, string][];
  r: string[]; nb: string[];
}

const SP = "São Paulo";
const BASE_FAQ = (n: string): [string, string] => [
  `Como começa o trabalho de síndico profissional em ${n}?`,
  "Com uma conversa inicial e um diagnóstico do condomínio: contratos, finanças, manutenção, segurança e relação com o conselho. A partir disso, a proposta é apresentada para avaliação e, se for o caso, para aprovação em assembleia.",
];

const mk = (x: A): Location =>
  loc({
    id: `sindico-profissional-${x.slug}`, n: x.n, c: x.c, g: x.g,
    t: x.t, d: x.d, h: x.h,
    l: `Ricardo Princiotto atua como síndico profissional para condomínios em ${x.n}${x.c !== x.n ? `, ${x.c}` : ""}, com presença no condomínio, rotina organizada com o conselho e prestação de contas clara para os moradores.`,
    s: [
      [`O contexto dos condomínios em ${x.n}`, x.ctx],
      ["Desafios frequentes na região", [], x.ch],
      [`Como Ricardo atua em ${x.n}`, [x.act], [
        "Prestação de contas mensal e auditável",
        "Acompanhamento de contratos e prestadores",
        "Plano de manutenção aprovado com o conselho",
        "Comunicação formal com moradores",
      ]],
    ],
    f: [...x.fq, BASE_FAQ(x.n)],
    r: x.r,
    nb: x.nb,
    cta: `Converse sobre o seu condomínio em ${x.n}`,
  });

const R = {
  gov: "/governanca-condominial",
  contas: "/prestacao-de-contas-condominial",
  seg: "/seguranca-patrimonial-condominio",
  contr: "/gestao-de-contratos-do-condominio",
  mod: "/modernizacao-de-condominio",
  prest: "/gestao-de-prestadores-e-equipes",
  manut: "/manutencao-preventiva-condominial",
  com: "/comunicacao-com-condominos",
  valor: "/valorizacao-patrimonial-condominio",
};
const p = (s: string) => `/sindico-profissional-${s}`;

const data: A[] = [
  // ——— Zona Oeste de São Paulo ———
  {
    slug: "lapa", n: "Lapa", c: SP, g: SP,
    t: "Síndico Profissional na Lapa, São Paulo",
    d: "Sindicatura profissional para condomínios da Lapa: organização de contratos, manutenção de prédios de diferentes gerações e prestação de contas transparente.",
    h: "Síndico profissional na Lapa com gestão organizada e presente",
    ctx: [
      "A Lapa é um bairro tradicional da Zona Oeste, com forte presença de comércio de rua, estação de trem e um mercado conhecido na cidade. Edifícios residenciais mais antigos convivem com lançamentos recentes em antigas áreas industriais.",
      "Essa mistura faz com que condomínios vizinhos tenham necessidades muito diferentes: uns precisam modernizar instalações, outros estruturar a operação desde a entrega.",
    ],
    ch: [
      "Instalações elétricas e hidráulicas que pedem modernização planejada",
      "Fluxo intenso de pedestres e entregas no entorno comercial",
      "Contratos antigos renovados automaticamente sem revisão",
      "Moradores com perfis e expectativas bem distintos",
    ],
    act: "Ricardo parte de um diagnóstico técnico das instalações e dos contratos, define prioridades com o conselho e conduz a modernização por etapas, para que o condomínio invista sem comprometer o caixa.",
    fq: [
      ["Ricardo atende prédios antigos na Lapa?", "Sim. Em prédios com mais tempo de uso, o foco costuma ser um plano de manutenção e modernização em etapas, aprovado com o conselho."],
      ["Como lidar com o movimento do entorno na portaria?", "Com procedimentos claros de controle de acesso e recebimento de entregas, revistos de acordo com a rotina real do prédio."],
    ],
    r: [R.mod, R.manut, R.contr, R.seg], nb: [p("alto-da-lapa"), p("vila-romana"), p("barra-funda"), p("vila-leopoldina"), p("pompeia")],
  },
  {
    slug: "pinheiros", n: "Pinheiros", c: SP, g: SP,
    t: "Síndico Profissional em Pinheiros, São Paulo",
    d: "Gestão condominial profissional em Pinheiros: governança, segurança de acesso e controle de contratos em edifícios residenciais e mistos.",
    h: "Gestão condominial profissional em Pinheiros",
    ctx: [
      "Pinheiros reúne vida noturna, escritórios, estações de metrô e uma vizinhança residencial que se renovou muito nos últimos anos, com edifícios compactos e de uso misto ao lado de prédios mais tradicionais.",
      "Para o condomínio, isso significa rotatividade maior de moradores, alto volume de entregas e uma demanda constante por regras claras de convivência.",
    ],
    ch: [
      "Rotatividade de moradores e locatários",
      "Regras de uso de áreas comuns e convivência com ruído do entorno",
      "Controle de acesso com muitos prestadores e entregadores",
      "Contratos de serviços terceirizados sem indicadores",
    ],
    act: "Ricardo organiza regras e procedimentos que funcionam na prática, mantém comunicação formal com moradores e locatários e acompanha presencialmente portaria, limpeza e manutenção.",
    fq: [
      ["A gestão muda em prédios com muitos locatários em Pinheiros?", "Sim. A comunicação precisa alcançar proprietários e locatários, e as regras de convivência devem ser claras e bem divulgadas."],
      ["Ricardo atende condomínios de uso misto?", "Sim, com atenção à separação de rotinas, acessos e custos entre áreas residenciais e não residenciais, conforme a convenção."],
    ],
    r: [R.com, R.seg, R.prest, R.gov], nb: [p("alto-de-pinheiros"), p("vila-madalena"), p("butanta"), p("jardim-europa"), p("itaim-bibi")],
  },
  {
    slug: "butanta", n: "Butantã", c: SP, g: SP,
    t: "Síndico Profissional no Butantã, São Paulo",
    d: "Sindicatura profissional no Butantã: gestão de condomínios com áreas verdes, manutenção preventiva e prestação de contas organizada.",
    h: "Síndico profissional no Butantã",
    ctx: [
      "O Butantã é uma região extensa da Zona Oeste, próxima à Cidade Universitária e às marginais, com condomínios de perfis variados — de edifícios verticais a conjuntos com áreas verdes e várias torres.",
      "Condomínios maiores e com áreas externas pedem planejamento de manutenção e controle de custos mais rigorosos.",
    ],
    ch: [
      "Conservação de áreas verdes e externas",
      "Gestão de condomínios com várias torres",
      "Presença de estudantes e locatários em parte dos prédios",
      "Controle de acesso em perímetros maiores",
    ],
    act: "Ricardo estrutura um calendário de manutenção que inclui áreas externas, acompanha contratos de jardinagem, limpeza e portaria e apresenta ao conselho relatórios que permitem comparar custos ao longo do tempo.",
    fq: [
      ["Ricardo atende condomínios com várias torres no Butantã?", "Sim. Nesses casos, a gestão organiza rotinas por torre e áreas comuns, com comunicação centralizada."],
      ["Como controlar o custo de manutenção de áreas externas?", "Com escopo definido nos contratos, cronograma preventivo e acompanhamento presencial dos serviços."],
    ],
    r: [R.manut, R.prest, R.contas, R.seg], nb: [p("pinheiros"), p("alto-de-pinheiros"), p("granja-viana"), p("vila-leopoldina")],
  },
  {
    slug: "barra-funda", n: "Barra Funda", c: SP, g: SP,
    t: "Síndico Profissional na Barra Funda, São Paulo",
    d: "Gestão condominial na Barra Funda: implantação de condomínios novos, regras de convivência e controle de acesso em região de grande circulação.",
    h: "Gestão condominial profissional na Barra Funda",
    ctx: [
      "A Barra Funda passou por uma transformação intensa, com antigos galpões dando lugar a edifícios residenciais novos, próximos a um grande terminal de transportes e a casas de shows.",
      "Muitos condomínios da região estão nos primeiros anos de vida, fase em que regras, contratos e rotinas ainda estão sendo definidos.",
    ],
    ch: [
      "Implantação de condomínio recém-entregue",
      "Acompanhamento de garantias da construtora",
      "Grande circulação de pessoas no entorno",
      "Definição de regimento interno e uso de áreas comuns",
    ],
    act: "Ricardo conduz a implantação com contratos e procedimentos definidos desde o início, acompanha as pendências e garantias junto à construtora e organiza o regimento com participação do conselho.",
    fq: [
      ["Ricardo faz implantação de condomínio novo na Barra Funda?", "Sim. A implantação inclui contratação de prestadores, definição de rotinas, acompanhamento de garantias e organização do regimento interno."],
      ["Como acompanhar os defeitos de obra cobertos pela garantia?", "Com vistorias registradas, comunicação formal com a construtora e controle dos prazos de cada item."],
    ],
    r: ["/implantacao-de-condominio", R.contr, R.seg, R.gov], nb: [p("lapa"), p("perdizes"), p("higienopolis"), p("vila-romana")],
  },
  // ——— Centro expandido de São Paulo ———
  {
    slug: "higienopolis", n: "Higienópolis", c: SP, g: SP,
    t: "Síndico Profissional em Higienópolis, São Paulo",
    d: "Sindicatura profissional em Higienópolis: conservação de edifícios tradicionais, modernização planejada e governança com o conselho.",
    h: "Síndico profissional em Higienópolis",
    ctx: [
      "Higienópolis é conhecido por edifícios residenciais tradicionais, muitos com arquitetura marcante, ruas arborizadas e moradores de longa permanência.",
      "Preservar o edifício e ao mesmo tempo atualizar sistemas — elevadores, elétrica, segurança — exige planejamento e diálogo com os condôminos.",
    ],
    ch: [
      "Modernização de sistemas sem descaracterizar o edifício",
      "Decisões de obra que exigem consenso em assembleia",
      "Moradores de longa data com expectativas consolidadas",
      "Planejamento financeiro para obras de maior porte",
    ],
    act: "Ricardo prepara as decisões com orçamentos comparáveis e cronogramas claros, leva ao conselho e à assembleia propostas bem documentadas e acompanha a execução das obras de perto.",
    fq: [
      ["Como conduzir obras em prédios antigos de Higienópolis?", "Com diagnóstico técnico, orçamentos comparáveis, aprovação em assembleia e acompanhamento presencial da execução."],
      ["Ricardo ajuda a preparar assembleias de obra?", "Sim. A sindicatura organiza documentos, propostas e a pauta para que a assembleia decida com informação clara."],
    ],
    r: [R.mod, R.manut, "/assembleia-condominial", R.gov], nb: [p("perdizes"), p("bela-vista"), p("jardins"), p("barra-funda")],
  },
  {
    slug: "bela-vista", n: "Bela Vista", c: SP, g: SP,
    t: "Síndico Profissional na Bela Vista, São Paulo",
    d: "Gestão condominial na Bela Vista, região central de São Paulo: edifícios de grande porte, segurança, inadimplência e transparência.",
    h: "Gestão condominial profissional na Bela Vista",
    ctx: [
      "A Bela Vista, na região central, concentra edifícios de grande porte, muitos com várias unidades por andar, além de teatros, hospitais e vida noturna.",
      "Condomínios com muitas unidades lidam com volume alto de demandas, comunicação difícil e maior sensibilidade à inadimplência.",
    ],
    ch: [
      "Grande número de unidades e demandas simultâneas",
      "Controle de acesso em região de circulação intensa",
      "Inadimplência que afeta o caixa",
      "Prédios mais antigos com manutenção atrasada",
    ],
    act: "Ricardo organiza processos de atendimento, cobrança e manutenção, com registros e relatórios que dão ao conselho visão clara do caixa e das prioridades.",
    fq: [
      ["Como lidar com inadimplência em prédios grandes da Bela Vista?", "Com rotina de cobrança organizada, comunicação formal e acompanhamento mensal, sempre dentro da legislação e da convenção."],
      ["A segurança é prioridade nos condomínios da região?", "Sim. A especialização de Ricardo em segurança patrimonial ajuda a revisar portaria e procedimentos de acesso."],
    ],
    r: ["/inadimplencia-condominial", R.seg, R.contas, R.manut], nb: [p("paulista"), p("higienopolis"), p("jardins")],
  },
  {
    slug: "paulista", n: "Avenida Paulista", c: SP, g: SP,
    t: "Síndico Profissional na Região da Avenida Paulista",
    d: "Sindicatura profissional para condomínios residenciais e mistos na região da Avenida Paulista: segurança, contratos e governança.",
    h: "Síndico profissional na região da Avenida Paulista",
    ctx: [
      "A região da Avenida Paulista combina centros empresariais, cultura, metrô e edifícios residenciais nas ruas paralelas e transversais, muitos de uso misto.",
      "A convivência entre moradia e atividade comercial intensa exige regras de acesso e de uso bem definidas.",
    ],
    ch: [
      "Edifícios de uso misto com rotinas diferentes",
      "Movimento constante de visitantes e prestadores",
      "Contratos de segurança e portaria de maior complexidade",
      "Manifestações e eventos que afetam a rotina do entorno",
    ],
    act: "Ricardo define procedimentos de acesso e contingência, acompanha contratos de segurança e mantém o conselho informado com relatórios regulares.",
    fq: [
      ["Ricardo atende prédios residenciais perto da Paulista?", "Sim, inclusive edifícios de uso misto, respeitando o que prevê a convenção de cada condomínio."],
      ["Como preparar o condomínio para dias de grande movimento no entorno?", "Com procedimentos de contingência combinados com a portaria e comunicação prévia aos moradores."],
    ],
    r: [R.seg, R.contr, R.gov, R.com], nb: [p("bela-vista"), p("jardins"), p("jardim-paulista")],
  },
  {
    slug: "jardins", n: "Jardins", c: SP, g: SP,
    t: "Síndico Profissional nos Jardins, São Paulo",
    d: "Gestão condominial nos Jardins: atendimento a edifícios residenciais com exigência de discrição, segurança e prestação de contas detalhada.",
    h: "Gestão condominial profissional nos Jardins",
    ctx: [
      "Os Jardins reúnem ruas arborizadas, comércio de alto nível e edifícios residenciais em que os moradores costumam valorizar discrição, segurança e atendimento cuidadoso.",
      "A gestão precisa ser técnica e, ao mesmo tempo, próxima — com respostas rápidas e documentação detalhada.",
    ],
    ch: [
      "Exigência elevada quanto a segurança e privacidade",
      "Conservação de fachadas e áreas comuns",
      "Fornecedores que precisam de acompanhamento constante",
      "Decisões de investimento discutidas em detalhe pelo conselho",
    ],
    act: "Ricardo conduz a sindicatura com presença regular, procedimentos de segurança revisados e prestação de contas detalhada, para que o conselho acompanhe cada decisão.",
    fq: [
      ["A gestão nos Jardins é diferente?", "A base é a mesma — governança, contratos, manutenção e contas —, mas com atenção redobrada a segurança, privacidade e atendimento."],
      ["Ricardo atende condomínios de alto padrão?", "Ricardo atende esse perfil de condomínio, com o mesmo método de gestão transparente e presencial."],
    ],
    r: [R.seg, R.contas, R.valor, R.manut], nb: [p("jardim-paulista"), p("jardim-america"), p("jardim-europa"), p("paulista")],
  },
  // ——— Zona Sul de São Paulo ———
  {
    slug: "jardim-paulista", n: "Jardim Paulista", c: SP, g: SP,
    t: "Síndico Profissional no Jardim Paulista, São Paulo",
    d: "Sindicatura profissional no Jardim Paulista: edifícios residenciais consolidados, manutenção planejada e controle de contratos.",
    h: "Síndico profissional no Jardim Paulista",
    ctx: [
      "O Jardim Paulista é um bairro residencial consolidado, com edifícios de diferentes épocas entre a Avenida Paulista e a região do Ibirapuera.",
      "Muitos prédios já passaram por várias gestões e acumulam contratos e práticas que precisam ser revistos.",
    ],
    ch: [
      "Contratos antigos sem revisão de escopo e preço",
      "Manutenção corretiva acumulada",
      "Documentação dispersa de gestões anteriores",
      "Necessidade de atualizar sistemas de segurança",
    ],
    act: "Ricardo organiza a documentação, revisa contratos e transforma a manutenção corretiva em plano preventivo, com prioridades definidas junto ao conselho.",
    fq: [
      ["O que fazer quando a gestão anterior deixou documentação incompleta?", "O primeiro passo é levantar e organizar o que existe, identificar lacunas e regularizar o que for necessário com apoio dos profissionais adequados."],
      ["Vale revisar contratos que funcionam há anos?", "Sim. A revisão periódica verifica se escopo, preço e qualidade continuam adequados."],
    ],
    r: [R.contr, R.manut, "/troca-de-sindico", R.seg], nb: [p("jardins"), p("jardim-america"), p("paulista"), p("ibirapuera")],
  },
  {
    slug: "jardim-america", n: "Jardim América", c: SP, g: SP,
    t: "Síndico Profissional no Jardim América, São Paulo",
    d: "Gestão condominial no Jardim América: condomínios residenciais em bairro predominantemente horizontal, com foco em segurança e conservação.",
    h: "Gestão condominial profissional no Jardim América",
    ctx: [
      "O Jardim América é um bairro tradicionalmente horizontal, com ruas tranquilas e arborizadas, onde os edifícios residenciais são menos numerosos e se concentram nas bordas.",
      "Nesse contexto, segurança, conservação e vizinhança cuidadosa costumam ser prioridades dos moradores.",
    ],
    ch: [
      "Segurança em ruas de menor movimento",
      "Conservação de jardins e áreas externas",
      "Relação com a vizinhança e regras do bairro",
      "Fornecedores especializados com custo elevado",
    ],
    act: "Ricardo revisa a segurança do condomínio, organiza a conservação de áreas externas e controla contratos de fornecedores especializados com escopo e acompanhamento definidos.",
    fq: [
      ["Ricardo atende prédios no Jardim América?", "Sim, com atendimento presencial e foco em segurança, conservação e transparência."],
      ["Como revisar a segurança do condomínio?", "Com análise de acessos, rotinas de portaria, equipamentos e procedimentos, ajustados à realidade do prédio."],
    ],
    r: [R.seg, R.manut, R.contr, R.valor], nb: [p("jardim-europa"), p("jardim-paulista"), p("jardins"), p("pinheiros")],
  },
  {
    slug: "jardim-europa", n: "Jardim Europa", c: SP, g: SP,
    t: "Síndico Profissional no Jardim Europa, São Paulo",
    d: "Sindicatura profissional no Jardim Europa: edifícios residenciais com exigência de discrição, segurança e governança.",
    h: "Síndico profissional no Jardim Europa",
    ctx: [
      "O Jardim Europa é um dos bairros mais nobres da cidade, majoritariamente residencial e horizontal, próximo ao Itaim Bibi e a Pinheiros.",
      "Os condomínios da região tendem a ter poucas unidades e moradores muito atentos à gestão, ao padrão de serviço e à privacidade.",
    ],
    ch: [
      "Padrão de serviço elevado esperado pelos moradores",
      "Privacidade e controle rigoroso de acessos",
      "Equipes próprias e terceirizadas que exigem gestão próxima",
      "Prestação de contas acompanhada em detalhe",
    ],
    act: "Ricardo atua com presença regular, gestão próxima das equipes e prestação de contas detalhada, mantendo procedimentos discretos de acesso e segurança.",
    fq: [
      ["Como funciona a gestão em condomínios com poucas unidades?", "A relação com os moradores é mais próxima, e a sindicatura mantém registros e contas tão organizados quanto em prédios maiores."],
      ["Ricardo cuida da gestão das equipes do prédio?", "Sim. Acompanha portaria, limpeza e manutenção, sejam equipes próprias ou terceirizadas."],
    ],
    r: [R.prest, R.seg, R.contas, R.valor], nb: [p("jardim-america"), p("itaim-bibi"), p("pinheiros"), p("jardins")],
  },
  {
    slug: "ibirapuera", n: "Ibirapuera", c: SP, g: SP,
    t: "Síndico Profissional na Região do Ibirapuera",
    d: "Gestão condominial na região do Ibirapuera: edifícios residenciais com áreas de lazer, manutenção planejada e transparência.",
    h: "Gestão condominial profissional na região do Ibirapuera",
    ctx: [
      "A região ao redor do Parque Ibirapuera reúne edifícios residenciais valorizados, muitos com áreas de lazer completas, em bairros como Moema, Vila Nova Conceição e Paraíso.",
      "Áreas de lazer bem cuidadas exigem manutenção constante e regras claras de uso.",
    ],
    ch: [
      "Manutenção de piscinas, academias e salões",
      "Regras de uso e reserva de áreas comuns",
      "Obras e reformas em unidades",
      "Expectativa de valorização do imóvel",
    ],
    act: "Ricardo organiza a manutenção das áreas de lazer, define regras de uso com o conselho e acompanha reformas nas unidades conforme as normas aplicáveis.",
    fq: [
      ["Como organizar o uso das áreas de lazer?", "Com regras claras no regimento, sistema de reservas e comunicação formal com os moradores."],
      ["Ricardo acompanha reformas nas unidades?", "Sim, verificando documentação e regras do condomínio antes e durante a obra."],
    ],
    r: [R.manut, R.valor, R.com, R.gov], nb: [p("moema"), p("vila-nova-conceicao"), p("jardim-paulista"), p("vila-mariana")],
  },
  {
    slug: "moema", n: "Moema", c: SP, g: SP,
    t: "Síndico Profissional em Moema, São Paulo",
    d: "Sindicatura profissional em Moema: condomínios verticais com áreas de lazer, segurança, contratos e prestação de contas clara.",
    h: "Síndico profissional em Moema",
    ctx: [
      "Moema é um bairro residencial vertical, com comércio de bairro forte, proximidade com o Ibirapuera e com o aeroporto de Congonhas.",
      "A densidade de edifícios e o perfil familiar dos moradores tornam segurança, lazer e convivência temas centrais da gestão.",
    ],
    ch: [
      "Convivência em condomínios com muitas famílias",
      "Segurança de acesso e de pedestres no entorno",
      "Manutenção de áreas de lazer",
      "Contratos de serviços terceirizados",
    ],
    act: "Ricardo estrutura procedimentos de segurança, organiza a manutenção e acompanha os prestadores presencialmente, com relatórios claros ao conselho.",
    fq: [
      ["Ricardo atende condomínios em Moema?", "Sim, com atendimento presencial e rotina definida com o conselho."],
      ["Como melhorar a convivência entre moradores?", "Com regimento atualizado, comunicação formal e mediação dos conflitos de forma imparcial."],
    ],
    r: [R.seg, R.com, R.manut, R.prest], nb: [p("ibirapuera"), p("vila-nova-conceicao"), p("campo-belo"), p("brooklin")],
  },
  {
    slug: "vila-nova-conceicao", n: "Vila Nova Conceição", c: SP, g: SP,
    t: "Síndico Profissional na Vila Nova Conceição",
    d: "Gestão condominial na Vila Nova Conceição: edifícios residenciais de alto padrão, equipes, segurança e governança detalhada.",
    h: "Gestão condominial profissional na Vila Nova Conceição",
    ctx: [
      "A Vila Nova Conceição, vizinha ao Ibirapuera, concentra edifícios residenciais de alto padrão, muitos com apartamentos amplos e estruturas de serviço completas.",
      "Esses condomínios costumam ter equipes maiores, sistemas mais sofisticados e conselhos bastante participativos.",
    ],
    ch: [
      "Gestão de equipes numerosas",
      "Manutenção de sistemas prediais sofisticados",
      "Segurança e privacidade dos moradores",
      "Governança com conselho muito participativo",
    ],
    act: "Ricardo atende esse perfil de condomínio com gestão próxima das equipes, plano de manutenção dos sistemas e reuniões estruturadas com o conselho.",
    fq: [
      ["Ricardo atende condomínios de alto padrão na Vila Nova Conceição?", "Ricardo atende esse perfil, aplicando o mesmo método de governança, presença e transparência."],
      ["Como trabalhar com um conselho muito participativo?", "Com pauta, documentos prévios e registro das decisões em cada reunião."],
    ],
    r: [R.prest, R.gov, R.seg, R.manut], nb: [p("moema"), p("ibirapuera"), p("itaim-bibi"), p("vila-olimpia")],
  },
  {
    slug: "brooklin", n: "Brooklin", c: SP, g: SP,
    t: "Síndico Profissional no Brooklin, São Paulo",
    d: "Sindicatura profissional no Brooklin: condomínios novos e consolidados, implantação, contratos e segurança.",
    h: "Síndico profissional no Brooklin",
    ctx: [
      "O Brooklin cresceu muito com a chegada de centros empresariais na região da Berrini e de grandes avenidas, e hoje combina casas, prédios antigos e torres residenciais novas.",
      "A convivência entre condomínios recém-entregues e prédios consolidados exige diagnósticos diferentes para cada caso.",
    ],
    ch: [
      "Implantação de empreendimentos novos",
      "Atualização de prédios consolidados",
      "Trânsito intenso e movimento no entorno",
      "Revisão de contratos e custos",
    ],
    act: "Ricardo faz um diagnóstico específico para cada condomínio — implantação ou reorganização — e conduz a gestão com contratos claros e acompanhamento presencial.",
    fq: [
      ["Ricardo atende prédios novos no Brooklin?", "Sim, inclusive na fase de implantação, com contratos, rotinas e acompanhamento de garantias."],
      ["E prédios mais antigos?", "Também. Nesses casos, o foco costuma ser revisão de contratos e manutenção planejada."],
    ],
    r: ["/implantacao-de-condominio", R.contr, R.seg, R.mod], nb: [p("campo-belo"), p("moema"), p("vila-olimpia"), p("vila-andrade")],
  },
  {
    slug: "campo-belo", n: "Campo Belo", c: SP, g: SP,
    t: "Síndico Profissional no Campo Belo, São Paulo",
    d: "Gestão condominial no Campo Belo: condomínios residenciais, manutenção, segurança e comunicação organizada com moradores.",
    h: "Gestão condominial profissional no Campo Belo",
    ctx: [
      "O Campo Belo é um bairro residencial próximo ao aeroporto de Congonhas, com ruas tranquilas, comércio local e uma verticalização crescente.",
      "Edifícios de médio porte predominam, e a gestão precisa equilibrar custo e qualidade de serviço.",
    ],
    ch: [
      "Equilíbrio entre custo condominial e qualidade",
      "Manutenção de prédios de médio porte",
      "Segurança de acesso",
      "Participação dos moradores nas decisões",
    ],
    act: "Ricardo revisa custos e contratos, organiza a manutenção preventiva e mantém canais formais de comunicação para aumentar a participação dos moradores.",
    fq: [
      ["Síndico profissional vale para prédios de médio porte?", "Pode valer, principalmente quando o condomínio precisa de organização, contratos revistos e prestação de contas clara. A avaliação é feita caso a caso."],
      ["Como aumentar a participação dos moradores?", "Com comunicação regular, pautas claras e transparência nas contas."],
    ],
    r: [R.contr, R.manut, R.com, R.seg], nb: [p("brooklin"), p("moema"), p("ibirapuera")],
  },
  {
    slug: "vila-olimpia-sul", n: "Vila Andrade", c: SP, g: SP,
    t: "", d: "", h: "", ctx: [], ch: [], act: "", fq: [], r: [], nb: [],
  },
  {
    slug: "vila-mariana", n: "Vila Mariana", c: SP, g: SP,
    t: "Síndico Profissional na Vila Mariana, São Paulo",
    d: "Sindicatura profissional na Vila Mariana: edifícios residenciais tradicionais e novos, manutenção, contratos e transparência.",
    h: "Síndico profissional na Vila Mariana",
    ctx: [
      "A Vila Mariana é um bairro residencial bem servido por metrô, com universidades, hospitais, comércio de bairro e edifícios de diferentes gerações.",
      "Prédios tradicionais convivem com lançamentos compactos, o que diversifica o perfil dos moradores.",
    ],
    ch: [
      "Perfis variados de moradores, de famílias a estudantes",
      "Modernização de prédios mais antigos",
      "Controle de custos em contratos de serviço",
      "Regras para unidades compactas e locação",
    ],
    act: "Ricardo adapta regras e comunicação ao perfil de cada condomínio, organiza a modernização por etapas e acompanha contratos presencialmente.",
    fq: [
      ["Ricardo atende prédios compactos na Vila Mariana?", "Sim, com regras de convivência e comunicação adequadas a prédios com muitos locatários."],
      ["Como planejar a modernização sem pesar no caixa?", "Com prioridades definidas, orçamentos comparáveis e execução por etapas aprovadas pelo conselho e pela assembleia."],
    ],
    r: [R.mod, R.com, R.contr, R.contas], nb: [p("ibirapuera"), p("vila-clementino"), p("moema")],
  },
  {
    slug: "vila-clementino", n: "Vila Clementino", c: SP, g: SP,
    t: "Síndico Profissional na Vila Clementino, São Paulo",
    d: "Gestão condominial na Vila Clementino: prédios residenciais próximos a hospitais, controle de acesso e manutenção.",
    h: "Gestão condominial profissional na Vila Clementino",
    ctx: [
      "A Vila Clementino é marcada pela presença de hospitais e instituições de saúde, com edifícios residenciais que atraem profissionais da área e famílias.",
      "O movimento constante no entorno influencia rotinas de portaria, estacionamento e segurança.",
    ],
    ch: [
      "Moradores com horários de trabalho irregulares",
      "Movimento de visitantes e veículos no entorno",
      "Gestão de vagas e estacionamento",
      "Manutenção de prédios de diferentes idades",
    ],
    act: "Ricardo organiza procedimentos de portaria adequados a horários variados, regras de garagem claras e um plano de manutenção contínuo.",
    fq: [
      ["Como organizar a portaria para moradores com horários irregulares?", "Com procedimentos de acesso que funcionam 24 horas e cadastro atualizado de moradores e autorizados."],
      ["Ricardo ajuda a resolver conflitos de garagem?", "Sim, com regras claras no regimento e comunicação formal."],
    ],
    r: [R.seg, R.manut, R.com], nb: [p("vila-mariana"), p("ibirapuera"), p("moema")],
  },
  {
    slug: "vila-mascote", n: "Vila Mascote", c: SP, g: SP,
    t: "Síndico Profissional na Vila Mascote, São Paulo",
    d: "Sindicatura profissional na Vila Mascote: condomínios residenciais com perfil familiar, áreas de lazer e controle de custos.",
    h: "Síndico profissional na Vila Mascote",
    ctx: [
      "A Vila Mascote é um bairro residencial da Zona Sul, próximo a Campo Belo e Jabaquara, que recebeu muitos condomínios verticais com áreas de lazer.",
      "O perfil familiar dos moradores faz da segurança e do cuidado com áreas de lazer prioridades da gestão.",
    ],
    ch: [
      "Segurança de crianças nas áreas comuns",
      "Manutenção de lazer completo",
      "Controle do valor da taxa condominial",
      "Regras de uso de espaços compartilhados",
    ],
    act: "Ricardo revisa a segurança das áreas comuns, mantém a manutenção do lazer em dia e acompanha os custos mês a mês com o conselho.",
    fq: [
      ["Como manter a taxa condominial sob controle?", "Com revisão de contratos, manutenção preventiva e acompanhamento mensal do orçamento."],
      ["Ricardo atende condomínios-clube?", "Sim. O condomínio-clube é um dos perfis atendidos."],
    ],
    r: [R.manut, R.seg, R.contas, "/condominio-clube"], nb: [p("campo-belo"), p("brooklin"), p("moema")],
  },
  {
    slug: "alto-da-boa-vista", n: "Alto da Boa Vista", c: SP, g: SP,
    t: "Síndico Profissional no Alto da Boa Vista, São Paulo",
    d: "Gestão condominial no Alto da Boa Vista: condomínios residenciais com áreas verdes, segurança e conservação.",
    h: "Gestão condominial profissional no Alto da Boa Vista",
    ctx: [
      "O Alto da Boa Vista, na Zona Sul, é um bairro residencial tranquilo e arborizado, próximo a Santo Amaro, com casas, vilas fechadas e condomínios verticais.",
      "Áreas verdes amplas e ruas calmas trazem qualidade de vida, mas pedem atenção constante à conservação e à segurança.",
    ],
    ch: [
      "Conservação de áreas verdes",
      "Segurança em perímetros arborizados",
      "Condomínios com casas e torres",
      "Contratos de jardinagem e limpeza",
    ],
    act: "Ricardo organiza a conservação das áreas externas, revisa a segurança do perímetro e acompanha presencialmente os contratos de manutenção.",
    fq: [
      ["Ricardo atende condomínios com casas no Alto da Boa Vista?", "Ricardo atende esse perfil, com gestão de áreas comuns, segurança e contratos."],
      ["Como revisar a segurança de perímetro?", "Com análise de acessos, iluminação, equipamentos e rotinas de ronda e portaria."],
    ],
    r: [R.seg, R.manut, R.prest], nb: [p("brooklin"), p("vila-andrade"), p("campo-belo")],
  },
  // ——— Osasco ———
  {
    slug: "presidente-altino", n: "Presidente Altino", c: "Osasco", g: "Osasco",
    t: "Síndico Profissional em Presidente Altino, Osasco",
    d: "Sindicatura profissional em Presidente Altino: condomínios próximos à estação, segurança de acesso e organização financeira.",
    h: "Síndico profissional em Presidente Altino",
    ctx: [
      "Presidente Altino fica na divisa de Osasco com São Paulo, ao lado de uma estação de trem e de importantes vias de ligação, com bairro residencial e novos edifícios.",
      "A proximidade com o transporte atrai moradores que trabalham na capital e valorizam praticidade e segurança.",
    ],
    ch: [
      "Segurança de acesso perto de áreas de grande circulação",
      "Organização financeira em condomínios novos",
      "Recebimento de entregas",
      "Comunicação com moradores que passam o dia fora",
    ],
    act: "Ricardo estrutura portaria e recebimento de entregas, organiza as finanças com relatórios mensais e mantém comunicação formal por canais oficiais.",
    fq: [
      ["Ricardo atende condomínios em Presidente Altino?", "Sim. Osasco é uma das regiões de atendimento presencial de Ricardo."],
      ["Como organizar o recebimento de encomendas?", "Com procedimento definido de recebimento, registro e retirada, adequado à estrutura do prédio."],
    ],
    r: [R.seg, R.contas, R.com], nb: [p("vila-yara"), p("centro-de-osasco"), p("jaguaribe"), p("osasco")],
  },
  {
    slug: "jaguaribe", n: "Jaguaribe", c: "Osasco", g: "Osasco",
    t: "Síndico Profissional no Jaguaribe, Osasco",
    d: "Gestão condominial no Jaguaribe, Osasco: condomínios residenciais, manutenção, inadimplência e transparência.",
    h: "Gestão condominial profissional no Jaguaribe",
    ctx: [
      "O Jaguaribe é um bairro residencial de Osasco, próximo ao Centro e a Presidente Altino, com casas e condomínios de perfis variados.",
      "Muitos condomínios da região buscam organizar as finanças e a manutenção com custo compatível com a realidade dos moradores.",
    ],
    ch: [
      "Inadimplência e caixa apertado",
      "Manutenção atrasada",
      "Falta de prestação de contas clara",
      "Dificuldade em encontrar síndico morador",
    ],
    act: "Ricardo organiza o caixa, estabelece uma rotina de cobrança e um plano de manutenção por prioridades, com contas apresentadas mensalmente ao conselho.",
    fq: [
      ["Ricardo atende condomínios sem candidato a síndico no Jaguaribe?", "Sim. A sindicatura profissional é uma alternativa quando nenhum morador quer ou pode assumir a função."],
      ["É possível recuperar o caixa do condomínio?", "Com diagnóstico, cobrança organizada e controle de gastos, é possível melhorar a situação. O resultado depende de cada condomínio e não há garantia."],
    ],
    r: ["/inadimplencia-condominial", R.contas, R.manut, "/condominio-sem-sindico"], nb: [p("presidente-altino"), p("centro-de-osasco"), p("bussocaba"), p("osasco")],
  },
  {
    slug: "bussocaba", n: "Bussocaba", c: "Osasco", g: "Osasco",
    t: "Síndico Profissional no Bussocaba, Osasco",
    d: "Sindicatura profissional no Bussocaba: condomínios residenciais, segurança, manutenção e comunicação com moradores.",
    h: "Síndico profissional no Bussocaba",
    ctx: [
      "O Bussocaba é um bairro residencial de Osasco, próximo a Carapicuíba e à região do Km 18, com ruas de perfil familiar e condomínios verticais e horizontais.",
      "Segurança e manutenção bem planejadas são demandas recorrentes dos moradores.",
    ],
    ch: [
      "Segurança de acesso",
      "Manutenção de áreas comuns",
      "Comunicação dispersa em grupos de mensagens",
      "Contratos sem acompanhamento",
    ],
    act: "Ricardo organiza a segurança e a manutenção, formaliza a comunicação com moradores e acompanha os contratos presencialmente.",
    fq: [
      ["Ricardo atende no Bussocaba?", "Sim, com atendimento presencial em Osasco."],
      ["Como substituir os grupos de mensagem por comunicação formal?", "Com canais oficiais, comunicados registrados e atas das decisões, sem impedir o contato dos moradores."],
    ],
    r: [R.seg, R.com, R.manut], nb: [p("km-18"), p("jaguaribe"), p("carapicuiba"), p("osasco")],
  },
  {
    slug: "km-18", n: "Km 18", c: "Osasco", g: "Osasco",
    t: "Síndico Profissional no Km 18, Osasco",
    d: "Gestão condominial no Km 18, Osasco: condomínios perto da Raposo Tavares, segurança, manutenção e contas transparentes.",
    h: "Gestão condominial profissional no Km 18",
    ctx: [
      "O Km 18 é uma região de Osasco às margens da Rodovia Raposo Tavares, com condomínios residenciais, comércio e acesso rápido à Zona Oeste de São Paulo.",
      "A proximidade com a rodovia traz movimento e exige atenção à segurança e à logística do condomínio.",
    ],
    ch: [
      "Segurança em área próxima à rodovia",
      "Logística de entregas e prestadores",
      "Manutenção de condomínios maiores",
      "Transparência nas contas",
    ],
    act: "Ricardo revisa a segurança e os acessos, organiza a logística do condomínio e apresenta contas claras mensalmente.",
    fq: [
      ["Ricardo atende condomínios no Km 18?", "Sim, com atendimento presencial."],
      ["Como melhorar a segurança de um condomínio perto da rodovia?", "Com revisão de acessos, equipamentos e procedimentos de portaria, de acordo com a estrutura do condomínio."],
    ],
    r: [R.seg, R.contas, R.manut], nb: [p("bussocaba"), p("quitauna"), p("granja-viana"), p("osasco")],
  },
  {
    slug: "quitauna", n: "Quitaúna", c: "Osasco", g: "Osasco",
    t: "Síndico Profissional em Quitaúna, Osasco",
    d: "Sindicatura profissional em Quitaúna: condomínios residenciais, organização de contratos, manutenção e comunicação.",
    h: "Síndico profissional em Quitaúna",
    ctx: [
      "Quitaúna é uma região de Osasco conhecida pela estação de trem e por uma área militar, cercada por bairros residenciais com condomínios verticais.",
      "Condomínios próximos ao transporte público costumam ter moradores que se deslocam diariamente para São Paulo.",
    ],
    ch: [
      "Comunicação com moradores que passam o dia fora",
      "Contratos sem revisão",
      "Manutenção corretiva acumulada",
      "Segurança de acesso",
    ],
    act: "Ricardo formaliza a comunicação, revisa contratos e implanta manutenção preventiva, com relatórios regulares ao conselho.",
    fq: [
      ["Ricardo atende em Quitaúna?", "Sim, Osasco é região de atendimento presencial."],
      ["Como os moradores acompanham a gestão sem estar no prédio?", "Por comunicados formais, relatórios mensais e acesso à prestação de contas."],
    ],
    r: [R.com, R.contr, R.manut], nb: [p("km-18"), p("presidente-altino"), p("carapicuiba"), p("osasco")],
  },
  // ——— Grande São Paulo e Interior ———
  {
    slug: "carapicuiba", n: "Carapicuíba", c: "Carapicuíba", g: "Grande São Paulo",
    t: "Síndico Profissional em Carapicuíba",
    d: "Gestão condominial em Carapicuíba: condomínios verticais e horizontais, controle financeiro, manutenção e segurança.",
    h: "Gestão condominial profissional em Carapicuíba",
    ctx: [
      "Carapicuíba, vizinha de Osasco e Barueri, tem condomínios residenciais de perfis variados, de conjuntos verticais a áreas de casas, além de ligação com a Granja Viana e a Aldeia da Serra.",
      "Muitos condomínios buscam profissionalizar a gestão para organizar as finanças e a manutenção.",
    ],
    ch: [
      "Controle financeiro e inadimplência",
      "Manutenção de conjuntos com vários blocos",
      "Segurança de perímetro",
      "Falta de candidatos a síndico",
    ],
    act: "Ricardo organiza finanças, cobrança e manutenção, revisa a segurança e conduz a gestão com presença e relatórios mensais.",
    fq: [
      ["Ricardo atende em Carapicuíba?", "Sim, com atendimento presencial na região."],
      ["Ricardo atende conjuntos com vários blocos?", "Sim, organizando rotinas por bloco e comunicação centralizada."],
    ],
    r: ["/inadimplencia-condominial", R.manut, R.seg, R.contas], nb: [p("aldeia-da-serra"), p("granja-viana"), p("bussocaba"), p("barueri")],
  },
  {
    slug: "aldeia-da-serra", n: "Aldeia da Serra", c: "Barueri", g: "Barueri",
    t: "Síndico Profissional na Aldeia da Serra",
    d: "Gestão de condomínios na Aldeia da Serra: residenciais com áreas verdes, segurança de perímetro e conservação.",
    h: "Síndico profissional na Aldeia da Serra",
    ctx: [
      "A Aldeia da Serra, entre Barueri e Santana de Parnaíba, é formada por residenciais fechados com muitas áreas verdes, ruas internas e casas.",
      "A gestão desses residenciais envolve segurança de perímetro, conservação de vias e áreas verdes e muitos prestadores.",
    ],
    ch: [
      "Segurança de perímetro extenso",
      "Conservação de ruas, áreas verdes e iluminação",
      "Obras e reformas nas casas",
      "Gestão de grande número de prestadores",
    ],
    act: "Ricardo atende esse perfil de residencial com revisão da segurança, plano de conservação das áreas comuns e controle de obras e prestadores.",
    fq: [
      ["Ricardo atende residenciais de casas na Aldeia da Serra?", "Ricardo atende esse perfil, com o mesmo método de governança, presença e transparência."],
      ["Como controlar obras nas casas?", "Com regras claras, cadastro de prestadores e acompanhamento conforme o regulamento do residencial."],
    ],
    r: [R.seg, R.manut, R.prest, "/condominio-horizontal"], nb: [p("alphaville"), p("fazendinha"), p("santana-de-parnaiba"), p("carapicuiba")],
  },
  {
    slug: "fazendinha", n: "Fazendinha", c: "Santana de Parnaíba", g: "Santana de Parnaíba",
    t: "Síndico Profissional na Fazendinha, Santana de Parnaíba",
    d: "Sindicatura profissional na Fazendinha: residenciais em crescimento, implantação, segurança e manutenção.",
    h: "Gestão condominial profissional na Fazendinha",
    ctx: [
      "A Fazendinha, em Santana de Parnaíba, é uma região em crescimento, com novos residenciais, condomínios de casas e acesso pela Estrada dos Romeiros.",
      "Residenciais novos e em expansão precisam estruturar regras, contratos e segurança desde cedo.",
    ],
    ch: [
      "Implantação de residenciais novos",
      "Segurança em área em expansão",
      "Definição de regulamento interno",
      "Contratos de manutenção de áreas comuns",
    ],
    act: "Ricardo conduz a implantação ou reorganização do residencial, define regras e contratos e acompanha a segurança e a manutenção presencialmente.",
    fq: [
      ["Ricardo atende na Fazendinha?", "Sim, Santana de Parnaíba é região de atendimento presencial."],
      ["Ricardo ajuda na implantação de residenciais novos?", "Sim, com contratos, rotinas, regulamento e acompanhamento de garantias."],
    ],
    r: ["/implantacao-de-condominio", R.seg, R.manut], nb: [p("aldeia-da-serra"), p("centro-de-santana-de-parnaiba"), p("santana-de-parnaiba"), p("alphaville")],
  },
  {
    slug: "campinas", n: "Campinas", c: "Campinas", g: "Interior",
    t: "Síndico Profissional em Campinas",
    d: "Sindicatura profissional para condomínios em Campinas: governança, contratos, manutenção e prestação de contas, com atendimento combinado previamente.",
    h: "Síndico profissional em Campinas",
    ctx: [
      "Campinas é uma das maiores cidades do interior paulista, com condomínios verticais nas regiões centrais e muitos residenciais fechados nos bairros mais afastados.",
      "Ricardo atende condomínios na cidade com agenda presencial combinada previamente, já que a base de atuação principal é a região de Osasco, Barueri e São Paulo.",
    ],
    ch: [
      "Residenciais fechados com grandes áreas comuns",
      "Governança e prestação de contas",
      "Contratos e prestadores locais",
      "Manutenção planejada",
    ],
    act: "Ricardo conduz a sindicatura com visitas planejadas, comunicação formal entre as visitas e relatórios mensais, mantendo o conselho envolvido nas decisões.",
    fq: [
      ["Ricardo atende em Campinas?", "Sim, com agenda presencial combinada previamente e acompanhamento contínuo entre as visitas."],
      ["Como funciona a gestão à distância entre as visitas?", "Com comunicação formal, relatórios, acompanhamento dos prestadores e reuniões periódicas com o conselho."],
    ],
    r: [R.gov, R.contas, R.contr, R.manut], nb: [p("indaiatuba"), p("vinhedo")],
  },
  {
    slug: "indaiatuba", n: "Indaiatuba", c: "Indaiatuba", g: "Interior",
    t: "Síndico Profissional em Indaiatuba",
    d: "Gestão condominial em Indaiatuba: residenciais fechados e edifícios, segurança, conservação e transparência, com atendimento agendado.",
    h: "Gestão condominial profissional em Indaiatuba",
    ctx: [
      "Indaiatuba, na região de Campinas, cresceu com muitos residenciais fechados de casas e edifícios voltados a famílias.",
      "O atendimento de Ricardo na cidade é feito com agenda presencial combinada previamente.",
    ],
    ch: [
      "Segurança em residenciais de casas",
      "Conservação de áreas verdes e lazer",
      "Controle de obras nas unidades",
      "Prestação de contas clara",
    ],
    act: "Ricardo organiza segurança, conservação e regras de obras, com visitas planejadas e relatórios regulares ao conselho.",
    fq: [
      ["Ricardo atende em Indaiatuba?", "Sim, com agenda presencial combinada previamente."],
      ["Ricardo atende residenciais de casas?", "Ricardo atende esse perfil, com foco em segurança, conservação e governança."],
    ],
    r: [R.seg, R.manut, R.contas], nb: [p("campinas"), p("vinhedo")],
  },
  {
    slug: "vinhedo", n: "Vinhedo", c: "Vinhedo", g: "Interior",
    t: "Síndico Profissional em Vinhedo",
    d: "Sindicatura profissional em Vinhedo: residenciais com áreas verdes, segurança e governança, com atendimento agendado.",
    h: "Síndico profissional em Vinhedo",
    ctx: [
      "Vinhedo, entre Campinas e Jundiaí, é conhecida pela qualidade de vida e por residenciais fechados com muitas áreas verdes.",
      "Ricardo atende condomínios da cidade com agenda presencial combinada previamente.",
    ],
    ch: [
      "Segurança de perímetro",
      "Conservação de áreas verdes",
      "Gestão de prestadores",
      "Planejamento financeiro de longo prazo",
    ],
    act: "Ricardo revisa segurança e contratos, organiza a conservação e apresenta um planejamento financeiro claro ao conselho.",
    fq: [
      ["Ricardo atende em Vinhedo?", "Sim, com agenda presencial combinada previamente."],
      ["Como planejar as finanças de um residencial a longo prazo?", "Com orçamento anual, fundo de reserva e plano de manutenção aprovados com o conselho."],
    ],
    r: [R.seg, R.prest, R.gov], nb: [p("campinas"), p("indaiatuba")],
  },
  {
    slug: "parque-dos-principes", n: "Parque dos Príncipes", c: SP, g: SP,
    t: "Síndico Profissional no Parque dos Príncipes",
    d: "Gestão condominial no Parque dos Príncipes, na divisa de São Paulo com Osasco: segurança, conservação de áreas verdes e governança com associações de moradores.",
    h: "Síndico profissional no Parque dos Príncipes",
    ctx: [
      "O Parque dos Príncipes é um bairro residencial da Zona Oeste de São Paulo, na divisa com Osasco, próximo ao Rio Pequeno, à Vila São Francisco e ao Butantã, com acesso pelas avenidas Escola Politécnica e Engenheiro Heitor Antônio Eiras Garcia.",
      "Com ruas arborizadas, grandes áreas verdes e controle de acesso feito com guaritas e associações de moradores dos dois lados da divisa, o bairro funciona de forma parecida com um condomínio fechado. O comércio interno é pequeno, o que torna a logística de prestadores e entregas parte importante da rotina.",
    ],
    ch: [
      "Segurança integrada às guaritas e à rotina das associações do bairro",
      "Conservação de áreas verdes e jardins",
      "Logística de entregas e prestadores em bairro com pouco comércio interno",
      "Contratos de manutenção e portaria que precisam de acompanhamento",
    ],
    act: "Ricardo organiza a segurança do condomínio de forma alinhada à estrutura de acesso do bairro, mantém a conservação das áreas comuns em dia e acompanha contratos e prestadores presencialmente, com prestação de contas mensal.",
    fq: [
      ["Ricardo atende condomínios no Parque dos Príncipes?", "Sim. O bairro fica na divisa com Osasco, região de atendimento presencial de Ricardo."],
      ["Como o condomínio se relaciona com as associações de moradores do bairro?", "A sindicatura mantém diálogo com as associações para alinhar procedimentos de acesso e segurança, sem misturar as responsabilidades de cada um."],
    ],
    r: [R.seg, R.manut, R.prest, R.contas], nb: [p("vila-sao-francisco"), p("butanta"), p("presidente-altino"), p("osasco")],
  },
  {
    slug: "parque-sao-domingos", n: "Parque São Domingos", c: SP, g: SP,
    t: "Síndico Profissional no Parque São Domingos, São Paulo",
    d: "Sindicatura profissional para condomínios no entorno do Parque São Domingos, na Zona Noroeste de São Paulo: manutenção, segurança e prestação de contas.",
    h: "Síndico profissional no Parque São Domingos",
    ctx: [
      "O Parque São Domingos é uma área verde pública da Zona Noroeste de São Paulo, com pista de caminhada, trilhas, quadras e bosque. Ao redor dele, bairros residenciais reúnem casas e condomínios verticais de perfil familiar.",
      "Morar perto de uma área verde é um atrativo, mas os condomínios da região também lidam com terrenos acidentados, chuvas e a necessidade de manter drenagem, muros e áreas externas em bom estado.",
    ],
    ch: [
      "Drenagem, muros e áreas externas em terrenos com desnível",
      "Segurança de acesso em ruas residenciais",
      "Manutenção preventiva em prédios de diferentes idades",
      "Controle de custos e transparência nas contas",
    ],
    act: "Ricardo faz um diagnóstico das áreas externas e da estrutura, organiza um plano de manutenção preventiva por prioridades e revisa a segurança do condomínio, com relatórios mensais ao conselho.",
    fq: [
      ["Ricardo atende condomínios perto do Parque São Domingos?", "Sim, com atendimento presencial e visitas planejadas."],
      ["Como prevenir problemas de drenagem e muros?", "Com vistorias periódicas, manutenção preventiva antes das chuvas e acompanhamento de profissionais técnicos quando necessário."],
    ],
    r: [R.manut, R.seg, R.contas], nb: [p("lapa"), p("barra-funda"), p("sao-paulo")],
  },
];

// Vila Andrade (entrada completa)
data[data.findIndex((x) => x.slug === "vila-olimpia-sul")] = {
  slug: "vila-andrade", n: "Vila Andrade", c: SP, g: SP,
  t: "Síndico Profissional na Vila Andrade, São Paulo",
  d: "Gestão condominial na Vila Andrade: condomínios-clube com várias torres, lazer completo, segurança e controle de custos.",
  h: "Gestão condominial profissional na Vila Andrade",
  ctx: [
    "A Vila Andrade, perto do Morumbi, concentra condomínios-clube de grande porte, com várias torres e áreas de lazer completas.",
    "Condomínios desse tamanho funcionam quase como pequenas cidades e exigem gestão estruturada de equipes, contratos e custos.",
  ],
  ch: [
    "Gestão de várias torres e muitas unidades",
    "Manutenção de lazer completo",
    "Equipes numerosas e contratos de maior valor",
    "Segurança de perímetro e acessos",
  ],
  act: "Ricardo estrutura a operação com rotinas por área, controle de contratos e equipes e relatórios que permitem ao conselho acompanhar custos e prioridades.",
  fq: [
    ["Ricardo tem experiência com condomínio-clube?", "Sim. Um dos casos de Ricardo é um condomínio-clube em que o caixa foi reconstruído ao longo de cerca de três anos — resultado passado, não promessa."],
    ["Como controlar custos em condomínios grandes?", "Com revisão de contratos, indicadores de serviço e acompanhamento mensal do orçamento com o conselho."],
  ],
  r: ["/condominio-clube", R.prest, R.contr, R.seg], nb: [p("brooklin"), p("alto-da-boa-vista"), p("campo-belo")],
};

export const attendRegions: Location[] = data.map(mk);
