import { useState } from 'react'
import {
  about,
  awards,
  certifications,
  education,
  experience,
  profile,
  projects,
  publications,
  skills,
} from '../data'
import {
  AwardIcon,
  BadgeCheckIcon,
  BookIcon,
  BriefcaseIcon,
  CheckIcon,
  CodeIcon,
  CopyIcon,
  DatabaseIcon,
  ExternalIcon,
  FileIcon,
  FlaskIcon,
  GraduationIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
  MonitorIcon,
  PhoneIcon,
  ShieldIcon,
  TrophyIcon,
} from './Icons'

function Section({ id, eyebrow, title, children, alt = false }) {
  return (
    <section id={id} className={`py-20 sm:py-24 ${alt ? 'bg-base-200/60' : ''}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="reveal mb-12 text-center">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">{eyebrow}</p>
          <h2 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        </div>
        {children}
      </div>
    </section>
  )
}

function Tags({ items }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((t) => (
        <span key={t} className="badge badge-soft badge-primary badge-sm">
          {t}
        </span>
      ))}
    </div>
  )
}

/* ---------------- About ---------------- */

export function About() {
  return (
    <Section id="about" eyebrow="Get to know me" title="About Me">
      <div className="grid items-center gap-12 md:grid-cols-5">
        <div className="reveal md:col-span-2">
          <div className="relative mx-auto max-w-xs">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-linear-to-br from-primary/60 to-secondary/40 blur-sm" />
            <img
              src="/mojahid-favicon.jpeg"
              alt={profile.name}
              loading="lazy"
              className="relative aspect-4/5 w-full rounded-3xl object-cover object-[20%_40%] shadow-2xl"
            />
          </div>
        </div>

        <div className="reveal md:col-span-3">
          <h3 className="font-display text-2xl font-semibold">
            Data scientist in the making, security-minded by training.
          </h3>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 20)} className="mt-4 leading-relaxed text-base-content/75">
              {p}
            </p>
          ))}

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {about.stats.map((s) => (
              <div key={s.label} className="rounded-2xl border border-base-300 bg-base-100 p-4 text-center shadow-sm">
                <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
                <div className="mt-1 text-xs text-base-content/60">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <h3 className="reveal mb-6 flex items-center gap-2 font-display text-2xl font-semibold">
          <GraduationIcon className="size-6 text-primary" /> Education
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {education.map((e) => (
            <article key={e.degree} className="reveal card border border-base-300 bg-base-100 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="card-body">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className={`badge ${e.current ? 'badge-success' : 'badge-ghost'} badge-sm`}>{e.period}</span>
                  <span className="flex items-center gap-1 text-xs text-base-content/60">
                    <MapPinIcon className="size-3.5" /> {e.place}
                  </span>
                </div>
                <h4 className="card-title mt-2 font-display text-lg">{e.degree}</h4>
                <p className="text-sm text-base-content/70">{e.school}</p>
                {e.details && (
                  <ul className="mt-3 space-y-1.5 text-sm text-base-content/75">
                    {e.details.map((d) => (
                      <li key={d} className="flex gap-2">
                        <CheckIcon className="mt-0.5 size-4 shrink-0 text-primary" /> {d}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  )
}

/* ---------------- Experience ---------------- */

export function Experience() {
  return (
    <Section id="experience" eyebrow="Where I’ve worked" title="Work Experience" alt>
      <ol className="relative mx-auto max-w-3xl border-l-2 border-primary/30 pl-8">
        {experience.map((x) => (
          <li key={x.company} className="reveal relative mb-10 last:mb-0">
            <span className="absolute top-1 -left-11.25 flex size-8 items-center justify-center rounded-full bg-primary text-primary-content ring-4 ring-base-200">
              <BriefcaseIcon className="size-4" />
            </span>
            <div className="card border border-base-300 bg-base-100 shadow-sm transition hover:shadow-lg">
              <div className="card-body">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-display text-xl font-semibold">{x.role}</h3>
                    <p className="font-medium text-primary">{x.company}</p>
                  </div>
                  <div className="text-right text-sm text-base-content/60">
                    <div className="font-medium">{x.period}</div>
                    <div>{x.place}</div>
                  </div>
                </div>
                <p className="mt-2 leading-relaxed text-base-content/75">{x.description}</p>
                <Tags items={x.tags} />
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* ---------------- Projects ---------------- */

export function Projects() {
  return (
    <Section id="projects" eyebrow="Academic & research" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="reveal group card border border-base-300 bg-base-100 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
          >
            <div className="card-body">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-content">
                  <FlaskIcon />
                </span>
                {p.period && <span className="text-xs text-base-content/60">{p.period}</span>}
              </div>
              <p className="mt-3 text-xs font-semibold tracking-wider text-base-content/50 uppercase">{p.type}</p>
              <h3 className="card-title font-display text-lg leading-snug">{p.title}</h3>
              {p.award && (
                <p className="mt-1 inline-flex items-center gap-1.5 self-start rounded-full bg-warning/15 px-2.5 py-1 text-xs font-semibold">
                  <TrophyIcon className="size-3.5 text-warning" />
                  {p.award}
                </p>
              )}
              <p className="mt-2 flex-1 text-sm leading-relaxed text-base-content/75">{p.description}</p>
              <Tags items={p.tags} />
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

/* ---------------- Skills, certifications, awards ---------------- */

const skillIcons = {
  'Programming Languages': CodeIcon,
  'Software Packages': DatabaseIcon,
  'Security Tools': ShieldIcon,
  'Operating Systems': MonitorIcon,
  Documentation: FileIcon,
}

export function Skills() {
  return (
    <Section id="skills" eyebrow="What I work with" title="Skills & Certifications" alt>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {skills.map((s) => {
          const Icon = skillIcons[s.category] ?? CodeIcon
          return (
            <div key={s.category} className="reveal rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon />
              </span>
              <h3 className="mt-3 font-display font-semibold">{s.category}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <span key={i} className="badge badge-outline">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-16 grid gap-10 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <h3 className="reveal mb-6 flex items-center gap-2 font-display text-2xl font-semibold">
            <BadgeCheckIcon className="size-6 text-primary" /> Certifications
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {certifications.map((c) => (
              <li key={c.name} className="reveal flex items-start gap-3 rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm">
                <BadgeCheckIcon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <p className="font-medium leading-snug">{c.name}</p>
                  <p className="text-xs text-base-content/60">{c.issuer}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2">
          <h3 className="reveal mb-6 flex items-center gap-2 font-display text-2xl font-semibold">
            <AwardIcon className="size-6 text-primary" /> Honors &amp; Awards
          </h3>
          <div className="space-y-4">
            {awards.map((a) => (
              <article key={a.title} className="reveal card bg-linear-to-br from-primary to-secondary text-primary-content shadow-lg">
                <div className="card-body">
                  <span className="badge badge-sm border-0 bg-white/20 text-inherit">{a.period}</span>
                  <h4 className="card-title font-display">{a.title}</h4>
                  <p className="text-sm opacity-90">{a.issuer}</p>
                  <p className="mt-2 text-sm leading-relaxed opacity-85">{a.description}</p>
                </div>
              </article>
            ))}
            {projects
              .filter((p) => p.award)
              .map((p) => (
                <div key={p.title} className="reveal flex items-start gap-3 rounded-xl border border-base-300 bg-base-100 p-4 shadow-sm">
                  <TrophyIcon className="mt-0.5 size-5 shrink-0 text-warning" />
                  <div>
                    <p className="font-medium leading-snug">{p.award}</p>
                    <p className="text-xs text-base-content/60">{p.title}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

/* ---------------- Publications ---------------- */

export function Publications() {
  return (
    <Section id="publications" eyebrow="Research output" title="Publications">
      <ol className="mx-auto max-w-4xl space-y-4">
        {publications.map((p, i) => (
          <li key={p.doi} className="reveal">
            <a
              href={`https://doi.org/${p.doi}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-start gap-4 rounded-2xl border border-base-300 bg-base-100 p-5 shadow-sm transition hover:border-primary/50 hover:shadow-lg"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 font-display font-bold text-primary">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold leading-snug group-hover:text-primary">{p.title}</h3>
                <p className="mt-1 flex items-center gap-1.5 text-sm break-all text-base-content/60">
                  <BookIcon className="size-4 shrink-0" /> DOI: {p.doi}
                </p>
              </div>
              <ExternalIcon className="mt-1 size-5 shrink-0 text-base-content/40 transition group-hover:text-primary" />
            </a>
          </li>
        ))}
      </ol>
    </Section>
  )
}

