import { useState, useEffect } from 'react'

const Home = ({ navScrolled, setNavScrolled, menuActive, setMenuActive, heroScrolled, setHeroScrolled }) => {
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
  }, [setNavScrolled, setHeroScrolled])

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
    <>
      {/* Header/Navbar */}
      <header className={`navbar ${navScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="Images/logo-lihe.png" alt="LIHE Logo" />
        </div>
        <button className={`menu-toggle ${menuActive ? 'active' : ''}`} aria-label="Toggle Menu" onClick={() => setMenuActive(!menuActive)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={menuActive ? 'active' : ''}>
          <ul>
            <li><a href="/" className="active">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Service</a></li>
            <li><a href="/news">News</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="nav-buttons">
          <button className="volunteer">Volunteer</button>
          <button className="donate">Donate!</button>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <img src="bg/au_map.svg" alt="Australia Map" className="hero-bg-map" />
        <div className="hero-bg-bottom-left"></div>
        <div className="hero-bg-bottom-right"></div>

        <div className="hero-content">
          <h1><span className="red-title">Serve the Community,</span> Enhance The Learning</h1>
          <h3 className="subtitle">A Hub for Lincoln Institute Students to Find Meaningful Community Service Projects.</h3>
        </div>

        <img src="Images/overlay_nobg.png" alt="Students engaging in community service" className="hero-overlay-img" />

        <div className="left-content">
          <p>Welcome to LIHE Community Connect, your dedicated platform for discovering community service opportunities that align with your goals.</p>
          <a href="#about" className="read-more">Read More</a>
        </div>
        <div className="right-content">
          <div className="social-icons">
            <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
            <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
            <a href="#" aria-label="Whatsapp"><i className="fab fa-whatsapp"></i></a>
          </div>
          <div className="icon-feature">
            <i className="fas fa-heart"></i>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about" id="about">
        <div className="about-content-wrapper">
          <div className="about-text-content">
            <h2>Fulfilling a Need, <span>Building a Future</span></h2>
            <p>LIHE Community Connect is a student-focused initiative designed to bridge the gap between academic learning and practical community service. We understand the importance of finding relevant projects for your coursework. Our mission is to connect you with a diverse range of organizations and initiatives where you can contribute meaningfully.</p>
            <ul>
              <li>✔ Find projects tailored to your field of study.</li>
              <li>✔ Gain practical experience and develop new skills.</li>
              <li>✔ Make a tangible difference in the local community.</li>
              <li>✔ Fulfill your community service subject requirements.</li>
            </ul>
          </div>

          {/* Image Gallery / Slider */}
          <div id="gallery-wrapper" className="gallery-wrapper">
            <div id="hero-image-gallery" className="hero-image-gallery">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="gallery-item">
                  <img src={`Images/scroll (${num}).jpg`} alt="Community Engagement" />
                  <div className="gallery-overlay"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="events" id="projects">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <h2>Find Your <span>Project</span></h2>
          <div className="row g-3 g-md-4 mt-4">
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="event-card">
                <div className="icon-wrapper"><i className="fas fa-brain"></i></div>
                <h3>Mental Health & Wellbeing</h3>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="event-card">
                <div className="icon-wrapper"><i className="fas fa-briefcase-medical"></i></div>
                <h3>Public Health Initiatives</h3>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="event-card">
                <div className="icon-wrapper"><i className="fas fa-hands-helping"></i></div>
                <h3>Social & Community Aid</h3>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="event-card">
                <div className="icon-wrapper"><i className="fas fa-wheelchair"></i></div>
                <h3>Disability Support</h3>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="event-card">
                <div className="icon-wrapper"><i className="fas fa-leaf"></i></div>
                <h3>Environmental Conservation</h3>
              </div>
            </div>
            <div className="col-6 col-md-4 col-lg-3 col-xl-2">
              <div className="event-card">
                <div className="icon-wrapper"><i className="fas fa-graduation-cap"></i></div>
                <h3>Youth & Education</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <h2>Connect With <span>An Opportunity</span></h2>
          <p>Ready to start your community service journey? Fill out the form below to get connected with relevant organizations and projects.</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <form action="#" method="POST">
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your LIHE Email" required />
                <input type="text" name="study_field" placeholder="Your Field of Study" required />
                <textarea name="message" rows="4" placeholder="Tell us about your interests and project requirements"></textarea>
                <button type="submit">Find My Project</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="Images/LOGO.png" alt="LIHE Sydney Logo" />
          <h3>LINCOLN STUDENTS COMMUNITY</h3>
        </div>
        <p className="footer-copyright">© 2025 Lincoln Institute of Higher Education. All Rights Reserved.</p>
        <div className="social">
          <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
          <a href="#" aria-label="Whatsapp"><i className="fab fa-whatsapp"></i></a>
        </div>
      </footer>
    </>
  )
}

export default Home
