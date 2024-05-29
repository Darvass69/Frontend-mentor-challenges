import React from "react";
import {Helmet} from "react-helmet";

import Attribution from "../../components/attribution/Attribution";

import favicon from "./images/favicon-32x32.png";
import qrCode from "./images/image-qr-code.png";

import styles from "./QRCodeComponent.module.scss";

export default function QRCodeComponent(): React.JSX.Element {
  return (
    <>
      <div className={styles.root} >
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

        <div className={styles["dock-panel"]}>
          <div className={`${styles["layout-center"]} ${styles.center}`}>
            <div className={styles.card}>
              <img src={qrCode} className={styles["qr-code"]} />
              <h1 className={styles["card-title"]}>
                Improve your front-end skills by building projects
              </h1>
              <p className={styles["card-text"]}>
                Scan the QR code to visit Frontend Mentor and take your coding
                skills to the next level
              </p>
            </div>
          </div>
          <Attribution className={styles.bottom} />
        </div>
      </div>
    </>
  );
}
