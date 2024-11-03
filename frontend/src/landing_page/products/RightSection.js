import React from "react";

function RightSection({
  imageURL,
  productNmae,
  prodectDescription,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-6 mt-5">
          <h1>{productNmae}</h1>
          <p>{prodectDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              Learn More <i class="fa fa-arrow-right" aria-hidden="true"></i>
            </a>
          </div>
        </div>
          <div className="col-6">
            <img src={imageURL} />
          </div>
      </div>
    </div>
  );
}

export default RightSection;
