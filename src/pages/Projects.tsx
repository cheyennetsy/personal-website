import { AnimatePresence, motion } from "motion/react"
import { useState } from "react"
import { ProjectCard } from "../components/Cards"
import Reveal from "../components/Reveal"
import { projects, type ProjectCategory } from "../content/site"

const filters: Array<"All" | ProjectCategory> = [
  "All",
  "AI / Machine Learning",
  "Biomedical Engineering",
  "Hardware / Robotics",
  "Software",
  "Product / Design",
]

export default function Projects() {
  const [filter, setFilter] = useState<typeof filters[number]>("All")
  const visible =
    filter === "All" ? projects : projects.filter((p) => p.category === filter)
  return (
    <div className="technical-grid min-h-screen pb-28 pt-40">
      <div className="page-shell">
        <Reveal>
          <h1 className="page-title">Things I Make</h1>
          <p className="mt-6 font-mono text-xs uppercase tracking-[.14em] text-ink/55">
            Engineering portfolio
          </p>
        </Reveal>
        <div className="mt-16 border-y border-ink/15 py-5">
          <div
            className="flex flex-wrap gap-2"
            role="group"
            aria-label="Filter projects"
          >
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setFilter(item)}
                aria-pressed={filter === item}
                className={`filter-button ${filter === item ? "selected" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <motion.div
          layout
          className="mt-16 grid gap-x-8 gap-y-20 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.25 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
