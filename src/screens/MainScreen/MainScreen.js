import React from 'react';
import './MainScreen.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const MainScreen = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
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
      {/* <div className='mainscreen-picture-container' /> */}
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
        <div style={{ height: 200, width: '100%', background: 'yellow' }}>
          Item 1
        </div>
        <div style={{ height: 200, width: '100%', background: 'brown' }}>
          Item 2
        </div>
        <div style={{ height: 200, width: '100%', background: 'green' }}>
          Item 3
        </div>
        <div style={{ height: 200, width: '100%', background: 'blue' }}>
          Item 4
        </div>
        <div style={{ height: 200, width: '100%', background: 'purple' }}>
          Item 5
        </div>
        <div style={{ height: 200, width: '100%', background: 'yellow' }}>
          Item 6
        </div>
      </Carousel>
    </div>
  );
};

export default MainScreen;

