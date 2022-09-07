import React from 'react'
import './styles/ImageFrame.scss';

export default function ImageFrame({ Image }) {
    return (
        <div className='Image__Frame'>
            <div className='Image__Frame__Background'></div>
            <div className='Image__Frame__container'>
                <img className='Image' src={Image} alt='jpg' />
            </div>
        </div>
    )
}
