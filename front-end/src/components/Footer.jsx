import './styles/Footer.scss';
import Visa from '../images/footer/visa.png';
import Venmo from '../images/footer/venmo.png';
import Master from '../images/footer/master.png';
import Cash from '../images/footer/cash.png';
import American from '../images/footer/american.png';
import { IoLocationSharp } from 'react-icons/io5';
import { BsTelephoneFill } from 'react-icons/bs';

const Footer = () => {
    return (
        <footer>
            <div className="one">
                <h2>Payment Methdos</h2>
                <img src={Visa} alt="visa card" />
                <img src={Master} alt="master card" />
                <img src={American} alt="american express card" />
                <img src={Venmo} alt="venmo" />
                <img src={Cash} alt="cash" />
            </div>
            <div className="two">
                <ul>
                
                    <li><IoLocationSharp /> Salt Lake City,</li>
                    <li>Provo,</li>
                    <li>Ogden,</li>
                    <li>Tooele,</li>
                    <li>Park City, United States</li>
                    <br/>
                    <li><BsTelephoneFill /> 801-819-1031</li>
                </ul>
            </div>
            <hr/>
            <div className="copy">
            <p>© Copyright 2022· Mr.Locksmith All rights reserved </p>
            </div>
        </footer>
    )
}
export default Footer
