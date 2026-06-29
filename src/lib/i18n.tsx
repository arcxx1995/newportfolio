import { useEffect } from "react"
import { useParams } from "@tanstack/react-router"

export const LOCALES = ["en"] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = "en"

export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && LOCALES.includes(value as Locale)

export const resolveLocale = (value: unknown): Locale =>
  isLocale(value) ? value : DEFAULT_LOCALE

export const buildLocalePath = (locale: Locale) =>
  locale === DEFAULT_LOCALE ? "/" : `/${locale}`

const en = {
  meta: {
    description:
      "Arpan Roy Chowdhury's portfolio — full-stack and AI-native software engineer building and shipping production applications end-to-end.",
    twitterDescription:
      "Arpan Roy Chowdhury — full-stack & AI-native software engineer. Backend services, frontends, and the AI systems that power them.",
    imageAlt: "Portfolio preview of Arpan Roy Chowdhury",
  },
  header: {
    nav: [
      { hash: "", label: "Home" },
      { hash: "about", label: "About" },
      { hash: "projects", label: "Projects" },
      { hash: "contact", label: "Contact" },
    ],
    cta: "Let's talk",
    languageLabel: "Language",
    menuLabel: "Toggle menu",
  },
  about: {
    imageAlt: "Portrait of Arpan Roy Chowdhury",
    highlight: "production-grade, AI-native software",
    descriptionStart: "I design, build, and ship",
    descriptionEnd:
      "end-to-end — backend services, frontend interfaces, and the AI systems that power them. A forward deployed engineer who embeds with teams, turns ambiguous requirements into working software, and owns delivery from architecture through production. Working from Bengaluru, India with teams around the world.",
    resume: "View my resume",
    stats: ["years experience", "companies", "personal projects", "users reached"],
  },
  marquee: [
    "Builder",
    "AI-Native",
    "Full-Stack",
    "Forward Deployed",
    "Scalable",
    "Reliable",
    "Adaptable",
    "Problem-solver",
  ],
  skills: {
    title: "Skill Stack",
    subtitle: "Tools and Technologies I Work With",
    groups: [
      { label: "Languages" },
      { label: "Frameworks & Libraries" },
      { label: "Tools & Platforms" },
    ],
  },
  career: {
    title: "Work Experience",
    subtitle: "Six Years of Shipping Production Software",
    items: [
      {
        period: "Mar 2026 - Present",
        role: "Forward Deployed Engineer",
        description: [
          "Build and ship AI-native clinical documentation workflows end-to-end — transcription pipelines, LLM-driven structured note generation (SOAP / DAP / BIRP), and the frontend practitioners use daily — in a HIPAA-conscious environment.",
          "Engineer REST API integrations between internal services and healthcare documentation systems, orchestrating multi-step, production-grade workflows.",
          "Design data models and serverless backend logic, and build internal tooling for onboarding, reliability, and scale.",
          "Embed directly with customers to run technical discovery and turn clinical workflows into deployed software.",
        ],
      },
      {
        period: "Dec 2024 - Mar 2026",
        role: "Software Engineer",
        description: [
          "Developed full-stack features for an enterprise AI safety platform — backend APIs for real-time monitoring and risk detection, plus dashboards visualizing computer-vision and IoT data streams.",
          "Built data pipelines processing real-time streams from edge devices and CV models; designed APIs and webhooks connecting edge processing, IoT, and cloud services.",
          "Containerized services with Docker and deployed across cloud environments for enterprise reliability and scale.",
        ],
      },
      {
        period: "Jul 2023 - Dec 2024",
        role: "SDE II",
        description: [
          "Built and maintained backend services and APIs (Node.js / PHP) powering DappRadar's Web3 analytics — indexing on-chain data across multiple blockchains for 1M+ users.",
          "Developed high-throughput pipelines ingesting and normalizing real-time blockchain data, exposed through performant REST APIs and dashboards.",
          "Worked across the stack on data accuracy, reliability, and scale for multi-chain analytics.",
        ],
      },
      {
        period: "Jan 2021 - Jul 2023",
        role: "Application Developer",
        description: [
          "Developed full-stack and native iOS features (Swift, Xcode) for a real-time live-streaming social platform with 10M+ downloads.",
          "Worked with WebRTC for low-latency HD live broadcasts and multi-guest video rooms across web and iOS.",
          "Built engagement, in-app gifting, virtual currency, and content discovery features.",
        ],
      },
      {
        period: "Mar 2020 - Nov 2020",
        role: "Executive Systems Engineer",
        description: [
          "Built systems and automation for multi-channel data acquisition and analytics across digital growth platforms.",
          "Developed reporting tooling integrating Google Analytics, Looker Studio, and platform APIs; automated data and experimentation pipelines.",
        ],
      },
    ],
  },
  offline: {
    title: "Offline Mode",
    subtitle: "What I do in my free time when I'm not coding?",
    hobbies: [
      "Coding",
      "Reading",
      "Walking",
      "Football",
      "Gaming",
      "Music",
      "Coffee",
    ],
  },
  projects: {
    headingStart: "Personal",
    headingAccent: "projects",
    count: "3 Projects",
    items: [
      {
        role: "Founder & Engineer",
        points: [
          "Designed and launched (beta) a sea-themed, serendipity-driven daily anonymous messaging app built around calm, meaningful connection — owned end-to-end from concept through release.",
          "Built auth, data model, and serverless backend on Supabase / PostgreSQL, deployed on Vercel.",
          "Building towards voice snippets, guided onboarding, and WhatsApp notifications via third-party API integration.",
        ],
      },
      {
        role: "Founder & Engineer",
        points: [
          "Building a real-time 1v1 competitive CAT test-prep app — head-to-head battles with live matchmaking and synchronized game state over Supabase Realtime.",
          "Designing ELO-based matchmaking and section-level scoring, with authoritative game logic enforced server-side via PostgreSQL security-definer RPCs.",
          "Implementing a national leaderboard, auth, and data model on Supabase / PostgreSQL; frontend in Next.js (App Router) on Vercel.",
        ],
      },
      {
        role: "Founder & Engineer",
        points: [
          "Building a voice-first daily tarot reading app where seekers record one question, choose card positions, and wait for a real human reader before any cards are revealed.",
          "Designed the no-auth seeker flow: in-memory recording and deck selection, Merchant of Record checkout integrated, session-token access, and sealed server-side card assignment.",
          "Architected Supabase / PostgreSQL storage, RLS, Edge Functions, MoR payment reconciliation, reader queue, Resend notification, and server-side garden state for completed readings.",
        ],
      },
    ],
  },
  contact: {
    headingStart: "Let's build something",
    headingAccent: "ambitious",
    headingEnd: "together.",
    subtitle:
      "Open to forward deployed and full-stack roles, and to building AI-native products end-to-end.",
    email: "Email Me @ arcxx1995@gmail.com",
  },
  footer: {
    scrollTop: "Scroll to top",
    copyright: "Forward deployed / shipped with intent",
    builtWith: "Built by Arpan Roy Chowdhury",
  },
}

export const dictionaries = { en } as const

export type Dictionary = typeof en

export const useI18n = () => {
  const params = useParams({ strict: false }) as { locale?: string }
  const locale = resolveLocale(params.locale)

  return {
    locale,
    t: dictionaries[locale],
  }
}

export const LocaleHtmlLang = () => {
  const { locale } = useI18n()

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  return null
}
