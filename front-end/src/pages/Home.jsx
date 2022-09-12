import React from 'react'
import './styles/Home.scss';
import landingImage from '../images/MainPage.jpg';
import ServiceCard from '../components/ServiceCard';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { AiFillAlert } from 'react-icons/ai';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { FaCar } from 'react-icons/fa';
import { BsSafeFill } from 'react-icons/bs';

export default function Home() {
	return (
		<div className='page'>
			<div className='landing__section'>
				<div>
					<img src={landingImage} alt='home' />
				</div>
				<div className='landing__text'>
					<h1> We have more than 20 years of experience</h1>
					<button className='btn__callnow'><span>Call now</span><br /><FaPhoneAlt /> 801-819-1031</button>
				</div>
			</div>
			<div className='services__section'>
				<h1>Our Services</h1>
				<div className='service__buttons'>
					<div className='service__line1'>
						<ServiceCard
							title='Residential'
							description='We are here to bring safety to your homes and more'
							icon={<FaHome />}
						/>
						<ServiceCard
							title='Emergency Call  '
							description="Do you need to access your home, car, safe, or gate? Dont sweat it, we will be there in no time"
							icon={<AiFillAlert />}
						/>
						<ServiceCard
							title='Commercial '
							description='Does it feel like your business is lacking security? We are more than happy to help you out'
							icon={<SiHomeassistantcommunitystore />}
						/>
					</div>
					<div className='service__line2'>
						<ServiceCard
							title='Automotive'
							description='You got locked out of your? No worries, we have your back'
							icon={<FaCar />}
						/>
						<ServiceCard
							title='Safe'
							description='Are you looking for a place safe enough to leave your belongings? We can definitely sort that out for you'
							icon={<BsSafeFill />}
						/>
					</div>
				</div>
			</div>
			<div className='callnow__section'>
				<p>We operate 7 days <br/> a week for any <br/> emergency</p>
				<button> Call now</button>
				<div className='circle'></div>
				<div className='circle_1'></div>
				<div className='circle_2'></div>
				<div className='circle_3'></div>
				<div className='circle_4'></div>
			</div>
		</div>
	)
}
