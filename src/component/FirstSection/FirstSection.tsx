import type { FC } from 'react';
import { useState, useEffect } from 'react';
import Header from '../Header/Header';
import titlePrice from '../../img/title-price.png';
import titlePrice1440 from '../../img/title-price1440.png';
import samokatImg from '../../img/samokat-photo.png';
import samokatText from '../../img/samokat-text.png';
import Button from '../Button/Button';
interface FirstSectionProps {}

const FirstSection: FC<FirstSectionProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Обработчик изменения размера окна
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Добавление слушателя события изменения размера окна
    window.addEventListener('resize', handleResize);

    // Очистка слушателя при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const buttonRender = windowWidth >= 1024 ? <Button className='button' text='Стать частью клуба' /> : null;
  const imgRender =
    windowWidth >= 1024 ? (
      <img src={titlePrice1440} alt='' className='first-section__title-price'></img>
    ) : (
      <img src={titlePrice} alt='' className='first-section__title-price'></img>
    );
  return (
    <section className='first-section padding-common'>
      <div className='first-section__content-wrapper wrapper'>
        <Header></Header>
        <h1 className='first-section__title text-title-main'>Вступайте в клуб Самокатов</h1>
        <h3 className='first-section__title-text text-normal'>
          Купите абонемент, чтобы стать частью клуба в новом сезоне–2024. 8 месяцев за
        </h3>
        {imgRender}
        {buttonRender}
        <div className='first-section__container-img'>
          <img src={samokatImg} alt='' className='first-section__samokat'></img>
          <img src={samokatText} alt='' className='first-section__samokat-text'></img>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
