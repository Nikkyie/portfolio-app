import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Initialize EmailJS (run once on component mount)
  React.useEffect(() => {
    emailjs.init('9q91x7ha2p0mJkr9k');
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      const result = await emailjs.send(
        'service_5qqw176',
        'template_602s1wp',
        {
          name: e.currentTarget.name.value,
          email: e.currentTarget.email.value,
          title: e.currentTarget.subject.value,
          message: e.currentTarget.message.value,
        }
      );

      setMessage('✓ Email sent successfully! Thank you for reaching out.');
      // e.currentTarget.reset();
      
      // Clear message after 5 seconds
      setTimeout(() => setMessage(''), 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setMessage('✗ Failed to send email. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      {/* <span className="section__subtitle">Get in Touch</span> */}

      <div className="contact__container container grid">
        <form className="contact__form" onSubmit={sendEmail}>
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            disabled={loading}
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            disabled={loading}
          />
          <input 
            type="text" 
            name="subject" 
            placeholder="Subject" 
            required 
            disabled={loading}
          />
          <textarea 
            name="message" 
            placeholder="Your Message" 
            required 
            disabled={loading}
          />
          <button 
            type="submit" 
            className="button" 
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
          {message && (
            <p className={`contact__message ${message.includes('successfully') ? 'success' : 'error'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;