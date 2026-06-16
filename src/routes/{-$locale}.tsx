import { createFileRoute } from "@tanstack/react-router"
import Marquee from "@/components/ui/marquee"
import ContactSection from "@/components/contact-section"
import SkillsSection from "@/components/skills-section"
import AboutSection from "@/components/about-section"
import CareerSection from "@/components/career-section"
import OfflineSection from "@/components/offline-section"
import ProjectSection from "@/components/project-section"
import "lenis/dist/lenis.css"
import Lenis from "lenis"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { dictionaries, resolveLocale, useI18n } from "@/lib/i18n"

export const Route = createFileRoute("/{-$locale}")({
  component: App,
  head: ({ params }) => {
    const locale = resolveLocale(params.locale)
    const meta = dictionaries[locale].meta

    return {
      meta: [
        {
          name: "description",
          content: meta.description,
        },
        {
          property: "og:description",
          content: meta.description,
        },
        {
          property: "og:image:alt",
          content: meta.imageAlt,
        },
        {
          name: "twitter:description",
          content: meta.twitterDescription,
        },
        {
          name: "twitter:image:alt",
          content: meta.imageAlt,
        },
      ],
    }
  },
})

gsap.registerPlugin(ScrollTrigger)

function App() {
  const { t } = useI18n()

  useGSAP(() => {
    const lenis = new Lenis()

    lenis.on("scroll", ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)
  })

  return (
    <main className="min-h-svh w-full divide-y-4 divide-border overflow-hidden">
      <div id="about" className="px-4 py-8 sm:p-8">
        <AboutSection />
      </div>
      <div className="flex-1">
        <Marquee items={[...t.marquee]} />
      </div>
      <div id="skills">
        <SkillsSection />
      </div>
      <div id="career">
        <CareerSection />
      </div>
      <div id="offline">
        <OfflineSection />
      </div>
      <div id="projects">
        <ProjectSection />
      </div>
      <div id="contact" className="px-4 py-8 sm:p-8">
        <ContactSection />
      </div>
    </main>
  )
}
