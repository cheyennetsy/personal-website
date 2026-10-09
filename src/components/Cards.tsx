import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { Link } from "react-router"
import type { Project, TravelPhoto } from "../content/site"
import { EditorialImage } from "./EditorialMotion"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article layout className="group border-t border-ink/20 pt-3">
      <Link to={`/projects/${project.slug}`} className="focus-ring block">
        <div className="project-visual relative mb-5 aspect-[4/3] overflow-hidden bg-sage/10">
          <img
            src={project.image}
            alt={project.imageAlt}
            className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-[1.035] group-hover:grayscale-0"
            loading="lazy"
          />
          <div className="absolute inset-3 border border-white/0 transition-all duration-500 group-hover:inset-5 group-hover:border-white/70" />
          <div className="project-grid absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="project-crosshair left-5 top-5" />
          <span className="project-crosshair bottom-5 right-5" />
          <span className="absolute right-4 top-4 grid size-10 translate-y-2 place-items-center rounded-full bg-ivory opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="size-4" />
          </span>
          <div className="absolute bottom-4 left-5 translate-y-2 font-mono text-[9px] uppercase leading-5 tracking-[.18em] text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <span className="block">
              Fig. {project.year} / {project.category}
            </span>
            <span className="block">{project.technologies.join(" · ")}</span>
          </div>
        </div>
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-serif text-2xl">{project.title}</h3>
          <span className="font-mono text-[10px] text-ink/50">
            {project.year}
          </span>
        </div>
        <p className="mt-2 max-w-md text-sm leading-6 text-ink/65">
          {project.summary}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="technical-tag">
              {tech}
            </span>
          ))}
        </div>
      </Link>
    </motion.article>
  )
}

export function PhotoCard({
  photo,
  large = false,
}: {
  photo: TravelPhoto
  large?: boolean
}) {
  return (
    <article className={`group ${large ? "md:col-span-2" : ""}`}>
      <Link to="/beyond" className="focus-ring block">
        <EditorialImage
          src={photo.image}
          alt={photo.imageAlt}
          className={`bg-beige ${large ? "aspect-[16/9]" : "aspect-[4/5]"}`}
          imageClassName="transition duration-1000 ease-out group-hover:scale-[1.03]"
          parallax
        />
        <div className="mt-4 flex items-start justify-between gap-5">
          <div>
            <p className="eyebrow">
              {photo.location} · {photo.date}
            </p>
            <p className="mt-2 text-sm text-ink/60">{photo.caption}</p>
          </div>
          <ArrowUpRight className="mt-1 size-5 shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </div>
      </Link>
    </article>
  )
}
