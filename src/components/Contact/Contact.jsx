import React from 'react'
import './Contact.css'
import {TfiEmail} from 'react-icons/tfi'
import {BsMessenger} from 'react-icons/bs'
import {AiOutlineForm} from 'react-icons/ai'

const Contact = () => {
    return (
        <section id='contact'>
        <h5> Get In Touch </h5>
            <br />
        <div className="container contact_container">
            <div className="contact_options">
                <article className="contact_option">
                <TfiEmail className='contact_option-icon'/>
                <br/>
                <h2> Email </h2>
                <br/>
                
                <h5> bcedrowski@gmail.com </h5>
                    <a href="mailto:bcedrowski@gmail.com"> Send Message </a>
                </article>
                 <article className="contact_option">
                <BsMessenger className='contact_option-icon'/>
                <br/>
                <h2> Messenger </h2>
                <br/>
                <h5> Facebook </h5>
                    <a href="https://m.me//drowski"> Send Message </a>
                </article>

                <article className="contact_option">
                <AiOutlineForm className='contact_option-icon'/>
                <br/>
                <h2> Get Started Now! </h2>
                
                <br/>
                <h5> Quick and Easy Virtual Form! </h5>
                    <a href="https://forms.gle/y9VE1YpDCSoHqLHH7"> Click for Form! </a>
                </article> 
                </div>
                </div>
        </section>
    
    )
}

export default Contact