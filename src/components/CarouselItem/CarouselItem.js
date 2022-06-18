import React from 'react'
import './CarouselItem.css'
import pict1 from '../../images/haz1.jpeg'



const CarouselItem = () => {
  return (
    <div className='item-container'>
        <div className='carouselitem-picture'>
            <img src={pict1} />
        </div>
        <div className='carouselitem-disc'>
            Leírás
        </div>
        <div className='carouselitem-btn'>Részletek
        </div>
    </div>
  )
}

export default CarouselItem
