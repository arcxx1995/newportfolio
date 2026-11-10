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
        period: "Dec 2024 - Aug 2026",
        role: "Software Engineer",
        description: [
          "Built Python pipelines that ingest real-time streams from edge devices and computer-vision models, with PostGIS for geospatial data.",
          "Exposed the data through REST APIs (Flask, FastAPI) and webhooks for customer integrations, and built proofs of concept and demos for prospective customers.",
          "Provisioned AWS infrastructure (EC2, RDS, CloudFront) with Terraform, deployed services in Docker, and diagnosed production issues across code, pipelines, and infrastructure.",
        ],
      },
      {
        period: "Jul 2022 - Dec 2024",
        role: "SDE II",
        description: [
          "Built backend services and APIs that manage customer entitlements, subscriptions, and commercial state, with a focus on API design and data modeling.",
          "Contributed to systems that automate order intake, validation, and fulfillment across channels. Joined design reviews and the on-call rotation for critical issues.",
        ],
      },
      {
        period: "Mar 2020 - Jul 2022",
        role: "Executive Systems Engineer",
        description: [
          "Built backend systems and automation for multi-channel data acquisition, integrating platform APIs.",
          "Built reporting and analytics tooling that integrated Google Analytics, Looker Studio, and platform APIs.",
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
    count: "4 Projects",
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
          "Real-time 1v1 competitive CAT test-prep app — head-to-head battles with live matchmaking and synchronized game state over Supabase Realtime.",
          "LLM-driven at the core: a large language model generates every CAT-style question and passage on demand and adapts difficulty to each player's live performance — the match content itself is model-generated, not a fixed question bank.",
          "LLM coaching loop: after each match the model explains every wrong answer and returns a section-level breakdown (time lost, concepts to drill), turning a head-to-head game into an adaptive study tool.",
          "ELO-based matchmaking and scoring enforced server-side via PostgreSQL security-definer RPCs; national leaderboard, auth, and data model on Supabase; Next.js (App Router) on Vercel.",
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
      {
        role: "Founder & Engineer",
        points: [
          "Three surfaces: a public discovery + checkout app, an organizer console (publish events, track sales), and a codeword-gated door scanner for check-in.",
          "AI discovery: a conversational LLM assistant (\"Elf AI\"), powered by GLM-5.2 via OpenRouter, replaces search and is the landing hero — plain-language queries return event recommendations and set the grid's filters in one turn.",
          "LLM grounding: it chooses only from a per-request numbered catalogue of published events and answers with line numbers; a pure server-side function drops hallucinated or out-of-range picks. No vector store, no cached index.",
          "Commerce + infra: single-transaction PostgreSQL ticket holds (oversell-safe), Google OAuth, Cashfree payments, PDF tickets, ZeptoMail confirmations — Next.js (App Router) on Netlify.",
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
