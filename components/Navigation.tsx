import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const pages = [
  { name: 'Home', href: '/', current: true },
  { name: 'About Me', href: '/about', current: true },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Consulting', href: '/consulting', current: false },
  { name: 'Resources', href: '/resources', current: false },
  { name: 'Blog', href: '/blog', current: false },
  { name: 'Testimonials', href: '/testimonials', current: false },
  { name: 'Contact Me', href: '/contact-me', current: false },


]

export default function Navigation() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="flex space-x-4">
      {pages.map((page) => (
        <Link href={page.href} key={page.name}>
          <a>
            <h1>
              {page.name}
            </h1>
          </a>
        </Link>
      ))}
    </div>

  )
}