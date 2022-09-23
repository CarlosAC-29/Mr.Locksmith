import React from 'react'
import './styles/Home.scss';
import landingImage from '../images/MainPage.jpg';
import ServiceCard from '../components/ServiceCard';
import WhyChooseUs from '../components/WhyChooseUs';
import utah from '../images/mountains.jpg';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { AiFillAlert } from 'react-icons/ai';
import { SiHomeassistantcommunitystore } from 'react-icons/si';
import { FaCar } from 'react-icons/fa';
import { BsSafeFill } from 'react-icons/bs';
import { FaAward } from 'react-icons/fa';

export default function Home() {

	return (
		<div className='page'>
			<div className='landing__section'>
				<div>
					<img src={landingImage} alt='home' />
				</div>
				<div className='landing__text'>
					<h1> We have more than 20 years of experience</h1>
					<a href="tel://+801-819-1031">
						<button className='btn__callnow'><span>Call now</span><br /><FaPhoneAlt /> 801-819-1031</button>
					</a>
				</div>
			</div>
			<div className='tag__section'>
				<FaAward />
				<p>Realiable, professional & excellent service </p>
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
			<WhyChooseUs />
			<div className='callnow__section'>
				<img src={utah} alt='jpg' />
				<div className='callnow__section__info'>
					<p>We operate 7 days <br /> a week for any <br /> emergency</p>
					<a href="tel://+801-819-1031">
						<button>Call now</button>
					</a>
				</div>
			</div>
		</div>
	)
}

