import React from 'react'
import './styles/NotFound.scss';
import { GiCancel } from 'react-icons/gi';

export default function NotFound() {
    return (
        <div className='NotFound'>
            <p className='message'>
                <GiCancel />
                <br />
                Page not found
            </p>
        </div>
    )
}
