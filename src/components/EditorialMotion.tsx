import { motion, useReducedMotion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"

export function EditorialImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  parallax = false,
  eager = false,
}: {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  parallax?: boolean
  eager?: boolean
}) {
  const ref = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 92%", "end 15%"],
  })
  const clipPath = useTransform(scrollYProgress, [0, 0.38], [
    "inset(0 0 100% 0)",
    "inset(0 0 0% 0)",
  ])
  const scale = useTransform(scrollYProgress, [0, 0.55], [1.09, 1])
  const y = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"])

  return (
    <motion.div
      ref={ref}
      className={`relative overflow-hidden ${className}`}
      style={reduce ? undefined : { clipPath }}
    >
      <motion.img
        src={src}
        alt={alt}
        loading={eager ? "eager" : "lazy"}
        className={`h-full w-full object-cover ${imageClassName}`}
        style={reduce ? undefined : { scale, y: parallax ? y : 0 }}
      />
    </motion.div>
  )
}

export function LineReveal({
  children,
  className = "",
}: {
  children: string
  className?: string
}) {
  const reduce = useReducedMotion()
  const words = children.split(" ")

  return (
    <motion.span
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={{ visible: { transition: { staggerChildren: 0.055 } } }}
      aria-label={children}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            variants={{
              hidden: reduce ? { opacity: 1 } : { y: "110%", opacity: 0 },
              visible: { y: 0, opacity: 1 },
            }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          >
            {word}
            {index < words.length - 1 ? "\u00a0" : ""}
          </motion.span>
        </span>
      ))}
    </motion.span>
  )
}
