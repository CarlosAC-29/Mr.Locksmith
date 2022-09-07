import React from 'react'
import MainImage from '../images/ContactImage.jpg';
import ImageFrame from '../components/ImageFrame';
import { FaPhoneAlt } from 'react-icons/fa';
import './styles/ContactUs.scss';

export default function ContactUs() {
	return (
		<div className='Contact-Us'>
			<div className='ContactUs__image'>
				<ImageFrame Image={MainImage} />
			</div>
			<div className='ContactUs__info'>
				<p>You can contact us at any time <br/>through our direct line</p>
				<button> <FaPhoneAlt/> 801-819-1031</button>
			</div>
		</div>

	)
}
