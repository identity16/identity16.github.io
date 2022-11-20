import React from "react";
import Logo from "../components/logo";

const IndexPage = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Logo fontSize={64} />
    </div>
  );
};

export default IndexPage;
