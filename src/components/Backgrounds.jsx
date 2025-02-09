import React from "react";
import DownloadButton from "./DownloadButton";
import AppStoreButton from "./AppStoreButton";
import DownloadButtonBottom from "./DownloadButtonBottom";

import { useNavigate } from "react-router-dom";

const Backgrounds = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        position: "relative",
      }}
    >
      <DownloadButton />
      <AppStoreButton />
      <img style={{ width: "100%" }} src="assets/1.png" alt="meriem 1" />
      <img style={{ width: "100%" }} src="assets/2.png" alt="meriem 2" />
      <img style={{ width: "100%" }} src="assets/3.png" alt="meriem 3" />
      <img style={{ width: "100%" }} src="assets/4.png" alt="meriem 4" />
      <img style={{ width: "100%" }} src="assets/5.png" alt="meriem 5" />
      <DownloadButtonBottom />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          color: "#FFFFFF",
          justifyContent: "center",
          position: "absolute",
          bottom: "5vw",
          gap: "2vw",
        }}
        className="footerTerms"
      >
        <div
          onClick={() => navigate("/privacy-policies")}
          className="footerTermsBtn"
        >
          Privacy Policies
        </div>
        <div className="footerTermsBtn">|</div>
        <div
          onClick={() => navigate("/terms-of-use")}
          className="footerTermsBtn"
        >
          Terms Of Use
        </div>
        <div className="footerTermsBtn">|</div>
        <div className="footerTermsBtn">
          <a href="mailto:support@meriem.app">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default Backgrounds;
