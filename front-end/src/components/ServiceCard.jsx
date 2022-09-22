import React from 'react'
import './styles/ServiceCard.scss';
import { useNavigate } from 'react-router-dom';


export default function ServiceCard({ title, description, icon }) {

    const navigate = useNavigate();

    return (
        <div className='card' onClick={() => navigate('/services')}>
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
