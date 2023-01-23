import React from 'react'
import './Testimonials.css'
import MADDY from '../../assets/maddy.png'

const Testimonials = () => {
    return (
        <section id='testimonials'> 
         <h5> Review from clients </h5>
         <h2> Testimonials </h2>

         <div className="container testimonials_container">
         <article className='testimonial'>
           <div className="client_avatar">
           <img style={{ width: 340, height: 300 }} src={MADDY} alt="Maddy" />
          </div>
          <h2 className='client_name'> Maddy </h2>
           
           <medium className='client_review'>
            "I was desperate to lose weight, dealing with one medical issue after 
            another and needed to feel in control and healthy again. Initially, 
            I was dieting and exercising with some encouragement and help but my results 
            were minimal at best. Frustrated but determined, I started working with Brian 
            as my trainer in March, 2019. Brian has been an incredible trainer, educator, 
            and cheeleader! He talks to me about all the steps that I am taking so that we 
            can look at my overall progress and health. Brian checks in with me before each workout 
            to see how I feel because he knows that there are days that my job gets the best of me 
            and my commute is long. He understands the body/mind connection and uses it to keep me motivated. 
            As a teacher, I recognize and appreciate that Brian has a plan for each workout with clear goals in mind.
            Brian ensures that there is a rotation of exercises, a target for each one as well as an explanation
            that is clear so that I am not only doing it correctly, but also understanding which muscles I am targeting
            and why. I feel like I am learning and gaining control of my body again!!
            To date, I have lost 53lbs and many, many inches! Brian has helped me track my results and I am seeing a decrease in fat an increase
            in muscle. The changes in my physical apperance are stunning!
            Addionally, the health benefits have been remarkable as well! No more leg cramps, asthma medication, and a significant decrease in my blood pressure and thyroid meds. 
            My personal victory...no more CPAP machine! My doctors are beyond pleased and so am I.
            I would have never believed I would go from a size 16 X/L to a size 6 M/S. 
            I am not done...Thank you Brian for helping me gain control and find myself again!."
           </medium>
         </article>
        </div>
        </section>
    
    )
}

export default Testimonials