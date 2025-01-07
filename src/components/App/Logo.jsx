import React from 'react';
import LogoImage from '../../assets/samjodatechsolutions-logo.jpg';

const Logo = () => {
  return (
    <div style={styles.logoSection}>
      <img src={LogoImage} alt="Company logo" style={styles.logo} />
      <span style={styles.text}>Empowering tomorrow, today!</span>
    </div>
  );
};

const styles = {
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  logo: {
    width: '65px',
    height: '55px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    objectFit: 'cover',
  },
  text: {
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#333',
  },
};

export default Logo;
