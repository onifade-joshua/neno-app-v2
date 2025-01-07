import React from "react";
import { Link } from "react-router";

const CompanyIntro = () => {
  return (
    <div style={styles.card}>
      <h2>Welcome to SamjodaTech Solutions!</h2>
      <p>Empowering tomorrow, today!</p>
      <p>
        At SamjodaTech Solutions, we provide AI-powered solutions to help
        businesses thrive in the digital age.
      </p>
      <p>
        Our platform efficiently converts text to speech and speech to text,
        offering reliable solutions for both businesses and individuals.
      </p>

      <Link to="/login">Go to Login</Link>
    </div>
  );
};

const styles = {
  card: {
    flex: 1,
    minWidth: "300px",
    maxWidth: "45%",
    padding: "20px",
    backgroundColor: "#fff",
    borderRadius: "8px",
    marginBottom: "10px",
    transition: "all 0.3s ease",
    textAlign: "center",
  },
};

export default CompanyIntro;
