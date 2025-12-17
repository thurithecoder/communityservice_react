import { useEffect, useRef } from 'react';

const Home = () => {
  const galleryRef = useRef(null);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    const wrapper = wrapperRef.current;

    if (gallery && wrapper) {
      // Clone items for infinite scroll effect
      const items = Array.from(gallery.children);
      if (items.length > 0 && gallery.children.length === items.length) {
        items.forEach(item => {
          const clone = item.cloneNode(true);
          gallery.appendChild(clone);
        });
      }

      let isPaused = false;
      const scrollSpeed = 0.8;
      let animationId;
      gallery.scrollLeft = gallery.scrollWidth / 4; // Start in middle

      const animateScroll = () => {
        if (!isPaused && gallery) {
          gallery.scrollLeft += scrollSpeed;
          // Reset when reached the end of the first set
          if (gallery.scrollLeft >= gallery.scrollWidth / 2) {
            gallery.scrollLeft = 0;
          }
        }
        animationId = requestAnimationFrame(animateScroll);
      };

      const pause = () => { isPaused = true; };
      const play = () => { isPaused = false; };

      wrapper.addEventListener('mouseenter', pause);
      wrapper.addEventListener('mouseleave', play);
      animationId = requestAnimationFrame(animateScroll);

      return () => {
        cancelAnimationFrame(animationId);
        wrapper.removeEventListener('mouseenter', pause);
        wrapper.removeEventListener('mouseleave', play);
      };
    }
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero" id="home">
        {/* RESTORED BACKGROUND ELEMENTS */}
        <img src="/bg/au_map.svg" alt="Australia Map" className="hero-bg-map" />
        <div className="hero-bg-bottom-left"></div>
        <div className="hero-bg-bottom-right"></div>

        <div className="hero-content">
          <h1><span className="red-title">Serve the Community,</span> Enhance The Learning</h1>
          <h3 className="subtitle">A Hub for Lincoln Institute Students to Find Meaningful Community Service Projects.</h3>
        </div>

        {/* Main Overlay Image */}
        <img src="/Images/overlay_nobg.png" alt="Students engaging in community service" className="hero-overlay-img" />

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
              <li>Find projects tailored to your field of study.</li>
              <li>Gain practical experience and develop new skills.</li>
              <li>Make a tangible difference in the local community.</li>
              <li>Fulfill your community service subject requirements.</li>
            </ul>
          </div>

          {/* Image Gallery / Slider */}
          <div ref={wrapperRef} className="gallery-wrapper">
            <div ref={galleryRef} className="hero-image-gallery">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <div key={num} className="gallery-item">
                  <img src={`/Images/scroll (${num}).jpg`} alt="Community Engagement" />
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
            {[
              { icon: 'fa-brain', title: 'Mental Health & Wellbeing' },
              { icon: 'fa-briefcase-medical', title: 'Public Health Initiatives' },
              { icon: 'fa-hands-helping', title: 'Social & Community Aid' },
              { icon: 'fa-wheelchair', title: 'Disability Support' },
              { icon: 'fa-leaf', title: 'Environmental Conservation' },
              { icon: 'fa-graduation-cap', title: 'Youth & Education' }
            ].map((item, index) => (
              <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2">
                <div className="event-card">
                  <div className="icon-wrapper"><i className={`fas ${item.icon}`}></i></div>
                  <h3>{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT PREVIEW SECTION */}
      <section className="contact" id="contact-preview">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <h2>Connect With <span>An Opportunity</span></h2>
          <p>Ready to start your community service journey? Fill out the form below to get connected with relevant organizations and projects.</p>
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-6">
              <form onSubmit={(e) => e.preventDefault()}>
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
    </>
  );
};

export default Home;