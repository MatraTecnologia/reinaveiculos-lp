export const site = {
  name: "Reina Studio Car Detailing",
  shortName: "Reina Studio",
  tagline: "Estética Automotiva Premium",
  description:
    "Proteção, brilho e acabamento no mais alto padrão automotivo. Especialistas em estética premium para quem exige excelência em cada detalhe.",
  url: "https://reinastudio.com.br",
  phoneDisplay: "+55 (43) 99914-0409",
  phoneRaw: "5543999140409",
  email: "contato@reinastudio.com.br",
  instagram: "https://instagram.com/reinastudiocar",
  instagramHandle: "@reinastudiocar",
} as const;

export const whatsappUrl = `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para meu veículo.",
)}`;

export const nav = [
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Galeria", href: "#galeria" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
] as const;

export type Feature = {
  title: string;
  description: string;
  icon: "ShieldCheck" | "Sparkles" | "FlaskConical";
};

export const features: Feature[] = [
  {
    title: "Atendimento Especializado",
    description:
      "Cada veículo é tratado como único. Diagnóstico técnico e curadoria de processos sob medida.",
    icon: "ShieldCheck",
  },
  {
    title: "Acabamento Premium",
    description:
      "Padrão de concours. Camadas controladas, profundidade de cor e brilho líquido em cada superfície.",
    icon: "Sparkles",
  },
  {
    title: "Produtos de Alta Performance",
    description:
      "Linhas profissionais e tecnologias certificadas que protegem e valorizam o seu patrimônio.",
    icon: "FlaskConical",
  },
];

export type Service = {
  id: string;
  name: string;
  description: string;
  image: string;
  video?: string;
};

export const services: Service[] = [
  {
    id: "ppf",
    name: "PPF — Proteção de Pintura",
    description:
      "Película autorregenerável contra riscos, impactos e desgaste do dia a dia.",
    image: "/service-ppf.jpg",
    video: "/service-ppf.mp4",
  },
  {
    id: "vitrificacao",
    name: "Vitrificação & Polimento",
    description:
      "Correção de pintura e camada cerâmica de alta dureza para brilho profundo e duradouro.",
    image: "/service-polimento.jpg",
    video: "/service-polimento.mp4",
  },
  {
    id: "peliculas",
    name: "Películas & Insulfilm",
    description:
      "Conforto térmico, privacidade e proteção UV com acabamento impecável.",
    image: "/service-peliculas.jpg",
  },
  {
    id: "detalhamento",
    name: "Detalhamento & Higienização",
    description:
      "Renovação completa de interior e motor com técnicas de detailing profundo.",
    image: "/service-detalhamento.jpg",
  },
];

export const serviceTags = [
  "PPF",
  "Películas",
  "Vitrificação",
  "Polimento Técnico",
  "Lavagem Premium",
  "Detalhamento",
  "Envelopamento",
  "Higienização",
] as const;

export const gallery = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
] as const;

export type QuizStep = {
  id: string;
  question: string;
  caption: string;
  options: string[];
};

export const quizSteps: QuizStep[] = [
  {
    id: "veiculo",
    question: "Qual é o seu veículo?",
    caption: "Para entendermos o tratamento ideal.",
    options: [
      "Esportivo / Superesportivo",
      "SUV / Picape premium",
      "Sedã / Hatch",
      "Clássico / Coleção",
    ],
  },
  {
    id: "servico",
    question: "O que você procura?",
    caption: "Selecione o serviço de maior interesse.",
    options: [
      "Proteção de pintura — PPF",
      "Vitrificação & Polimento",
      "Películas & Insulfilm",
      "Detalhamento completo",
    ],
  },
  {
    id: "prioridade",
    question: "Qual a sua prioridade?",
    caption: "O que mais importa para você agora.",
    options: [
      "Proteção máxima",
      "Brilho impecável",
      "Valorizar o veículo",
      "Tirar todas as dúvidas",
    ],
  },
];

export const buildQuizWhatsapp = (answers: Record<string, string>) => {
  const lines = [
    "Olá! Vim pelo site da Reina e gostaria de um orçamento.",
    answers.veiculo ? `• Veículo: ${answers.veiculo}` : null,
    answers.servico ? `• Serviço: ${answers.servico}` : null,
    answers.prioridade ? `• Prioridade: ${answers.prioridade}` : null,
  ]
    .filter(Boolean)
    .join("\n");
  return `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(lines)}`;
};

export const addresses = [
  {
    label: "Unidade Centro",
    line: "Av. Higienópolis, 1200 — Centro",
    city: "Londrina · PR",
  },
  {
    label: "Unidade Gleba",
    line: "Rua das Acácias, 540 — Gleba Palhano",
    city: "Londrina · PR",
  },
] as const;
