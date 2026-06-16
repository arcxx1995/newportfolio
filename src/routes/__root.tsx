import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import appCss from "../styles.css?url"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import { injectSpeedInsights } from '@vercel/speed-insights';
import { inject } from '@vercel/analytics';
import { LocaleHtmlLang } from "@/lib/i18n"
export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "jackphat.dev",
      },
      {
        property: "og:title",
        content: "jackphat.dev",
      },
      {
        property: "og:image",
        content: "/projects/1.png",
      },
			{
        property: "og:url",
        content: "https://www.willam2003.site",
      },
			{
        property: "og:type",
        content: "website",
      },
      // ✅ Twitter Card
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "jackphat.dev",
      },
      {
        name: "twitter:image",
        content: "/projects/1.png",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&family=Space+Grotesk:wght@300..700&family=Syne:wght@400..800&display=swap",
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
	injectSpeedInsights();
	inject();
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <div className="bg-typography w-full pb-24 sm:pt-6">
          <div className="container mx-auto size-full">
            <div className="relative border-4 border-border bg-off-white shadow-shadow">
              <Header />
              <LocaleHtmlLang />
              {children}
              <Footer />
            </div>
          </div>
        </div>
        <Scripts />
      </body>
    </html>
  )
}
