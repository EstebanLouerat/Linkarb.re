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
import pdp from "./assets/lilou_pdp.jpg";
import draw_1 from "./assets/drawing_1.jpg";
import draw_2 from "./assets/drawing_2.jpg";
import draw_3 from "./assets/drawing_3.jpg";
import draw_4 from "./assets/drawing_4.jpg";
import draw_5 from "./assets/drawing_5.jpg";

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
    <>
      <div className="card">
        <div className="header">
          <img src={pdp} alt="profile-picture" className="logo" />
          <h3 className="name">𝒩𝓎𝓂𝓅𝒽𝑒</h3>
          <p className="description">
            Étudiante en art à Émile Cohl sur Lyon, principalement axée sur
            l'illustration 🌱
          </p>
        </div>
        <div className="buttons">
          {/* <a className="button">My Store</a> */}
          {/* <button onClick={handleEndoClick}>
          Contribuer à la recherche contre l'endometriose
        </button> */}
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
            href="https://www.tiktok.com/@nympheillustration"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faTiktok} size="xl" inverse />
          </a>
        </div>
      </div>
      <div className="drawing-container">
        <img src={draw_1} alt="drawing" className="drawing" />
        <img src={draw_2} alt="drawing" className="drawing" />
        <img src={draw_3} alt="drawing" className="drawing" />
        <img src={draw_4} alt="drawing" className="drawing" />
        <img src={draw_5} alt="drawing" className="drawing" />
      </div>
      <div className="footer">
        <p>
          Fais avec amour par{" "}
          <a href="https://www.instagram.com/steub_l?igsh=NWc2YnJqMTF3YWN2">
            @steub_l
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
