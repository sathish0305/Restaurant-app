import React from 'react'
import AboutBackground from '../assets/about-background.png'
import AboutBackgroundImage from '../assets/about-background-image.png'
import { BsFillPlayCircleFill } from 'react-icons/bs'

function About() {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt="" />
        </div>
        <div className='about-section-image-container'>
            <img src={AboutBackgroundImage} alt="" />
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'>About</p>
            <h1 className='primary-heading'>
                A celebration of authentic flavors and heartfelt hospitality
            </h1>
            <p className='primary-text'>
            The quaint restaurant offers a fusion of flavors in a cozy, rustic setting. With a focus on farm-to-table ingredients, each dish tells a story of culinary craftsmanship.
            </p>
            <p className='primary-text'>
            Professional staff ensure a memorable dining experience, while the charming decor adds to the ambience. Whether a romantic evening or a casual lunch, this restaurant promises an unforgettable gastronomic journey.
            </p>
            <div className='about-buttons-container'>
                <button className='secondary-button'>Learn More</button>
                <button className='watch-video-button'><BsFillPlayCircleFill/> Watch Video</button>
            </div>
        </div>
    </div>
  )
}

export default About
