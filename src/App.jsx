import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faFacebook,
  faTiktok,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

import "./App.css";
import pdp from "../public/lilou_pdp.jpg";

function App() {
  const handleEndoClick = () => {
    window.location.href =
      "https://www.fondation-endometriose.org/donner-recherche/don/";
  };

  const handleContactMeClick = () => {
    const emailAddress = "nympheillustration@gmail.com";
    const mailtoLink = `mailto:${emailAddress}`;
    window.location.href = mailtoLink;
  };
  return (
    <div className="card">
      <div className="header">
        <img src={pdp} alt="profile-picture" className="logo" />
        <h3 className="name">𝒩𝓎𝓂𝓅𝒽𝑒</h3>
        <p className="description">
          There is nothing stronger than a soft soul 🌱
        </p>
      </div>
      <div className="buttons">
        {/* <a className="button">My Store</a> */}
        <button onClick={handleEndoClick}>
          Contribuer à la recherche contre l'endometriose
        </button>
        <button className="contact-button" onClick={handleContactMeClick}>
          Me contacter
        </button>
      </div>
      <div className="links">
        {/* <a
          href="https://twitter.com/example"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="xl" inverse />
        </a> */}
        <a
          href="https://www.instagram.com/nympheillustration/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} size="xl" inverse />
        </a>
        <a
          href="https://www.pinterest.fr/tinyforestnymph/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faPinterest} size="xl" inverse />
        </a>
        <a
          href="https://www.tiktok.com/@tinyforestnymph"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} size="xl" inverse />
        </a>
      </div>
    </div>
  );
}

export default App;
