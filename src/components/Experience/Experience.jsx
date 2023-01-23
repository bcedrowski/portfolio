import React from 'react'
import './Experience.css'
import {BsShieldFillCheck} from 'react-icons/bs'

const Experience = () => {
    return (
        <section id='experience'> 
         <h5> What skills I have </h5>
         <h2> My Experience </h2> 
          <br />
          
          
         <div className="container experience_container">
            <div className="experience_private">
              <h3> Training </h3>
              <br/>
              <br/>
              <div className="experience_content">
                <article className="experience_details">
                  <BsShieldFillCheck />
                  <h4> Private </h4>
                  <br/>
                    <small className='text-light'> Over 10 years of personal training experience </small>
                    <br/>
                    <small className='text-light'> In person private training </small>
                </article>
                    <br/>
                   <article className="experience_details">
                  <BsShieldFillCheck />
                  <h4> Athletes </h4>
                  <br/>
                    <small className='text-light'> Youth athlete experienced </small>
                    <br/>
                    <small className='text-light'> Professional and highschool athlete experienced </small>
                </article>
                  <br/>
                   <article className="experience_details">
                  <BsShieldFillCheck />
                  <h4> Older Populations </h4>
                  <br/>
                    <small className='text-light'> Older adult population experience </small>
                </article>
              </div>
            </div>
            <div className="experience_nutrition">
            <h3> Nutrition </h3>
            <br/>
            <br/>
              <div className="experience_content">
                <article className="experience_details">
                  <BsShieldFillCheck />
                  <h4> Nutrition Knowledge </h4>
                  <br/>
                    <small className='text-light'> Provided nutritional advice for clients to follow </small>
                    </article>
                    <br/>
                   <article className="experience_details">
                  <BsShieldFillCheck />
                  <h4> Individualized </h4>
                  <br/>
                    <small className='text-light'> Wedding weight loss <br /> Custom nutritonal advice </small>
                    <br/>
                    <small className='text-light'>  </small>
                </article>
              </div>
            </div>
          </div>
        </section>
    
    )
}

export default Experience