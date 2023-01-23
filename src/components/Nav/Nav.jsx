import React from 'react'
import './Nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {FaUserAlt} from 'react-icons/fa'
import {BsJournalBookmarkFill} from 'react-icons/bs'
import {FaHandsHelping} from 'react-icons/fa'
import {SiGooglemessages} from 'react-icons/si'
import {MdReviews} from 'react-icons/md'
import {useState} from 'react'

const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return (
        <nav>
            <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '##' ? 'active' : ''} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/> </a>
            <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserAlt/> </a>
            <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsJournalBookmarkFill/> </a>
            <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><MdReviews/> </a>
            <a href="#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><FaHandsHelping/> </a>
            <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><SiGooglemessages/> </a>
         </nav>

    )
}

export default Nav