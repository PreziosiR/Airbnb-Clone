import * as React from 'react'
import { Link } from 'gatsby'
import { BiGlobe } from '@react-icons/all-files/bi/BiGlobe'
import {navLink, navLinkItem, navLinkText} from './navbar.module.css' 
import logo from "../images/logo-airbnb.png"


const Navbar = () => {
    return (
        <nav>
            <ul className={navLink}>
                <img  src={logo} alt="logo"/>
                <li className={navLinkItem}>
                    <Link to='/' className={navLinkText} >Hébergements</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to='/' className={navLinkText} >Expériences</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to='/' className={navLinkText} >Expériences en ligne</Link>
                </li>
                <li className={navLinkItem}>
                    <Link to='/' className={navLinkText} >Devenez hôte</Link>
                <button><BiGlobe/></button>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar