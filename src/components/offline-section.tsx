import {
  Code,
  Plane,
  Footprints,
  Mountain,
  Gamepad2,
  Music,
  Coffee,
} from "lucide-react"
import HeaderSection from "./shared/header-section"
import { cn } from "@/lib/utils"
import { useI18n } from "@/lib/i18n"

const HOBBIES = [
  {
    icon: <Code />,
    className:
      "md:col-span-2 md:row-span-2 shadow-bold-yellow hover:shadow-bold-yellow-hover",
  },
  {
    icon: <Plane />,
    className:
      "md:col-span-2 shadow-sky-blue hover:shadow-sky-blue-hover",
  },
  {
    icon: <Footprints />,
    className: "shadow-soft-green hover:shadow-soft-green-hover",
  },
  {
    icon: <Mountain />,
    className:
      "md:row-span-2 shadow-coral-pink hover:shadow-coral-pink-hover",
  },
  {
    icon: <Gamepad2 />,
    className: "shadow-coral-pink hover:shadow-coral-pink-hover",
  },
  {
    icon: <Music />,
    className:
      "md:col-span-2 shadow-sky-blue hover:shadow-sky-blue-hover",
  },
  {
    icon: <Coffee />,
    className:
      "md:col-span-3 shadow-soft-orange hover:shadow-soft-orange-hover",
  },
]

const OfflineSection = () => {
  const { t } = useI18n()

  return (
    <section className="relative bg-green-light px-4 py-20 sm:px-8">
      <HeaderSection
        title={t.offline.title}
        subtitle={t.offline.subtitle}
        className="mr-0 ml-auto text-right"
      />

      <div className="mt-12 grid auto-rows-[120px] grid-cols-2 gap-4 md:auto-rows-[140px] md:grid-cols-4">
        {HOBBIES.map((hobby, index) => (
          <div
            key={index}
            className={cn(
              `group flex flex-col justify-between border-4 border-border bg-off-white p-4 transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1`,
              hobby.className
            )}
          >
            <div className="text-black">{hobby.icon}</div>

            <h3 className="text-lg font-bold text-black uppercase">
              {t.offline.hobbies[index]}
            </h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default OfflineSection
