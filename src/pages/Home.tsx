import { ArrowDown, ArrowRight, Circle } from "lucide-react"
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { Link } from "react-router"
import { PhotoCard, ProjectCard } from "../components/Cards"
import Reveal from "../components/Reveal"
import { links, projects, travelPhotos } from "../content/site"

export default function Home() {
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll()
  const motifX = useTransform(scrollYProgress, [0, 0.5], ["0%", "85%"])

  return (
    <>
      <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
        <div className="page-shell relative z-10 py-20">
          <motion.h1
            className="font-serif text-[clamp(2.4rem,5vw,4.8rem)] leading-[.95]"
            initial={reduce ? false : { opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm Cheyenne!
          </motion.h1>
          <div className="my-8 max-w-5xl text-[clamp(3.4rem,9vw,8.5rem)] leading-[.78] tracking-[-.055em]">
            <motion.p
              className="font-sans font-semibold"
              initial={reduce ? false : { opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.35,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              I make things.
            </motion.p>
            <motion.p
              className="ml-[8vw] mt-5 font-serif italic text-terracotta"
              initial={reduce ? false : { opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.65,
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              And things make me.
            </motion.p>
          </div>
        </div>
        <div className="absolute bottom-10 left-[5vw] right-[5vw] h-px bg-ink/20">
          <motion.div
            className="absolute -top-1.5"
            style={reduce ? undefined : { left: motifX }}
          >
            <Circle className="size-3 fill-terracotta text-terracotta" />
          </motion.div>
        </div>
        <ArrowDown className="absolute bottom-7 right-[5vw] size-5 animate-bounce" />
      </section>

      <section className="section-space">
        <div className="page-shell">
          <Reveal>
            <p className="eyebrow mb-10">Index</p>
          </Reveal>
          <div className="grid gap-5 lg:grid-cols-2">
            <Link to="/projects" className="world-card blueprint group">
              <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
                <span className="font-mono text-xs uppercase tracking-[.14em]">
                  Engineering portfolio
                </span>
                <div className="schematic-motif" aria-hidden="true">
                  <span className="schematic-ring schematic-ring-one" />
                  <span className="schematic-ring schematic-ring-two" />
                  <span className="schematic-axis" />
                  <span className="schematic-node" />
                </div>
                <div>
                  <h2 className="world-title font-serif text-5xl md:text-7xl">
                    Things
                    <br />I Make
                  </h2>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                    Enter the workshop{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </Link>
            <Link
              to="/beyond"
              className="world-card group overflow-hidden text-ivory"
            >
              <img
                src={travelPhotos[0].image}
                alt=""
                className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
              <div className="relative z-10 flex h-full flex-col justify-between p-8 md:p-12">
                <span className="font-mono text-xs uppercase tracking-[.14em]">
                  Photo album
                </span>
                <div>
                  <h2 className="world-title font-serif text-5xl italic md:text-7xl">
                    Things That
                    <br />
                    Make Me
                  </h2>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold">
                    Open the album{" "}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-space technical-grid border-y border-ink/10">
        <div className="page-shell">
          <Reveal className="mb-12 flex items-end justify-between">
            <div>
              <p className="eyebrow">Selected work · placeholders</p>
              <h2 className="section-title mt-3">Currently making</h2>
            </div>
            <Link className="link-arrow hidden sm:flex" to="/projects">
              All projects <ArrowRight />
            </Link>
          </Reveal>
          <div className="grid gap-x-7 gap-y-16 md:grid-cols-3">
            {projects
              .filter((p) => p.featured)
              .map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="page-shell">
          <Reveal className="mb-12">
            <p className="eyebrow">Photographs · placeholders</p>
            <h2 className="section-title mt-3">Elsewhere, lately</h2>
          </Reveal>
          <div className="grid items-start gap-7 md:grid-cols-3">
            {travelPhotos
              .filter((a) => a.featured)
              .map((a, i) => (
                <div key={a.id} className={i === 1 ? "md:mt-20" : ""}>
                  <PhotoCard photo={a} />
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="bg-sage text-ivory">
        <div className="page-shell py-24 md:py-36">
          <Reveal>
            <p className="eyebrow !text-ivory/60">An open invitation</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.02] md:text-6xl">
              Have something
              <br />
              <em>interesting</em> in mind?
            </h2>
            <a
              href={links.email}
              className="mt-10 inline-flex items-center gap-3 border-b border-ivory pb-2 font-semibold"
            >
              Write to me <ArrowRight className="size-4" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
