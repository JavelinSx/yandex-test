import type { FC } from 'react';
import sliderImg1 from '../../img/slider1.webp';
import sliderImg2 from '../../img/slider2.webp';
import sliderImg3 from '../../img/slider3.webp';
import sliderImg4 from '../../img/slider4.webp';
interface GalleryProps {}

const Gallery: FC<GalleryProps> = () => {
  return (
    <div className='gallery-wrapper'>
      <div className='gallery-container gallery-down'>
        <img src={sliderImg1} alt='1' className='gallery-img' />
        <img src={sliderImg4} alt='2' className='gallery-img' />
      </div>
      <div className='gallery-container gallery-up'>
        <img src={sliderImg2} alt='3' className='gallery-img' />
        <img src={sliderImg3} alt='4' className='gallery-img' />
      </div>
    </div>
  );
};

export default Gallery;
