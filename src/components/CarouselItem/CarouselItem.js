import React from 'react'
import './CarouselItem.css'



const CarouselItem = ({image,description}) => {



    return (
        <div className='item-container'>
            <div className='carouselitem-picture'>
                <img src={image} />
            </div>
            <div className='carouselitem-disc'>
                <p>
                    {description}
                </p>
            </div>
            <div className='carouselitem-btn'>Részletek
            </div>
        </div>
    )
}

export default CarouselItem
