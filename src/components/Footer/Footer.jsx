import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__body">
        {/* <div className="contacts">
          <h4 className="contacts__title">contacts us</h4>
          <address>
            213 Baker Street Oriel City Kounty 7000 KNW,Kountry Name
          </address>
          <a className="contacts-phone" href="tel:#">
            +23 994 233 4022
          </a>
          <a className="contacts-mail" href="mailto:info@konstruct.com">
            info@dribbble.com
          </a>
        </div>  */}
        <div className="footer_copyright">
          <p className="copyright__text">© Design by https://dribbble.com/</p>
        </div>
      </div>
    </footer>
  );
};
