import React from "react";

const DownloadButton = () => {
  return (
    <a
      href="https://www.google.com"
      target="_blank"
      className="btn"
      style={{
        color: "#000000",
        position: "absolute",
        right: "5vw",
        top: "5vw",
        fontSize: "1.4vw",
        padding: "1.2vw",
        borderRadius: "2vw",
      }}
    >
      Download Now
    </a>
  );
};

export default DownloadButton;
