import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => (
  <div className="about__container">
    <h4>
      <FontAwesomeIcon icon={faEnvelope} size="lg" /> Contact
    </h4>
    <p>For job offer, please email me to :</p>
    <h5>juliendemarquedev@gmail.com</h5>
  </div>
);

export default Contact;
