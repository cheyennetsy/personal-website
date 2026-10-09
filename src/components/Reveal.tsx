import { motion, useReducedMotion } from "motion/react"
import type { PropsWithChildren } from "react"

export default function Reveal({
  children,
  className = "",
  delay = 0,
}: PropsWithChildren<{ className?: string delay?: number }>) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
