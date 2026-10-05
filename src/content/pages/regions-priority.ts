import { loc } from "../build";
import type { Location } from "../types";

const SP = "São Paulo";

/** Prioridade 1 — localidades prioritárias que ainda não tinham página. */
export const priorityRegions: Location[] = [
  loc({
    id: "sindico-profissional-vila-yara", n: "Vila Yara", c: "Osasco", g: "Osasco",
    t: "Síndico Profissional na Vila Yara, Osasco",
    d: "Atendimento presencial na Vila Yara: sindicatura com governança, prestação de contas auditável e comunicação contínua com conselho e moradores.",
    h: "Síndico profissional em Vila Yara com gestão presente e transparente",
    l: "Ricardo Princiotto oferece sindicatura profissional para condomínios da Vila Yara, em Osasco, com presença frequente no condomínio, rotina estruturada com o conselho e prestação de contas que qualquer condômino consegue acompanhar.",
    s: [
      ["Por que a Vila Yara pede uma gestão mais executiva", [
        "A Vila Yara faz a ligação direta de Osasco com o eixo de São Paulo e combina um perfil fortemente residencial com comércio e serviços consolidados. Esse convívio aparece no dia a dia dos edifícios: fluxo intenso de entregas, visitantes e prestadores, além de moradores que comparam o padrão do próprio condomínio com o de empreendimentos vizinhos.",
        "Em um bairro onde a valorização do imóvel é parte da decisão de morar, a forma como o condomínio é governado — contratos, manutenção, segurança e transparência — pesa tanto quanto a área comum.",
      ]],
      ["Desafios frequentes nos condomínios da região", [], [
        "Controle de acesso com alto volume de entregas e visitantes",
        "Contratos de portaria, limpeza e manutenção que precisam ser revistos periodicamente",
        "Modernização de sistemas em edifícios que convivem com lançamentos mais novos ao redor",
        "Expectativa elevada de moradores quanto a clareza nas contas",
        "Necessidade de alinhar conselho e síndico em decisões de investimento",
      ]],
      ["Como Ricardo atua na Vila Yara", [
        "A sindicatura começa pela leitura do condomínio: contratos vigentes, situação financeira, pendências de manutenção e rotina de segurança. A partir daí, a gestão é conduzida com agenda presencial planejada, reuniões formais com o conselho e relatórios mensais auditáveis.",
        "A especialização de Ricardo em segurança patrimonial e pessoal ajuda a organizar portaria e controle de acesso sem transformar o condomínio em uma operação engessada.",
      ], [
        "Governança e transparência na prestação de contas",
        "Revisão de contratos e acompanhamento de prestadores",
        "Planejamento de manutenção e modernização",
        "Comunicação contínua com conselheiros e moradores",
      ]],
    ],
    f: [
      ["Ricardo atende condomínios na Vila Yara presencialmente?", "Sim. O atendimento na Vila Yara é presencial, com visitas planejadas e presença frequente no condomínio, além da comunicação formalizada entre as visitas."],
      ["Que tipo de gestão é indicada para condomínios com operação mais complexa na Vila Yara?", "Uma sindicatura executiva, com rotina definida de vistorias, controle de contratos e prestadores, plano de manutenção e reuniões periódicas com o conselho."],
      ["Como funciona a relação entre síndico profissional e conselho?", "O conselho acompanha e fiscaliza. Ricardo mantém uma rotina estruturada de reuniões, apresenta documentos e justificativas das decisões e registra os encaminhamentos."],
      ["Prestação de contas e transparência fazem parte da sindicatura?", "Sim. A prestação de contas mensal, organizada e auditável, é parte central do trabalho — não um serviço adicional."],
    ],
    r: ["/governanca-condominial", "/prestacao-de-contas-condominial", "/seguranca-patrimonial-condominio", "/gestao-de-contratos-do-condominio", "/modernizacao-de-condominio"],
    nb: ["/sindico-profissional-vila-campesina", "/sindico-profissional-centro-de-osasco", "/sindico-profissional-presidente-altino", "/sindico-profissional-vila-sao-francisco", "/sindico-profissional-osasco"],
    cta: "Converse sobre o seu condomínio na Vila Yara",
  }),
  loc({
    id: "sindico-profissional-vila-campesina", n: "Vila Campesina", c: "Osasco", g: "Osasco",
    t: "Gestão Condominial Profissional na Vila Campesina",
    d: "Sindicatura profissional para condomínios da Vila Campesina, em Osasco: controle de contratos, manutenção, segurança e comunicação organizada.",
    h: "Gestão condominial profissional para Vila Campesina",
    l: "Para condomínios da Vila Campesina, Ricardo Princiotto conduz uma sindicatura profissional focada em organizar contratos e prestadores, manter a manutenção em dia e estabelecer uma comunicação clara com moradores — sempre com acompanhamento presencial.",
    s: [
      ["Um bairro em transformação urbana", [
        "A Vila Campesina é uma área consolidada de Osasco, próxima à Vila Yara, à Cidade de Deus e ao Centro, conectada a um importante eixo viário da cidade. O perfil mistura residências, comércio e edifícios, e o adensamento recente trouxe novos empreendimentos para perto de prédios com mais tempo de uso.",
        "Para o condomínio, essa transformação significa mais exigência de organização: prestadores circulando, demandas de manutenção diferentes entre prédios antigos e novos e moradores que esperam respostas rápidas.",
      ]],
      ["Onde os condomínios costumam travar", [], [
        "Prestadores de serviço sem escopo e indicadores definidos",
        "Manutenção corretiva acumulada por falta de planejamento",
        "Comunicação dispersa em grupos de mensagens, sem registro formal",
        "Segurança de acesso pressionada pelo movimento do entorno",
      ]],
      ["O trabalho do síndico na Vila Campesina", [
        "Ricardo estrutura a operação a partir de contratos claros e acompanhamento presencial dos prestadores. A manutenção passa a seguir um cronograma preventivo, e a comunicação com moradores ganha canais oficiais, comunicados formais e registro das decisões.",
        "O objetivo é que o condomínio deixe de reagir a problemas e passe a decidir com antecedência — o que também protege o valor patrimonial das unidades.",
      ]],
    ],
    f: [
      ["O síndico profissional acompanha os prestadores pessoalmente na Vila Campesina?", "Sim. As visitas presenciais incluem vistoria das áreas comuns e verificação do trabalho de portaria, limpeza e manutenção."],
      ["Como organizar a comunicação com os moradores?", "Com canais oficiais definidos, comunicados formais e atas das decisões, reduzindo ruído e informações desencontradas."],
      ["É possível sair de uma manutenção apenas corretiva?", "Sim. A sindicatura organiza um plano preventivo, com prioridades e cronograma aprovados junto ao conselho."],
      ["Ricardo atende prédios mais antigos e novos no mesmo bairro?", "Sim. Cada condomínio recebe um diagnóstico próprio, já que as necessidades de um edifício recém-entregue e de um prédio mais antigo são diferentes."],
    ],
    r: ["/gestao-de-prestadores-e-equipes", "/manutencao-preventiva-condominial", "/comunicacao-com-condominos", "/valorizacao-patrimonial-condominio", "/seguranca-patrimonial-condominio"],
    nb: ["/sindico-profissional-vila-yara", "/sindico-profissional-centro-de-osasco", "/sindico-profissional-bela-vista-osasco", "/sindico-profissional-osasco"],
    cta: "Solicite uma avaliação para seu condomínio na Vila Campesina",
  }),
  loc({
    id: "sindico-profissional-centro-de-osasco", n: "Centro de Osasco", c: "Osasco", g: "Osasco",
    t: "Síndico Profissional no Centro de Osasco",
    d: "Sindicatura para edifícios do Centro de Osasco: organização financeira, manutenção de prédios com mais tempo de uso e controle de acesso.",
    h: "Sindicatura profissional para edifícios do Centro de Osasco",
    l: "No Centro de Osasco, Ricardo Princiotto atende condomínios que convivem com comércio intenso, prédios com mais tempo de uso e grande circulação de pessoas, oferecendo gestão presencial, organização financeira e manutenção planejada.",
    s: [
      ["O cenário condominial do centro", [
        "O Centro de Osasco concentra comércio, serviços e acesso ao transporte sobre trilhos. Muitos edifícios residenciais da região têm mais tempo de construção e dividem o quarteirão com lojas e escritórios, o que aumenta a circulação na calçada e a pressão sobre portaria e controle de acesso.",
        "Prédios mais antigos também tendem a acumular necessidades de adequação — instalações, fachadas, sistemas de segurança e documentação.",
      ]],
      ["Desafios típicos", [], [
        "Instalações e sistemas que precisam de atualização",
        "Documentação e regularizações pendentes",
        "Inadimplência que compromete o caixa do condomínio",
        "Controle de acesso em ruas com grande movimento",
        "Fundo de obras insuficiente para as necessidades do prédio",
      ]],
      ["Como a gestão é conduzida", [
        "O primeiro passo é um levantamento técnico e financeiro do edifício. Com ele, Ricardo organiza prioridades, negocia contratos, estrutura a cobrança e propõe ao conselho um plano de modernização viável para o orçamento.",
        "A experiência com recuperação financeira e com obras ajuda a conduzir esse processo sem decisões precipitadas.",
      ]],
    ],
    f: [
      ["Prédios antigos no Centro de Osasco podem se beneficiar de síndico profissional?", "Sim. Edifícios com mais tempo de uso exigem planejamento técnico de manutenção e adequações, que uma sindicatura profissional organiza com prioridade e orçamento."],
      ["Como lidar com a inadimplência alta?", "Com régua de cobrança estruturada, negociação formal e acompanhamento mensal junto à administradora e ao jurídico contratado pelo condomínio."],
      ["Ricardo cuida da regularização do condomínio?", "Ele conduz o levantamento de pendências e coordena os responsáveis técnicos e jurídicos necessários para regularizar a documentação."],
      ["A segurança do prédio é avaliada?", "Sim. Ricardo é especialista em segurança patrimonial e avalia portaria, acessos e procedimentos como parte da gestão."],
    ],
    r: ["/modernizacao-de-condominio", "/legalizacao-de-condominio", "/gestao-de-inadimplencia-condominial", "/recuperacao-financeira-de-condominio", "/sindico-para-condominio-antigo"],
    nb: ["/sindico-profissional-bela-vista-osasco", "/sindico-profissional-vila-campesina", "/sindico-profissional-presidente-altino", "/sindico-profissional-osasco"],
    cta: "Converse sobre a gestão do seu prédio no Centro de Osasco",
  }),
  loc({
    id: "sindico-profissional-bela-vista-osasco", n: "Bela Vista (Osasco)", c: "Osasco", g: "Osasco",
    t: "Síndico Profissional na Bela Vista, Osasco",
    d: "Gestão condominial para a Bela Vista de Osasco: rotina com conselho, contas claras e manutenção planejada para condomínios residenciais.",
    h: "Gestão de condomínios residenciais na Bela Vista, em Osasco",
    l: "Para os condomínios residenciais da Bela Vista, em Osasco, Ricardo Princiotto oferece uma sindicatura próxima: presença no condomínio, decisões tomadas com o conselho e contas apresentadas de forma que todos entendam.",
    s: [
      ["Perfil residencial perto do centro", [
        "A Bela Vista de Osasco é um bairro residencial próximo ao centro da cidade, com edifícios e condomínios onde muitas famílias vivem há bastante tempo. Esse vínculo costuma gerar engajamento, mas também expectativas altas sobre quem administra o patrimônio comum.",
      ]],
      ["Questões que aparecem com frequência", [], [
        "Decisões sobre obras e melhorias que dividem os moradores",
        "Prestação de contas pouco detalhada em gestões anteriores",
        "Conflitos de convivência entre vizinhos",
        "Manutenção de áreas comuns usadas diariamente por famílias",
      ]],
      ["A proposta de gestão", [
        "Ricardo trabalha com pautas claras em assembleia, orçamentos comparados para cada investimento e mediação de conflitos baseada no regimento interno. A presença frequente permite acompanhar a convivência de perto e agir antes de o problema crescer.",
      ]],
    ],
    f: [
      ["O síndico profissional ajuda em conflitos entre vizinhos?", "Sim. A mediação de conflitos faz parte da gestão, sempre com base na convenção e no regimento interno."],
      ["Como as obras são aprovadas?", "Com orçamentos comparados, apresentação ao conselho e deliberação em assembleia, respeitando o rito previsto na convenção."],
      ["Há cobrança extra para conduzir assembleias?", "Não. Assembleias ordinárias e extraordinárias não geram honorários extras."],
      ["Com que frequência Ricardo vai ao condomínio?", "A agenda de visitas é definida conforme o porte e o momento do condomínio, com presença frequente e canais de comunicação abertos entre as visitas."],
    ],
    r: ["/mediacao-de-conflitos-condominiais", "/conducao-de-assembleias", "/prestacao-de-contas-condominial", "/sindico-para-condominio-residencial"],
    nb: ["/sindico-profissional-centro-de-osasco", "/sindico-profissional-vila-campesina", "/sindico-profissional-jaguaribe", "/sindico-profissional-osasco"],
    cta: "Fale sobre o seu condomínio na Bela Vista de Osasco",
  }),
  loc({
    id: "sindico-profissional-alto-da-lapa", n: "Alto da Lapa", c: SP, g: SP,
    t: "Síndico Profissional no Alto da Lapa",
    d: "Sindicatura profissional para condomínios do Alto da Lapa: gestão presencial, compliance, prestação de contas auditável e valorização patrimonial.",
    h: "Sindicatura profissional para condomínios do Alto da Lapa",
    l: "Ricardo Princiotto atende condomínios do Alto da Lapa, na Zona Oeste de São Paulo, com uma sindicatura presencial voltada a compliance, transparência e preservação do valor dos imóveis em um bairro de perfil residencial exigente.",
    s: [
      ["Um bairro residencial que valoriza a tranquilidade", [
        "O Alto da Lapa tem perfil predominantemente residencial, com ruas arborizadas, casas e edifícios de diferentes gerações. Moradores costumam escolher o bairro pela qualidade de vida — e esperam que o condomínio reflita esse padrão em manutenção, segurança e convivência.",
        "Prédios mais antigos convivem com empreendimentos recentes, o que torna a modernização e a atualização de contratos temas recorrentes nas assembleias.",
      ]],
      ["Desafios dos condomínios do bairro", [], [
        "Preservar a valorização patrimonial diante de lançamentos novos",
        "Atualizar sistemas de segurança e controle de acesso",
        "Planejar obras de fachada, impermeabilização e instalações",
        "Manter conformidade documental e trabalhista",
        "Conselhos atuantes que pedem informação detalhada",
      ]],
      ["Como Ricardo atua no Alto da Lapa", [
        "A gestão combina presença frequente, relatórios auditáveis e uma rotina estruturada com o conselho. O planejamento plurianual organiza manutenção e obras para que investimentos sejam feitos no momento certo, sem sustos no caixa.",
      ], [
        "Compliance e organização documental",
        "Planejamento plurianual de manutenção e obras",
        "Segurança patrimonial",
        "Transparência na prestação de contas",
      ]],
    ],
    f: [
      ["Ricardo atende o Alto da Lapa com visitas presenciais?", "Sim. O Alto da Lapa está entre as regiões prioritárias de atendimento, com agenda presencial planejada."],
      ["Como a sindicatura ajuda a preservar o valor do imóvel?", "Mantendo manutenção em dia, contas equilibradas, documentação regular e governança transparente — fatores percebidos por quem compra e aluga."],
      ["O conselho continua tendo papel ativo?", "Sim. O conselho fiscaliza e participa das decisões, com reuniões periódicas e documentação disponível."],
      ["O que entra no compliance condominial?", "Regularidade documental, trabalhista, fiscal e de manutenções obrigatórias, além de decisões registradas e rastreáveis."],
    ],
    r: ["/compliance-condominial", "/valorizacao-patrimonial-condominio", "/planejamento-plurianual-condominio", "/seguranca-patrimonial-condominio", "/relacao-sindico-profissional-e-conselho"],
    nb: ["/sindico-profissional-vila-romana", "/sindico-profissional-lapa", "/sindico-profissional-vila-leopoldina", "/sindico-profissional-alto-de-pinheiros", "/sindico-profissional-pompeia"],
    cta: "Converse sobre o seu condomínio no Alto da Lapa",
  }),
  loc({
    id: "sindico-profissional-alto-de-pinheiros", n: "Alto de Pinheiros", c: SP, g: SP,
    t: "Síndico Profissional em Alto de Pinheiros",
    d: "Gestão condominial em Alto de Pinheiros com foco em segurança patrimonial, discrição, governança e manutenção planejada.",
    h: "Gestão condominial em Alto de Pinheiros com foco em segurança e governança",
    l: "Em Alto de Pinheiros, Ricardo Princiotto oferece sindicatura profissional com atenção especial à segurança patrimonial, à governança e à manutenção — temas centrais em um bairro residencial, arborizado e de baixa densidade.",
    s: [
      ["Baixa densidade, alta exigência", [
        "Alto de Pinheiros é um dos bairros mais residenciais da Zona Oeste, com muitas casas, ruas tranquilas e edifícios em menor número. Nos condomínios da região, segurança, privacidade e conservação são prioridades, e os moradores esperam uma gestão discreta e eficiente.",
      ]],
      ["Onde a gestão faz diferença", [], [
        "Procedimentos de portaria e controle de acesso bem definidos",
        "Conservação de áreas verdes e estruturas",
        "Contratos de segurança e manutenção com escopo claro",
        "Decisões de investimento justificadas e documentadas",
      ]],
      ["A atuação de Ricardo", [
        "Como especialista em segurança patrimonial e pessoal, Ricardo avalia rotinas, equipamentos e procedimentos de acesso junto ao conselho, sem substituir empresas de segurança — o papel dele é gerir, contratar bem e fiscalizar.",
        "A manutenção é planejada e a prestação de contas, auditável, para que cada decisão tenha registro e justificativa.",
      ]],
    ],
    f: [
      ["Ricardo é uma empresa de segurança?", "Não. Ele atua como síndico e gestor, com especialização em segurança patrimonial, contratando e fiscalizando os prestadores adequados."],
      ["A gestão de Alto de Pinheiros é presencial?", "Sim. Alto de Pinheiros é uma região prioritária, com presença frequente no condomínio."],
      ["Condomínios menores também podem contratar síndico profissional?", "Sim. O escopo e a frequência de visitas são ajustados ao porte e às necessidades do condomínio."],
      ["Como ficam registradas as decisões?", "Em atas, relatórios e comunicados formais, disponíveis ao conselho e aos condôminos."],
    ],
    r: ["/seguranca-patrimonial-condominio", "/governanca-condominial", "/manutencao-preventiva-condominial", "/gestao-de-contratos-do-condominio"],
    nb: ["/sindico-profissional-alto-da-lapa", "/sindico-profissional-vila-leopoldina", "/sindico-profissional-pinheiros", "/sindico-profissional-vila-sao-francisco", "/sindico-profissional-vila-madalena"],
    cta: "Converse sobre o seu condomínio em Alto de Pinheiros",
  }),
  loc({
    id: "sindico-profissional-vila-leopoldina", n: "Vila Leopoldina", c: SP, g: SP,
    t: "Síndico Profissional na Vila Leopoldina",
    d: "Gestão executiva para condomínios da Vila Leopoldina: implantação, condomínios-clube, contratos, equipes e prestação de contas.",
    h: "Gestão executiva de condomínios na Vila Leopoldina",
    l: "Ricardo Princiotto atende condomínios da Vila Leopoldina com uma gestão executiva preparada para empreendimentos novos, torres com muita área de lazer e operações que exigem controle de contratos, equipes e caixa.",
    s: [
      ["De área industrial a bairro de grandes condomínios", [
        "A Vila Leopoldina passou por forte transformação: antigos galpões deram lugar a empreendimentos residenciais de grande porte, muitos com estrutura de lazer completa. Isso cria condomínios com operação complexa — várias equipes, muitos contratos e uma comunidade de moradores grande e diversa.",
      ]],
      ["Desafios comuns na região", [], [
        "Implantação da gestão em empreendimentos recém-entregues",
        "Custos elevados de operação de áreas de lazer",
        "Gestão de equipes próprias e terceirizadas",
        "Acompanhamento de garantias e pendências da construtora",
        "Comunicação com um número grande de unidades",
      ]],
      ["Como Ricardo conduz a operação", [
        "A sindicatura organiza contratos, define indicadores para prestadores e equipes e cria uma rotina financeira com previsão de despesas. Em condomínios novos, inclui a estruturação de processos desde o início e o acompanhamento das pendências de entrega.",
        "A experiência de Ricardo com condomínios-clube — incluindo a recuperação do caixa de um condomínio desse perfil — ajuda a equilibrar padrão de lazer e saúde financeira.",
      ]],
    ],
    f: [
      ["Ricardo atende condomínios recém-entregues na Vila Leopoldina?", "Sim. A implantação da gestão em empreendimentos novos é um dos focos de atuação na região."],
      ["Como controlar os custos das áreas de lazer?", "Com revisão de contratos, indicadores de consumo e manutenção preventiva dos equipamentos, avaliando cada gasto com o conselho."],
      ["O síndico profissional acompanha pendências da construtora?", "Sim. As pendências e garantias são registradas, cobradas formalmente e acompanhadas com o apoio técnico necessário."],
      ["A Vila Leopoldina é atendida presencialmente?", "Sim. É uma das regiões prioritárias, com presença frequente no condomínio."],
    ],
    r: ["/implantacao-de-condominio", "/sindico-para-condominio-clube", "/gestao-de-prestadores-e-equipes", "/sindico-para-condominio-operacao-complexa", "/gestao-de-contratos-do-condominio"],
    nb: ["/sindico-profissional-alto-da-lapa", "/sindico-profissional-alto-de-pinheiros", "/sindico-profissional-lapa", "/sindico-profissional-vila-romana"],
    cta: "Converse sobre o seu condomínio na Vila Leopoldina",
  }),
  loc({
    id: "sindico-profissional-perdizes", n: "Perdizes", c: SP, g: SP,
    t: "Síndico Profissional em Perdizes",
    d: "Sindicatura para prédios de Perdizes: manutenção de edifícios verticais, obras, assembleias e prestação de contas clara.",
    h: "Síndico profissional para os prédios de Perdizes",
    l: "Em Perdizes, um dos bairros mais verticalizados da Zona Oeste, Ricardo Princiotto oferece sindicatura profissional para edifícios que precisam de manutenção bem planejada, obras conduzidas com critério e assembleias objetivas.",
    s: [
      ["Edifícios de várias gerações", [
        "Perdizes reúne grande quantidade de prédios residenciais, muitos construídos há décadas e outros recém-lançados, em ruas com relevo acentuado. Os edifícios mais antigos convivem com demandas de elevadores, impermeabilização, fachadas e instalações; os novos, com garantias e implantação de rotinas.",
      ]],
      ["Pontos de atenção", [], [
        "Modernização de elevadores e instalações elétricas e hidráulicas",
        "Obras de fachada que exigem planejamento e aprovação em assembleia",
        "Fundo de obras insuficiente para o ciclo de manutenção do prédio",
        "Assembleias longas e pouco conclusivas",
      ]],
      ["A forma de trabalhar", [
        "Ricardo organiza um planejamento plurianual de manutenção, prepara assembleias com pauta, orçamentos e alternativas, e acompanha obras com cronograma e prestação de contas específica. A experiência com obras e modernização ajuda a evitar improvisos.",
      ]],
    ],
    f: [
      ["Como planejar as obras de um prédio antigo em Perdizes?", "Com levantamento técnico, priorização por risco e custo e um cronograma plurianual alinhado à capacidade do fundo de obras."],
      ["O síndico profissional acompanha a obra?", "Sim. O acompanhamento inclui cronograma, medições, prestação de contas da obra e comunicação com os moradores."],
      ["Como tornar as assembleias mais produtivas?", "Com pauta clara, documentos enviados com antecedência e propostas comparadas para deliberação."],
      ["Perdizes faz parte das regiões atendidas?", "Sim. Perdizes é uma das regiões prioritárias da Zona Oeste."],
    ],
    r: ["/modernizacao-de-condominio", "/planejamento-plurianual-condominio", "/conducao-de-assembleias", "/sindico-para-condominio-antigo"],
    nb: ["/sindico-profissional-pompeia", "/sindico-profissional-sumare", "/sindico-profissional-higienopolis", "/sindico-profissional-barra-funda"],
    cta: "Converse sobre o seu prédio em Perdizes",
  }),
  loc({
    id: "sindico-profissional-pompeia", n: "Pompéia", c: SP, g: SP,
    t: "Síndico Profissional na Pompéia",
    d: "Gestão condominial na Pompéia: controle de acesso em dias de grande movimento, contratos, manutenção e comunicação com moradores.",
    h: "Gestão condominial na Pompéia com controle e presença",
    l: "Ricardo Princiotto atende condomínios da Pompéia com uma sindicatura presente, preparada para lidar com o movimento do bairro, a renovação dos edifícios e a necessidade de comunicação clara com os moradores.",
    s: [
      ["Bairro tradicional em renovação", [
        "A Pompéia combina vilas e edifícios tradicionais com uma onda de lançamentos residenciais. O bairro também recebe grande movimento em dias de eventos na região, o que exige procedimentos de portaria e acesso bem definidos para os condomínios do entorno.",
      ]],
      ["Desafios observados", [], [
        "Procedimentos de acesso em dias de grande fluxo no entorno",
        "Integração entre moradores antigos e novos",
        "Manutenção de edifícios com padrões construtivos diferentes",
        "Contratos de serviço que precisam de revisão",
      ]],
      ["Como Ricardo atua", [
        "A sindicatura define protocolos de portaria, revisa contratos e organiza a manutenção. A comunicação formal com moradores — comunicados, regras e canais oficiais — ajuda a integrar quem acabou de chegar e quem vive há anos no condomínio.",
      ]],
    ],
    f: [
      ["Como lidar com o movimento do bairro em dias de evento?", "Com protocolos específicos de portaria e controle de acesso, comunicados prévios aos moradores e orientação da equipe."],
      ["A gestão na Pompéia é presencial?", "Sim. A Pompéia é região prioritária, com presença frequente no condomínio."],
      ["O síndico revisa os contratos existentes?", "Sim. A revisão de contratos é um dos primeiros passos, buscando escopo adequado e condições justas."],
      ["Como integrar novos moradores?", "Com comunicação clara das regras, canais oficiais e transparência nas decisões do condomínio."],
    ],
    r: ["/seguranca-patrimonial-condominio", "/comunicacao-com-condominos", "/gestao-de-contratos-do-condominio", "/manutencao-preventiva-condominial"],
    nb: ["/sindico-profissional-perdizes", "/sindico-profissional-vila-romana", "/sindico-profissional-sumare", "/sindico-profissional-barra-funda"],
    cta: "Converse sobre o seu condomínio na Pompéia",
  }),
  loc({
    id: "sindico-profissional-sumare", n: "Sumaré", c: SP, g: SP,
    t: "Síndico Profissional no Sumaré",
    d: "Sindicatura profissional para condomínios do Sumaré: manutenção em terrenos de encosta, segurança, contas auditáveis e relação com conselho.",
    h: "Síndico para condomínios do Sumaré com gestão técnica e transparente",
    l: "No Sumaré, Ricardo Princiotto oferece uma sindicatura que alia acompanhamento técnico da manutenção, segurança patrimonial e prestação de contas auditável para edifícios residenciais em uma região de relevo marcante.",
    s: [
      ["Características que afetam a gestão", [
        "O Sumaré é uma região residencial e arborizada, com edifícios distribuídos em ruas de relevo acentuado. Terrenos em declive e áreas verdes trazem atenção especial a drenagem, contenções, impermeabilização e conservação de estruturas.",
      ]],
      ["Desafios dos condomínios", [], [
        "Drenagem, contenções e impermeabilização",
        "Manutenção de garagens e áreas em subsolo",
        "Segurança de acessos em ruas mais tranquilas",
        "Conselho que pede justificativa técnica para os gastos",
      ]],
      ["Atuação de Ricardo", [
        "A manutenção é organizada de forma preventiva e preditiva, com laudos e orçamentos quando necessários. Cada investimento é apresentado ao conselho com fundamentação e registrado na prestação de contas.",
      ]],
    ],
    f: [
      ["O síndico profissional cuida de problemas de infiltração e drenagem?", "Ele coordena diagnóstico, orçamentos e execução com empresas especializadas, acompanhando a obra e a prestação de contas."],
      ["O que é manutenção preditiva?", "É o acompanhamento de sinais de desgaste para agir antes da falha, reduzindo intervenções emergenciais."],
      ["O Sumaré é atendido?", "Sim. O Sumaré integra as regiões prioritárias da Zona Oeste."],
      ["Como o conselho acompanha os gastos?", "Com relatórios mensais, documentos de suporte e reuniões periódicas com o síndico."],
    ],
    r: ["/manutencao-preventiva-condominial", "/seguranca-patrimonial-condominio", "/prestacao-de-contas-condominial", "/relacao-sindico-profissional-e-conselho"],
    nb: ["/sindico-profissional-perdizes", "/sindico-profissional-pompeia", "/sindico-profissional-vila-madalena", "/sindico-profissional-pinheiros"],
    cta: "Converse sobre o seu condomínio no Sumaré",
  }),
  loc({
    id: "sindico-profissional-vila-madalena", n: "Vila Madalena", c: SP, g: SP,
    t: "Síndico Profissional na Vila Madalena",
    d: "Gestão condominial na Vila Madalena: convivência, regras de uso, unidades compactas, controle de acesso e mediação de conflitos.",
    h: "Gestão de condomínios na Vila Madalena: convivência, regras e controle",
    l: "Ricardo Princiotto atende condomínios da Vila Madalena com foco em convivência, regras de uso bem aplicadas e controle de acesso — pontos sensíveis em um bairro de vida noturna, comércio e novos edifícios de unidades compactas.",
    s: [
      ["Um bairro de uso intenso", [
        "A Vila Madalena mistura moradias, bares, restaurantes, ateliês e escritórios. Nos últimos anos, recebeu edifícios com unidades compactas e perfil de moradores variado, incluindo locações de curta duração em alguns casos. Isso torna regras claras de convivência e acesso indispensáveis.",
      ]],
      ["Desafios mais comuns", [], [
        "Ruído e conflitos de convivência",
        "Alta rotatividade de moradores e visitantes",
        "Regras de uso de áreas comuns e de locação",
        "Controle de acesso em ruas movimentadas à noite",
      ]],
      ["Como a gestão funciona", [
        "Ricardo trabalha com regimento interno atualizado, comunicação objetiva e mediação de conflitos antes da aplicação de penalidades. A portaria recebe procedimentos claros, e as decisões são registradas para dar segurança ao condomínio.",
      ]],
    ],
    f: [
      ["O síndico profissional ajuda a atualizar o regimento interno?", "Sim. Ele conduz a proposta de atualização com o conselho e leva para deliberação em assembleia, com apoio jurídico contratado quando necessário."],
      ["Como lidar com reclamações de barulho?", "Com mediação, registro das ocorrências e aplicação gradual das regras previstas no regimento."],
      ["A Vila Madalena é atendida presencialmente?", "Sim. É uma das regiões prioritárias da Zona Oeste."],
      ["Como controlar o acesso com alta rotatividade?", "Com cadastro, procedimentos de portaria e regras claras para visitantes e prestadores."],
    ],
    r: ["/mediacao-de-conflitos-condominiais", "/comunicacao-com-condominos", "/seguranca-patrimonial-condominio", "/governanca-condominial"],
    nb: ["/sindico-profissional-pinheiros", "/sindico-profissional-sumare", "/sindico-profissional-alto-de-pinheiros", "/sindico-profissional-pompeia"],
    cta: "Converse sobre o seu condomínio na Vila Madalena",
  }),
  loc({
    id: "sindico-profissional-vila-romana", n: "Vila Romana", c: SP, g: SP,
    t: "Síndico Profissional na Vila Romana",
    d: "Sindicatura profissional para a Vila Romana: implantação em prédios novos, planejamento financeiro e prestação de contas transparente.",
    h: "Síndico profissional na Vila Romana para prédios novos e consolidados",
    l: "Na Vila Romana, Ricardo Princiotto atende tanto edifícios recém-entregues quanto prédios consolidados, com planejamento financeiro, implantação de rotinas e transparência para moradores e conselho.",
    s: [
      ["Lançamentos ao lado de prédios tradicionais", [
        "A Vila Romana é um bairro residencial que recebeu muitos lançamentos nos últimos anos, ao lado de edifícios com décadas de uso. Os condomínios novos precisam estruturar a gestão do zero; os antigos, atualizar contratos, sistemas e planejamento financeiro.",
      ]],
      ["Desafios do bairro", [], [
        "Primeiro orçamento realista após a entrega do prédio",
        "Contratos herdados da fase de implantação",
        "Fundo de reserva e de obras pouco estruturados",
        "Comunicação com moradores que ainda não se conhecem",
      ]],
      ["Como Ricardo atua", [
        "A sindicatura estrutura orçamento, contratos e rotina de manutenção, organiza a prestação de contas mensal e cria canais de comunicação desde o início. Em prédios consolidados, o foco é revisar o que já existe e planejar os próximos anos.",
      ]],
    ],
    f: [
      ["Como montar o primeiro orçamento de um prédio novo?", "Com base em contratos reais, consumo esperado, manutenções obrigatórias e formação de fundo de reserva, revisando após os primeiros meses."],
      ["Ricardo atende prédios antigos na Vila Romana?", "Sim. Prédios consolidados recebem diagnóstico, revisão de contratos e planejamento de manutenção."],
      ["A Vila Romana é atendida presencialmente?", "Sim. É uma das regiões prioritárias da Zona Oeste."],
      ["O que é planejamento plurianual?", "É um plano de vários anos para manutenção, obras e caixa, evitando rateios emergenciais."],
    ],
    r: ["/implantacao-de-condominio", "/planejamento-plurianual-condominio", "/prestacao-de-contas-condominial", "/gestao-de-contratos-do-condominio"],
    nb: ["/sindico-profissional-alto-da-lapa", "/sindico-profissional-lapa", "/sindico-profissional-pompeia", "/sindico-profissional-vila-leopoldina"],
    cta: "Converse sobre o seu condomínio na Vila Romana",
  }),
  loc({
    id: "sindico-profissional-vila-sao-francisco", n: "Vila São Francisco", c: SP, g: SP,
    t: "Síndico Profissional na Vila São Francisco",
    d: "Gestão condominial na Vila São Francisco, divisa com Osasco: segurança patrimonial, manutenção e governança com presença frequente.",
    h: "Gestão condominial na Vila São Francisco com segurança e presença",
    l: "Ricardo Princiotto atende condomínios da Vila São Francisco, na divisa entre São Paulo e Osasco, com uma gestão presencial que prioriza segurança patrimonial, manutenção e governança.",
    s: [
      ["Entre São Paulo e Osasco", [
        "A Vila São Francisco é um bairro residencial na divisa com Osasco, com casas, condomínios e edifícios em ambiente mais tranquilo. A localização facilita a presença frequente do síndico, já que integra o eixo onde Ricardo concentra seu atendimento.",
      ]],
      ["Desafios mais frequentes", [], [
        "Segurança perimetral e controle de acesso",
        "Conservação de áreas comuns e jardins",
        "Contratos de manutenção com pouca fiscalização",
        "Decisões de investimento sem planejamento de longo prazo",
      ]],
      ["Como Ricardo atua", [
        "A gestão começa por um diagnóstico de segurança, contratos e manutenção. Com o conselho, Ricardo define prioridades e acompanha a execução com relatórios e visitas frequentes.",
      ]],
    ],
    f: [
      ["A Vila São Francisco é atendida presencialmente?", "Sim. É região prioritária, próxima ao eixo de Osasco onde o atendimento é concentrado."],
      ["Como melhorar a segurança do condomínio?", "Com diagnóstico de acessos e procedimentos, contratação adequada de prestadores e fiscalização contínua."],
      ["O síndico profissional substitui o conselho?", "Não. O conselho mantém seu papel de acompanhamento e fiscalização."],
      ["Há honorário extra em assembleias?", "Não. Assembleias ordinárias e extraordinárias estão incluídas."],
    ],
    r: ["/seguranca-patrimonial-condominio", "/manutencao-preventiva-condominial", "/governanca-condominial", "/gestao-de-contratos-do-condominio"],
    nb: ["/sindico-profissional-vila-yara", "/sindico-profissional-alto-de-pinheiros", "/sindico-profissional-butanta", "/sindico-profissional-km-18"],
    cta: "Converse sobre o seu condomínio na Vila São Francisco",
  }),
  loc({
    id: "sindico-profissional-itaim-bibi", n: "Itaim Bibi", c: SP, g: SP,
    t: "Síndico Profissional no Itaim Bibi",
    d: "Sindicatura profissional no Itaim Bibi: governança, compliance, contratos e prestação de contas para condomínios de operação exigente.",
    h: "Sindicatura profissional no Itaim Bibi com governança e compliance",
    l: "No Itaim Bibi, Ricardo Princiotto oferece sindicatura com governança, compliance e prestação de contas auditável para condomínios residenciais em uma região de alta densidade corporativa e moradores exigentes.",
    s: [
      ["Residencial no coração corporativo", [
        "O Itaim Bibi concentra escritórios, restaurantes e edifícios residenciais modernos. Moradores costumam ter rotina intensa e pouco tempo para acompanhar o condomínio, o que valoriza uma gestão autônoma, documentada e fácil de fiscalizar.",
      ]],
      ["Desafios dos condomínios", [], [
        "Contratos de alto valor que exigem negociação técnica",
        "Expectativa de respostas rápidas e comunicação objetiva",
        "Conformidade trabalhista, fiscal e documental",
        "Controle de acesso com muitos prestadores e entregas",
      ]],
      ["A atuação de Ricardo", [
        "Ricardo estrutura governança com rotina de reuniões, relatórios auditáveis e decisões registradas. A experiência com renegociação de contratos e o cuidado com compliance dão ao conselho segurança para acompanhar a gestão mesmo com pouco tempo disponível.",
      ]],
    ],
    f: [
      ["Ricardo atende condomínios de alto padrão no Itaim Bibi?", "Sim, Ricardo atende condomínios de alto padrão, com escopo de gestão adequado ao nível de exigência dos moradores."],
      ["Como o conselho acompanha a gestão com pouco tempo?", "Com relatórios mensais objetivos, reuniões programadas e documentos disponíveis para consulta."],
      ["O síndico renegocia contratos existentes?", "Sim. A revisão e renegociação de contratos fazem parte da sindicatura."],
      ["O Itaim Bibi é região prioritária?", "Sim. Itaim Bibi e Vila Olímpia são as regiões prioritárias da Zona Sul."],
    ],
    r: ["/compliance-condominial", "/governanca-condominial", "/gestao-de-contratos-do-condominio", "/sindico-para-condominio-alto-padrao"],
    nb: ["/sindico-profissional-vila-olimpia", "/sindico-profissional-vila-nova-conceicao", "/sindico-profissional-jardim-europa", "/sindico-profissional-pinheiros"],
    cta: "Converse sobre o seu condomínio no Itaim Bibi",
  }),
  loc({
    id: "sindico-profissional-vila-olimpia", n: "Vila Olímpia", c: SP, g: SP,
    t: "Síndico Profissional na Vila Olímpia",
    d: "Gestão condominial na Vila Olímpia: torres residenciais, unidades compactas, contratos, equipes e comunicação digital organizada.",
    h: "Gestão condominial para torres residenciais na Vila Olímpia",
    l: "Ricardo Princiotto atende condomínios da Vila Olímpia com gestão de contratos, equipes e comunicação, adequada a torres residenciais modernas, unidades compactas e moradores com rotina corporativa.",
    s: [
      ["Torres modernas e rotina acelerada", [
        "A Vila Olímpia é marcada por edifícios corporativos e torres residenciais recentes, muitas com unidades compactas e serviços compartilhados. O perfil de moradores inclui profissionais com rotina intensa e, em alguns casos, unidades destinadas à locação.",
      ]],
      ["Desafios da região", [], [
        "Rotatividade de moradores e regras de locação",
        "Serviços compartilhados com custo de operação elevado",
        "Gestão de entregas e controle de acesso",
        "Comunicação rápida e registrada",
      ]],
      ["Como Ricardo atua", [
        "A sindicatura define regras de uso, organiza contratos e equipes e cria canais oficiais de comunicação. O acompanhamento financeiro mensal permite equilibrar a oferta de serviços com o custo condominial.",
      ]],
    ],
    f: [
      ["Como lidar com unidades de locação no condomínio?", "Com regras claras no regimento, cadastro de ocupantes e procedimentos de portaria, sempre respeitando a convenção."],
      ["Ricardo atende a Vila Olímpia presencialmente?", "Sim. A Vila Olímpia é região prioritária da Zona Sul."],
      ["Como equilibrar serviços e custo condominial?", "Avaliando contratos, uso real dos serviços e alternativas, com decisões aprovadas pelo conselho e pela assembleia."],
      ["Existe comunicação digital com os moradores?", "Sim, com canais oficiais definidos e comunicados formais registrados."],
    ],
    r: ["/gestao-de-prestadores-e-equipes", "/comunicacao-com-condominos", "/gestao-de-contratos-do-condominio", "/sindico-para-condominio-multiplas-torres"],
    nb: ["/sindico-profissional-itaim-bibi", "/sindico-profissional-vila-nova-conceicao", "/sindico-profissional-brooklin", "/sindico-profissional-moema"],
    cta: "Converse sobre o seu condomínio na Vila Olímpia",
  }),
  loc({
    id: "sindico-profissional-centro-de-barueri", n: "Centro de Barueri", c: "Barueri", g: "Barueri",
    t: "Síndico Profissional no Centro de Barueri",
    d: "Sindicatura para condomínios do Centro de Barueri: organização financeira, inadimplência, manutenção e legalização.",
    h: "Gestão profissional para condomínios do Centro de Barueri",
    l: "No Centro de Barueri, Ricardo Princiotto oferece sindicatura profissional voltada a organização financeira, redução da inadimplência e regularização, para condomínios em uma área urbana consolidada e de comércio ativo.",
    s: [
      ["O centro urbano de Barueri", [
        "O Centro de Barueri reúne comércio, serviços públicos e acesso ao transporte, com edifícios residenciais de diferentes idades. É um contexto diferente de Alphaville e Tamboré: condomínios menores ou médios, muitas vezes com orçamento mais apertado e necessidade de organização básica.",
      ]],
      ["Desafios mais comuns", [], [
        "Inadimplência pressionando o caixa",
        "Documentação e regularizações pendentes",
        "Manutenção adiada por falta de recursos",
        "Prestação de contas pouco detalhada",
      ]],
      ["Como Ricardo atua", [
        "A sindicatura organiza cobrança, renegocia contratos, prioriza manutenções e estrutura a prestação de contas. A experiência com recuperação financeira ajuda a reconstruir o caixa de forma gradual e sustentável, sem promessas irreais.",
      ]],
    ],
    f: [
      ["Condomínios menores do Centro de Barueri podem ter síndico profissional?", "Sim. O escopo é ajustado ao porte e ao orçamento de cada condomínio."],
      ["Como reduzir a inadimplência?", "Com régua de cobrança, negociação formal e acompanhamento mensal junto à administradora e ao jurídico contratado."],
      ["O condomínio precisa estar regularizado?", "A regularização é recomendada e pode ser conduzida pelo síndico com apoio técnico e jurídico."],
      ["O Centro de Barueri é região prioritária?", "Sim. Barueri, Centro de Barueri, Alphaville e Tamboré são prioritários."],
    ],
    r: ["/gestao-de-inadimplencia-condominial", "/recuperacao-financeira-de-condominio", "/legalizacao-de-condominio", "/prestacao-de-contas-condominial"],
    nb: ["/sindico-profissional-barueri", "/sindico-profissional-alphaville", "/sindico-profissional-tambore", "/sindico-profissional-aldeia-da-serra"],
    cta: "Converse sobre o seu condomínio no Centro de Barueri",
  }),
  loc({
    id: "sindico-profissional-tambore", n: "Tamboré", c: "Barueri", g: "Barueri",
    t: "Síndico Profissional em Tamboré",
    d: "Gestão condominial em Tamboré: residenciais e torres com segurança patrimonial, áreas comuns extensas e governança estruturada.",
    h: "Síndico profissional em Tamboré para residenciais e torres",
    l: "Ricardo Princiotto atende condomínios de Tamboré com gestão de segurança patrimonial, manutenção de áreas comuns extensas e governança estruturada, adequada a residenciais e edifícios de padrão elevado.",
    s: [
      ["Residenciais planejados e torres", [
        "Tamboré reúne loteamentos residenciais planejados, condomínios de casas e torres residenciais, próximo a Alphaville e a importantes eixos viários. As áreas comuns costumam ser amplas — vias internas, portarias, áreas verdes e lazer — e a segurança é critério central para os moradores.",
      ]],
      ["Desafios do perfil", [], [
        "Segurança perimetral e portarias com alto fluxo",
        "Manutenção de vias internas, áreas verdes e lazer",
        "Contratos de grande valor com prestadores",
        "Governança com associações e conselhos atuantes",
      ]],
      ["Como Ricardo atua", [
        "Com especialização em segurança patrimonial, Ricardo avalia procedimentos, equipamentos e contratos de portaria e segurança. A manutenção é planejada, e a governança segue rotina de reuniões, relatórios e decisões registradas.",
        "Ricardo atende condomínios horizontais e de alto padrão em Tamboré, sem apresentar esses segmentos como histórico comprovado.",
      ]],
    ],
    f: [
      ["Ricardo atende condomínios de casas em Tamboré?", "Sim, Ricardo atende condomínios horizontais, com gestão adaptada a vias internas, perímetros e áreas comuns extensas."],
      ["Como é tratada a segurança?", "Como gestão de segurança patrimonial: diagnóstico, procedimentos, contratação e fiscalização dos prestadores."],
      ["Tamboré é região prioritária?", "Sim. Tamboré integra as regiões prioritárias de Barueri."],
      ["O síndico trabalha com a associação de moradores?", "Sim, quando existir, mantendo papéis claros entre a associação e o condomínio."],
    ],
    r: ["/seguranca-patrimonial-condominio", "/sindico-para-condominio-horizontal", "/sindico-para-condominio-alto-padrao", "/governanca-condominial", "/manutencao-preventiva-condominial"],
    nb: ["/sindico-profissional-alphaville", "/sindico-profissional-barueri", "/sindico-profissional-centro-de-barueri", "/sindico-profissional-aldeia-da-serra", "/sindico-profissional-santana-de-parnaiba"],
    cta: "Converse sobre o seu condomínio em Tamboré",
  }),
  loc({
    id: "sindico-profissional-centro-de-santana-de-parnaiba", n: "Centro de Santana de Parnaíba", c: "Santana de Parnaíba", g: "Santana de Parnaíba",
    t: "Síndico Profissional no Centro de Santana de Parnaíba",
    d: "Gestão condominial no Centro de Santana de Parnaíba: conservação, regularização, contratos e convivência em área de centro histórico.",
    h: "Sindicatura para condomínios no Centro de Santana de Parnaíba",
    l: "Ricardo Princiotto atende condomínios no Centro de Santana de Parnaíba com uma gestão atenta à conservação, à regularização e à convivência, em uma região de centro histórico e ocupação mais baixa.",
    s: [
      ["Um centro com identidade própria", [
        "O Centro de Santana de Parnaíba preserva um conjunto histórico e tem ocupação predominantemente baixa, com condomínios de menor porte no entorno. Obras e intervenções costumam exigir mais cuidado com regras e aprovações, e a manutenção tem papel importante na conservação do patrimônio.",
      ]],
      ["Desafios dos condomínios", [], [
        "Regras e aprovações para obras e intervenções",
        "Conservação de edificações e áreas comuns",
        "Regularização documental",
        "Orçamentos de condomínios de menor porte",
      ]],
      ["Como Ricardo atua", [
        "A sindicatura levanta a situação documental, organiza a manutenção e conduz as obras com os responsáveis técnicos e as aprovações necessárias. O orçamento é planejado para caber na realidade de condomínios menores.",
      ]],
    ],
    f: [
      ["Obras no centro histórico exigem cuidados extras?", "Podem exigir. O síndico coordena com responsáveis técnicos para verificar regras e aprovações antes da execução."],
      ["Condomínios pequenos podem ter síndico profissional?", "Sim. O escopo e a frequência de visitas são ajustados ao porte."],
      ["A região é atendida?", "Sim. Santana de Parnaíba e seu centro estão entre as regiões prioritárias."],
      ["O síndico cuida da regularização?", "Ele conduz o levantamento e coordena os profissionais técnicos e jurídicos contratados pelo condomínio."],
    ],
    r: ["/legalizacao-de-condominio", "/manutencao-preventiva-condominial", "/modernizacao-de-condominio", "/sindicatura-profissional"],
    nb: ["/sindico-profissional-santana-de-parnaiba", "/sindico-profissional-fazendinha", "/sindico-profissional-alphaville", "/sindico-profissional-tambore"],
    cta: "Converse sobre o seu condomínio no Centro de Santana de Parnaíba",
  }),
  loc({
    id: "sindico-profissional-granja-viana", n: "Granja Viana", c: "Granja Viana", g: "Grande São Paulo",
    t: "Síndico Profissional na Granja Viana",
    d: "Gestão para condomínios da Granja Viana e Raposo Tavares: residenciais horizontais, áreas verdes, segurança perimetral e governança.",
    h: "Gestão de condomínios na Granja Viana, com atenção à segurança e às áreas verdes",
    l: "Na Granja Viana e no trecho da Raposo Tavares na altura da região, Ricardo Princiotto atende condomínios com áreas verdes extensas, segurança perimetral e necessidade de governança bem estruturada.",
    s: [
      ["Residenciais em meio ao verde", [
        "A Granja Viana é conhecida por condomínios residenciais com muita área verde, ruas internas e casas, além de empreendimentos verticais ao longo da Rodovia Raposo Tavares. Essa configuração traz desafios próprios: perímetros extensos, manutenção de vegetação, drenagem e vias internas.",
      ]],
      ["Desafios mais comuns", [], [
        "Segurança perimetral em áreas extensas",
        "Manutenção de áreas verdes, vias e drenagem",
        "Contratos de jardinagem, portaria e segurança",
        "Regras de convivência e obras nas unidades",
      ]],
      ["Como Ricardo atua", [
        "A gestão combina diagnóstico de segurança patrimonial, plano de manutenção das áreas comuns e revisão de contratos. Obras nas unidades seguem regras claras e acompanhamento. Ricardo atende condomínios horizontais, sem apresentar esse segmento como histórico comprovado.",
      ]],
    ],
    f: [
      ["Ricardo atende condomínios de casas na Granja Viana?", "Sim, Ricardo atende condomínios horizontais, com gestão adaptada a perímetros e áreas comuns extensas."],
      ["A Raposo Tavares na altura da Granja Viana também é atendida?", "Sim. Os condomínios nesse trecho estão incluídos no atendimento da região."],
      ["Como organizar a manutenção de áreas verdes?", "Com plano anual, contrato com escopo definido e fiscalização presencial."],
      ["A Granja Viana é prioritária?", "Sim. Granja Viana está entre as regiões prioritárias da Grande São Paulo."],
    ],
    r: ["/sindico-para-condominio-horizontal", "/seguranca-patrimonial-condominio", "/manutencao-preventiva-condominial", "/gestao-de-contratos-do-condominio"],
    nb: ["/sindico-profissional-parque-dos-principes", "/sindico-profissional-carapicuiba", "/sindico-profissional-km-18", "/sindico-profissional-butanta"],
    cta: "Converse sobre o seu condomínio na Granja Viana",
  }),
];
