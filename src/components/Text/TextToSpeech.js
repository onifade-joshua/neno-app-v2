import React, { useState } from 'react';
import { FaVolumeUp, FaClipboard, FaShareAlt } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const TextToSpeech = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState("en-US"); 

  const handleSpeak = (text) => {
    if (text) {
      const msg = new SpeechSynthesisUtterance(text);
      msg.lang = language; 
      window.speechSynthesis.speak(msg);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      alert("Text copied to clipboard!");
    });
  };

  const handleShare = () => {
    const shareText = encodeURIComponent(text);
    const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
    window.open(shareUrl, "_blank");
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Text-to-Speech</h2>
      <textarea
        placeholder="Enter text to speak"
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="text-input"
        style={styles.textarea}
      />
      <div style={styles.languageSelector}>
        <label htmlFor="language-select" style={styles.label}>
          Select Language:
        </label>
        <select
          id="language-select"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          style={styles.select}
        >
          <option value="en-US">English (US)</option>
          <option value="es-ES">Spanish</option>
          <option value="fr-FR">French</option>
          <option value="de-DE">German</option>
          <option value="it-IT">Italian</option>
          <option value="zh-CN">Chinese (Simplified)</option>
          <option value="ja-JP">Japanese</option>
          <option value="hi-IN">Hindi</option>
          {/* Add more language options as needed */}
        </select>
      </div>
      <div style={styles.buttonGroup}>
        <Button
          variant="primary"
          onClick={() => handleSpeak(text)}
          style={styles.button}
        >
          <FaVolumeUp style={styles.icon} />
          Speak
        </Button>
        <Button
          variant="secondary"
          onClick={handleCopy}
          style={styles.button}
        >
          <FaClipboard style={styles.icon} />
          Copy
        </Button>
        <Button
          variant="info"
          onClick={handleShare}
          style={styles.button}
        >
          <FaShareAlt style={styles.icon} />
          Share
        </Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    fontFamily: "Roboto"
  },
  header: {
    textAlign: 'center',
    fontSize: '20px',
    color: '#333',
    marginBottom: '20px',
  },
  textarea: {
    width: '95.5%',
    height: '100px',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginBottom: '10px',
    resize: 'none',
    outline: 'none',
  },
  languageSelector: {
    marginBottom: '10px',
  },
  label: {
    marginRight: '10px',
    fontSize: '14px',
    fontWeight: 'bold',
  },
  select: {
    padding: '8px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    outline: 'none',
  },
  button: {
    fontSize: '14px',
    padding: '8px 12px',
    borderRadius: '8px',
    backgroundColor: '#1da1f2',
    color: '#fff',
    cursor: 'pointer',
    border: 'none',
    margin: '5px',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '10px',
  },
  icon: {
    marginRight: '5px',
  },
};

export default TextToSpeech;
