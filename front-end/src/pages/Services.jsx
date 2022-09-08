import React from 'react'
import automotiveImage from '../images/Automotive.jpg';
import commercialImage from '../images/Commercial.jpg';
import emergencyImage from '../images/Emergency.jpg';
import safeImage from '../images/Safe.jpg';
import residentialImage from '../images/Residential.jpg'
import ImageFrame from '../components/ImageFrame.jsx';
import './styles/Services.scss'

export default function Services() {
	return (
		<div className='Services__Page'>
			<div className='Services__greetings'>
				<p>We will always be ready to provide you with the best service</p>
			</div>
			<div className='Services__section'>
				<div className='Service-left'>
					<div className='Service__image'>
						<ImageFrame Image={automotiveImage} />
					</div>
					<div className='Service__details'>
						<p className='Service__title'>Automotive</p>
						<p className='Service__description'>
							We understand how frustrating it can be to get locked out of your car, lose our keys or have them break without warning, but this is where our team comes in to get us out of this situation. We have an experienced and talented staff that will provide 10/10 service 7 days a week.
						</p>
						<p className='Service__subtitle'>Services</p>
						<ul>
							<li>
								<p>LockOut</p>
							</li>
							<li>
								<p>Key duplication</p>
							</li>
							<li>
								<p>Transponder & fob keys</p>
							</li>
							<li>
								<p>Broken keys</p>
							</li>
						</ul>
					</div>
				</div>
				<div className='Service-right'>
				<div className='Service__image'>
						<ImageFrame Image={residentialImage} />
					</div>
					<div className='Service__details'>
						<p className='Service__title'>Residential</p>
						<p className='Service__description'>
							When we go out of our homes, we sometimes forget our keys or lose them, and we know how frustrating it is, but our extraordinary team of locksmiths is able to act quickly and efficiently, as they are very skilled and experienced
						</p>
						<p className='Service__subtitle'>Services</p>
						<ul>
							<li>
								<p>LockOut</p>
							</li>
							<li>
								<p>Key duplication</p>
							</li>
							<li>
								<p>Electronic lock</p>
							</li>
							<li>
								<p>Broken keys</p>
							</li>
							<li>
								<p>Change of locks</p>
							</li>
						</ul>
					</div>
				</div>
				<div className='Service-left'>
					<div className='Service__image'>
						<ImageFrame Image={commercialImage} />
					</div>
					<div className='Service__details'>
						<p className='Service__title'>Commercial</p>
						<p className='Service__description'>
							We have a highly qualified service to offer the best security for your business. We know that today a wide variety of locks are handled and our team is trained to install, fix or replace any type of lock that is required. Our technicians are able to provide systems that allow you to have security and peace of mind in a short time.
						</p>
						<p className='Service__subtitle'>Services</p>
						<ul>
							<li>
								<p>New lock installation</p>
							</li>
							<li>
								<p>Electronic lock</p>
							</li>
							<li>
								<p>Key duplication</p>
							</li>
							<li>
								<p>Security devices</p>
							</li>
							<li>
								<p>Lockout</p>
							</li>
						</ul>
					</div>
				</div>
				<div className='Service-right'>
				<div className='Service__image'>
						<ImageFrame Image={emergencyImage} />
					</div>
					<div className='Service__details'>
						<p className='Service__title'>Emergency</p>
						<p className='Service__description'>
							There are situations where you need a locksmith urgently as when the keys are left inside the car, or you leave home and you forget your keys, or simply you lose them and need a quick solution, we have a service 7 days a week to meet any unexpected event in the fastest and most effective way.
						</p>
						<p className='Service__subtitle'>Services</p>
						<ul>
							<li>
								<p>Home Lock out</p>
							</li>
							<li>
								<p>Car lock out</p>
							</li>
							<li>
								<p>Gate lock out</p>
							</li>
							<li>
								<p>business lockout</p>
							</li>
							<li>
								<p>Safe lockout</p>
							</li>
						</ul>
					</div>
				</div>
				<div className='Service-left'>
					<div className='Service__image'>
						<ImageFrame Image={safeImage} />
					</div>
					<div className='Service__details'>
						<p className='Service__title'>Safe</p>
						<p className='Service__description'>
							We sell safes that meet your needs, from conventional safes to the most modern ones, offering the best quality and prices. Our goal is to provide the best service to each of our customers so that they feel at ease knowing that their belongings are safe. In addition, we handle the entire process of transportation and installation of our products
						</p>
						<p className='Service__subtitle'>Services</p>
						<ul>
							<li>
								<p>LockOut</p>
							</li>
							<li>
								<p>Safe Sell</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}
