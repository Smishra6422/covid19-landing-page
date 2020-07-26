import React from "react";
import "./precaution.style.scss";
import ImageDetail from "./image-detail.component";
import WearMask from "../../asset/images/percaution_wearmask.png";
import Handwash from "../../asset/images/percaution_handwash.png";
import Nose from "../../asset/images/percaution_nose.png";
import AvoidContact from "../../asset/images/percaution_avoicontact.png";
import GreenVirus from "../../asset/images/grren_virus.png";
// ImageDetail

const Precaution = () => {
  return (
    <div className="precaution-container">
      <div className="vacant-space">
        <div>
          <img src={GreenVirus} alt="Virus_image" />
        </div>
      </div>

      <div className="precaution-main-data">
        <div className="precaution-detail-container">
          <div>
            <h4>Covid-19</h4>
          </div>
          <div>
            <h5>Precaution</h5>
          </div>
          <div>
            <p>
              Corona viruses are a type of virus. There are many different
              kinds, and some cause disease. A newly identified type has caused
            </p>
          </div>
        </div>
        <div className="precaution-image-container">
          <div className="precaution-image-item">
            <ImageDetail
              number={"01"}
              title={"Wear Mask"}
              description={
                "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively"
              }
            />
            <div className="precaution-image">
              <img src={WearMask} alt="Wear_ Mask" />
            </div>
          </div>
          <div className="precaution-image-item">
            <div className="precaution-image">
              <img src={Handwash} alt="Handwash" />
            </div>
            <ImageDetail
              number={"01"}
              title={"Wash Hand"}
              description={
                "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively Continually seize impactful vortals "
              }
            />
          </div>
          <div className="precaution-image-item">
            <ImageDetail
              number={"03"}
              title={"Use Nose- Rag"}
              description={
                "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic outside the box thinking. Objectively"
              }
            />
            <div className="precaution-image">
              <img src={Nose} alt="Nose" />
            </div>
          </div>
          <div className="precaution-image-item">
            <div className="precaution-image">
              <img src={AvoidContact} alt="AvoidContact" />
            </div>
            <ImageDetail
              number={"04"}
              title={"Avoid Contacts"}
              description={
                "Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic"
              }
            />
          </div>
        </div>
      </div>

      <div className="vacant-space"></div>
    </div>
  );
};

export default Precaution;
