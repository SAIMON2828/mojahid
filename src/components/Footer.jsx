import { useEffect, useState } from 'react'
import { navLinks as NAV_LINKS, profile } from '../data'
import { ArrowUpIcon, LinkedInIcon, MailIcon, PhoneIcon } from './Icons'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <footer className="border-t border-base-300 bg-base-100">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-10 sm:px-6">
          <a href="#home" className="font-display text-2xl font-bold">
            {profile.firstName}
            <span className="text-primary">.</span>
          </a>
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm text-base-content/70">
            {NAV_LINKS.map((l) => (
              <a key={l.id} href={`#${l.id}`} className="link-hover">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex gap-2">
            <a href={`mailto:${profile.email}`} className="btn btn-circle btn-ghost" aria-label="Email">
              <MailIcon />
            </a>
            <a href={`tel:${profile.phone}`} className="btn btn-circle btn-ghost" aria-label="Phone">
              <PhoneIcon />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-circle btn-ghost" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
          </div>
          <p className="text-center text-sm text-base-content/50">
            © {YEAR} {profile.name}. All rights reserved.
          </p>
        </div>
      </footer>

      <a
        href="#home"
        aria-label="Back to top"
        className={`btn btn-circle btn-primary fixed right-5 bottom-5 z-40 shadow-lg transition-all duration-300 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUpIcon />
      </a>
    </>
  )
}
