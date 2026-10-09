import { ChevronLeft, ChevronRight, X } from "lucide-react"
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { EditorialImage, LineReveal } from "../components/EditorialMotion"
import { travelPhotos, type TravelPhoto } from "../content/site"

function widthClass(photo: TravelPhoto) {
  if (photo.orientation === "portrait")
    return "w-[76vw] sm:w-[48vw] lg:w-[30vw]"
  if (photo.orientation === "wide") return "w-[92vw] sm:w-[78vw] lg:w-[70vw]"
  return "w-[88vw] sm:w-[68vw] lg:w-[52vw]"
}

function PhotoCaption({ photo }: { photo: TravelPhoto }) {
  return (
    <figcaption className="mt-4 grid gap-1 sm:grid-cols-[auto_1fr] sm:gap-x-5">
      <p className="font-mono text-[10px] uppercase tracking-[.12em] text-ink/65">
        {photo.location}
        {photo.date ? ` · ${photo.date}` : ""}
      </p>
      <p className="text-sm leading-6 text-ink/55 sm:text-right">
        {photo.caption}
      </p>
    </figcaption>
  )
}

function GalleryPhoto({
  photo,
  index,
  open,
}: {
  photo: TravelPhoto
  index: number
  open: (index: number, trigger: HTMLButtonElement) => void
}) {
  const reduce = useReducedMotion()

  return (
    <motion.figure
      className={`shrink-0 snap-center ${widthClass(photo)}`}
      initial={reduce ? false : { opacity: 0, y: 34 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{
        duration: 0.75,
        delay: index % 2 === 1 ? 0.1 : 0,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <button
        type="button"
        className="group block w-full cursor-zoom-in text-left focus-ring"
        onClick={(event) => open(index, event.currentTarget)}
        aria-label={`Open photograph from ${photo.location}`}
      >
        <EditorialImage
          src={photo.image}
          alt={photo.imageAlt}
          className="h-[56svh] min-h-[420px] md:h-[68svh]"
          imageClassName="transition-transform duration-1000 ease-out group-hover:scale-[1.035]"
          parallax={index % 3 === 0}
        />
      </button>
      <PhotoCaption photo={photo} />
    </motion.figure>
  )
}

function Lightbox({
  photos,
  active,
  close,
  setActive,
}: {
  photos: TravelPhoto[]
  active: number
  close: () => void
  setActive: (index: number) => void
}) {
  const photo = photos[active]
  const reduce = useReducedMotion()
  const previous = () => setActive((active - 1 + photos.length) % photos.length)
  const next = () => setActive((active + 1) % photos.length)
  const closeButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    closeButton.current?.focus()
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close()
      if (event.key === "ArrowLeft") previous()
      if (event.key === "ArrowRight") next()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  })

  return (
    <motion.div
      className="fixed inset-0 z-[100] grid bg-ink/95 p-4 text-ivory md:p-8"
      initial={reduce ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={(event) => event.target === event.currentTarget && close()}
      role="dialog"
      aria-modal="true"
      aria-label="Photograph viewer"
    >
      <button
        ref={closeButton}
        type="button"
        onClick={close}
        className="absolute right-5 top-5 z-10 grid size-11 place-items-center rounded-full bg-ivory/10 transition-colors hover:bg-ivory/20 focus-ring md:right-8 md:top-8"
        aria-label="Close photograph"
      >
        <X />
      </button>
      <button
        type="button"
        onClick={previous}
        className="absolute left-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 transition-colors hover:bg-ivory/20 focus-ring md:left-8"
        aria-label="Previous photograph"
      >
        <ChevronLeft />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-3 top-1/2 z-10 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-ivory/10 transition-colors hover:bg-ivory/20 focus-ring md:right-8"
        aria-label="Next photograph"
      >
        <ChevronRight />
      </button>
      <div className="m-auto flex h-full w-full max-w-6xl flex-col items-center justify-center gap-4 px-10">
        <AnimatePresence mode="wait">
          <motion.img
            key={photo.id}
            src={photo.image}
            alt={photo.imageAlt}
            className="max-h-[78vh] max-w-full object-contain"
            initial={reduce ? false : { opacity: 0, scale: 0.985 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.985 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        <div className="flex w-full max-w-3xl flex-col justify-between gap-2 text-center text-sm text-ivory/65 sm:flex-row sm:text-left">
          <p className="font-mono text-[10px] uppercase tracking-[.12em]">
            {photo.location}
            {photo.date ? ` · ${photo.date}` : ""}
          </p>
          <p>{photo.caption}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Beyond() {
  const photos = useMemo(
    () => [...travelPhotos].sort((a, b) => a.displayOrder - b.displayOrder),
    [],
  )
  const [active, setActive] = useState<number | null>(null)
  const [scrollDistance, setScrollDistance] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const trigger = useRef<HTMLButtonElement | null>(null)
  const railRef = useRef<HTMLDivElement>(null)
  const gallerySectionRef = useRef<HTMLElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: gallerySectionRef,
    offset: ["start start", "end end"],
  })
  const railX = useTransform(scrollYProgress, [0, 1], [0, -scrollDistance])

  const open = (index: number, element: HTMLButtonElement) => {
    trigger.current = element
    setActive(index)
  }
  const close = () => {
    setActive(null)
    requestAnimationFrame(() => trigger.current?.focus())
  }
  const moveRail = (direction: -1 | 1) => {
    if (reduce) {
      railRef.current?.parentElement?.scrollBy({
        left: window.innerWidth * 0.72 * direction,
        behavior: "auto",
      })
      return
    }
    window.scrollBy({
      top: window.innerWidth * 0.72 * direction,
      behavior: "smooth",
    })
  }

  useLayoutEffect(() => {
    const rail = railRef.current
    if (!rail) return

    const measure = () => {
      setViewportHeight(window.innerHeight)
      setScrollDistance(Math.max(0, rail.scrollWidth - window.innerWidth))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(rail)
    window.addEventListener("resize", measure)
    return () => {
      observer.disconnect()
      window.removeEventListener("resize", measure)
    }
  }, [])

  return (
    <article className="overflow-x-clip pt-40">
      <header className="page-shell">
        <h1 className="page-title">
          <LineReveal>Things That Make Me</LineReveal>
        </h1>
        <div className="mt-8 flex items-center justify-between gap-6">
          <p className="font-mono text-xs uppercase tracking-[.14em] text-ink/55">
            Photographs
          </p>
          <div className="flex items-center gap-2">
            <span className="mr-3 hidden font-mono text-[10px] uppercase tracking-[.12em] text-ink/40 sm:block">
              Scroll to browse
            </span>
            <button
              type="button"
              onClick={() => moveRail(-1)}
              className="gallery-control"
              aria-label="Scroll gallery left"
            >
              <ChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => moveRail(1)}
              className="gallery-control"
              aria-label="Scroll gallery right"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </header>

      <section
        ref={gallerySectionRef}
        className="relative mt-14 md:mt-20"
        style={{
          height: reduce ? viewportHeight : scrollDistance + viewportHeight,
        }}
      >
        <div
          className={`sticky top-20 flex h-[calc(100svh-5rem)] items-center ${
            reduce ? "overflow-x-auto" : "overflow-hidden"
          }`}
        >
          <motion.div
            ref={railRef}
            className="gallery-rail flex w-max items-start gap-5 px-[5vw] pb-8 md:gap-8"
            style={reduce ? undefined : { x: railX }}
          >
            {photos.map((photo, index) => (
              <GalleryPhoto
                key={photo.id}
                photo={photo}
                index={index}
                open={open}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {active !== null && (
          <Lightbox
            photos={photos}
            active={active}
            close={close}
            setActive={setActive}
          />
        )}
      </AnimatePresence>
    </article>
  )
}
