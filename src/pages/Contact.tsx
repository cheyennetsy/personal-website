import { ArrowUpRight, AtSign, Code2, Link2 } from "lucide-react"
import Reveal from "../components/Reveal"
import { links } from "../content/site"

const contactLinks = [
  {
    label: "Email",
    href: links.email,
    icon: AtSign,
    external: false,
  },
  {
    label: "LinkedIn",
    href: links.linkedin,
    icon: Link2,
    external: true,
  },
  {
    label: "GitHub",
    href: links.github,
    icon: Code2,
    external: true,
  },
]

export default function Contact() {
  return (
    <div className="page-shell flex min-h-[92svh] items-center pb-24 pt-40">
      <Reveal className="w-full">
        <p className="eyebrow">Contact / 03 links</p>
        <h1 className="page-title mt-5">
          Contact<span className="text-terracotta">.</span>
        </h1>
        <nav
          className="mt-20 border-t border-ink/20"
          aria-label="Contact links"
        >
          {contactLinks.map(({ label, href, icon: Icon, external }) => (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noreferrer noopener" : undefined}
              className="contact-link group"
            >
              <span className="flex items-center gap-5">
                <Icon className="size-5 text-terracotta" strokeWidth={1.5} />
                {label}
              </span>
              <ArrowUpRight
                className="size-6 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          ))}
        </nav>
      </Reveal>
    </div>
  )
}
