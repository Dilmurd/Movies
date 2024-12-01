import React from "react";
import "./Footer.scss";
import play from "../../assets/playm.png";
import app from "../../assets/app.png";
import logo from "../../assets/lugo.png";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

const Footer = () => {
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
          <h4>О нас</h4>
          <ul>
            <li>Публичная оферта</li>
            <li>Реклама</li>
            <li>F.A.Q</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Категории</h4>
          <ul>
            <li>Кино</li>
            <li>Театр</li>
            <li>Концерты</li>
            <li>Спорт</li>
          </ul>
        </div>

        <div className="footer__section">
          <h4>Связаться с нами</h4>
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
