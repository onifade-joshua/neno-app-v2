import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router';
import TextToSpeech from './components/Text/TextToSpeech';
import SpeechToText from './components/Audio/SpeechToText';
import SocialShare from './components/Social/SocialShare';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import CompanyIntro from './components/App/CompanyIntro';  
import Logo from './components/App/Logo';  

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <div style={styles.container}>
      <Routes>
        <Route
          path="/login"
          element={<Login onLogin={handleLogin} />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/"
          element={isAuthenticated ? (
            <div style={styles.appContent}>
              <div style={styles.card}>
                <TextToSpeech />
              </div>
              <div style={styles.card}>
                <SpeechToText />
              </div>
              <div style={styles.socialShareContainer}>
                <SocialShare text="Check out this app!" />
              </div>
            </div>
          ) : (
            <div style={styles.appContent}>
              <Logo />
              <CompanyIntro />
            </div>
          )}
        />
      </Routes>

      <div>
        <ScrollToTop />
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '20px',
    gap: '20px',
    flexWrap: 'wrap',
    minHeight: '100vh',
  },
  appContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: "center",
    margin: "auto",
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
    paddingTop: "2rem"
  },
  card: {
    flex: 1,
    minWidth: '300px',
    maxWidth: '45%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '8px',
    marginBottom: '10px',
    transition: 'all 0.3s ease',
  },
  socialShareContainer: {
    width: '100%',
    marginTop: '20px',
    textAlign: 'center',
    padding: '10px 20px',
    borderRadius: '8px',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    card: {
      width: '100%',
      marginBottom: '15px',
    },
    socialShareContainer: {
      width: '100%',
      padding: '15px',
    },
  },
};

export default App;
