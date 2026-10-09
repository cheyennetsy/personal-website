import { ArrowLeft } from "lucide-react"
import { Link } from "react-router"

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[85svh] flex-col items-center justify-center text-center">
      <p className="eyebrow">404 · Off the map</p>
      <h1 className="mt-5 font-serif text-7xl italic">Nothing here—yet.</h1>
      <p className="mt-5 text-ink/60">
        This page may still be on the workbench.
      </p>
      <Link to="/" className="link-arrow mt-10">
        <ArrowLeft /> Return home
      </Link>
    </div>
  )
}
