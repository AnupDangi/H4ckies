import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignupPage.css';

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    medicalCondition: '',
    allergies: '',
    currentMedications: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd typically send the data to a backend server
    navigate('/menu');
  };

  return (
    <div className="signup-page">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="age" placeholder="Age" onChange={handleChange} />
        <input name="medicalCondition" placeholder="Current medical condition" onChange={handleChange} />
        <input name="allergies" placeholder="Allergies" onChange={handleChange} />
        <input name="currentMedications" placeholder="Current medications" onChange={handleChange} />
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <footer>Contact for more details - 984798393</footer>
    </div>
  );
};

export default SignupPage;