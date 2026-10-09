import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import { EditorialImage, LineReveal } from "../components/EditorialMotion"
import Reveal from "../components/Reveal"
import { aboutImages } from "../content/site"

export default function About() {
  const landscapeRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: landscapeRef,
    offset: ["start end", "end start"],
  })
  const landscapeY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"])
  const landscapeScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1])

  return (
    <article className="overflow-hidden pb-32 pt-40">
      <header className="page-shell">
        <h1 className="page-title">
          <LineReveal>A little about me</LineReveal>
        </h1>
      </header>

      <section className="about-section page-shell grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-5 lg:col-start-2">
          <p className="about-kicker">Hi, I'm Cheyenne!</p>
          <p className="about-body">
            I grew up on the small, sunny island of Singapore, where I spent
            much of my childhood watching medical shows, taking things apart
            (and attempting to put them back together), and reading probably far
            too many books about the history of heart surgery.
          </p>
        </div>
        <figure className="lg:col-span-5 lg:col-start-8">
          <EditorialImage
            src={aboutImages.childhood}
            alt="Placeholder photograph of a sunlit Singapore street"
            className="aspect-[4/5]"
            imageClassName="object-center"
            parallax
            eager
          />
          <figcaption className="photo-caption">
            Personal photograph placeholder · Singapore
          </figcaption>
        </figure>
      </section>

      <section className="about-section bg-beige/45 py-24 md:py-36">
        <div className="page-shell grid items-end gap-14 lg:grid-cols-12">
          <figure className="lg:col-span-4 lg:col-start-2">
            <EditorialImage
              src={aboutImages.books}
              alt="Placeholder photograph of an open book"
              className="aspect-[3/4]"
            />
            <figcaption className="photo-caption">
              Personal photograph placeholder · early influences
            </figcaption>
          </figure>
          <div className="lg:col-span-6 lg:col-start-7 lg:pb-14">
            <Reveal>
              <p className="about-statement">
                For the longest time, I thought I'd become a doctor.
              </p>
            </Reveal>
            <p className="about-body mt-7">
              I imagined myself in the operating room, performing the procedures
              that could save someone's life. But somewhere along the way, I
              became fascinated by a different possibility: what if I could
              build something that would help people I'd never even meet?
            </p>
          </div>
        </div>
      </section>

      <section className="about-section about-engineering-section technical-grid">
        <div className="page-shell grid items-start gap-x-12 gap-y-16 lg:grid-cols-12">
          <Reveal className="lg:col-span-5 lg:pt-10">
            <p className="about-statement about-duke">
              And so, the winds blew west, and I found myself in Durham, North
              Carolina, studying — you might've guessed it — Biomedical
              Engineering at Duke.
            </p>
          </Reveal>
          <div className="engineering-collage relative grid grid-cols-6 gap-4 lg:col-span-6 lg:col-start-7">
            <span className="engineering-collage-shape" aria-hidden="true" />
            <EditorialImage
              src={aboutImages.process}
              alt="Placeholder process photograph of hands sketching"
              className="relative z-10 col-span-5 aspect-[4/3]"
            />
            <EditorialImage
              src={aboutImages.prototype}
              alt="Placeholder prototype photograph from a workshop"
              className="relative z-20 col-span-4 col-start-3 -mt-14 aspect-square border-[10px] border-ivory"
            />
            <span className="absolute right-0 top-1/3 font-mono text-[9px] uppercase tracking-[.16em] [writing-mode:vertical-rl]">
              Process imagery · replace with personal work
            </span>
          </div>
          <Reveal className="engineering-belief lg:col-span-12">
            <p className="engineering-belief-keywords">
              People <span>/</span> consequences <span>/</span> purpose
            </p>
            <p className="about-body engineering-philosophy">
              These days, my interests have grown well beyond healthcare, but
              I've never lost sight of what drew me to engineering in the first
              place: the possibility of making someone's life better, even if we
              never meet. I've come to believe that building something
              technically impressive is only half the challenge. The other half
              is understanding the people we're building for, the consequences
              of what we create, and whether we're solving a problem worth
              solving. I want the things I build to reflect not just what I'm
              capable of, but what I believe in.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        ref={landscapeRef}
        className="relative min-h-[100svh] bg-sage text-ivory"
      >
        <div className="relative h-[100svh] min-h-[620px] overflow-hidden">
          <motion.img
            src={aboutImages.landscape}
            alt="Placeholder landscape photograph of a mountain waterfall"
            className="absolute -inset-y-[8%] h-[116%] w-full object-cover"
            style={
              reduce ? undefined : { y: landscapeY, scale: landscapeScale }
            }
          />
          <div className="absolute inset-0 bg-gradient-to-t from-sage/80 via-transparent to-sage/15" />
          <p className="page-shell absolute inset-x-0 bottom-12 max-w-[70ch] text-lg leading-8 text-ivory md:text-xl">
            Outside of engineering, I love traveling, hiking, and finding myself
            somewhere I've never been before. There's something I absolutely
            love about feeling so small against towering mountains, waterfalls,
            and glaciers. It's a reminder of just how vast the world is, how
            little I know, and how much there still is to discover.
          </p>
        </div>
      </section>

      <section className="page-shell pb-16 pt-32 md:pb-28 md:pt-48">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-serif text-3xl leading-snug md:text-5xl">
            I hope this little corner of the internet gives you a glimpse of the
            world through my eyes — the things I'm building, the places I'm
            exploring, and everything that's shaping me along the way.
          </p>
          <p className="mt-14 font-serif text-2xl italic text-terracotta">
            Thanks for being here. ♡
          </p>
        </div>
      </section>
    </article>
  )
}
