import React from 'react'
import NavigationBar from './NavigationBar'
import BannerBackgroundImage from '../assets/home-banner-background.png'
import HomeBannerImage from '../assets/home-banner-image.png'
import { FiArrowRight } from "react-icons/fi"

function Home() {
  return (
    <div>
        <NavigationBar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackgroundImage} alt="" />
          </div>
          <div className='home-text-section'>
            <h1 className='primary-heading'>
            "Experience the essence of culinary craftsmanship."
            </h1>
            <p className='primary-text'>
            Indulge in our exquisite culinary delights, artfully crafted to tantalize your taste buds and elevate your dining experience at the forefront of gastronomy.
            </p>
            <button className='secondary-button'>
                Order Now <FiArrowRight/>
            </button>
          </div>
            <div className='home-image-section'>
              <img src={HomeBannerImage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home
