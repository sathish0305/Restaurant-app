import React from 'react'
import ProfilePic from '../assets/john-doe-image.png'
import { AiFillStar } from "react-icons/ai";
import Contact from './Contact';

function Testimonials() {
  return (
    <div>
      <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Testimonial</p>
            <h1 className="primary-heading">What They Are Saying</h1>
            <p className="primary-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos vero, perferendis vel dolorem deleniti minima quaerat laborum accusantium architecto atque rem impedit molestiae laboriosam ex iste eveniet error dolore ut.</p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, alias porro! Possimus nesciunt voluptatum aspernatur! Quo veniam eveniet, necessitatibus beatae quae inventore molestiae velit officia, nesciunt, voluptate iure a commodi!</p>
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h1 className='primary-subheading'>Walter White</h1>
        </div>
      </div>
      <Contact />
    </div>
  )
}

export default Testimonials
