import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'

function App() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [menuActive, setMenuActive] = useState(false)
  const [heroScrolled, setHeroScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Navbar scroll state
      if (window.scrollY > 50) {
        setNavScrolled(true)
      } else {
        setNavScrolled(false)
      }

      // Hero background animations
      if (window.scrollY > 100) {
        setHeroScrolled(true)
      } else {
        setHeroScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    // Apply scroll classes to hero elements
    const hero = document.querySelector('.hero')
    const heroMap = document.querySelector('.hero-bg-map')
    const heroBottomLeft = document.querySelector('.hero-bg-bottom-left')
    const heroBottomRight = document.querySelector('.hero-bg-bottom-right')

    if (heroScrolled) {
      hero?.classList.add('scrolled')
      heroMap?.classList.add('scrolled')
      heroBottomLeft?.classList.add('scrolled')
      heroBottomRight?.classList.add('scrolled')
    } else {
      hero?.classList.remove('scrolled')
      heroMap?.classList.remove('scrolled')
      heroBottomLeft?.classList.remove('scrolled')
      heroBottomRight?.classList.remove('scrolled')
    }
  }, [heroScrolled])

  useEffect(() => {
    // Gallery auto-scroll
    const galleryWrapper = document.getElementById('gallery-wrapper')
    const gallery = document.getElementById('hero-image-gallery')

    if (gallery && galleryWrapper) {
      let isPaused = false
      const scrollSpeed = 0.8
      let animationId

      // Clear any existing clones first
      const existingItems = gallery.querySelectorAll('.gallery-item')
      const originalCount = existingItems.length

      // Only add clones once
      if (gallery.children.length === originalCount) {
        const images = Array.from(gallery.children).slice(0, originalCount)
        images.forEach(image => {
          const clone = image.cloneNode(true)
          gallery.appendChild(clone)
        })
      }

      gallery.scrollLeft = gallery.scrollWidth / 2

      const animateScroll = () => {
        if (!isPaused && gallery) {
          gallery.scrollLeft -= scrollSpeed
          if (gallery.scrollLeft <= 0) {
            gallery.scrollLeft = gallery.scrollWidth / 2
          }
        }
        animationId = requestAnimationFrame(animateScroll)
      }

      galleryWrapper.addEventListener('mouseenter', () => {
        isPaused = true
      })
      galleryWrapper.addEventListener('mouseleave', () => {
        isPaused = false
      })

      animationId = requestAnimationFrame(animateScroll)

      return () => {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home navScrolled={navScrolled} setNavScrolled={setNavScrolled} menuActive={menuActive} setMenuActive={setMenuActive} heroScrolled={heroScrolled} setHeroScrolled={setHeroScrolled} />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  )
}

export default App
