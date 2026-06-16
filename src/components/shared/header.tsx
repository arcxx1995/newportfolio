import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Link, useLocation } from "@tanstack/react-router"
import gsap from "gsap"
import { Menu, X } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { buildLocalePath, type Locale, LOCALES, useI18n } from "@/lib/i18n"

const Header = () => {
  const location = useLocation()
  const { locale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const menuRef = useRef<HTMLUListElement>(null)
  const headerRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)
  const localePath = buildLocalePath(locale)
  const activeHash = location.hash.replace(/^#/, "")

  const getLocaleLink = (nextLocale: Locale) => ({
    to: buildLocalePath(nextLocale),
    hash: activeHash,
  })

  const LanguageSwitcher = ({ className }: { className?: string }) => (
    <div
      aria-label={t.header.languageLabel}
      className={cn("flex border-2 border-border bg-off-white", className)}
    >
      {LOCALES.map((item) => (
        <Link
          key={item}
          {...getLocaleLink(item)}
          onClick={() => setOpen(false)}
          className={cn(
            "px-3 py-2 font-manrope text-sm font-black uppercase transition-colors hover:bg-main",
            item === locale && "bg-main"
          )}
        >
          {item}
        </Link>
      ))}
    </div>
  )

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false)
        setOpen(false)
      } else {
        setIsVisible(true)
      }
      
      lastScrollY.current = currentScrollY
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // GSAP animation
  useGSAP(() => {
    if (headerRef.current) {
      if (isVisible) {
        gsap.to(headerRef.current, { y: 0, duration: 0.3, ease: "power2.out" })
      } else {
        gsap.to(headerRef.current, { y: "-100%", duration: 0.3, ease: "power2.out" })
      }
    }

    if (!menuRef.current) return

    if (open) {
      gsap.fromTo(
        menuRef.current,
        { height: 0, opacity: 0 },
        { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" }
      )
    } else {
      gsap.to(menuRef.current, {
        height: 0,
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
      })
    }
  }, [open, isVisible])

  return (
    <header ref={headerRef} className="sticky top-0 z-999 grid w-full place-items-center border-b-4 border-border bg-off-white">
      <div className="container">
        <div className="flex w-full items-center justify-between px-4 py-4 md:px-8">
          {/* Logo */}
          <div className="relative h-8 w-16 sm:h-12 sm:w-24">
            <img src="/logo.png" className="absolute inset-0 -translate-y-2" />
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-4">
              {t.header.nav.map((item) => (
                <li key={item.hash === "" ? "home" : item.hash}>
                  <Link
                    to={localePath}
                    hash={item.hash}
                    className={cn(
                      "border-2 border-transparent bg-transparent px-4 py-2 uppercase shadow-none transition-all hover:border-border hover:bg-main hover:shadow-hover",
                      location.pathname === localePath &&
                        activeHash === item.hash &&
                        "border-border bg-main shadow-shadow"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA (desktop) */}
          <div className="hidden items-center gap-3 md:flex">
            {/* <LanguageSwitcher /> */}
            <Button className="bg-bold-yellow" variant={"reverse"}>
              {t.header.cta}
            </Button>
          </div>

          {/* Mobile Toggle */}
          <Button
            className="md:hidden"
            variant={"neutral"}
            size={"icon"}
            aria-label={t.header.menuLabel}
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="overflow-hidden md:hidden">
          <ul
            ref={menuRef}
            data-open={open}
            className="flex h-0 flex-col gap-3 px-4 data-[open=false]:opacity-0 data-open:pb-4 data-open:opacity-100"
          >
            {t.header.nav.map((item) => (
              <li key={item.hash}>
                <Link
                  to={localePath}
                  hash={item.hash}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-2 border-transparent px-4 py-2 uppercase transition-all hover:border-border hover:bg-main",
                    location.pathname === localePath &&
                      activeHash === item.hash &&
                      "border-border bg-main"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* <LanguageSwitcher className="w-fit" /> */}
            <Button className="w-full bg-bold-yellow" variant={"reverse"}>
              {t.header.cta}
            </Button>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
