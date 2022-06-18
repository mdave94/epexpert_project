import React from 'react';
import './MainScreen.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CarouselItem from '../../components/CarouselItem/CarouselItem';
import pict1 from '../../images/haz1.jpeg'
import pict2 from '../../images/haz2.jpeg'
import pict3 from '../../images/haz3.jpeg'

const MainScreen = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className='mainscreen-container'>
      <div className='mainscreen-picture-container' /> 
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        keyBoardControl={true}
        customTransition='all .5'
        transitionDuration={500}
        containerClass='carousel-container'
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style'
        itemClass='carousel-item-padding-40-px'
        
      >
        <CarouselItem image={pict1} description="LEÍRÁS TESZSTAPDSNAKDNKSAKN"/>
        <CarouselItem image={pict2} description="asdsN"/>
        <CarouselItem image={pict3} description="asdasd"/>
        <CarouselItem image={pict2} description="LasduiasdugihoadsihoN"/>
        <CarouselItem image={pict3} description="L474654564654"/>
      </Carousel>
    </div>
  );
};

export default MainScreen;

