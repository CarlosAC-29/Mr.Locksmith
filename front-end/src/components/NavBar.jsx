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

    const redirectHome = () => {
        menuToggler();
        navigate('/');
    }
    const redirectServices = () => {
        menuToggler();
        navigate('/Services');
    }
    const redirectLocations = () => {
        menuToggler();
        navigate('/Locations');
    }
    const redirectContact = () => {
        menuToggler();
        navigate('/Contact-Us');
    }

    return (
        <div className='navbar'>
            <div className='navbar__content'>
                <div>
                    <img src={logo} alt='Mr. locksmith logo' />
                </div>
                <div>
                    <nav className={`nav ${menuOpen ? [`nav--open`] : {}}`}>
                        <button className='btn__page' onClick={redirectHome}>Home</button>
                        <button className='btn__page' onClick={redirectServices}>Services</button>
                        <button className='btn__page' onClick={redirectLocations}>Locations</button>
                        <button className='btn__page' onClick={redirectContact}>Contact us</button>
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
