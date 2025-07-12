"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function BackgroundEffect() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      {resolvedTheme === "dark" && (
        <div
          className="fixed inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120,180,255,0.25), transparent 60%), #000000",
          }}
        />
      )}
    </>
  )
}

export { BackgroundEffect };