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
                    <img src={logo} alt="" />
                </div>
                <ul className="navbar__collection">
                    <li className='navbar__item'>
                        <a href="" className='navbar__link'>
                            <div className='icons'>
                            <FaTv/>
                            <Link to={"/"}>Афиша</Link>
                            </div>
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a href="" className='navbar__link'>
                            <div className='icons'>
                            <MdOutlineTabletAndroid/>
                            <Link to={"/about"}>Сеансы</Link>
                            </div>
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a href="" className='navbar__link'>
                            <div className='icons'>
                            <HiOutlineTicket/>
                            <Link to={"/contact"}>Билеты</Link>
                            </div>
                        </a>
                    </li>
                    <li className='navbar__item'>
                        <a href="" className='navbar__link'>
                            <div className='icons'>
                            <FaSearch/>
                            <Link to={"/search"}>Поиск</Link>
                            </div>
                        </a>
                    </li>
                </ul>
                <button>Войти</button>
            </nav>
        </div>
    </header>
  )
}

export default Header