/* ---------------- Contact ---------------- */

function CopyButton({ value, label }) {
  const [copied, setCopied] = useState(false)
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard blocked — nothing to do
    }
  }
  return (
    <button onClick={copy} className="btn btn-ghost btn-square btn-sm" aria-label={`Copy ${label}`}>
      {copied ? <CheckIcon className="size-4 text-success" /> : <CopyIcon className="size-4" />}
    </button>
  )
}

export function Contact() {
  const items = [
    { icon: MailIcon, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, copy: profile.email },
    { icon: PhoneIcon, label: 'Phone', value: profile.phoneDisplay, href: `tel:${profile.phone}`, copy: profile.phone },
    { icon: LinkedInIcon, label: 'LinkedIn', value: profile.linkedinDisplay, href: profile.linkedin, external: true },
    { icon: MapPinIcon, label: 'Location', value: profile.location },
  ]

  return (
    <Section id="contact" eyebrow="Let’s talk" title="Get In Touch" alt>
      <div className="reveal mx-auto max-w-4xl overflow-hidden rounded-3xl border border-base-300 bg-base-100 shadow-xl">
        <div className="grid md:grid-cols-2">
          <div className="relative flex flex-col justify-center overflow-hidden bg-linear-to-br from-primary to-secondary p-8 text-primary-content sm:p-10">
            <div className="absolute -top-16 -right-16 size-48 rounded-full bg-white/10" />
            <div className="absolute -bottom-20 -left-10 size-56 rounded-full bg-white/10" />
            <h3 className="relative font-display text-3xl font-bold">Let’s build something together.</h3>
            <p className="relative mt-4 leading-relaxed opacity-90">
              I’m open to internships, research collaborations and roles in data science and cybersecurity. Drop
              me a message and I’ll get back to you.
            </p>
            <a href={`mailto:${profile.email}`} className="btn relative mt-8 self-start rounded-full border-0 bg-white text-primary hover:bg-white/90">
              <MailIcon /> Say hello
            </a>
          </div>

          <ul className="divide-y divide-base-300 p-4 sm:p-6">
            {items.map(({ icon: Icon, label, value, href, copy, external }) => (
              <li key={label} className="flex items-center gap-4 py-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold tracking-wider text-base-content/50 uppercase">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                      className="link-hover font-medium break-all"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="font-medium">{value}</p>
                  )}
                </div>
                {copy && <CopyButton value={copy} label={label} />}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
