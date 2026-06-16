import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"
import { useI18n } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    id: 1,
    title: "Portfolio",
    date: "Jan 2025 - Feb 2025",
    tags: ["AstroJS", "TailwindCSS", "Markdown"],
    github: "https://github.com/PhatJack/portfolio-2025",
    website: "https://willam2003.site/",
    color: "hover:bg-blue-light",
    link: "https://willam2003.site/",
  },
  {
    id: 2,
    title: "MedicHIMS",
    date: "Mar 2025 - Present",
    tags: ["NestJS", "Prisma", "ReactJS", "PostgreSQL"],
    color: "hover:bg-pink-light",
    link: "#",
  },
  {
    id: 3,
    title: "MedicPHR",
    date: "Mar 2025 - Present",
    tags: ["React-native", "Redux", "Supabase", "GraphQL"],
    color: "hover:bg-green-light",
    link: "#",
  },
  {
    id: 4,
    title: "Onemedic.vn",
    date: "Mar 2025 - Present",
    tags: ["NextJS 14", "GraphQL", "Strapi CMS"],
    website: "https://onemedic.com/vi",
    color: "hover:bg-yellow-light",
    link: "https://onemedic.com/vi",
  },
  {
    id: 5,
    title: "Tu Tien Game",
    date: "Jul 2024 - Sep 2025",
    tags: ["ReactJS 18", "Django", "Websocket"],
    website: "https://tutien.pro/",
    color: "hover:bg-soft-orange",
    link: "https://tutien.pro/",
  },
]

const ProjectSection = () => {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-project-heading]"),
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
            once: true,
          },
        }
      )

      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-project-item]"),
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.85,
          stagger: 0.14,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        }
      )
    },
    { scope: sectionRef }
  )

  return (
    <section
      ref={sectionRef}
      className="border-y-4 border-border bg-off-white px-4 py-20 font-manrope sm:px-8"
    >
      <div className="w-full">
        <div data-project-heading className="mb-16 flex items-end gap-4">
          <h3 className="text-left text-6xl uppercase sm:whitespace-nowrap md:text-8xl md:leading-[0.75]">
            {t.projects.headingStart}{" "}
            <span className="text-transparent [-webkit-text-stroke:4px_var(--bold-yellow)]">
              {t.projects.headingAccent}
            </span>
          </h3>
          <span className="mb-1 h-1 w-full bg-border sm:inline hidden" />
          <span className="text-lg font-black whitespace-nowrap md:text-xl sm:inline hidden">
            {t.projects.count}
          </span>
        </div>

        <div className="flex flex-col border-t-4 border-r-4 border-border bg-white shadow-shadow">
          {projects.map((project, projectIndex) => {
            const content = t.projects.items[projectIndex]

            return (
            <div
              key={project.id}
              data-project-item
              className={`group relative flex flex-col border-b-4 border-border transition-colors duration-300 ${project.color}`}
            >
              {/* Header Row */}
              <div className="flex cursor-pointer flex-col justify-between p-6 md:p-10 lg:flex-row lg:items-center">
                <div className="flex items-center gap-6 md:gap-12">
                  <span className="text-2xl text-transparent opacity-50 [-webkit-text-stroke:2px_var(--border)] md:text-4xl">
                    0{project.id}
                  </span>
                  <h4 className="text-4xl font-black tracking-tighter uppercase transition-transform duration-500 ease-out sm:text-6xl md:text-7xl lg:group-hover:translate-x-4">
                    {project.title}
                  </h4>
                </div>
                <div className="mt-6 flex flex-wrap justify-start gap-3 opacity-100 transition-opacity duration-300 group-hover:opacity-100 lg:mt-0 lg:opacity-0">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      className="bg-coral-pink px-4 py-1.5 text-sm"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Expandable Accordion Content */}
              <div className="grid transition-[grid-template-rows] duration-500 ease-in-out sm:grid-rows-[0fr] sm:group-hover:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <div className="flex flex-col items-start gap-8 p-6 pt-0 md:p-10 lg:flex-row">
                    <div className="flex max-w-2xl flex-col gap-4">
                      <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-black tracking-tight uppercase md:text-base">
                        <span className="text-foreground">{content.role}</span>
                        <span className="border-border text-foreground/50">
                          {project.date}
                        </span>
                      </div>

                      {(project.github || project.website) && (
                        <div className="mt-2 flex flex-wrap gap-3">
                          {project.github && (
                            <Button
                              asChild
                              variant={"default"}
                              className="bg-soft-orange"
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                              >
                                GitHub
                              </a>
                            </Button>
                          )}
                          {project.website && (
                            <Button
                              variant={"default"}
                              className="bg-bold-yellow"
                              asChild
                            >
                              <a
                                href={project.website}
                                target="_blank"
                                rel="noreferrer"
                              >
                                Website
                              </a>
                            </Button>
                          )}
                        </div>
                      )}

                      {content.points.length > 0 && (
                        <ul className="ml-6 flex list-outside list-disc flex-col gap-1 text-base leading-relaxed text-foreground/80 md:text-lg">
                          {content.points.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Placeholder Image container */}
                    <div className="relative flex h-37 w-full items-center justify-center overflow-hidden border-4 border-border bg-off-white shadow-shadow sm:h-64 md:h-80 lg:flex-1">
                      <div className="bg-jigsaw absolute inset-0"></div>
                      <img
                        src={`/projects/${project.id}.png`}
                        className="absolute inset-0 size-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
