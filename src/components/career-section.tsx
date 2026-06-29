import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelineMarker,
  TimelineSpacer,
} from "@/components/ui/timeline"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import HeaderSection from "./shared/header-section"
import { useI18n } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

const careerItems = [
  {
    company: "MENTALYC INC",
    cardClassName: "-rotate-1",
    markerClassName: "bg-bold-yellow",
    variant: "square",
  },
  {
    company: "VIACT.AI",
    cardClassName: "rotate-1",
    markerClassName: "bg-soft-green",
    variant: "circle",
  },
  {
    company: "DAPPRADAR",
    cardClassName: "rotate-1",
    markerClassName: "bg-sky-blue",
    variant: "square",
  },
  {
    company: "HAKUNA",
    cardClassName: "-rotate-2",
    markerClassName: "bg-coral-pink",
    variant: "rhombus",
  },
  {
    company: "ET MEDIA LABS",
    cardClassName: "rotate-1",
    markerClassName: "bg-soft-orange",
    variant: "circle",
  },
] as const

const CareerSection = () => {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      const lineEl = sectionRef.current.querySelector("[data-slot='timeline-line']")
      const itemEls = Array.from(
        sectionRef.current.querySelectorAll<HTMLElement>("[data-career-item]")
      )
      const markerEls = sectionRef.current.querySelectorAll("[data-slot='timeline-marker']")

      if (lineEl) {
        gsap.fromTo(
          lineEl,
          { scaleY: 0, transformOrigin: "top center" },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 78%",
              end: "bottom 35%",
              scrub: true,
            },
          }
        )
      }

      itemEls.forEach((item, index) => {
        const isOdd = (index + 1) % 2 !== 0

        gsap.fromTo(
          item,
          { x: isOdd ? -70 : 70, y: 24, autoAlpha: 0 },
          {
            x: 0,
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 82%",
              once: true,
            },
          }
        )
      })

      gsap.fromTo(
        markerEls,
        { scale: 0, autoAlpha: 0, transformOrigin: "center center" },
        {
          scale: 1,
          autoAlpha: 1,
          duration: 0.45,
          stagger: 0.15,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section ref={sectionRef} className="relative bg-pink-light px-4 py-20 sm:px-8">
      <HeaderSection
        title={t.career.title}
        subtitle={t.career.subtitle}
      />
      <Timeline>
        {careerItems.map((item, itemIndex) => {
          const content = t.career.items[itemIndex]

          return (
          <TimelineItem data-career-item key={`${content.period}-${content.role}`}>
            <TimelineContent>
              <div
                className={`border-4 border-border bg-off-white p-6 font-manrope shadow-shadow ${item.cardClassName}`}
              >
                <div className="mb-2 font-black text-sky-blue">
                  {content.period}
                </div>
                <h3 className="text-2xl font-black uppercase">{content.role}</h3>
                <div className="mb-4 text-lg font-bold">{item.company}</div>
                <ul className="list-disc space-y-2 pl-5 text-sm">
                  {content.description.map((desc, index) => (
                    <li key={index} className="font-medium">
                      {desc}
                    </li>
                  ))}
                </ul>
              </div>
            </TimelineContent>
            <TimelineMarker
              className={item.markerClassName}
              variant={item.variant}
            />
            <TimelineSpacer />
          </TimelineItem>
          )
        })}
      </Timeline>
    </section>
  )
}

export default CareerSection
