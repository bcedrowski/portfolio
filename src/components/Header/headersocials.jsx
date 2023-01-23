import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaInstagramSquare} from 'react-icons/fa'
const HeaderSocials = () => {
    return (
        <div className='header_socials'>
            <a href="https://www.linkedin.com/in/brian-cedrowski/" target="_blank"> <BsLinkedin size= '10%' /> </a>
            <a href="https://www.instagram.com/iron_den__/" target="_blank"> <FaInstagramSquare size= '10%' /></a>
        </div>
    
    )
}

export default HeaderSocials