import React from 'react'
import './Header.css'
import CTA from './CTA'
import finallogo from '../../assets/finallogo.png'
import HeaderSocials from './headersocials'

const Header = () => {
    return (
        <header>
           <div className=".container.header_container">
           <h5> Hello, I'm </h5>
           <h1> Brian Cedrowski </h1>
           <h5 className=".text-light"> Fitness Professional </h5>
           <CTA />
           <HeaderSocials />
           <div className= "me">
            <img src={finallogo} alt="me" />
            </div>
           </div>
        </header>
    )
}

export default Header