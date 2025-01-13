import React, { useState } from 'react';
import { FaMicrophone, FaShareAlt } from 'react-icons/fa';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';

const SpeechToText = () => {
  const [text, setText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('es'); 

  const handleSpeech = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.onresult = (event) => {
      setText(event.results[0][0].transcript);
    };
    recognition.start();
  };

  const handleShare = () => {
    const shareText = encodeURIComponent(text);
    const shareUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
    window.open(shareUrl, "_blank");
  };

  const handleTranslate = async () => {
    if (!text) {
      alert("Please speak first before translating.");
      return;
    }

    try {
      const response = await axios.post('https://translation.googleapis.com/language/translate/v2', {
        q: text,
        source: 'en',
        target: selectedLanguage,
        format: 'text',
        key: 'AIzaSyBIrzC44dgadn6Ac2SpbIWFWfpPNoJH5Mc' // Replace with your Google Translate API key
      });

      setTranslatedText(response.data.data.translations[0].translatedText);
    } catch (error) {
      console.error('Error translating text:', error);
      alert('Failed to translate text. Please try again.');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.header}>Speech-to-Text with Translation</h2>
      <div style={styles.buttonGroup}>
        <Button
          variant="primary"
          onClick={handleSpeech}
          style={styles.button}
        >
          <FaMicrophone style={styles.icon} />
          Listen
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
      <textarea
        value={text}
        rows={4}
        readOnly
        placeholder="Speech will appear here..."
        style={styles.textarea}
      />
      <Form.Group style={styles.dropdown}>
        <Form.Label>Select Language:</Form.Label>
        <Form.Control
          as="select"
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="zh">Chinese</option>
          <option value="ar">Arabic</option>
        </Form.Control>
      </Form.Group>
      <Button variant="success" onClick={handleTranslate} style={styles.translateButton}>
        Translate
      </Button>
      <textarea
        value={translatedText}
        rows={4}
        readOnly
        placeholder="Translated text will appear here..."
        style={styles.textarea}
      />
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
    marginBottom: '10px',
  },
  icon: {
    marginRight: '5px',
  },
  textarea: {
    width: '93%',
    height: '100px',
    padding: '10px',
    fontSize: '14px',
    borderRadius: '8px',
    border: '1px solid #ddd',
    marginTop: '10px',
    resize: 'none',
    outline: 'none',
    backgroundColor: '#f1f1f1',
  },
  dropdown: {
    margin: '10px 0',
  },
  translateButton: {
    marginBottom: '10px',
  },
};

export default SpeechToText;