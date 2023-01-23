import React from 'react'
import './About.css'
import {FaAward} from 'react-icons/fa'
import headshot from '../../assets/headshot.png'
import brianflexing from '../../assets/brianflexing.jpg'
import {ImUsers} from 'react-icons/im'
import {MdSchool} from 'react-icons/md'
const About = () => {
    return (
        <section id='about'> 
        <h5> Get To Know </h5>
        <h2> About Me </h2>

          <div className="container about_container">
           <div className="about_me">
              <div className="about_me-image">
            <img src= {headshot} alt= "About Image" />
           </div>
           <div className="about_me-image">
            <img src= {brianflexing} alt= "About Image" />
           </div>
          </div>

          <div className="about_content">
            <div className="about_cards">
             <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5> Experience </h5>
                <br />
                <small> 10+ Years Experience </small>
             </article>

             <article className='about_card'>
                <ImUsers className='about_icon'/>
                <h5> Clients </h5>
                <br />
                <small> 200+ Clients </small>
                <small> Diversity of Clients </small>
                <small> All Ages</small>


             </article><article className='about_card'>
                <MdSchool className='about_icon'/>
                <h5> Knowledge </h5>
                <br />
                <small> Bachelors Degree in Exercise Science (William Paterson University '16) || Masters Degree in Exercise Science (Montclair State University '21) </small>
             </article>
            </div>
            <p>
                I am a passionate fitness professional looking to inspire people to successfully reach their fitness goals. I strive to utilize the most updated techniques in practice while ensuring safe and effective exercises.
            </p>

            <a href="#contact" className='btn btn-primary'> Let's Connect </a>
            </div>
          </div>
        </section>
    
    )
}

export default About