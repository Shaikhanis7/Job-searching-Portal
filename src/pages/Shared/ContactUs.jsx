import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactUs = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '20px',
    backgroundColor: '#111',
    color: '#fff',
  };

  const infoStyle = {
    width: '30%',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  };

  const mapStyle = {
    width: '65%',
    height: '400px',
  };

  const cardStyle = {
    backgroundColor: '#222',
    padding: '20px',
    borderRadius: '8px',
  };

  const iconStyle = {
    marginRight: '10px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    transition: 'color 0.3s',
  };
  
  const headingStyle = {
    width: '100%',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: '2rem',
  };

  const arrowStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: '#fff',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    zIndex: 1000,
    animation: 'float 2s ease-in-out infinite', // Add this line
  };
  
  // Add this keyframes block inside a <style> tag or in your CSS file
  
  const styles = {
    '@keyframes float': {
      '0%, 100%': {
        transform: 'translateY(0)',
      },
      '50%': {
        transform: 'translateY(-10px)',
      },
    }
  };
  
  // You need to inject the keyframes into the component or add them to your CSS file
  
  

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    const name = event.target.elements.name.value.trim();
    const email = event.target.elements.email.value.trim();
    const number = event.target.elements.number.value.trim();
    const subject = event.target.elements.subject.value.trim();
    const message = event.target.elements.message.value.trim();
    const terms = event.target.elements.terms.checked;

    if (!name || !email || !number || !subject || !message) {
      toast.error('Please fill out all fields.');
      return;
    }

    if (!terms) {
      toast.error('You must agree to the terms and privacy policy.');
      return;
    }

    // Form is valid, handle form submission here
    toast.success('Your message has been sent successfully!');
    // You can reset the form or take other actions here if needed
  };

  return (
    <div>
      <div style={{ padding: '20px 0', backgroundColor: '#000', textAlign: 'center' }}>
        <h1 style={headingStyle}>Contact Us</h1>
      </div>
      <div style={containerStyle}>
        <div style={infoStyle}>
          <div style={cardStyle}>
            <h3><span style={iconStyle}>📍</span> Our location</h3>
            <p>275 Frank Tompa Drive, Waterloo, ON N2L 0A1, Canada</p>
          </div>
          <div style={cardStyle}>
            <h3><span style={iconStyle}>✉️</span> Email Us</h3>
            <p>
              <a
                href="mailto:727822tucs247@skct.edu.in"
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = 'blue'}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                727822tucs247@skct.edu.in
              </a>
            </p>
            <p>
              <a
                href="mailto:Fax@gmail.com"
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = 'blue'}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                Fax@gmail.com
              </a>
            </p>
          </div>
          <div style={cardStyle}>
            <h3><span style={iconStyle}>📞</span> Phone</h3>
            <p>
              <a
                href="tel:+918056921544"
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = 'blue'}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                +91 8056921544
              </a>
            </p>
            <p>
              <a
                href="tel:+55555514574"
                style={linkStyle}
                onMouseEnter={e => e.target.style.color = 'blue'}
                onMouseLeave={e => e.target.style.color = '#fff'}
              >
                +55555514574
              </a>
            </p>
          </div>
        </div>
        <div style={mapStyle}>
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1vuE20V9vn9mpt0o2TD_JFmDLaE7T-Ww&ehbc=2E312F"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      
      {/* Form Section */}
      <div id="form-section" style={{ padding: '40px 20px', backgroundColor: '#111', color: 'black' }}>
        <h2 style={{ textAlign: 'center', color: 'white' }}>Send Message</h2>
        <h3 style={{ textAlign: 'center', marginBottom: '20px', color: 'white' }}>Ready To Get Started?</h3>

        <form style={{ maxWidth: '800px', margin: '0 auto'}} onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '20px' }}>
            <input type="text" name="name" placeholder="Name" style={{ flex: 1, padding: '10px', borderRadius: '4px' }} />
            <input type="email" name="email" placeholder="Email" style={{ flex: 1, padding: '10px', borderRadius: '4px' }} />
          </div>
          <div style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
            <input type="text" name="number" placeholder="Number" style={{ flex: 1, padding: '10px', borderRadius: '4px' }} />
            <input type="text" name="subject" placeholder="Subject" style={{ flex: 1, padding: '10px', borderRadius: '4px' }} />
          </div>
          <textarea name="message" placeholder="Message" style={{ width: '100%', padding: '10px', borderRadius: '4px', marginTop: '20px', height: '100px' }}></textarea>
          <div style={{ marginTop: '20px' }}>
            <input type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms" style={{ marginLeft: '20px', marginTop: '5px ',color:'white' }}>I agree to the <a href="/privacy-policy" style={{ color: '#007bff', textDecoration: 'none' }}>terms</a> and <a href="/privacy-policy" style={{ color: '#007bff', textDecoration: 'none' }}>privacy policy</a></label>
          </div>       
          <button type="submit" style={{ marginTop: '5px', padding: '10px 20px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Send Message</button>
        </form>
      </div>

      {/* Scroll to Top/Bottom Arrow */}
      <div
        style={arrowStyle}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </div>

      <ToastContainer />
    </div>
  );
};

export default ContactUs;
