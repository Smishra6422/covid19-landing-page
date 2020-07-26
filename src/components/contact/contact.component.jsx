import React from "react";
import "./contact.style.scss";
import ContactImage from "../../asset/images/contact_virus_image.png";
import GreenVirus from "../../asset/images/grren_virus.png";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="vacant-space">
        <div className="green-virus-image">
          <img src={GreenVirus} alt="Virus_Image" />
        </div>
      </div>
      <div className="contact-data">
        <div className="heading">
          <h4>Have Question In Mind?</h4>
          <h4>Let us help you</h4>
        </div>
        <div className="contact-form">
          <form>
            <input
              type="email"
              inputMode="email"
              placeholder="Eg: xyz@xyz.com"
            />
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
      <div className="vacant-space">
        <div className="orange-virus-image">
          <img src={ContactImage} alt="Virus_Image" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
