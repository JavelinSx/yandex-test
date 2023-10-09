import type { FC } from 'react';
import {useState} from 'react'
import prevButton from '../../img/button-slider-left.svg';
import nextButton from '../../img/button-slider-right.svg';
import sliderImg1 from '../../img/slider1.png'
import sliderImg2 from '../../img/slider2.png'
import sliderImg3 from '../../img/slider3.png'
import sliderImg4 from '../../img/slider4.png'

interface SliderProps {}

const Slider: FC<SliderProps> = () => {
    const [imgList] = useState([
        sliderImg1,
        sliderImg2,
        sliderImg3,
        sliderImg4,
    ])

    const [activeIndex, setActiveIndex] = useState(0);

    const handleNextImg = () => {
        setActiveIndex((prevIndex) => (prevIndex === imgList.length - 1 ? 0 : prevIndex + 1));
      }
      
    const handlePrevImg = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? imgList.length - 1 : prevIndex - 1));
    }
      
    return (
        <div className='slider'>
            <div className='slider__container' style={{ 
                transform: `translateX(-${activeIndex * (375)}px)`,
            }}>
                {
                    imgList.map((img) => {
                        return <img className='slider__main-img' alt='' src={img} />
                    })
                }
            </div>

            <div className='slider__container-button'>
                <button className='slider__button' disabled={activeIndex===0 ? true : false} onClick={handlePrevImg}>
                    <img src={prevButton} alt=''></img>
                </button>
                <button className='slider__button' disabled={activeIndex===imgList.length-1 ? true : false} onClick={handleNextImg}>
                    <img src={nextButton} alt=''></img>
                </button>
            </div>

        </div>
    );
}

export default Slider;
