import React from "react";

const ImageDetail = ({ number, title, description }) => {
  return (
    <div className="precaution-detail">
      <div className="precaution-data">
        <div>
          <span>{number}</span>
          <h5>{title}</h5>
        </div>
        <div>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageDetail;
