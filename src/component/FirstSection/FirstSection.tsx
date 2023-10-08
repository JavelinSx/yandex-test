import type { FC } from 'react';
import Header from '../Header/Header';
import titleText from '../../img/titleText.svg'
import titlePrice from '../../img/title-price.svg'
import samokatImg from '../../img/samokat-photo.png'
import samokatText from '../../img/samokat-text.svg'
interface FirstSectionProps {}

const FirstSection: FC<FirstSectionProps> = () => {
    return (
        <section className='first-section padding-common'>
            <div className='first-section__content-wrapper'>
                <Header></Header>
                <img src={titleText} alt='' className='first-section__title-text-img'></img>
                <h3 className='first-section__title-text text-normal'>
                    Купите абонемент, чтобы стать частью клуба в новом сезоне–2024. 8 месяцев за
                    <img src={titlePrice} alt='' className='first-section__title-price'></img>
                </h3>
                <img src={samokatImg} alt='' className='first-section__samokat'>
                    
                </img>
                <img src={samokatText} alt='' className='first-section__samokat-text'>
                    
                </img>
                
            </div> 
        </section>
    );
}

export default FirstSection;
