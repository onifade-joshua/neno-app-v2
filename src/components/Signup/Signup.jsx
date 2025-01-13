import React, { useState } from 'react';
import { FaApple, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router'; 
import axios from 'axios';
import Logo from "../../assets/samjodatechsolutions-logo.jpg";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (error) setError('');
    if (success) setSuccess('');
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match.');
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('https://localhost:7046/api/auth/signup', {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      if (response.status !== 200) {
        throw new Error('Signup failed. Please try again.');
      }

      setSuccess('Account created successfully! You can now log in.');
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      setError(err.response?.data || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ 
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      padding: '5px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: '45px',
        backgroundColor: 'white',
        borderRadius: '12px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
        position: 'absolute',
        top: '75.5%',
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
          }}>Create Your Account</h2>
          <p style={{
            color: '#666',
            fontSize: '14px'
          }}>Sign up to get started with our services</p>
        </div>

        {/* Social Signup Buttons */}
        <div style={{ marginBottom: '32px' }}>
          <button
            type="button"
            onClick={() => console.log('Sign up with Google')}
            style={{
              ...buttonStyle,
              marginBottom: '12px',
            }}
          >
            <FaGoogle style={{ marginRight: '8px' }}/>
            Sign up with Google
          </button>

          <button
            type="button"
            onClick={() => console.log('Sign up with Apple')}
            style={buttonStyle}
          >
            <FaApple style={{ marginRight: '8px' }}/>
            Sign up with Apple
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
          }}>or sign up with email</span>
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

        {success && (
          <div style={{
            padding: '14px',
            marginBottom: '24px',
            backgroundColor: '#f6ffed',
            borderRadius: '8px',
            color: '#389e0d',
            fontSize: '14px',
            border: '1px solid #b7eb8f'
          }}>
            {success}
          </div>
        )}

        <form onSubmit={handleSignup}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={labelStyle}>
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Full Name"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={labelStyle}>
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your mail address"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="password" style={labelStyle}>
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
              required
              placeholder="Create a password"
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '24px' }}>
            <label htmlFor="confirmPassword" style={labelStyle}>
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
              placeholder="Confirm your password"
              style={inputStyle}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            style={{
              ...buttonStyle,
              backgroundColor: '#0055ff',
              color: 'white',
              marginBottom: '20px',
            }}
          >
            {loading ? 'Signing up...' : 'Sign Up'}
          </button>
        </form>

        <div style={{
          textAlign: 'center',
          color: '#666',
          fontSize: '14px'
        }}>
          Already have an account?{' '}
          <button
            type="button"
            onClick={() => navigate('/login')} 
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
            Log In
          </button>
        </div>
      </div>
    </div>
  );
};

const buttonStyle = {
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
  transition: 'background-color 0.2s',
};

const inputStyle = {
  width: '93.3%',
  padding: '12px',
  border: '1px solid #e6e6e6',
  borderRadius: '8px',
  fontSize: '14px',
  transition: 'border-color 0.2s',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  marginBottom: '8px',
  color: '#333',
  fontSize: '14px',
  fontWeight: '500',
};

export default Signup;
