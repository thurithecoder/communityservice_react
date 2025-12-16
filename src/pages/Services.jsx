import { useState, useEffect } from 'react';

const Services = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: 'Mental Health',
      icon: 'fa-brain',
      description: 'Provide support for initiatives focused on mental wellness, resilience, and stress reduction. Our projects include peer support groups, mindfulness workshops, and partnerships with local counseling services.',
      image: '/Images/mentalhealth.jpg'
    },
    {
      title: 'Public Health',
      icon: 'fa-briefcase-medical',
      description: 'Engage in projects that promote community health, from organizing blood drives and vaccination clinics to distributing health information. You\'ll work alongside health professionals to address public health challenges.',
      image: '/Images/services2.jpg'
    },
    {
      title: 'Community Aid',
      icon: 'fa-handshake-angle',
      description: 'Support vulnerable populations by volunteering at food banks, homeless shelters, and community centers. These projects provide immediate and direct assistance to those in need, fostering a stronger, more supportive community.',
      image: '/Images/services3.jpg'
    },
    {
      title: 'Disability Support',
      icon: 'fa-wheelchair',
      description: 'Champion inclusivity by assisting with programs for individuals with disabilities. This includes accessible sports events, skill-building workshops, and buddy programs, creating an equitable environment where everyone can thrive.',
      image: '/Images/services4.jpg'
    },
    {
      title: 'Environmental',
      icon: 'fa-leaf',
      description: 'Join our green initiatives to protect and preserve our natural environment. Participate in local park clean-ups, tree planting drives, community gardening, and recycling programs. Help us build a sustainable future.',
      image: '/Images/services5.jpg'
    },
    {
      title: 'Youth & Education',
      icon: 'fa-graduation-cap',
      description: 'Make a lasting impact by mentoring and tutoring local youth. Our education projects partner with schools and after-school programs to provide academic support, literacy help, and STEM workshops, empowering the next generation.',
      image: '/Images/services6.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Navbar */}
      <header className={`navbar ${navScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          <img src="/Images/logo-lihe.png" alt="LIHE Logo" />
        </div>
        <button className="menu-toggle" onClick={() => setMenuActive(!menuActive)} aria-label="Toggle Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={menuActive ? 'active' : ''}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services" className="active">Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="nav-buttons">
          <button className="volunteer">Volunteer</button>
          <button className="donate">Donate!</button>
        </div>
      </header>

      {/* Page Header */}
      <section className="services-hero">
        <h1>Our Service <span>Categories</span></h1>
        <p>Explore the areas where you can make a meaningful impact and connect with your community.</p>
      </section>

      {/* Services Container */}
      <main className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, index) => (
              <section key={index} className={`service-section ${index % 2 === 0 ? 'grid-normal' : 'grid-reverse'}`}>
                <div className="image-wrapper">
                  <img src={service.image} alt={service.title} />
                </div>
                <div className="text-card">
                  <h2>
                    <i className={`fas ${service.icon}`}></i>
                    {service.title}
                  </h2>
                  <p>{service.description}</p>
                  <a href="#" className="donate btn-find-projects">
                    Find Projects
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          <img src="/Images/LOGO.png" alt="LIHE Sydney Logo" />
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

      <style>{`
        .services-hero {
          background: linear-gradient(165deg, #1a0000 0%, #000000 100%);
          padding: 120px 8% 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 400px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .services-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 0, 0, 0.1), transparent);
          border-radius: 50%;
          pointer-events: none;
        }

        .services-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
          color: white;
          position: relative;
          z-index: 1;
        }

        .services-hero h1 span {
          color: #ff0000;
        }

        .services-hero p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #999;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          line-height: 1.6;
        }

        .service-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .service-section.grid-reverse {
          grid-template-columns: 1fr 1fr;
        }

        .service-section.grid-reverse .image-wrapper {
          order: 2;
        }

        .service-section.grid-reverse .text-card {
          order: 1;
        }

        .image-wrapper {
          width: 100%;
          height: 450px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 16px;
          background: #1a1a1a;
          border-radius: 16px;
          position: relative;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 12px;
          transition: transform 0.5s ease-in-out;
        }

        .image-wrapper:hover img {
          transform: scale(1.1);
        }

        .text-card {
          background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
          border: 1px solid #333;
          border-radius: 16px;
          padding: 48px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .text-card h2 {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: clamp(1.875rem, 3vw, 2.25rem);
          font-weight: bold;
          color: #ff0000;
          margin-bottom: 20px;
        }

        .text-card h2 i {
          font-size: 1em;
        }

        .text-card p {
          font-size: 1.125rem;
          color: #999;
          line-height: 1.75;
          margin-bottom: 32px;
        }

        .btn-find-projects {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 8px;
          font-size: 1rem;
          font-weight: 600;
          transform: translateY(0);
          transition: transform 0.3s ease;
          text-decoration: none;
        }

        .btn-find-projects:hover {
          transform: translateY(-4px);
        }

        .btn-find-projects i {
          transition: transform 0.3s ease;
        }

        .btn-find-projects:hover i {
          transform: translateX(4px);
        }

        @media (max-width: 768px) {
          .services-hero {
            padding: 60px 5% 50px;
          }

          .services-hero h1 {
            font-size: clamp(1.8rem, 5vw, 2.5rem);
          }

          .service-section {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .service-section.grid-reverse .image-wrapper {
            order: unset;
          }

          .service-section.grid-reverse .text-card {
            order: unset;
          }

          .image-wrapper {
            height: 300px;
          }

          .text-card {
            padding: 30px 20px;
          }

          .text-card h2 {
            font-size: clamp(1.5rem, 3vw, 2rem);
          }
        }

        @media (max-width: 600px) {
          .services-hero {
            padding: 50px 4% 40px;
          }

          .services-hero h1 {
            font-size: clamp(1.5rem, 5vw, 2.2rem);
          }

          .image-wrapper {
            height: 250px;
            padding: 12px;
          }

          .text-card {
            padding: 25px 15px;
          }

          .text-card h2 {
            font-size: clamp(1.2rem, 3vw, 1.8rem);
            gap: 10px;
          }

          .text-card p {
            font-size: 0.9rem;
          }

          .btn-find-projects {
            padding: 10px 20px;
            font-size: 0.9rem;
          }
        }

        @media (max-width: 480px) {
          .services-hero {
            padding: 45px 3% 35px;
          }

          .services-hero h1 {
            font-size: clamp(1.3rem, 5vw, 1.9rem);
          }

          .service-section {
            gap: 15px;
            padding: 0 3%;
          }

          .image-wrapper {
            height: 200px;
            padding: 10px;
          }

          .text-card {
            padding: 20px 12px;
          }

          .text-card h2 {
            font-size: clamp(1.1rem, 3vw, 1.6rem);
          }

          .btn-find-projects {
            padding: 8px 16px;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Services;
