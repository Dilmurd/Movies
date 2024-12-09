import React, { useEffect } from 'react'
import "./Header.scss"
import logo from "../../assets/navbar.logo.svg"
import { FaTv,FaSearch } from 'react-icons/fa'
import { MdOutlineTabletAndroid } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi2";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Language from '../Language/Language';



function Header() {
    const {t,i18n} = useTranslation()
  
  return (
    <header className='header'>
        <div className="container">
            <nav className="navbar">
                <div className="navbar__logo">
                    <Link to={"/"}>
                    <img src={logo} alt="" />
                    </Link>
                </div>
                <ul className="navbar__collection">
                    <li className='navbar__item'>
                            <FaTv/>
                            <Link to={"/"}>{t("header.poster")}</Link>
                    </li>
                    <li className='navbar__item'>
                            <MdOutlineTabletAndroid/>
                            <Link to={"/about"}>{t("header.genre")}</Link>
                    </li>
                    <li className='navbar__item'>
                            <HiOutlineTicket/>
                            <Link to={"/contact"}>{t("header.favourite")}</Link>
                    </li>
                    <li className='navbar__item'>
                            <FaSearch/>
                            <Link to={"/search"}>{t("header.search")}</Link>
                    </li>
                </ul>
                <div className='language'>
                    <Language/>
                <button>Войти</button>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header