import React from "react";

const GetStarted = () => {
  return (
    <div className="get-started">
      <header className="header">LET'S GET STARTED</header>
      <p className="subtext">Tell us a bit about yourself</p>
      <form className="form">
        {[
          "Name", 
          "Age", 
          "Current medical condition", 
          "Known allergies to medicines", 
          "Food allergies", 
          "Family disease history", 
          "Current medications", 
          "Eating meat?", 
          "Pregnant if female", 
          "Weight"
        ].map((label) => (
          <div key={label} className="form-group">
            <label>{label}</label>
            <input type="text" placeholder={label} />
          </div>
        ))}
      </form>
      <footer className="footer">Contact for more details - 984798393</footer>
    </div>
  );
};

export default GetStarted;
