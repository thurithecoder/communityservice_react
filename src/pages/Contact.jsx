import { useState } from 'react';

const Contact = () => {
  const [activeFAQ, setActiveFAQ] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '', subject: '', message: ''
  });

  const contactInfo = [
    { icon: 'fa-map-marker-alt', title: 'Visit Us', content: 'Lincoln Institute of Higher Education<br/>123 Education Street<br/>Metro City, MC 12345' },
    { icon: 'fa-phone-alt', title: 'Call Us', content: 'Office: <a href="tel:+15551234567">+1 (555) 123-4567</a>' },
    { icon: 'fa-envelope', title: 'Email Us', content: 'General: <a href="mailto:info@liheconnect.org">info@liheconnect.org</a>' },
    { icon: 'fa-clock', title: 'Office Hours', content: 'Mon - Fri: 9:00 AM - 5:00 PM' }
  ];

  const faqItems = [
    { question: 'How do I register as a volunteer?', answer: 'Click the "Volunteer" button in the navigation menu to start your registration.' },
    { question: 'Are the service opportunities verified?', answer: 'Yes! We carefully vet all partner organizations.' },
    { question: 'Can I get service hours verified?', answer: 'Absolutely! All completed service hours can be verified.' },
    { question: 'Is there a fee?', answer: 'No! LIHE Community Connect is completely free.' }
  ];

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message!');
    setFormData({ firstName: '', lastName: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="page-wrapper">
      <section className="contact-hero">
        <h1>Get In <span>Touch</span></h1>
        <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="contact-info">
                {contactInfo.map((info, index) => (
                  <div key={index} className="info-card">
                    <div className="info-icon"><i className={`fas ${info.icon}`}></i></div>
                    <div className="info-content">
                      <h3>{info.title}</h3>
                      <p dangerouslySetInnerHTML={{ __html: info.content }}></p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-8">
              <div className="contact-form-container">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleFormSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input type="text" placeholder="First Name *" required
                        value={formData.firstName} onChange={e => setFormData({ ...formData, firstName: e.target.value })} />
                    </div>
                    <div className="col-md-6">
                      <input type="text" placeholder="Last Name *" required
                        value={formData.lastName} onChange={e => setFormData({ ...formData, lastName: e.target.value })} />
                    </div>
                  </div>
                  <input type="email" placeholder="Email Address *" required
                    value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} />
                  <textarea placeholder="Message *" rows="4" required
                    value={formData.message} onChange={e => setFormData({ ...formData, message: e.target.value })}></textarea>
                  <button type="submit" className="submit-btn">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked <span>Questions</span></h2>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              {faqItems.map((item, index) => (
                <div key={index} className={`faq-item ${activeFAQ === index ? 'active' : ''}`} style={{ marginBottom: '15px', background: '#1a1a1a', borderRadius: '10px' }}>
                  <div className="faq-question" onClick={() => setActiveFAQ(activeFAQ === index ? -1 : index)} style={{ padding: '20px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}>
                    {item.question} <i className={`fas fa-chevron-${activeFAQ === index ? 'up' : 'down'}`}></i>
                  </div>
                  {activeFAQ === index && <div className="faq-answer" style={{ padding: '0 20px 20px', color: '#999' }}>{item.answer}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;