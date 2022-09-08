import React from 'react'
import './styles/ServiceCard.scss';


export default function ServiceCard({ title, description, icon }) {
    return (
        <div className='card'>
            <div className='card__icon'>
                {icon}
            </div>
            <div className='info'>
                <div className='card__title'>
                    <h2> {title} </h2>
                </div>
                <div className='card__info'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
