import React from "react";
import "./Footer.scss";
import play from "../../assets/playm.png";
import app from "../../assets/app.png";
import logo from "../../assets/lugo.png";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t,i18n} = useTranslation()
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
        <div className="footer__section">
          <div className="footer__logo">
            <img src={logo} alt="" />
          </div>
          <div className="footer__apps">
            <img src={play} alt="Google Play" />
            <img src={app} alt="App Store" />
          </div>
        </div>

        <div className="footer__section">
          <h4>{t("footer.about")}</h4>
          <ul>
            <li>{t("footer.public")}</li>
            <li>{t("footer.advertising")}</li>
            <li>{t("footer.faq")}</li>
            <li>{t("footer.contact")}</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>{t("footer.category")}</h4>
          <ul>
            <li>{t("footer.movie")}</li>
            <li>{t("footer.theater")}</li>
            <li>{t("footer.concerts")}</li>
            <li>{t("footer.social")}</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>{t("footer.contacts")}</h4>
          <p className="footer__phone">+998 (95) 897-33-38</p>
          <div className="footer__socials">
            <i className="icon-instagram">
              <FaInstagram />
            </i>
            <i className="icon-facebook">
              <FaFacebook />
            </i>
            <i className="icon-youtube">
              <FaYoutube />
            </i>
          </div>
        </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
