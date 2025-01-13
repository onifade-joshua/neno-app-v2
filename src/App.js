import React, { useState, useEffect } from 'react'; 
import { Routes, Route, useNavigate } from 'react-router';
import TextToSpeech from './components/Text/TextToSpeech';
import SpeechToText from './components/Audio/SpeechToText';
import SocialShare from './components/Social/SocialShare';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { FaBars, FaSignOutAlt, FaUserEdit, FaCog } from 'react-icons/fa';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token && window.location.pathname !== '/login' && window.location.pathname !== '/signup') {
      navigate('/login');
    }
  }, [navigate]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleEditProfile = () => {
    navigate('/edit-profile');
  };

  const handleSettings = () => {
    navigate('/settings');
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
              <div style={styles.hamburgerMenu}>
                <FaBars onClick={toggleMenu} style={styles.hamburgerIcon} />
                {menuOpen && (
                  <div style={styles.dropdownMenu}>
                    <button 
                      onClick={handleEditProfile}
                      style={styles.menuItem}
                    >
                      <FaUserEdit style={styles.menuIcon} />
                      Edit Profile
                    </button>
                    <button 
                      onClick={handleSettings}
                      style={styles.menuItem}
                    >
                      <FaCog style={styles.menuIcon} />
                      Settings
                    </button>
                    <button 
                      onClick={handleLogout}
                      style={styles.menuItem}
                    >
                      <FaSignOutAlt style={styles.menuIcon} />
                      Logout
                    </button>
                  </div>
                )}
              </div>
              <div style={styles.row}>
                <div style={styles.card}>
                  <TextToSpeech />
                </div>
                <div style={styles.card}>
                  <SpeechToText />
                </div>
              </div>
              <div style={styles.socialShareContainer}>
                <SocialShare text="Check out this app!" />
              </div>
            </div>
          ) : (
            <Login onLogin={handleLogin} />
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
    paddingTop: "2rem"
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'wrap',
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
  hamburgerMenu: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  hamburgerIcon: {
    fontSize: '24px',
    cursor: 'pointer',
  },
  dropdownMenu: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    marginTop: '10px',
  },
  menuItem: {
    padding: '10px 20px',
    backgroundColor: '#fff',
    border: 'none',
    borderBottom: '1px solid #eee',
    cursor: 'pointer',
    fontSize: '14px',
    textAlign: 'left',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: '10px',
  },
  '@media (max-width: 768px)': {
    container: {
      flexDirection: 'column',
      alignItems: 'center',
    },
    row: {
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