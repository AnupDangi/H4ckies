import React from "react";
const DrugInteraction = () => {
 return (
 <div className="drug-interaction">
 <header className="header">DRUG INTERACTION</header>
 <p className="subtext">Insert the names of drugs, add for more</p>
 <form className="form">
 {[...Array(2)].map((_, index) => (
 <input key={index} type="text" placeholder="Drug name" />
 ))}
 <button type="button" className="add-button">+</button>
 </form>
 <button className="done-button">DONE</button>
 <footer className="footer">contact for more details - 984798393</footer>
 </div>
 );
};
export default DrugInteraction;