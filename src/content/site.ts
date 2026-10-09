export type ProjectCategory = "AI / Machine Learning" | "Biomedical Engineering" | "Hardware / Robotics" | "Software" | "Product / Design"

export type Project = {
  slug: string
  title: string
  summary: string
  category: ProjectCategory
  technologies: string[]
  year: string
  image: string
  imageAlt: string
  featured?: boolean
}

export type TravelPhoto = {
  id: string
  image: string
  imageAlt: string
  location: string
  date: string
  caption: string
  displayOrder: number
  orientation: "portrait" | "landscape" | "wide"
  featured?: boolean
}

// Replace these clearly labeled entries with Cheyenne's real work.
export const projects: Project[] = [
  {
    slug: "accessible-health-monitor",
    title: "Accessible Health Monitor",
    summary:
      "A placeholder case study exploring a more approachable at-home health device.",
    category: "Biomedical Engineering",
    technologies: ["Sensors", "Prototyping", "Python"],
    year: "20XX",
    image:
      "https://images.unsplash.com/photo-1581090122087-bdc8968e525f?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Hands testing a small electronic prototype in a laboratory",
    featured: true,
  },
  {
    slug: "human-centered-ai-tool",
    title: "Human-Centered AI Tool",
    summary:
      "A placeholder product concept for making complex information easier to navigate.",
    category: "AI / Machine Learning",
    technologies: ["TypeScript", "ML", "Research"],
    year: "20XX",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Data visualization interface on a laptop",
    featured: true,
  },
  {
    slug: "soft-robotics-study",
    title: "Soft Robotics Study",
    summary:
      "A placeholder exploration of compliant mechanisms and thoughtful interaction.",
    category: "Hardware / Robotics",
    technologies: ["CAD", "Fabrication", "Controls"],
    year: "20XX",
    image:
      "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Robotic mechanism in a workshop",
    featured: true,
  },
  {
    slug: "care-coordination-platform",
    title: "Care Coordination Platform",
    summary:
      "A placeholder workflow prototype centered on clarity for patients and care teams.",
    category: "Product / Design",
    technologies: ["Figma", "Research", "React"],
    year: "20XX",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Team arranging notes during a design workshop",
  },
  {
    slug: "signal-analysis-notebook",
    title: "Signal Analysis Notebook",
    summary:
      "A placeholder toolkit for exploring and communicating physiological signals.",
    category: "Software",
    technologies: ["Python", "DSP", "Visualization"],
    year: "20XX",
    image:
      "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "Medical data displayed on a monitor",
  },
  {
    slug: "assistive-grip-prototype",
    title: "Assistive Grip Prototype",
    summary:
      "A placeholder build investigating adaptable, low-cost assistive hardware.",
    category: "Biomedical Engineering",
    technologies: ["3D Printing", "CAD", "Testing"],
    year: "20XX",
    image:
      "https://images.unsplash.com/photo-1634944902853-3e977c2de8b6?auto=format&fit=crop&w=1600&q=85",
    imageAlt: "A hand interacting with an experimental device",
  },
]

// Photo-album placeholders. Reorder with displayOrder and replace with personal photographs.
export const travelPhotos: TravelPhoto[] = [
  {
    id: "photo-01",
    image:
      "https://images.unsplash.com/photo-1564521664131-22fdac8adfc3?auto=format&fit=crop&w=1800&q=88",
    imageAlt: "A person in a red cap standing on a green mountain ridge",
    location: "Location placeholder",
    date: "20XX",
    caption: "One-sentence personal caption placeholder.",
    displayOrder: 1,
    orientation: "wide",
    featured: true,
  },
  {
    id: "photo-02",
    image:
      "https://images.unsplash.com/photo-1773579938119-c446399badd0?auto=format&fit=crop&w=1800&q=88",
    imageAlt: "A lone figure on a misty mountain road",
    location: "Location placeholder",
    date: "20XX",
    caption: "One-sentence personal caption placeholder.",
    displayOrder: 2,
    orientation: "portrait",
    featured: true,
  },
  {
    id: "photo-03",
    image:
      "https://images.unsplash.com/photo-1772454774668-a1500805c9dd?auto=format&fit=crop&w=1800&q=88",
    imageAlt: "A lone hiker climbing a grassy mountain slope",
    location: "Location placeholder",
    date: "20XX",
    caption: "One-sentence personal caption placeholder.",
    displayOrder: 3,
    orientation: "landscape",
    featured: true,
  },
  {
    id: "photo-04",
    image:
      "https://images.unsplash.com/photo-1788204750092-4c0b4c2e9649?auto=format&fit=crop&w=1800&q=88",
    imageAlt: "A narrow trail disappearing into a foggy pine forest",
    location: "Location placeholder",
    date: "20XX",
    caption: "One-sentence personal caption placeholder.",
    displayOrder: 4,
    orientation: "landscape",
  },
  {
    id: "photo-05",
    image:
      "https://images.unsplash.com/photo-1632249480954-76feaada405e?auto=format&fit=crop&w=2000&q=88",
    imageAlt: "A tall waterfall between mountain slopes",
    location: "Location placeholder",
    date: "20XX",
    caption: "One-sentence personal caption placeholder.",
    displayOrder: 5,
    orientation: "wide",
  },
  {
    id: "photo-06",
    image:
      "https://images.unsplash.com/photo-1735268671088-a3b2d09aa0a3?auto=format&fit=crop&w=1600&q=88",
    imageAlt: "A mountain lake beneath misty peaks",
    location: "Location placeholder",
    date: "20XX",
    caption: "One-sentence personal caption placeholder.",
    displayOrder: 6,
    orientation: "portrait",
  },
]

export const links = {
  email: "mailto:your.email@example.com",
  linkedin: "https://www.linkedin.com/in/your-profile",
  github: "https://github.com/your-username",
}

// Swap these URLs for personal photographs without changing the About layout.
export const aboutImages = {
  childhood:
    "https://images.unsplash.com/photo-1524921904563-3084fd87e550?auto=format&fit=crop&w=1400&q=88",
  books:
    "https://images.unsplash.com/photo-1532153470116-e8c2088b8ac1?auto=format&fit=crop&w=1100&q=88",
  process:
    "https://images.unsplash.com/photo-1576595580361-90a855b84b20?auto=format&fit=crop&w=1400&q=88",
  prototype:
    "https://images.unsplash.com/photo-1581090122087-bdc8968e525f?auto=format&fit=crop&w=1200&q=88",
  landscape:
    "https://images.unsplash.com/photo-1632249480954-76feaada405e?auto=format&fit=crop&w=2200&q=90",
}
