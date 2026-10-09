import { ArrowLeft, ArrowUpRight } from "lucide-react"
import { Link, useParams } from "react-router"
import Reveal from "../components/Reveal"
import { projects } from "../content/site"
import NotFound from "./NotFound"

const sections = [
  [
    "01",
    "The problem",
    "Use this section to describe the real problem clearly, including the context that made it worth investigating.",
  ],
  [
    "02",
    "Why it matters / who it's for",
    "Add the people, needs, research, and constraints that shaped the project. Avoid jumping to the solution too quickly.",
  ],
  [
    "03",
    "My role",
    "Replace this placeholder with your actual responsibilities, collaborators, timeline, and contribution.",
  ],
  [
    "04",
    "Design process",
    "Document discovery, sketches, decisions, and tests. Images and diagrams can be added alongside this narrative.",
  ],
  [
    "05",
    "Technical approach",
    "Explain architecture, methods, tools, and key implementation details at the depth appropriate for the project.",
  ],
  [
    "06",
    "Prototypes and iterations",
    "Show how the work evolved. Include the imperfect versions and what each one taught you.",
  ],
  [
    "07",
    "Challenges and tradeoffs",
    "Describe what did not work, competing priorities, and the decisions you made with the information available.",
  ],
  [
    "08",
    "Results and demonstrations",
    "Add verified outcomes, quantitative results, videos, and demos here when real content is available.",
  ],
  [
    "09",
    "Reflections",
    "What changed in your thinking? What would you do differently with another week, month, or year?",
  ],
]

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  if (!project) return <NotFound />
  return (
    <article>
      <header className="technical-grid pt-36">
        <div className="page-shell pb-16">
          <Link to="/projects" className="link-arrow mb-14">
            <ArrowLeft /> Back to projects
          </Link>
          <div className="grid gap-10 md:grid-cols-[1fr_.55fr]">
            <Reveal>
              <p className="eyebrow">
                {project.category} · {project.year}
              </p>
              <h1 className="mt-5 font-serif text-6xl leading-[.9] md:text-8xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-2xl text-xl leading-8 text-ink/60">
                {project.summary}
              </p>
            </Reveal>
            <div className="self-end border-l border-ink/20 pl-6">
              <p className="eyebrow">Toolkit</p>
              <p className="mt-3 font-mono text-sm leading-7">
                {project.technologies.join(" / ")}
              </p>
            </div>
          </div>
        </div>
        <img
          src={project.image}
          alt={project.imageAlt}
          className="h-[52vh] min-h-[400px] w-full object-cover"
        />
      </header>
      <div className="page-shell grid gap-12 py-24 lg:grid-cols-[230px_1fr]">
        <aside className="h-fit border-t border-ink/20 pt-5 lg:sticky lg:top-28">
          <p className="eyebrow">Project overview</p>
          <p className="mt-4 text-sm leading-6 text-ink/60">
            Placeholder case-study structure ready for real documentation,
            images, diagrams, videos, code, and outcomes.
          </p>
        </aside>
        <div className="max-w-3xl">
          {sections.map(([n, title, body]) => (
            <Reveal key={n} className="case-section">
              <p className="font-mono text-xs text-terracotta">{n} / 09</p>
              <h2>{title}</h2>
              <p>{body}</p>
              {n === "05" && (
                <pre>
                  <code>{`// Replace with a real, annotated snippet\nfunction prototype(input: Signal) {\n  return test(iterate(input));\n}`}</code>
                </pre>
              )}
            </Reveal>
          ))}
          <div className="mt-16 flex flex-wrap gap-3">
            <span className="disabled-link">
              GitHub <ArrowUpRight />
            </span>
            <span className="disabled-link">
              Live demo <ArrowUpRight />
            </span>
            <span className="disabled-link">
              Documentation <ArrowUpRight />
            </span>
          </div>
          <p className="mt-3 text-xs text-ink/45">
            Links are intentionally inactive until real URLs are supplied.
          </p>
        </div>
      </div>
    </article>
  )
}
