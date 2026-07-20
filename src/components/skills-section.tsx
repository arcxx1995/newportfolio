import { Code, Layers2, Wrench } from "lucide-react"
import { Badge } from "./ui/badge"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import HeaderSection from "./shared/header-section"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useI18n } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

const SkillsSection = () => {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      gsap.fromTo(
        sectionRef.current.querySelectorAll(".skill-card"),
        { y: 70, opacity: 0, rotate: -1.5 },
        {
          y: 0,
          opacity: 1,
          rotate: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power3.out",
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

  const skills = [
    {
      label: t.skills.groups[0].label,
      icon: <Code />,
      tone: "bg-sky-blue",
      cardTone: "bg-blue-light",
      items: ["JavaScript", "TypeScript", "Python", "PHP", "SQL"],
    },
    {
      label: t.skills.groups[1].label,
      icon: <Layers2 />,
      tone: "bg-soft-green",
      cardTone: "bg-green-light",
      items: [
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "shadcn/ui",
        "LangChain",
        "LangGraph",
        "Supabase",
      ],
    },
    {
      label: t.skills.groups[2].label,
      icon: <Wrench />,
      tone: "bg-bold-yellow",
      cardTone: "bg-yellow-light",
      items: ["Docker", "Kubernetes", "AWS", "GCP", "Vercel", "Postman"],
    },
  ]
  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-orange-light px-4 py-20 sm:px-8"
    >
      <HeaderSection
        title={t.skills.title}
        subtitle={t.skills.subtitle}
        className="ml-0 mr-auto text-left"
      />

      <div className="relative z-10 grid grid-cols-1 gap-6 md:grid-cols-12">
        {skills.map((skill, index) => (
          <article
            key={skill.label}
            className={cn(
              "skill-card flex flex-col gap-5 border-4 border-border p-4 shadow-shadow",
              skill.cardTone,
              index === 0 && "rotate-[-1.1deg] md:col-span-5",
              index === 1 && "rotate-[0.9deg] md:col-span-4 md:translate-y-10",
              index === 2 && "rotate-[-0.6deg] md:col-span-3 md:-translate-y-4"
            )}
          >
            <div className="flex items-center gap-3 border-b-4 border-border pb-3">
              <div
                className={cn(
                  "grid h-9 w-9 place-items-center border-4 border-border",
                  skill.tone
                )}
              >
                {skill.icon}
              </div>
              <h3 className="text-lg leading-tight font-heading uppercase sm:text-xl">
                {skill.label}
              </h3>
            </div>

            <ul className="grid grid-cols-2 gap-6">
              {skill.items.map((item) => (
                <li key={item} className="skill-chip">
                  <Badge
                    className={cn(
                      "w-full border-[3px] border-border px-3 py-2 text-center font-manrope text-xs font-bold uppercase sm:text-sm",
                      skill.tone
                    )}
                  >
                    {item}
                  </Badge>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
