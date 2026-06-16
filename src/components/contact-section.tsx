import { Send, Share2 } from "lucide-react"
import { Button } from "./ui/button"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useI18n } from "@/lib/i18n"

gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const { t } = useI18n()
  const sectionRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!sectionRef.current) return

      gsap.fromTo(
        sectionRef.current.querySelectorAll("[data-contact-reveal]"),
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.16,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 78%",
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
      className="relative overflow-hidden border-4 border-border bg-soft-green p-6 shadow-shadow sm:p-8 md:p-12"
    >
      <div
        data-contact-reveal
        className="absolute right-2 bottom-2 rotate-85 opacity-10 sm:right-6 sm:bottom-3 md:right-10 md:bottom-5"
      >
        <Send className="size-40 sm:size-56 md:size-75 opacity-25" />
      </div>
      <div className="relative z-10 max-w-3xl">
        <h2
          data-contact-reveal
          className="mb-6 text-3xl leading-none font-black tracking-tighter uppercase sm:text-4xl md:text-5xl lg:text-7xl"
        >
          {t.contact.headingStart}{" "}
          <span className="text-soft-orange">{t.contact.headingAccent}</span>{" "}
          {t.contact.headingEnd}
        </h2>
        <p
          data-contact-reveal
          className="mb-8 max-w-2xl text-base font-bold opacity-80 sm:text-lg md:text-2xl"
        >
          {t.contact.subtitle}
        </p>
        <div data-contact-reveal className="flex flex-wrap items-center gap-3 sm:gap-4">
          <a
            className="flex w-full items-center justify-center gap-3 border-2 border-white bg-black px-4 py-3 text-sm font-black text-white uppercase shadow-shadow sm:w-auto sm:justify-start sm:px-6 sm:py-2 sm:text-lg md:px-8 md:text-xl"
            href="mailto:tienphat.ng693@gmail.com"
          >
            {t.contact.email}
          </a>
          <Button
            asChild
            variant="neutral"
            size="icon"
            className="size-12 [&>svg]:size-5 sm:[&>svg]:size-6"
          >
            <a href="#" className="inline-block">
              <Share2 />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
