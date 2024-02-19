// Contact.js

import React from 'react';
import '../Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <header>
        <h1>Contact Us</h1>
      </header>

      <section className="contact-info">
        <p>
          Have questions or suggestions? We'd love to hear from you! Reach out to us through the following contact methods:
        </p>
        <ul>
          <li>Email: <a href="mailto:info@example.com">darshansatpute123@gmail.com</a></li>
          <li>Phone: <span className="highlight">[770912XXXX]</span></li>
        </ul>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form className='contactpage'>
          <label htmlFor="name">Your Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Your Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Your Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
