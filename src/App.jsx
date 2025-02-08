import React from "react";
import Backgrounds from "./components/Backgrounds";
import DownloadButton from "./components/DownloadButton";
import AppStoreButton from "./components/AppStoreButton";

const App = () => {
  return (
    <div
      style={{
        width: "100vw",
        backgroundColor: "#0F141E",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <Backgrounds />
    </div>
  );
};

export default App;
