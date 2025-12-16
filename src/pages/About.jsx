import { useState, useEffect } from 'react';

const About = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & Director',
      description: 'Passionate about connecting students with meaningful opportunities to make a difference.'
    },
    {
      name: 'Michael Chen',
      role: 'Community Coordinator',
      description: 'Building bridges between students and organizations for maximum impact.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Student Outreach Lead',
      description: 'Helping students find their perfect community service match.'
    },
    {
      name: 'David Thompson',
      role: 'Tech & Operations',
      description: 'Ensuring our platform runs smoothly to serve students and partners.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Active Volunteers' },
    { number: '150+', label: 'Partner Organizations' },
    { number: '10k+', label: 'Service Hours' },
    { number: '95%', label: 'Student Satisfaction' }
  ];

  return (
    <div className="min-h-screen bg-black">
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
            <li><a href="/about" className="active">About</a></li>
            <li><a href="/services">Service</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
        <div className="nav-buttons">
          <button className="volunteer">Volunteer</button>
          <button className="donate">Donate!</button>
        </div>
      </header>

      {/* About Hero Section */}
      <section className="about-hero">
        <h1>Empowering Students Through <span>Community Service</span></h1>
        <p>We're dedicated to bridging the gap between academic learning and meaningful community engagement, creating opportunities that transform both students and communities.</p>
      </section>

      {/* Mission Vision Values */}
      <section className="mvv-section">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <h2 className="section-title">Our <span>Foundation</span></h2>
          <div className="mvv-grid">
            <div className="mvv-card">
              <div className="mvv-icon">
                <i className="fas fa-bullseye"></i>
              </div>
              <h3>Mission</h3>
              <p>To connect Lincoln Institute students with meaningful community service opportunities that enhance their learning experience while making a positive impact on society.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">
                <i className="fas fa-eye"></i>
              </div>
              <h3>Vision</h3>
              <p>To be the leading platform that transforms student volunteers into community leaders through accessible, impactful service projects aligned with their educational goals.</p>
            </div>
            <div className="mvv-card">
              <div className="mvv-icon">
                <i className="fas fa-heart"></i>
              </div>
              <h3>Values</h3>
              <p>Integrity, compassion, collaboration, and excellence guide every connection we make between students and community organizations seeking positive change.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <h2 className="section-title">Our <span>Impact</span></h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <div className="story-content">
            <div className="story-text">
              <h2>Our <span>Story</span></h2>
              <p>LIHE Community Connect was born from a simple observation: students needed a better way to find community service opportunities that aligned with their studies and career aspirations.</p>
              <p>What started as a small initiative by a group of passionate Lincoln Institute students has grown into a thriving platform that connects hundreds of students with organizations making real change in our communities.</p>
              <p>Today, we're proud to be the bridge between academic excellence and community impact, helping students discover their potential while serving those in need.</p>
            </div>
            <div className="story-image">
              <img src="/Images/volunteers.jpg" alt="Our Story" />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <h2 className="section-title">Meet Our <span>Team</span></h2>
          <div className="row g-4 mt-3">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="team-card">
                  <div className="team-img">
                    <i className="fas fa-user-circle"></i>
                  </div>
                  <div className="team-info">
                    <h4>{member.name}</h4>
                    <p className="role">{member.role}</p>
                    <p>{member.description}</p>
                    <div className="team-social">
                      <a href="#"><i className="fab fa-linkedin"></i></a>
                      <a href="#"><i className="fab fa-twitter"></i></a>
                      <a href="#"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

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
        .about-hero {
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
        }

        .about-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 0, 0, 0.1), transparent);
          border-radius: 50%;
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .about-hero h1 {
          font-size: clamp(2.2rem, 5vw, 3.5rem);
          margin-bottom: 1rem;
          color: white;
          position: relative;
          z-index: 1;
        }

        .about-hero h1 span {
          color: #ff0000;
        }

        .about-hero p {
          font-size: clamp(1rem, 2vw, 1.2rem);
          color: #999;
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          line-height: 1.6;
        }

        .mvv-section {
          padding: 80px 0;
          background: #0a0a0a;
        }

        .mvv-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
          margin-top: 40px;
        }

        .mvv-card {
          background: linear-gradient(145deg, #1a1a1a, #0f0f0f);
          border: 1px solid #333;
          border-radius: 15px;
          padding: 40px;
          text-align: center;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          flex: 1 1 300px;
        }

        .mvv-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 4px;
          background: linear-gradient(90deg, #ff0000, #cc0000);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }

        .mvv-card:hover::before {
          transform: scaleX(1);
        }

        .mvv-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(255, 0, 0, 0.2);
        }

        .mvv-icon {
          font-size: clamp(2.5rem, 5vw, 3rem);
          color: #ff0000;
          margin-bottom: 20px;
        }

        .mvv-card h3 {
          font-size: clamp(1.4rem, 3vw, 1.8rem);
          margin-bottom: 15px;
          color: white;
        }

        .mvv-card p {
          color: #999;
          line-height: 1.8;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
        }

        .section-title {
          text-align: center;
          font-size: clamp(2rem, 4vw, 2.5rem);
          margin-bottom: 50px;
          color: white;
        }

        .section-title span {
          color: #ff0000;
        }

        .stats-section {
          padding: 80px 0;
          background: #0a0a0a;
        }

        .stats-grid {
          display: flex;
          flex-wrap: wrap;
          gap: 40px;
          text-align: center;
          justify-content: center;
        }

        .stat-card {
          padding: 30px;
          flex: 1 1 200px;
          min-width: 180px;
        }

        .stat-number {
          font-size: clamp(2.5rem, 5vw, 3.5rem);
          font-weight: 700;
          color: #ff0000;
          margin-bottom: 10px;
        }

        .stat-label {
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          color: #999;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .story-section {
          padding: 80px 0;
          background: radial-gradient(circle at top right, #2a0000, #000000);
        }

        .story-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          gap: 60px;
          align-items: center;
        }

        .story-text {
          flex: 1 1 400px;
        }

        .story-text h2 {
          font-size: clamp(2rem, 4vw, 2.5rem);
          margin-bottom: 25px;
          color: white;
        }

        .story-text h2 span {
          color: #ff0000;
        }

        .story-text p {
          color: #999;
          line-height: 1.8;
          margin-bottom: 20px;
        }

        .story-image {
          position: relative;
          flex: 1 1 400px;
        }

        .story-image img {
          width: 100%;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(255, 0, 0, 0.2);
        }

        .team-section {
          padding: 80px 0;
          background: radial-gradient(circle at center, #2a0000, #000000);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 35px;
          margin-top: 50px;
        }

        .team-card {
          background: #1a1a1a;
          border-radius: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
          border: 1px solid #333;
        }

        .team-card:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 30px rgba(255, 0, 0, 0.3);
        }

        .team-img {
          width: 100%;
          height: 300px;
          background: linear-gradient(135deg, #2a2a2a, #1a1a1a);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .team-img i {
          font-size: 5rem;
          color: #ff0000;
          opacity: 0.3;
        }

        .team-info {
          padding: 25px;
          text-align: center;
        }

        .team-info h4 {
          font-size: 1.4rem;
          margin-bottom: 8px;
          color: white;
        }

        .team-info .role {
          color: #ff0000;
          font-size: 0.95rem;
          margin-bottom: 15px;
          font-weight: 500;
        }

        .team-info p {
          color: #999;
          font-size: 0.9rem;
          line-height: 1.6;
        }

        .team-social {
          display: flex;
          gap: 15px;
          justify-content: center;
          margin-top: 15px;
        }

        .team-social a {
          color: #999;
          font-size: 1.1rem;
          transition: color 0.3s ease;
        }

        .team-social a:hover {
          color: #ff0000;
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 60px 5% 50px;
            min-height: 300px;
          }

          .about-hero h1 {
            font-size: clamp(1.8rem, 5vw, 2.5rem);
          }

          .mvv-grid {
            gap: 20px;
          }

          .mvv-card {
            padding: 30px 20px;
          }

          .stat-card {
            padding: 20px;
          }

          .team-img {
            height: 250px;
          }

          .team-img i {
            font-size: 3.5rem;
          }

          .story-content {
            gap: 30px;
          }

          .story-text,
          .story-image {
            flex: 1 1 100%;
          }
        }

        @media (max-width: 600px) {
          .about-hero {
            padding: 50px 4% 40px;
          }

          .about-hero h1 {
            font-size: clamp(1.5rem, 5vw, 2.2rem);
          }

          .section-title {
            font-size: clamp(1.6rem, 4vw, 2rem);
            margin-bottom: 30px;
          }

          .mvv-card {
            padding: 25px 15px;
            flex: 1 1 100%;
          }

          .mvv-icon {
            font-size: clamp(1.8rem, 5vw, 2.2rem);
          }

          .stat-card {
            padding: 15px 10px;
          }

          .team-img {
            height: 200px;
          }

          .team-img i {
            font-size: 3rem;
          }

          .team-info {
            padding: 18px 15px;
          }

          .team-info h4 {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          .about-hero {
            padding: 45px 3% 35px;
          }

          .about-hero h1 {
            font-size: clamp(1.3rem, 5vw, 1.9rem);
          }

          .mvv-card {
            padding: 20px 12px;
          }

          .stat-card {
            padding: 12px 8px;
          }

          .team-img {
            height: 180px;
          }

          .team-img i {
            font-size: 2.5rem;
          }

          .team-info {
            padding: 15px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
