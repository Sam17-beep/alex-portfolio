import { useState, useEffect, type ReactNode } from "react"

const MOBILE_BREAKPOINT = "(max-width: 768px)"

function MobileContactPage() {
  return (
    <div className="bg-beige text-charcoal flex min-h-svh flex-col items-center justify-center px-8 text-center">
      <h1 className="font-editorial mb-8 text-4xl italic">Alexane</h1>

      <div className="space-y-4 text-lg">
        <p>
          <a href="mailto:hello@example.com" className="underline">
            hello@example.com
          </a>
        </p>
        <p>
          <a href="tel:+12345678900" className="underline">
            +1 234 567 8900
          </a>
        </p>
      </div>

      <div className="mt-8 flex gap-6 text-lg">
        <a href="#" className="underline">
          Instagram
        </a>
        <a href="#" className="underline">
          LinkedIn
        </a>
        <a href="#" className="underline">
          Behance
        </a>
      </div>
    </div>
  )
}

export default function MobileGate({ children }: { children: ReactNode }) {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia(MOBILE_BREAKPOINT).matches
      : false,
  )

  useEffect(() => {
    const mql = window.matchMedia(MOBILE_BREAKPOINT)
    const onChange = (e: MediaQueryListEvent) => setIsMobile(e.matches)
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  if (isMobile) return <MobileContactPage />
  return <>{children}</>
}
