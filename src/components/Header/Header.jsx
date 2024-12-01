import React from 'react'
import "./Header.scss"
import logo from "../../assets/navbar.logo.svg"
import { FaTv,FaSearch } from 'react-icons/fa'
import { MdOutlineTabletAndroid } from "react-icons/md";
import { HiOutlineTicket } from "react-icons/hi2";
import { Link } from 'react-router-dom';



function Header() {
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
                            <Link to={"/afusha"}>Афиша</Link>
                    </li>
                    <li className='navbar__item'>
                            <MdOutlineTabletAndroid/>
                            <Link to={"/about"}>Сеансы</Link>
                    </li>
                    <li className='navbar__item'>
                            <HiOutlineTicket/>
                            <Link to={"/contact"}>Билеты</Link>
                    </li>
                    <li className='navbar__item'>
                            <FaSearch/>
                            <Link to={"/search"}>Поиск</Link>
                    </li>
                </ul>
                <button>Войти</button>
            </nav>
        </div>
    </header>
  )
}

export default Header