import { useEffect } from "react"
import { useParams } from "@tanstack/react-router"

export const LOCALES = ["en", "vi"] as const
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
      "Jack Phat's personal portfolio showcasing projects, skills, and career highlights.",
    twitterDescription:
      "Jack Phat's personal portfolio website showcasing his skills, projects, and career highlights as a software engineer.",
    imageAlt: "Portfolio preview of Jack Phat",
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
    imageAlt: "Portrait of Jack Phat",
    highlight: "hyper-tactile digital experiences",
    descriptionStart: "I build",
    descriptionEnd:
      "that push beyond conventional design. No templates. No boring grids. Just pure, raw frontend architecture crafted to feel as good as it looks. Every interaction is intentional, every detail matters. Working from Vietnam, I collaborate with clients and teams around the world to create bold, memorable products.",
    resume: "View my resume",
    stats: ["experiences", "clients", "projects", "github stars"],
  },
  marquee: [
    "Builder",
    "Analytical",
    "Scalable",
    "Efficient",
    "Innovative",
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
    title: "Career Highlights",
    subtitle: "A Journey of Growth and Impact",
    items: [
      {
        period: "Mar 2025 - Present",
        role: "Full-stack Developer",
        description: [
          "Developed UI from Figma designs using React and CoreUI.",
          "Fetched and synchronized data in the frontend using React Query.",
          "Performed client-side CRUD operations by interacting with PostgreSQL-backed APIs.",
          "Collaborated in developing core product features and improving performance.",
          "Debugged and resolved software defects to improve application stability and user experience.",
          "Improved and refined UI components based on design updates and user feedback.",
        ],
      },
      {
        period: "Aug 2024 - Mar 2025",
        role: "Front-end Developer Intern",
        description: [
          "Participating in discussions with Designer to improve user experience.",
          "Implemented enhancements that improve web functionality and responsiveness.",
          "Developing and maintaining the front-end functionality of websites.",
        ],
      },
      {
        period: "July 2024 - Aug 2025",
        role: "Freelance Front-end Developer",
        description: [
          "Collaborated with clients to understand their requirements and translate them into functional web applications.",
          "Designed and implemented user interfaces using React and Tailwind CSS.",
          "Ensured cross-browser compatibility and optimized web applications for performance and responsiveness.",
        ],
      },
      {
        period: "2021 - 2026",
        role: "University Student",
        description: [
          "Assisted in the development of static marketing pages and learned the fundamentals of semantic HTML and CSS architecture.",
        ],
      },
    ],
  },
  offline: {
    title: "Offline Mode",
    subtitle: "What I do in my free time when I'm not coding?",
    hobbies: [
      "Coding",
      "Traveling",
      "Walking",
      "Hiking",
      "Gaming",
      "Music",
      "Coffee",
    ],
  },
  projects: {
    headingStart: "Gallery of",
    headingAccent: "work",
    count: "5 Projects",
    items: [
      {
        role: "Developer",
        points: [
          "Designed and developed a personal portfolio website using ReactJS and TailwindCSS, showcasing projects and skills with a clean and modern design.",
          "Using neu-brutalism design principles to create a visually appealing and unique user interface.",
          "Implemented responsive design to ensure optimal viewing experience across various devices and screen sizes.",
          "Optimized website performance by implementing lazy loading, code splitting, and efficient asset management.",
        ],
      },
      {
        role: "Full-stack Developer | Team: 6",
        points: [
          "Developed and refactored UI components to improve usability.",
          "Integrated APIs into modules: healthcare service, medicine.",
          "Maintained and optimized existing features by debugging, refactoring, and improving performance.",
          "Built reusable UI components, custom hooks, and utility functions to minimize code duplication.",
          "Developed the Healthcare Management modules following the HL7 FHIR standard.",
        ],
      },
      {
        role: "Full-stack Developer | Team: 6",
        points: [
          "Optimized user flows to reduce friction, improve usability, and increase overall customer satisfaction.",
          "Integrated APIs into modules: pills, questionnaire, conditions.",
          "Contributed to UI reviews and adjustments to enhance visual consistency and usability.",
          "Developed slices, reducers, and actions to handle complex business logic.",
        ],
      },
      {
        role: "Front-end Developer | Team: 2",
        points: [
          "Integrated Apollo Client with Next.js for efficient data fetching and state management.",
          "Optimized loading performance using caching, improving page load speed by 40%.",
          "Developed and configured APIs in Strapi to handle form data from the UI.",
          "Built reusable components to ensure consistency and maintainability.",
          "Created documentation and step-by-step workflows for content management.",
        ],
      },
      {
        role: "Front-end Developer",
        points: [
          "Developed and implemented interactive user interfaces for a cultivation game, enhancing user experience.",
          "Optimized application performance by implementing code-splitting and lazy loading.",
          "Implemented real-time communication using WebSocket to enable interactive boss battles in a multiplayer game.",
        ],
      },
    ],
  },
  contact: {
    headingStart: "Let's build something",
    headingAccent: "loud",
    headingEnd: "together.",
    subtitle: "Currently accepting new projects and creative collaborations.",
    email: "Email Me @ tienphat.ng693@gmail.com",
  },
  footer: {
    scrollTop: "Scroll to top",
    copyright: "Non-conformist curations / all errors intended",
    builtWith: "Built with love from JackPhat",
  },
}

