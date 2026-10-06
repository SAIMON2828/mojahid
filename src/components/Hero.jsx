import { profile } from '../data'
import { useTypewriter } from '../hooks'
import { ArrowDownIcon, LinkedInIcon, MailIcon, MapPinIcon } from './Icons'

export default function Hero() {
  const role = useTypewriter(profile.roles)

  return (
    <section id="home" className="relative isolate flex min-h-svh items-center overflow-hidden text-white">
      {/* Background photo — subject stands on the right, so keep that side in frame */}
      <div
        className="hero-bg absolute inset-0 -z-20 bg-cover bg-[position:72%_center] md:bg-center"
        style={{ backgroundImage: 'url(/mojahid.jpeg)' }}
        role="img"
        aria-label={`${profile.name} standing on a hillside road with the Alps behind`}
      />
      {/* Readability overlays */}
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-black/90 via-black/55 to-black/20 md:bg-linear-to-r md:from-black/85 md:via-black/50 md:to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-linear-to-t from-base-100 to-transparent" />

      <div className="mx-auto w-full max-w-6xl px-4 pt-24 pb-16 sm:px-6">
        <div className="max-w-xl">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-sm backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-success" />
            </span>
            Open to internships &amp; research roles
          </p>

          <h1 className="font-display text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            Hi, I’m <br />
            <span className="bg-linear-to-r from-sky-300 to-cyan-200 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>

          <p className="mt-4 h-8 font-display text-xl font-medium text-sky-100 sm:text-2xl" aria-live="polite">
            {role}
            <span className="caret h-6 align-middle" />
          </p>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-white/80 sm:text-lg">{profile.tagline}</p>

          <p className="mt-4 flex items-center gap-2 text-sm text-white/70">
            <MapPinIcon className="size-4" /> {profile.location}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn btn-primary rounded-full px-6">
              <MailIcon /> Get in touch
            </a>
            <a href="#experience" className="btn rounded-full border-white/40 bg-white/10 px-6 text-white backdrop-blur hover:bg-white/20">
              View my work
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="btn btn-circle border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-bounce text-base-content/70 sm:block"
        aria-label="Scroll to About"
      >
        <ArrowDownIcon className="size-6" />
      </a>
    </section>
  )
}
