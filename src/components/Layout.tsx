import { Menu, X } from "lucide-react"
import { AnimatePresence, motion, useScroll, useSpring } from "motion/react"
import { useEffect, useState } from "react"
import { NavLink, Outlet, ScrollRestoration, useLocation } from "react-router"

const nav = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Beyond", "/beyond"],
  ["Contact", "/contact"],
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 150, damping: 30 })

  useEffect(() => {
    setOpen(false)
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [location.pathname])

  return (
    <div className="min-h-screen">
      <motion.div
        className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-terracotta"
        style={{ scaleX }}
      />
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-5"
        }`}
      >
        <div
          className={`page-shell flex items-center justify-between rounded-full border px-5 py-3 transition-all duration-500 ${
            scrolled
              ? "border-ink/10 bg-ivory/90 shadow-[0_8px_35px_rgba(49,47,42,.08)] backdrop-blur-xl"
              : "border-transparent bg-transparent"
          }`}
        >
          <NavLink
            to="/"
            className="font-serif text-xl tracking-tight focus-ring"
          >
            Cheyenne Tan<span className="text-terracotta">.</span>
          </NavLink>
          <nav
            className="hidden items-center gap-7 md:flex"
            aria-label="Primary navigation"
          >
            {nav.map(([label, href]) => (
              <NavLink
                key={label}
                to={href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            className="focus-ring rounded-full p-1 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label="Toggle navigation"
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 flex bg-ivory px-8 pt-32 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile navigation">
              {nav.map(([label, href], i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <NavLink to={href} className="font-serif text-5xl">
                    {label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <footer className="border-t border-ink/10 py-9">
        <div className="page-shell flex flex-col gap-5 text-sm text-ink/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Cheyenne Tan</p>
          <NavLink to="/contact" className="link-line">
            Contact
          </NavLink>
        </div>
      </footer>
      <ScrollRestoration />
    </div>
  )
}
