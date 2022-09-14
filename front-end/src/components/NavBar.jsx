import { useState } from "react";
import logo from '../images/logo.png';
import { useMatch, useResolvedPath, useNavigate } from "react-router-dom"
import './styles/NavBar.scss';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Navbar() {

    const [isMobile, setIsMobile] = useState(false);

    return (
        <div className='navbar'>
            <img className='navbar__logo' src={logo} alt='Mr. locksmith logo' />
            <div>
                <nav className={isMobile ? 'navbar__mobile' : 'navbar__links'} onClick={() => setIsMobile(false)}>
                    <CustomLink to="/">Home</CustomLink>
                    <CustomLink to="/services">Services</CustomLink>
                    <CustomLink to="/locations">Locations</CustomLink>
                    <CustomLink to="/contact-us">Contact us</CustomLink>
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

function CustomLink({ to, children}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    const navigate = useNavigate();

    return (
        <button  className={isActive ? "btn__page active" : "btn__page"} onClick={() => navigate(to)}>
            {children}
        </button>
    )
}