import React from "react";
import "./footer.css";

export const Footer = () => {
  return (
    <section className="f-wraper">
      <div className="paddings innerWidth f-container">
        <div className="flexColStart f-left">
          <img src="./logo.png" alt="logo" width={120} />
          <span className="secondaryText" style={{ color: "var(--green)" }}>
            © 2023 - {new Date().getFullYear()}
          </span>
        </div>

        <div className="flexColStart f-right">
          <span className="primaryText">Reach out to us</span>
          <span className="secondaryText">
            Some street, some city, some country
          </span>

          <div className="flexCenter f-menu" style={{ color: "var(--green)" }}>
            <span>
              <a href="mailto:yumeth.20210903@iit.ac.lk">Email</a>
            </span>
            <span>
              <a href="https://facebook.com">Facebook</a>
            </span>
            <span>
              <a href="https://twitter.com">Twitter</a>
            </span>
            <span>
              <a href="https://instagram.com">Instagram</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
