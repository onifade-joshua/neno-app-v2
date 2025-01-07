import React from 'react';
import Logo from "../../assets/samjodatechsolutions-logo.jpg";

const AppNavbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo Section */}
        <div style={styles.logoSection}>
          <img src={Logo} alt="Company logo" style={styles.logo} />
          <span style={styles.text}>Empowering tomorrow, today!</span>
        </div>

        {/* Navigation Links */}
        <ul style={styles.navLinks}>
          <li style={styles.navItem}><a href="#home" style={styles.navLink}>Home</a></li>
          <li style={styles.navItem}><a href="#about" style={styles.navLink}>About</a></li>
          <li style={styles.navItem}><a href="#services" style={styles.navLink}>Services</a></li>
          <li style={styles.navItem}><a href="#contact" style={styles.navLink}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    width: '100%',
    // padding: '10px 20px',
    backgroundColor: '#f9f9f9',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    position: 'fixed',
    top: 0,
    zIndex: 1000,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
  },
  logo: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    objectFit: 'cover',
  },
  text: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
  navLinks: {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
    margin: 0,
    padding: 0,
  },
  navItem: {
    margin: 0,
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '16px',
    color: '#007bff',
    fontWeight: '500',
    transition: 'color 0.3s',
  },
  navLinkHover: {
    color: '#0056b3',
  },
};

export default AppNavbar;
