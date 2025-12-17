const Services = () => {
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
    <div className="page-wrapper">
      <section className="services-hero">
        <h1>Our Service <span>Categories</span></h1>
        <p>Explore the areas where you can make a meaningful impact and connect with your community.</p>
      </section>

      <main className="container my-5">
        {services.map((service, index) => (
          <section key={index} className={`service-section ${index % 2 !== 0 ? 'reverse' : ''}`}>
            <div className="image-wrapper">
              <img src={service.image} alt={service.title} />
            </div>
            <div className="text-card">
              <h2>
                <i className={`fas ${service.icon}`}></i>
                {service.title}
              </h2>
              <p>{service.description}</p>
              <a href="#" className="btn-find-projects">
                Find Projects
                <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Services;