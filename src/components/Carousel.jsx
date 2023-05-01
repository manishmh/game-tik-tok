import React, { useState } from 'react'
import "./Carousel.css";
import {BsFillCaretRightFill, BsFillCaretLeftFill} from 'react-icons/bs'

export const CarouselItem = ({ children, width }) => {
  return (
    <div className='carousel-item' style={{width: width}}>
      {children}
    </div>
  )
}

const Carousel = ({ children, bannerLength }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  if (activeIndex < 0) {
    setActiveIndex(0);
  }
  else if (activeIndex > bannerLength) {
    setActiveIndex(bannerLength);
  }

  const updateChevronLeft = () => {
    setActiveIndex(activeIndex - 1)
  }

  const updateChevronRight = () => {
    setActiveIndex(activeIndex + 1)
  }
  return (
    <div className="carousel">
      <div className="inner" 
        style={{ transform: `translateX(-${activeIndex * 100}%`}}>
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, {width: "100%"});
        })}
      </div>
      <div className='indicators'>
        <BsFillCaretLeftFill className='chevron chevron-left'
          onClick={updateChevronLeft}
        >
        </BsFillCaretLeftFill>
        <BsFillCaretRightFill className='chevron chevron-right'
          // onClick={() => {updateIndex(activeIndex + 1)}} 
          onClick={updateChevronRight}
        >
          Next
        </BsFillCaretRightFill>
      </div>
    </div>
  )
}
export default Carousel;