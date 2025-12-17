import { useEffect } from 'react';

const About = () => {
  // We can remove navScrolled/menuActive state here since Navbar is now global

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
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
    <div className="about-page">
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
              {/* Ensure image path is correct relative to public folder */}
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
                      <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin"></i></a>
                      <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                      <a href="#" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;