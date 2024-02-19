// AboutUs.js

import React from 'react';
import '../AboutUs.css'; // Import the corresponding CSS file
import logo from "./img/logo.png"

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <header className='center'>
        <h1>About Us</h1>
      </header>

      <section className="mission-section">
        <h2>Our Mission</h2>
        <p>
          At <span className="website-name">[Your Movie Review Website Name]</span>, we are dedicated to creating a seamless and enjoyable movie review experience for every film enthusiast.
        </p>
      </section>

      <section className="team-section">
        <h2>The Sigma Team</h2>
        <img src={logo} alt="Sigma Developers Logo" />
        <p>
          <span className="highlight">Sigma Developers</span> is a group of skilled and passionate developers committed to delivering high-quality web solutions.
        </p>
      </section>

      <section className="expertise-section">
        <h2>Our Expertise</h2>
        <p>
          We specialize in <span className="highlight">web development</span>, leveraging the latest technologies to create dynamic and user-friendly websites.
        </p>
      </section>

      <section className="sets-apart-section">
        <h2>What Sets Us Apart</h2>
        <ul>
          <li><strong>Innovative Solutions:</strong> We believe in pushing boundaries and implementing <span className="highlight">cutting-edge solutions</span>.</li>
          <li><strong>User-Centric Design:</strong> Prioritizing a <span className="highlight">user-friendly interface</span> for easy navigation and interaction.</li>
          <li><strong>Passion for Movies:</strong> Our team is not just about coding; we are genuine <span className="highlight">movie enthusiasts</span>.</li>
        </ul>
      </section>

      <section className="contact-section">
        <h2>Get In Touch</h2>
        <p>
          We value your feedback and suggestions. If you have any inquiries or just want to share your thoughts, feel free to <a href="/contact" className="contact-link">contact us</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
