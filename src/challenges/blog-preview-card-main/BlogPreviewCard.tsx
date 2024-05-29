import React from "react";
import {Helmet} from "react-helmet";

import Attribution from "../../components/attribution/Attribution";

import favicon from "./assets/images/favicon-32x32.png";
import "./BlogPreviewCard.scss";

export default function BlogPreviewCard(): React.JSX.Element {
  return (
    <>
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

      <div className="blog-preview-card-main">
        <div className="stack-y">
          Learning Published 21 Dec 2023 HTML & CSS foundations These languages
          are the backbone of every website, defining structure, content, and
          presentation. Greg Hooper
          <Attribution />
        </div>
      </div>
    </>
  );
}
