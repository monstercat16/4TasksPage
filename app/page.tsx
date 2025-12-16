"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const links = [
    { id: 1, label: "Portfolio", url: "https://portfolio-sigma-self-15.vercel.app/" },
    { id: 2, label: "Dashboard", url: "https://dashboard-eta-eight-19.vercel.app/" },
    { id: 3, label: "Game", url: "https://java-script-platformer-game.vercel.app/" },
    { id: 4, label: "Final", url: "https://v0-fitness-tracker-app-5zo1.vercel.app/" },
  ]

  const [theme, setTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light")
    setTheme(initialTheme)
    document.documentElement.classList.toggle("dark", initialTheme === "dark")
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light"
    setTheme(newTheme)
    localStorage.setItem("theme", newTheme)
    document.documentElement.classList.toggle("dark", newTheme === "dark")
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 p-6 transition-colors duration-500">
      {mounted && (
        <button onClick={toggleTheme} className="fixed top-6 right-6 group z-50" aria-label="Toggle theme">
          <div className="relative bg-white/40 dark:bg-white/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl p-3 shadow-xl shadow-black/5 dark:shadow-black/20 transition-all duration-300 hover:scale-110 hover:bg-white/50 dark:hover:bg-white/15 active:scale-95">
            {/* Sun icon for light mode */}
            <svg
              className={`w-6 h-6 text-amber-500 absolute inset-0 m-auto transition-all duration-500 ${
                theme === "light" ? "rotate-0 opacity-100" : "rotate-90 opacity-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            {/* Moon icon for dark mode */}
            <svg
              className={`w-6 h-6 text-indigo-400 absolute inset-0 m-auto transition-all duration-500 ${
                theme === "dark" ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
            {/* Placeholder for sizing */}
            <div className="w-6 h-6 opacity-0" />
          </div>
        </button>
      )}

      <div className="w-full max-w-2xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            My Works
          </h1>
          <p className="text-muted-foreground text-lg">Explore my collection of projects</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-3xl p-[1px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              {/* Gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/50 via-indigo-400/50 to-purple-400/50 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Glass button */}
              <div className="relative bg-white/40 dark:bg-white/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-3xl px-8 py-6 shadow-xl shadow-black/5 dark:shadow-black/20 transition-all duration-300 group-hover:bg-white/50 dark:group-hover:bg-white/15">
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold text-slate-900 dark:text-white tracking-tight">
                    {link.label}
                  </span>
                  <svg
                    className="w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <a
        href="https://github.com/monstercat16"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 group"
        aria-label="GitHub Profile"
      >
        <div className="relative bg-white/40 dark:bg-white/10 backdrop-blur-2xl border border-white/20 dark:border-white/10 rounded-2xl p-3 shadow-xl shadow-black/5 dark:shadow-black/20 transition-all duration-300 hover:scale-110 hover:bg-white/50 dark:hover:bg-white/15 active:scale-95">
          <svg className="w-6 h-6 text-slate-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </div>
      </a>
    </main>
  )
}
