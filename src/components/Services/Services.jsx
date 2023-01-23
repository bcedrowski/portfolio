import React from 'react'
import './Services.css'
import {GiWeightLiftingUp} from 'react-icons/gi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {FaNutritionix} from 'react-icons/fa'
import {AiFillDollarCircle} from 'react-icons/ai'

const Services = () => {
    return (
        <section id='services'>
         <h5> What I Offer </h5>
         <h2> Services </h2>

         <div className="container services_container">
         <article className="service">
          <div className="service_head">
            <h3> Private Personal Training </h3>
          </div>
            <br />
            <br />
          <ul className= 'service_list'> 
              <li> 
                 <GiWeightLiftingUp className='service_list-icon' /> 
                 <p> Individualized Workout Programs <br/> Suited to Your Goals </p>
              </li>
              <li> 
                 <GiWeightLiftingUp className='service_list-icon' /> 
                 <p> Strength Training </p>
              </li>
              <li> 
                 <GiWeightLiftingUp className='service_list-icon' /> 
                 <p> Functional Training to Improve <br/> Activities of Daily Living (ADL) </p>
              </li>
              <li> 
                 <GiWeightLiftingUp className='service_list-icon' /> 
                 <p> Weight Loss/Toning  </p>
              </li>
              <li> 
                 <GiWeightLiftingUp className='service_list-icon' /> 
                 <p> High-Intensity Interval Training  </p>
              </li>
              <li> 
                 <GiWeightLiftingUp className='service_list-icon' /> 
                 <p> Sport-Specific Training </p>
              </li>
              <li> 
                 <AiFillDollarCircle className='service_list-icon' /> 
                 <p> $80/hr || $50/30 min </p>
              </li>
          </ul>
         </article>

           <article className="service">
          <div className="service_head">
            <h3> Online Coaching </h3>
          </div>
            <br />
            <br />
          <ul className= 'service_list'> 
              <li> 
                 <BsFillPersonLinesFill className='service_list-icon' /> 
                 <p> Online One-on-One Training </p>
              </li>
              <li> 
                 <BsFillPersonLinesFill className='service_list-icon' /> 
                 <p> Custom, Organized Training <br/>Logs Shared Online </p>
              </li>
              <li> 
                 <BsFillPersonLinesFill className='service_list-icon' /> 
                 <p> Weekly Check-ins </p>
              </li>
              <li> 
                 <BsFillPersonLinesFill className='service_list-icon' /> 
                 <p> Constant Communication via Email </p>
              </li>
              <li> 
                 <BsFillPersonLinesFill className='service_list-icon' /> 
                 <p> Video Feedback to Ensure <br/>Proper Form of All Exercises </p>
              </li>
              <li> 
                 <AiFillDollarCircle className='service_list-icon' /> 
                 <p> $200/month</p>
              </li>
          </ul>
         </article>

           <article className="service">
          <div className="service_head">
            <h3> Nutrition Guidance </h3>
          </div>
            <br />
            <br />
          <ul className= 'service_list'> 
              <li> 
                 <FaNutritionix className='service_list-icon' /> 
                 <p> Online Logs of Daily Meals </p>
              </li>
              <li> 
                 <FaNutritionix className='service_list-icon' /> 
                 <p> Current Research-based Advice <br/>Individualized to Client's Goals </p>
              </li>
              <li> 
                 <FaNutritionix className='service_list-icon' /> 
                 <p> Caloric Intake/Macros Calculated <br/> Specific to Client's Body Type/Goals </p>
              </li>
              <li> 
                 <FaNutritionix className='service_list-icon' /> 
                 <p> Fat Loss  </p>
              </li>
              <li> 
                 <AiFillDollarCircle className='service_list-icon' /> 
                 <p> + $100/month</p>
              </li>
          </ul>
         </article>
         </div>
        </section>
    
    )
}

export default Services