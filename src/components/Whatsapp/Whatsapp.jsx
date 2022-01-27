import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './Whatsapp.css'
const Whatsapp = () => {
    return (
        <div>
            <a href="https://wa.me//send?phone=8799315884" target="_blank" className='float'>
                <i><FaWhatsapp /></i>
            </a>
        </div>
    )
}

export default Whatsapp
