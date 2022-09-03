import React from 'react';
import logo from '../images/logo.png';
import { useNavigate } from 'react-router-dom';
import './styles/NavBar.scss'

export default function Navbar() {

  const navigate = useNavigate();

  return (
    <div className='container'>
      <img src={logo} alt='logo Mr. locksmith' />
      <div className='menu'>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/Services')}>Servicios</button>
        <button onClick={() => navigate('/Locations')}>Location</button>
        <button onClick={() => navigate('/ContactUs')}>Contact Us</button>
      </div>
    </div>
  )
}
