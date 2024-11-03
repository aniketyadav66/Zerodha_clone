import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="row text-center mt-3">
        <h1 className="p-4 text-muted fs-1">The Zerodha Universe</h1>
        <p  className="mb-5"style={{fontSize:"22px"}}>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        <div className="col-4 p-3">
          <img
            style={{ width: "240px" }}
            src="media\images\zerodhaFundhouse.png"
          />
          <p className="mt-4 text-muted">
            Our asset management venture Our asset <br />
            management ventureOur asset management venture{" "}
          </p>{" "}
        </div>
        <div className="col-4 p-3">
          <img
            style={{ width: "270px" }}
            src="media\images\sensibullLogo.svg"
          />
          <p className="mt-5 text-muted">
            Our asset management venture Our asset <br />
            management ventureOur asset management venture{" "}
          </p>
        </div>
        <div className="col-4 p-3">
          <img style={{ width: "240px" }} src="media\images\goldenpiLogo.png" />
          <p className="mt-5 text-muted">
            Our asset management venture Our asset <br />
            management ventureOur asset management venture{" "}
          </p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img style={{ width: "210px" }} src="media/images/streakLogo.png" />
          <p className="mt-5 text-muted">
            Our asset management venture Our asset <br />
            management ventureOur asset management venture{" "}
          </p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img
            style={{ width: "210px" }}
            src="media\images\smallcaseLogo.png"
          />
          <p className="mt-5 text-muted">
            Our asset management venture Our asset <br />
            management ventureOur asset management venture{" "}
          </p>
        </div>
        <div className="col-4 p-3 mt-4">
          <img style={{ width: "170px" }} src="media\images\dittoLogo.png" />
          <p className="mt- text-muted">
            Our asset management venture Our asset <br />
            management ventureOur asset management venture{" "}
          </p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>Sign up for free</button>

      </div>
    </div>
  );
}

export default Universe;
