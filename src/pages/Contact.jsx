import { useState, useEffect } from 'react';

const Contact = () => {
  const [navScrolled, setNavScrolled] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: 'fa-map-marker-alt',
      title: 'Visit Us',
      content: 'Lincoln Institute of Higher Education<br/>123 Education Street<br/>Metro City, MC 12345'
    },
    {
      icon: 'fa-phone-alt',
      title: 'Call Us',
      content: 'Office: <a href="tel:+15551234567">+1 (555) 123-4567</a><br/>Hotline: <a href="tel:+15559876543">+1 (555) 987-6543</a>'
    },
    {
      icon: 'fa-envelope',
      title: 'Email Us',
      content: 'General: <a href="mailto:info@liheconnect.org">info@liheconnect.org</a><br/>Support: <a href="mailto:support@liheconnect.org">support@liheconnect.org</a>'
    },
    {
      icon: 'fa-clock',
      title: 'Office Hours',
      content: 'Monday - Friday: 9:00 AM - 5:00 PM<br/>Saturday: 10:00 AM - 2:00 PM<br/>Sunday: Closed'
    }
  ];

  const faqItems = [
    {
      question: 'How do I register as a volunteer?',
      answer: 'Click the "Volunteer" button in the navigation menu to start your registration. You\'ll need to create an account, complete your profile, and browse available service opportunities that match your interests.'
    },
    {
      question: 'Are the service opportunities verified?',
      answer: 'Yes! We carefully vet all partner organizations to ensure they provide meaningful, legitimate service opportunities. Your safety and experience are our top priorities.'
    },
    {
      question: 'Can I get service hours verified for my coursework?',
      answer: 'Absolutely! All completed service hours through our platform can be verified and documented for your academic requirements. Organizations provide official verification upon completion.'
    },
    {
      question: 'How can my organization partner with LIHE Community Connect?',
      answer: 'We\'d love to partner with you! Please contact us using the form above or email us at partnerships@liheconnect.org with information about your organization and the service opportunities you can offer.'
    },
    {
      question: 'Is there a fee to use the platform?',
      answer: 'No! LIHE Community Connect is completely free for Lincoln Institute students. Our platform is funded to ensure all students have equal access to community service opportunities.'
    }
  ];

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

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
            <li><a href="/about">About</a></li>
            <li><a href="/services">Service</a></li>
            <li><a href="/contact" className="active">Contact</a></li>
          </ul>
        </nav>
        <div className="nav-buttons">
          <button className="volunteer">Volunteer</button>
          <button className="donate">Donate!</button>
        </div>
      </header>

      {/* Contact Hero Section */}
      <section className="contact-hero">
        <h1>Get In <span>Touch</span></h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </section>

      {/* Contact Main Section */}
      <section className="contact-main">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <div className="row g-4 g-lg-5">
            {/* Contact Information */}
            <div className="col-lg-5 col-xl-4">
              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon">
                      <i className={`fas ${info.icon}`}></i>
                    </div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: info.content }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-7 col-xl-8">
              <div className="contact-form-container">
                <h2>Send Us a Message</h2>
                <p className="subtitle">Fill out the form below and we'll get back to you within 24 hours.</p>
                <form onSubmit={handleFormSubmit}>
                  <div className="row g-3 g-md-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstName">First Name *</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName" 
                          value={formData.firstName}
                          onChange={handleFormChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastName">Last Name *</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName" 
                          value={formData.lastName}
                          onChange={handleFormChange}
                          required 
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row g-3 g-md-4">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">Email Address *</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          value={formData.email}
                          onChange={handleFormChange}
                          required 
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone" 
                          value={formData.phone}
                          onChange={handleFormChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="subject">Subject *</label>
                    <select 
                      id="subject" 
                      name="subject" 
                      value={formData.subject}
                      onChange={handleFormChange}
                      required
                    >
                      <option value="">Select a subject</option>
                      <option value="volunteer">Volunteer Inquiry</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="general">General Question</option>
                      <option value="support">Technical Support</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      value={formData.message}
                      onChange={handleFormChange}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <h2>Find <span>Our Location</span></h2>
          <div className="row justify-content-center">
            <div className="col-12 col-xl-10">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.5287887916247!2d151.20668631521207!3d-33.87242838065046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae3f87654321%3A0x1234567890abcdef!2sLevel%208%2F175%20Liverpool%20St%2C%20Sydney%20NSW%202000%2C%20Australia!5e0!3m2!1sen!2sau!4v1699999999999!5m2!1sen!2sau"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="LIHE Location Map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container-fluid px-3 px-md-4 px-lg-5">
          <h2>Frequently Asked <span>Questions</span></h2>
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 col-xl-8">
              <div className="faq-container">
                {faqItems.map((item, index) => (
                  <div 
                    key={index} 
                    className={`faq-item ${activeFAQ === index ? 'active' : ''}`}
                  >
                    <div 
                      className="faq-question"
                      onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)}
                    >
                      <span>{item.question}</span>
                      <i className="fas fa-chevron-down"></i>
                    </div>
                    <div className="faq-answer">
                      <div className="faq-answer-content">{item.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
        .contact-hero {
          background: linear-gradient(165deg, #1a0000 0%, #000000 100%);
          padding: 100px 8% 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
          min-height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .contact-hero::before {
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

        .contact-hero h1 {
          font-size: clamp(2rem, 5vw, 3.2rem);
          margin-bottom: 1rem;
          color: white;
          position: relative;
          z-index: 1;
        }

        .contact-hero h1 span {
          color: #ff0000;
        }

        .contact-hero p {
          font-size: clamp(0.9rem, 2vw, 1.1rem);
          color: #999;
          max-width: 700px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
          line-height: 1.6;
        }

        .contact-main {
          padding: 80px 0;
          background: radial-gradient(circle at bottom left, #2a0000, #000000);
          margin-top: 100px;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 25px;
          height: 100%;
          max-width: 450px;
        }

        .info-card {
          background: linear-gradient(135deg, #1a1a1a, #0f0f0f);
          border: 1px solid #333;
          border-radius: 12px;
          padding: 30px;
          transition: all 0.3s ease;
          display: flex;
          align-items: flex-start;
          gap: 20px;
          flex: 1;
        }

        .info-card:hover {
          transform: translateX(10px);
          box-shadow: 0 10px 30px rgba(255, 0, 0, 0.2);
          border-color: #ff0000;
        }

        .info-icon {
          font-size: 2rem;
          color: #ff0000;
          min-width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255, 0, 0, 0.1);
          border-radius: 10px;
          flex-shrink: 0;
        }

        .info-content {
          flex: 1;
        }

        .info-content h3 {
          font-size: clamp(1.1rem, 2vw, 1.3rem);
          margin-bottom: 8px;
          color: white;
        }

        .info-content p {
          color: #999;
          line-height: 1.6;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
        }

        .info-content a {
          color: #ff0000;
          text-decoration: none;
          transition: color 0.3s ease;
          word-break: break-word;
        }

        .info-content a:hover {
          color: #cc0000;
          text-decoration: underline;
        }

        .contact-form-container {
          background: linear-gradient(145deg, #1a1a1a, #0a0a0a);
          border: 1px solid #333;
          border-radius: 15px;
          padding: 45px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .contact-form-container h2 {
          font-size: clamp(1.5rem, 3vw, 2rem);
          margin-bottom: 10px;
          color: white;
        }

        .contact-form-container .subtitle {
          color: #999;
          margin-bottom: 30px;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        .form-group {
          margin-bottom: 25px;
        }

        .form-group label {
          display: block;
          color: white;
          margin-bottom: 8px;
          font-weight: 500;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
          width: 100%;
          padding: 14px 18px;
          background: #0a0a0a;
          border: 1px solid #333;
          border-radius: 8px;
          color: white;
          font-size: clamp(0.85rem, 1.5vw, 0.95rem);
          font-family: 'Poppins', sans-serif;
          transition: all 0.3s ease;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
          outline: none;
          border-color: #ff0000;
          box-shadow: 0 0 0 3px rgba(255, 0, 0, 0.1);
        }

        .form-group textarea {
          resize: vertical;
          min-height: 140px;
        }

        .submit-btn {
          background: linear-gradient(135deg, #ff0000, #cc0000);
          color: white;
          border: none;
          padding: 15px 40px;
          border-radius: 8px;
          font-size: clamp(0.9rem, 1.5vw, 1rem);
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          text-transform: uppercase;
          letter-spacing: 1px;
          width: 100%;
          margin-top: 10px;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(255, 0, 0, 0.3);
        }

        .submit-btn:active {
          transform: translateY(0);
        }

        .map-section {
          padding: 80px 0;
          background: #0a0a0a;
        }

        .map-section h2 {
          text-align: center;
          font-size: clamp(2rem, 4vw, 2.5rem);
          margin-bottom: 40px;
          color: white;
        }

        .map-section h2 span {
          color: #ff0000;
        }

        .map-container {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 15px 50px rgba(255, 0, 0, 0.2);
          border: 1px solid #333;
        }

        .map-container iframe {
          width: 100%;
          height: 600px;
          border: none;
          display: block;
        }

        .faq-section {
          padding: 80px 0;
          background: radial-gradient(circle at top, #2a0000, #000000);
        }

        .faq-section h2 {
          text-align: center;
          font-size: clamp(2rem, 4vw, 2.5rem);
          margin-bottom: 50px;
          color: white;
        }

        .faq-section h2 span {
          color: #ff0000;
        }

        .faq-item {
          background: #1a1a1a;
          border: 1px solid #333;
          border-radius: 10px;
          margin-bottom: 15px;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .faq-item:hover {
          border-color: #ff0000;
        }

        .faq-question {
          padding: 25px 30px;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          color: white;
          font-weight: 600;
          font-size: clamp(0.9rem, 1.8vw, 1.05rem);
          transition: all 0.3s ease;
        }

        .faq-question:hover {
          color: #ff0000;
        }

        .faq-question i {
          color: #ff0000;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .faq-item.active .faq-question i {
          transform: rotate(180deg);
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-answer-content {
          padding: 0 30px 25px 30px;
          color: #999;
          line-height: 1.7;
          font-size: clamp(0.85rem, 1.5vw, 1rem);
        }

        .faq-item.active .faq-answer {
          max-height: 500px;
        }

        @media (max-width: 768px) {
          .contact-hero {
            padding: 60px 5% 50px;
          }

          .contact-hero h1 {
            font-size: clamp(1.8rem, 5vw, 2.5rem);
          }

          .contact-form-container {
            padding: 30px 20px;
          }

          .contact-form-container h2 {
            font-size: clamp(1.4rem, 3vw, 1.8rem);
          }

          .info-card {
            padding: 25px 20px;
          }

          .info-icon {
            min-width: 45px;
            height: 45px;
            font-size: 1.5rem;
          }

          .faq-question {
            padding: 20px;
          }

          .faq-answer-content {
            padding: 0 20px 20px 20px;
          }

          .map-container iframe {
            height: 350px;
          }
        }

        @media (max-width: 600px) {
          .contact-hero {
            padding: 50px 4% 40px;
          }

          .contact-hero h1 {
            font-size: clamp(1.5rem, 5vw, 2.2rem);
          }

          .contact-info {
            gap: 20px;
          }

          .info-card {
            padding: 22px 18px;
          }

          .contact-form-container {
            padding: 25px 18px;
          }

          .contact-form-container h2 {
            font-size: clamp(1.3rem, 3vw, 1.7rem);
          }

          .form-group input,
          .form-group textarea,
          .form-group select {
            padding: 12px 14px;
          }

          .map-section h2 {
            font-size: clamp(1.6rem, 4vw, 2.2rem);
          }

          .map-container iframe {
            height: 300px;
          }

          .faq-section h2 {
            font-size: clamp(1.6rem, 4vw, 2.2rem);
          }

          .faq-question {
            padding: 18px;
          }
        }

        @media (max-width: 480px) {
          .contact-hero {
            padding: 45px 3% 35px;
          }

          .contact-hero h1 {
            font-size: clamp(1.3rem, 5vw, 1.9rem);
          }

          .contact-main {
            padding: 40px 0;
          }

          .info-card {
            padding: 18px 15px;
            flex-direction: column;
            text-align: center;
          }

          .info-icon {
            min-width: 55px;
            height: 55px;
            font-size: 1.8rem;
          }

          .contact-form-container {
            padding: 20px 15px;
          }

          .contact-form-container h2 {
            font-size: clamp(1.2rem, 3vw, 1.6rem);
          }

          .form-group input,
          .form-group textarea,
          .form-group select {
            padding: 10px 12px;
          }

          .form-group textarea {
            min-height: 120px;
          }

          .map-section h2 {
            font-size: clamp(1.4rem, 4vw, 1.9rem);
          }

          .map-container iframe {
            height: 250px;
          }

          .faq-section h2 {
            font-size: clamp(1.4rem, 4vw, 1.9rem);
          }

          .faq-question {
            padding: 15px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
