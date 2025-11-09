import React, { useState, useEffect } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [status, setStatus] = useState({
    loading: false,
    error: '',
    success: ''
  });

  // handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setStatus({ loading: false, error: '', success: '' });
  };

  // email validation function
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    // Frontend validation
    if (!name || !email || !message) {
      setStatus({
        loading: false,
        error: 'Please fill all required fields (*)',
        success: ''
      });
      return;
    }

    if (!validateEmail(email)) {
      setStatus({
        loading: false,
        error: 'Please enter a valid email address.',
        success: ''
      });
      return;
    }

    setStatus({ loading: true, error: '', success: '' });

    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, phone, message })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('✅ API Response:', data);

        // reset form and show success message
        setFormData({ name: '', email: '', phone: '', message: '' });
        setStatus({
          loading: false,
          error: '',
          success: '✅ Form Submitted Successfully!'
        });
      } else {
        const errText = await response.text();
        console.error('❌ Server Error:', errText);
        setStatus({
          loading: false,
          error: '❌ Failed to submit the form. Please try again.',
          success: ''
        });
      }
    } catch (err) {
      console.error('⚠️ Network Error:', err);
      setStatus({
        loading: false,
        error: '⚠️ Something went wrong. Please check your connection and try again.',
        success: ''
      });
    }
  };

  // fade out messages automatically after a few seconds
  useEffect(() => {
    if (status.error || status.success) {
      const timer = setTimeout(() => {
        setStatus((prev) => ({ ...prev, error: '', success: '' }));
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [status.error, status.success]);

  return (
    <div className="contact-section">
      <div className="contact-content">
        <h4>
          Whether you have an idea, a question, or simply want to explore how V can work together, V’re just a message away.
          <br />
          Let’s catch up over coffee. Great stories always begin with a good conversation.
        </h4>
      </div>

      <div className="contact-main">
        <h1>Join the Story</h1>
        <h4>Ready to bring your vision to life? Let's talk</h4>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your name*"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Your mail*"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <textarea
            name="message"
            cols="30"
            rows="6"
            placeholder="Your message*"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          {status.error && <p className="error-message">{status.error}</p>}
          {status.success && <p className="success-message">{status.success}</p>}

          <div>
            <button type="submit" className="form-button" disabled={status.loading}>
              {status.loading ? 'Submitting…' : 'Submit'}
            </button>
          </div>

          <p className="form-addres-phone">
            vernita@varnanfilms.co.in <span>|</span> +91 9873684567
          </p>
        </form>
      </div>

      <div className="contact-header">
        <img src="/contact/Footer Vector.png" alt="footer vector" />
      </div>

      <div className="contact-footer">
        <img src="/contact/Footer Vector.png" alt="footer vector" />
      </div>
    </div>
  );
}

export default Contact;
