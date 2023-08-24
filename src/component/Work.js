import React from 'react'
import PickMeals from '../assets/pick-meals-image.png'
import ChooseMeals from '../assets/choose-image.png'
import DeliveryMeals from '../assets/delivery-image.png'
import Testimonials from './Testimonials'

function Work() {
    const workInfo = [
        {
            Image : PickMeals,
            title : 'Pick Meals',
            text : "Delight in our restaurant's exquisite cuisine, impeccable service, and inviting ambiance."
        },
        {
            Image : ChooseMeals,
            title : 'Choose Meals',
            text : ' Elevate your dining with an extensive selection of fine wines and beverages. '
        },
        {
            Image : DeliveryMeals,
            title : 'Delivery',
            text : 'Savor delectable dishes made from the freshest, locally sourced ingredients, ensuring an unforgettable dining experience. '
        }
    ]
  return (
    <>
    <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>Work</p>
            <h1 className='primary-heading'>How It Works</h1>
            <p className='primary-text'>
            Indulge in exquisite flavors meticulously crafted by our skilled chefs, offering a fusion of tradition and innovation. Savor delectable dishes made from the freshest, locally sourced ingredients, ensuring an unforgettable dining experience.
            </p>
        </div>
        <div className="work-section-bottom">
        {workInfo.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.Image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
    <Testimonials />
    </>
  )
}

export default Work
