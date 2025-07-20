import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhone, FaGithub, FaCheckCircle } from "react-icons/fa";

const Slide6 = () => {
  const [showToast, setShowToast] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      
      // Hide toast after 4 seconds
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }, 1500);
  };

  return (
  <div className="slide6-contact-bg">
    <div className="slide6-contact-intro">
      <h2 className="slide6-contact-title">Let's Connect</h2>
      <p className="slide6-contact-summary">Ready to bring your engineering projects to life? Whether you need CAD design, automation solutions, or technical consultation, I'm here to help. Let's discuss how we can work together.</p>
    </div>
    
    <div className="slide6-contact-layout">
      <div className="slide6-contact-card">
        <div className="slide6-card-header">
          <h3 className="slide6-card-title">Get In Touch</h3>
          <p className="slide6-card-subtitle">I'm always open to discussing new opportunities and exciting projects.</p>
        </div>
        
        <div className="slide6-contact-info">
          <div className="slide6-info-item">
            <div className="slide6-info-icon">
              <FaEnvelope size={24} />
            </div>
            <div className="slide6-info-content">
              <div className="slide6-info-label">Email</div>
              <div className="slide6-info-value">yugkadia@gmail.com</div>
            </div>
          </div>
          
          <div className="slide6-info-item">
            <div className="slide6-info-icon">
              <FaLinkedin size={24} />
            </div>
            <div className="slide6-info-content">
              <div className="slide6-info-label">LinkedIn</div>
              <div className="slide6-info-value">https://www.linkedin.com/in/yug-kadia-507198312</div>
            </div>
          </div>
          
          <div className="slide6-info-item">
            <div className="slide6-info-icon">
              <FaMapMarkerAlt size={24} />
            </div>
            <div className="slide6-info-content">
              <div className="slide6-info-label">Location</div>
              <div className="slide6-info-value">Essen, Germany</div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="slide6-contact-card">
        <div className="slide6-card-header">
          <h3 className="slide6-card-title">Send Message</h3>
          <p className="slide6-card-subtitle">Tell me about your project or just say hello!</p>
        </div>
        
        <form className="slide6-contact-form" onSubmit={handleSubmit}>
          <div className="slide6-form-group">
            <input 
              className="slide6-input" 
              type="text" 
              placeholder="Your Name" 
              required 
            />
          </div>
          
          <div className="slide6-form-group">
            <input 
              className="slide6-input" 
              type="email" 
              placeholder="Your Email" 
              required 
            />
          </div>
          
          <div className="slide6-form-group">
            <textarea 
              className="slide6-input slide6-textarea" 
              placeholder="Your Message" 
              rows={5} 
              required 
            />
          </div>
          
          <button className="slide6-submit-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
    
    {/* Success Toast */}
    {showToast && (
      <div className="slide6-toast">
        <div className="slide6-toast-content">
          <FaCheckCircle className="slide6-toast-icon" />
          <div className="slide6-toast-text">
            <div className="slide6-toast-title">Message Sent!</div>
            <div className="slide6-toast-message">Thank you for your message. I'll get back to you soon!</div>
          </div>
        </div>
      </div>
    )}
  </div>
  );
};

export default Slide6; 