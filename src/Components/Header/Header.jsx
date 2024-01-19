import React from "react";
import "./header.css";

export const Header = () => {
  return (
    <section className="h-wrapper">
      <div className=" h-container">
        <img src="../../public/logo.png" alt="Logo" width={100} />
        <div className="h-menu">
          <h1 className="primaryText">React Realtor</h1>
        </div>
      </div>
    </section>
  );
};
