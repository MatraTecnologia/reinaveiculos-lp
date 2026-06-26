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
};

export const services: Service[] = [
  {
    id: "ppf",
    name: "PPF — Proteção de Pintura",
    description:
      "Película de poliuretano autorregenerável contra riscos, impactos e desgaste do dia a dia.",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "vitrificacao",
    name: "Vitrificação & Polimento",
    description:
      "Correção de pintura e camada cerâmica de alta dureza para brilho profundo e proteção duradoura.",
    image:
      "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "peliculas",
    name: "Películas & Insulfilm",
    description:
      "Conforto térmico, privacidade e proteção UV com acabamento impecável e visão cristalina.",
    image:
      "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1400&q=80",
  },
  {
    id: "detalhamento",
    name: "Detalhamento & Higienização",
    description:
      "Renovação completa de interior e motor com técnicas de detailing e higienização profunda.",
    image:
      "https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1400&q=80",
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
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1600&q=80",
] as const;

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
