import React, { useState } from "react";
import DownloadButton from "./DownloadButton";
import AppStoreButton from "./AppStoreButton";
import DownloadButtonBottom from "./DownloadButtonBottom";
import Policies from "./Policies";
import Terms from "./Terms";

const Backgrounds = () => {
  const [isTermsOpen, setTermsIsOpen] = useState(false);
  const [isPoliciesOpen, setPoliciesIsOpen] = useState(false);
  const [isContactOpen, setContactIsOpen] = useState(false);
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
        <div onClick={() => setPoliciesIsOpen(true)} className="footerTermsBtn">
          Privacy Policies
        </div>
        <div className="footerTermsBtn">|</div>
        <div onClick={() => setTermsIsOpen(true)} className="footerTermsBtn">
          Terms Of Use
        </div>
        <div className="footerTermsBtn">|</div>
        <div onClick={() => setContactIsOpen(true)} className="footerTermsBtn">
          <a href="mailto:support@meriem.app">Contact</a>
        </div>
      </div>

      <Terms isOpen={isTermsOpen} close={() => setTermsIsOpen(false)} />
      <Policies
        isOpen={isPoliciesOpen}
        close={() => setPoliciesIsOpen(false)}
      />
    </div>
  );
};

export default Backgrounds;
