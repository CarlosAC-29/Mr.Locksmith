import React from 'react'
import MainImage from '../images/Keys.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import './styles/ContactUs.scss';

export default function ContactUs() {

	return (
		<div className='Contact-Us'>
			<div className='ContactUs__image'>
				<img src={MainImage} alt='jpg' />
			</div>
			<div className='ContactUs__info'>
				<p>You can contact us at any time <br />through our direct line</p>
				<a href="tel://+801-819-1031">
					<button><FaPhoneAlt />801-819-1031</button>
				</a>
			</div>
		</div>

	)
}
