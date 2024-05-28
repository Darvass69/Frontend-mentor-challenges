import React from "react";
import {Helmet} from "react-helmet";

import Attribution from "../../components/attribution/Attribution";

import favicon from "./images/favicon-32x32.png";
import qrCode from "./images/image-qr-code.png";
import "./QRCodeComponent.scss";

export default function QRCodeComponent(): React.JSX.Element {
  return (
    <>
      <div className="challenge_qr-code-component-main">
        <Helmet>
          <title>Frontend Mentor | QR code component</title>
          <link rel="icon" type="image/svg+xml" href={favicon} />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
            rel="stylesheet"
          />
        </Helmet>

        <div className="dock-panel">
          <div className="layout-center center">
            <div className="card">
              <img src={qrCode} className="qr-code" />
              <h1 className="card-title">
                Improve your front-end skills by building projects
              </h1>
              <p className="card-text">
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
          <Attribution className="bottom" />
        </div>
      </div>
    </>
  );
}
