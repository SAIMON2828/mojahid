import { navLinks as NAV_LINKS, profile } from '../data'
import { useActiveSection, useScrolled, useTheme } from '../hooks'
import { MenuIcon, MoonIcon, SunIcon } from './Icons'

const IDS = NAV_LINKS.map((l) => l.id)

export default function Navbar() {
  const scrolled = useScrolled()
  const active = useActiveSection(IDS)
  const [theme, toggleTheme] = useTheme()
  // Over the hero photo the bar is transparent with white text.
  const overHero = !scrolled

  const closeMenu = () => document.activeElement?.blur()

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        overHero
          ? 'bg-transparent text-white'
          : 'bg-base-100/85 text-base-content shadow-sm backdrop-blur-md'
      }`}
    >
      <nav className="navbar mx-auto max-w-6xl px-4">
        <div className="navbar-start">
          <a href="#home" className="font-display text-xl font-bold tracking-tight">
            {profile.firstName}
            <span className="text-primary">.</span>
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-1 text-sm font-medium">
            {NAV_LINKS.map((l) => (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  className={`rounded-full px-3 py-2 transition-colors ${
                    active === l.id
                      ? 'bg-primary text-primary-content'
                      : overHero
                        ? 'hover:bg-white/15'
                        : 'hover:bg-base-200'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-1">
          <button
            onClick={toggleTheme}
            className="btn btn-ghost btn-circle btn-sm"
            aria-label={theme === 'night' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'night' ? <SunIcon /> : <MoonIcon />}
          </button>

          <a href="#contact" className="btn btn-primary btn-sm hidden rounded-full sm:inline-flex">
            Hire me
          </a>

          <div className="dropdown dropdown-end lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-circle btn-sm" aria-label="Open menu">
              <MenuIcon />
            </button>
            <ul
              tabIndex={0}
              className="menu dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 text-base-content shadow-xl"
            >
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a href={`#${l.id}`} onClick={closeMenu} className={active === l.id ? 'menu-active' : ''}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
