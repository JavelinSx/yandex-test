import 'swiper/css';

import prevButton from '../../img/button-slider-left.svg';
import nextButton from '../../img/button-slider-right.svg';

import type { FC } from 'react';
import React, { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
// импортируйте стили Swiper

// Ваши пользовательские стили
import sliderImg1 from '../../img/slider1.webp';
import sliderImg2 from '../../img/slider2.webp';
import sliderImg3 from '../../img/slider3.webp';
import sliderImg4 from '../../img/slider4.webp';
interface SwiperMainProps {}

const SwiperMain: FC<SwiperMainProps> = () => {
  return (
    <div className='image-slider'>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        onSwiper={(swiper: any) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={sliderImg1} alt='1' className='swiper-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg2} alt='2' className='swiper-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg3} alt='3' className='swiper-img' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sliderImg4} alt='4' className='swiper-img' />
        </SwiperSlide>
        {/* Добавьте другие изображения */}
      </Swiper>
    </div>
  );
};

export default SwiperMain;
