import React from 'react';
import { FaInstagram, FaEnvelope, FaWhatsapp, FaTiktok } from 'react-icons/fa'; 
import { Button } from 'react-bootstrap'; 
import './SocialShare.css'; 
import { FaXTwitter } from 'react-icons/fa6';

const SocialShare = () => {
  const shareOnTiktok = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent('Check out SamjodaTechSolutions!')} &url=${encodeURIComponent(window.location.href)}`;
    window.open(url, '_blank');
  };

  const shareOnInstagram = () => {
    const url = `https://www.instagram.com/samjoda_tech/`;
    window.open(url, '_blank');
  };
  const shareWhatsapp = () => {
    const phoneNumber = "2347010600659"; 
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, '_blank');
  };
  

  return (
    <footer className="footer">
      <div className="footerContent">
        <div className="column">
          <h4 className="footer-heading">SamjodaTechSolutions</h4>
          <p className="footer-description">Providing top-notch solutions for businesses and individuals.</p>
          <div className="contact">
            <p><FaEnvelope className="icon" /> Email: <a href="mailto:samjodahub@gmail.com">samjodahub@gmail.com</a></p>
            <p>Follow us:</p>
            <div className="socialIcons">
              <Button variant="link" onClick={shareOnTiktok} className="iconButton"><FaTiktok className="icon" /></Button>
              <Button variant="link" onClick={shareOnTwitter} className="iconButton"><FaXTwitter className="icon" /></Button>
              <Button variant="link" onClick={shareOnInstagram} className="iconButton"><FaInstagram className="icon" /></Button>
              <Button variant="link" onClick={shareWhatsapp} className="iconButton"><FaWhatsapp className="icon" /></Button>
            </div>
          </div>
        </div>

        <div className="column">
          <h5 className="footer-heading">Quick Links</h5>
          <ul className="footer-list">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
          </ul>
        </div>
      </div>

      <div className="footerBottom">
        <p>© 2025 SamjodaTechSolutions | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default SocialShare;