const vi: typeof en = {
  meta: {
    description:
      "Portfolio cá nhân của Jack Phat, giới thiệu dự án, kỹ năng và dấu ấn nghề nghiệp.",
    twitterDescription:
      "Website portfolio cá nhân của Jack Phat, giới thiệu kỹ năng, dự án và hành trình nghề nghiệp của một software engineer.",
    imageAlt: "Ảnh xem trước portfolio của Jack Phat",
  },
  header: {
    nav: [
      { hash: "", label: "Trang chủ" },
      { hash: "about", label: "Giới thiệu" },
      { hash: "projects", label: "Dự án" },
      { hash: "contact", label: "Liên hệ" },
    ],
    cta: "Trao đổi ngay",
    languageLabel: "Ngôn ngữ",
    menuLabel: "Mở menu",
  },
  about: {
    imageAlt: "Chân dung Jack Phat",
    highlight: "những trải nghiệm số giàu tính tương tác",
    descriptionStart: "Tôi xây dựng",
    descriptionEnd:
      "vượt xa những khuôn mẫu thiết kế thông thường. Không sử dụng template có sẵn, không bó buộc trong những bố cục nhàm chán. Mỗi giao diện được tạo ra với sự chỉn chu trong từng chi tiết, mỗi tương tác đều có mục đích rõ ràng. Làm việc từ Việt Nam, tôi hợp tác cùng khách hàng và các đội ngũ trên khắp thế giới để tạo nên những sản phẩm số khác biệt, ấn tượng và đáng nhớ.",
    resume: "Xem hồ sơ",
    stats: ["năm kinh nghiệm", "khách hàng", "dự án", "sao GitHub"],
  },
  marquee: [
    "Kiến tạo",
    "Phân tích",
    "Mở rộng",
    "Hiệu quả",
    "Sáng tạo",
    "Tin cậy",
    "Linh hoạt",
    "Giải quyết vấn đề",
  ],
  skills: {
    title: "Bộ kỹ năng",
    subtitle: "Công cụ và công nghệ",
    groups: [
      { label: "Ngôn ngữ" },
      { label: "Framework & Thư viện" },
      { label: "Công cụ & Nền tảng" },
    ],
  },
  career: {
    title: "Dấu ấn nghề nghiệp",
    subtitle: "Hành trình phát triển và tạo tác động",
    items: [
      {
        period: "03/2025 - Hiện tại",
        role: "Full-stack Developer",
        description: [
          "Phát triển giao diện từ thiết kế Figma bằng React và CoreUI.",
          "Lấy và đồng bộ dữ liệu ở frontend bằng React Query.",
          "Thực hiện các thao tác CRUD phía client thông qua API kết nối PostgreSQL.",
          "Tham gia phát triển tính năng lõi và cải thiện hiệu năng sản phẩm.",
          "Debug và xử lý lỗi phần mềm để tăng độ ổn định và trải nghiệm người dùng.",
          "Cải thiện component UI dựa trên cập nhật thiết kế và phản hồi người dùng.",
        ],
      },
      {
        period: "08/2024 - 03/2025",
        role: "Front-end Developer Intern",
        description: [
          "Tham gia trao đổi với Designer để cải thiện trải nghiệm người dùng.",
          "Triển khai các cải tiến giúp website hoạt động tốt và responsive hơn.",
          "Phát triển và bảo trì chức năng frontend cho các website.",
        ],
      },
      {
        period: "07/2024 - 08/2025",
        role: "Freelance Front-end Developer",
        description: [
          "Làm việc với khách hàng để hiểu yêu cầu và chuyển hóa thành web application thực tế.",
          "Thiết kế và triển khai giao diện bằng React và Tailwind CSS.",
          "Đảm bảo tương thích trình duyệt và tối ưu hiệu năng, responsive cho ứng dụng web.",
        ],
      },
      {
        period: "2021 - 2026",
        role: "Sinh viên đại học",
        description: [
          "Tham gia phát triển các trang marketing tĩnh và học nền tảng về semantic HTML cùng kiến trúc CSS.",
        ],
      },
    ],
  },
  offline: {
    title: "OFFLINE MOD",
    subtitle: "Tôi làm gì khi rảnh và không viết code?",
    hobbies: [
      "Coding",
      "Du lịch",
      "Đi bộ",
      "Leo núi",
      "Chơi game",
      "Âm nhạc",
      "Cà phê",
    ],
  },
  projects: {
    headingStart: "Bộ sưu tập",
    headingAccent: "dự án",
    count: "5 Dự án",
    items: [
      {
        role: "Developer",
        points: [
          "Thiết kế và phát triển website portfolio cá nhân bằng ReactJS và TailwindCSS, giới thiệu dự án và kỹ năng với giao diện sạch, hiện đại.",
          "Ứng dụng tinh thần neu-brutalism để tạo giao diện khác biệt và có sức hút thị giác.",
          "Triển khai responsive design để tối ưu trải nghiệm trên nhiều thiết bị và kích thước màn hình.",
          "Tối ưu hiệu năng website bằng lazy loading, code splitting và quản lý asset hiệu quả.",
        ],
      },
      {
        role: "Full-stack Developer | Team: 6",
        points: [
          "Phát triển và refactor component UI để cải thiện khả năng sử dụng.",
          "Tích hợp API cho các module: dịch vụ y tế, thuốc.",
          "Bảo trì và tối ưu tính năng hiện có thông qua debug, refactor và cải thiện hiệu năng.",
          "Xây dựng component UI, custom hook và utility tái sử dụng để giảm trùng lặp code.",
          "Phát triển các module Healthcare Management theo tiêu chuẩn HL7 FHIR.",
        ],
      },
      {
        role: "Full-stack Developer | Team: 6",
        points: [
          "Tối ưu luồng người dùng để giảm ma sát, cải thiện usability và tăng mức độ hài lòng.",
          "Tích hợp API cho các module: thuốc, bảng câu hỏi, tình trạng sức khỏe.",
          "Đóng góp vào review UI và điều chỉnh để tăng tính nhất quán thị giác và usability.",
          "Phát triển slice, reducer và action để xử lý logic nghiệp vụ phức tạp.",
        ],
      },
      {
        role: "Front-end Developer | Team: 2",
        points: [
          "Tích hợp Apollo Client với Next.js để fetch dữ liệu và quản lý state hiệu quả.",
          "Tối ưu hiệu năng tải trang bằng caching, cải thiện tốc độ load khoảng 40%.",
          "Phát triển và cấu hình API trong Strapi để xử lý dữ liệu form từ UI.",
          "Xây dựng component tái sử dụng để giữ tính nhất quán và dễ bảo trì.",
          "Tạo tài liệu và workflow từng bước cho quản lý nội dung.",
        ],
      },
      {
        role: "Front-end Developer",
        points: [
          "Phát triển giao diện tương tác cho game tu tiên, nâng cao trải nghiệm người dùng.",
          "Tối ưu hiệu năng ứng dụng bằng code-splitting và lazy loading.",
          "Triển khai giao tiếp thời gian thực bằng WebSocket cho các trận boss battle multiplayer.",
        ],
      },
    ],
  },
  contact: {
    headingStart: "Cùng xây một thứ",
    headingAccent: "nổi bật",
    headingEnd: "nhé.",
    subtitle: "Hiện tôi đang nhận dự án mới và các cơ hội cộng tác sáng tạo.",
    email: "Gửi email @ tienphat.ng693@gmail.com",
  },
  footer: {
    scrollTop: "Lên đầu trang",
    copyright: "Tuyển tập không theo khuôn / mọi lỗi đều có chủ ý",
    builtWith: "Được xây dựng bằng tình yêu bởi JackPhat",
  },
}

export const dictionaries = { en, vi } as const

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
