import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent } from "./ui/card"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useI18n } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

const STATS = [
  { value: 6, decimals: 0, suffix: "+", tone: "bg-soft-orange" },
  { value: 5, decimals: 0, suffix: "+", tone: "bg-coral-pink" },
  { value: 2, decimals: 0, suffix: "+", tone: "bg-soft-green" },
  { value: 10, decimals: 0, suffix: "M+", tone: "bg-bold-yellow" },
] as const

const AboutSection = () => {
  // Re-run the stats animation when the current locale changes.
  const { t, locale } = useI18n() 
  const cardRef = useRef<HTMLDivElement>(null)
  const countRefs = useRef<Array<HTMLSpanElement | null>>([])

  useGSAP(
    () => {
      if (!cardRef.current) return

      // Reset visible values before starting a new animation.
      STATS.forEach((stat, index) => {
        const targetEl = countRefs.current[index]
        if (targetEl) {
          targetEl.textContent = `${(0).toFixed(stat.decimals)}${stat.suffix}`
        }
      })

      // Start the counter animation when the card enters view.
      const trigger = ScrollTrigger.create({
        trigger: cardRef.current,
        start: "top 78%",
        once: true,
        onEnter: () => {
          STATS.forEach((stat, index) => {
            const targetEl = countRefs.current[index]
            if (!targetEl) return

            const state = { value: 0 }
            gsap.to(state, {
              value: stat.value,
              duration: 1.4,
              ease: "power2.out",
              onUpdate: () => {
                targetEl.textContent = `${state.value.toFixed(stat.decimals)}${stat.suffix}`
              },
            })
          })
        },
      })

      // Clean up and refresh ScrollTrigger when dependencies change.
      return () => {
        trigger.kill()
        ScrollTrigger.refresh()
      }
    },
    { dependencies: [locale || t], scope: cardRef } 
  )

  return (
    <Card ref={cardRef} className="w-full bg-sky-blue">
      <CardContent>
        <div className="flex flex-col gap-6 xl:flex-row">
          <div className="flex flex-col gap-6 md:flex-row">
            <div className="relative aspect-3/4 w-full border-4 border-border sm:w-2/3 md:w-1/2 xl:w-[30%]">
              <img
                src="avt2.png"
                alt={t.about.imageAlt}
                className="relative z-10 h-full w-full object-cover"
              />
              <div className="absolute -bottom-2 -left-4 z-50 -rotate-10">
                <Badge className="bg-bold-yellow px-3 py-1 font-manrope text-sm shadow-shadow sm:px-4 sm:py-1.5 sm:text-base">
                  EST 1995
                </Badge>
              </div>
            </div>
            <div className="flex w-full flex-col justify-between gap-4 font-manrope xl:w-3/5">
              <div className="flex flex-col gap-2">
                <h2 className="text-3xl font-bold uppercase sm:text-4xl">
                  Arpan Roy Chowdhury
                </h2>
                <p className="text-base font-semibold text-gray-700 sm:text-xl">
                  arcxx1995@gmail.com
                </p>
                <p className="text-base leading-relaxed font-medium sm:text-lg">
                  {t.about.descriptionStart}{" "}
                  <span className="bg-soft-orange font-bold underline underline-offset-2">
                    {t.about.highlight}
                  </span>{" "}
                  {t.about.descriptionEnd}
                </p>
              </div>
              <div className="flex flex-wrap gap-4 sm:gap-6">
                <Button
                  size={"lg"}
                  className="text-lg font-semibold uppercase"
                  asChild
                >
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t.about.resume}
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-6 xl:flex-row">
            <div className="grid w-full grid-cols-2 gap-4 md:grid-cols-4 sm:gap-6 xl:grid-cols-2">
              {STATS.map((stat, index) => (
                <div
                  key={t.about.stats[index]}
                  className={`flex aspect-square flex-col items-center justify-center gap-1 border-4 border-border px-2 py-3 text-center ${stat.tone}`}
                >
                  <span
                    ref={(el) => {
                      countRefs.current[index] = el
                    }}
                    className="font-manrope text-2xl leading-none font-bold tracking-tight sm:text-4xl lg:text-5xl"
                  >
                    {`${(0).toFixed(stat.decimals)}${stat.suffix}`}
                  </span>
                  <p className="font-manrope text-xs leading-tight font-medium text-balance sm:text-sm lg:text-base">
                    {t.about.stats[index]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AboutSection
