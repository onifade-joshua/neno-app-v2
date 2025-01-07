import React, { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import Logo from "../../assets/samjodatechsolutions-logo.jpg";
import { useNavigate } from 'react-router';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/account/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const data = await response.json();
      console.log('Login successful:', data);
    } catch (err) {
      setError(err.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialLogin = (provider) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic here
  };

  const handleCreateAccountClick = () => {
    navigate('/signup'); 
  };

  return (
    <div style={{ 
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: '5px',
      zIndex: "inherit"
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '45px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        position: 'absolute',
        top: '62%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}>
        {/* Logo Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '32px'
        }}>
          <img
            src={Logo}
            alt="Company Logo"
            style={{
              height: '40px',
              marginBottom: '24px',
              borderRadius: "5px"
            }}
          />
          <h2 style={{ 
            fontSize: '24px',
            fontWeight: '600',
            color: '#1a1a1a',
            marginBottom: '8px'
          }}>Welcome Back</h2>
          <p style={{
            color: '#666',
            fontSize: '14px'
          }}>Please sign in to your account to continue</p>
        </div>

        {/* Social Login Buttons */}
        <div style={{ marginBottom: '32px' }}>
          <button
            type="button"
            onClick={() => handleSocialLogin('google')}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'white',
              border: '1px solid #e6e6e6',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            <FaGoogle style={{ marginRight: '8px' }}/>
            Continue with Google
          </button>

          <button
            type="button"
            onClick={() => handleSocialLogin('apple')}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: 'white',
              border: '1px solid #e6e6e6',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '500',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '12px',
              transition: 'background-color 0.2s',
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#f8f9fa'}
            onMouseOut={(e) => e.target.style.backgroundColor = 'white'}
          >
            <FaApple style={{ marginRight: '8px' }}/>
            Continue with Apple
          </button>
        </div>

        {/* Separator */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '32px'
        }}>
          <div style={{
            height: '1px',
            flex: 1,
            backgroundColor: '#e6e6e6'
          }} />
          <span style={{
            padding: '0 16px',
            color: '#666',
            fontSize: '14px'
          }}>or continue with email</span>
          <div style={{
            height: '1px',
            flex: 1,
            backgroundColor: '#e6e6e6'
          }} />
        </div>

        {error && (
          <div style={{
            padding: '14px',
            marginBottom: '24px',
            backgroundColor: '#fff2f0',
            borderRadius: '8px',
            color: '#cc0000',
            fontSize: '14px',
            border: '1px solid #ffccc7'
          }}>
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div style={{ marginBottom: '20px' }}>
            <label 
              htmlFor="email" 
              style={{
                display: 'block',
                marginBottom: '8px',
                color: '#333',
                fontSize: '14px',
                fontWeight: '500'
              }}
            >
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="name@example.com"
              style={{
                width: '93.3%',
                padding: '12px',
                border: '1px solid #e6e6e6',
                borderRadius: '8px',
                fontSize: '14px',
                transition: 'border-color 0.2s',
                outline: 'none',
              }}
              onFocus={(e) => e.target.style.borderColor = '#0055ff'}
              onBlur={(e) => e.target.style.borderColor = '#e6e6e6'}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '8px'
            }}>
              <label 
                htmlFor="password"
                style={{
                  color: '#333',
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Password
              </label>
              <button
                type="button"
                onClick={() => console.log('Forgot password clicked')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#0055ff',
                  cursor: 'pointer',
                  padding: 0,
                  fontSize: '14px',
                  fontWeight: '500'
                }}
              >
                Forgot password?
              </button>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Enter your password"
              style={{
                width: '93.3%',
                padding: '12px',
                border: '1px solid #e6e6e6',
                borderRadius: '8px',
                fontSize: '14px',
                transition: 'border-color 0.2s',
                outline: 'none',
              }}
              onFocus={(e) => e.target.style.borderColor = '#0055ff'}
              onBlur={(e) => e.target.style.borderColor = '#e6e6e6'}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#0055ff',
              color: 'white',
              fontSize: '14px',
              fontWeight: '500',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: 'background-color 0.2s',
              marginBottom: '16px'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0040cc'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#0055ff'}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        {/* Create Account Button */}
        <div style={{
            textAlign: 'center',
            color: '#666',
            fontSize: '14px'
          }}>
            Don't have an account?{' '}
        <button
          type="button"
          onClick={handleCreateAccountClick}
          style={{
            background: 'none',
            border: 'none',
            color: '#0055ff',
            cursor: 'pointer',
            padding: 0,
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          Create account
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
