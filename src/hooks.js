import { useEffect, useRef, useState } from 'react'

// Adds `is-visible` to every `.reveal` element when it scrolls into view.
export function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// Returns the id of the section currently in view.
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id))
      },
      { rootMargin: '-45% 0px -50% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])
  return active
}

export function useScrolled(offset = 40) {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [offset])
  return scrolled
}

// Cycles through words with a typewriter effect.
export function useTypewriter(words, { typeMs = 80, deleteMs = 40, holdMs = 1800 } = {}) {
  const [text, setText] = useState('')
  const state = useRef({ word: 0, deleting: false })

  useEffect(() => {
    const { word, deleting } = state.current
    const full = words[word]
    let delay = deleting ? deleteMs : typeMs

    if (!deleting && text === full) delay = holdMs
    else if (deleting && text === '') delay = 300

    const t = setTimeout(() => {
      if (!deleting && text === full) {
        state.current.deleting = true
        setText(full.slice(0, -1))
      } else if (deleting && text === '') {
        state.current = { word: (word + 1) % words.length, deleting: false }
        setText(words[(word + 1) % words.length].slice(0, 1))
      } else {
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1))
      }
    }, delay)
    return () => clearTimeout(t)
  }, [text, words, typeMs, deleteMs, holdMs])

  return text
}

export function useTheme() {
  const [theme, setTheme] = useState(
    () => document.documentElement.getAttribute('data-theme') || 'night',
  )
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // storage unavailable — theme just won't persist
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'night' ? 'light' : 'night'))]
}
