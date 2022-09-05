import React, { useState } from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import './styles/NavBar.scss'

export default function Navbar() {

    const [menuOpen, setMenuOpen] = useState(false);
    const menuToggler = () => setMenuOpen((p) => !p);
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <div className='navbar__content'>
                <div>
                    <img src={logo} alt='Mr. locksmith logo' />
                </div>
                <div>
                    <nav className={`nav ${menuOpen ? [`nav--open`] : {}}`}>
                        <button className='btn__page' onClick={() => navigate('/')}>Home</button>
                        <button className='btn__page' onClick={() => navigate('/services')}>Services</button>
                        <button className='btn__page' onClick={() => navigate('/locations')}>Locations</button>
                        <button className='btn__page' onClick={() => navigate('/contact-us')}>Contact us</button>
                        <div className='navbar__button__container'>
                            <button>click me</button>
                        </div>
                    </nav>
                </div>
                <div>
                    <div className='navbar__button__container'>
                        <button className='navbar__toggler'>clicks me</button>
                    </div>
                    <button className='navbar__toggler' onClick={menuToggler}>
                        {!menuOpen ? <BiMenuAltRight/> : <AiOutlineClose/>}
                    </button>
                </div>
            </div>
        </div>
    )
}
