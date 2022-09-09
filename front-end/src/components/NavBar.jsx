import { React, useState } from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import './styles/NavBar.scss'

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='navbar'>
            <img className='navbar__logo' src={logo} alt='Mr. locksmith logo' />
            <div>
                <nav className={isMobile ? 'navbar__mobile' : 'navbar__links'} onClick={() => setIsMobile(false)}>
                    <button className='btn__page' onClick={() => navigate('/')}>Home</button>
                    <button className='btn__page' onClick={() => navigate('/services')}>Services</button>
                    <button className='btn__page' onClick={() => navigate('/locations')}>Locations</button>
                    <button className='btn__page' onClick={() => navigate('/contact-us')}>Contact us</button>
                </nav>
            </div>
            <div className='container__toggler'>
                <button className='btn__toggler' onClick={() => setIsMobile(!isMobile)}>
                    {isMobile ? <AiOutlineClose /> : <BiMenuAltRight />}
                </button>
            </div>
        </div>
    )
}
