import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SITE_URL = 'https://iclapss.com'
const DEFAULT_IMAGE = `${SITE_URL}/images/team.png`

const seoByPath = {
  '/': {
    title: 'iClapss - Digital Marketing Agency | Grow Your Business Online',
    description: 'iClapss helps businesses grow with SEO, paid ads, social media, branding, and web development.'
  },
  '/services': {
    title: 'Digital Marketing Services | iClapss',
    description: 'Explore iClapss services: SEO, social media, paid advertising, content, development, and strategy.'
  },
  '/portfolio': {
    title: 'Portfolio & Case Studies | iClapss',
    description: 'See real client growth stories and campaign results delivered by iClapss.'
  },
  '/about': {
    title: 'About iClapss | Founded in 2024',
    description: 'Learn about iClapss, founded in 2024, led by CEO Sumit Chaskar, serving 40+ clients.'
  },
  '/contact': {
    title: 'Contact iClapss | Get in Touch',
    description: 'Contact iClapss via WhatsApp, phone, or email for your business growth enquiries.'
  },
  '/blog': {
    title: 'Digital Marketing Blog | iClapss',
    description: 'Read iClapss insights on SEO, paid ads, content strategy, and digital growth.'
  },
  '/industries': {
    title: 'Industries We Serve | iClapss',
    description: 'Discover industry-specific growth strategies delivered by iClapss.'
  },
  '/success': {
    title: 'Success Stories | iClapss',
    description: 'Explore iClapss success stories, proven strategies, and measurable growth outcomes.'
  },
  '/people': {
    title: 'Leadership & Team | iClapss',
    description: 'Meet iClapss leadership led by CEO Sumit Chaskar and our creative growth approach.'
  },
  '/pricing': {
    title: 'Pricing Plans | iClapss',
    description: 'View iClapss pricing options for digital marketing services and growth support.'
  }
}

const setOrCreateMeta = (attr, key, content) => {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

const SEOManager = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    const data = seoByPath[pathname] || {
      title: 'iClapss | Digital Marketing Agency',
      description: 'iClapss delivers SEO, performance marketing, content, and digital growth solutions.'
    }

    const canonicalUrl = `${SITE_URL}${pathname}`

    document.title = data.title
    setOrCreateMeta('name', 'description', data.description)
    setOrCreateMeta('property', 'og:title', data.title)
    setOrCreateMeta('property', 'og:description', data.description)
    setOrCreateMeta('property', 'og:type', 'website')
    setOrCreateMeta('property', 'og:url', canonicalUrl)
    setOrCreateMeta('property', 'og:image', DEFAULT_IMAGE)
    setOrCreateMeta('name', 'twitter:card', 'summary_large_image')
    setOrCreateMeta('name', 'twitter:title', data.title)
    setOrCreateMeta('name', 'twitter:description', data.description)
    setOrCreateMeta('name', 'twitter:image', DEFAULT_IMAGE)

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', canonicalUrl)
  }, [pathname])

  return null
}

export default SEOManager

