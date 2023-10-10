import type { FC } from 'react';
import { useState, useEffect } from 'react';

import samokatTextBlur from '../../img/samokat-solo+text375.webp';
import samokatPlus from '../../img/samokat-photo+.webp';

interface FourthSectionProps {}

const FourthSection: FC<FourthSectionProps> = () => {
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

  const containerImg =
    windowWidth >= 1024 ? (
      <div className='fourth-section-container'>
        <img src={samokatPlus} alt='' className='fourth-section__img-plus'></img>
      </div>
    ) : (
      <div className='fourth-section-container flex-center-column'>
        <img src={samokatTextBlur} alt='' className='fourth-section__img'></img>
      </div>
    );
  const textTitle =
    windowWidth >= 1024 ? (
      <h1 className='fourth-section__title text-title'>
        Купить абонемент&ensp;&ensp;&ensp; и вступить&ensp;&ensp;&ensp; в клуб смогут те, кто в Плюсе
      </h1>
    ) : (
      <h1 className='fourth-section__title text-title'>
        Купить абонемент&ensp;&ensp;&ensp;&ensp;&ensp;&ensp; и вступить
        <br /> в клуб смогут те, кто в Плюсе
      </h1>
    );
  const textDescription =
    windowWidth >= 1024 ? (
      <h3 className='fourth-section__text text-common'>
        За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить на поездки на
        самокатах
        <br /> и такси с Яндекс Go, покупки
        <br /> и заказы в других сервисах Яндекса
      </h3>
    ) : (
      <h3 className='fourth-section__text text-common'>
        За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить
        <br /> на поездки на самокатах и такси
        <br /> с Яндекс Go, покупки и заказы в других сервисах Яндекса
      </h3>
    );
  return (
    <section className='fourth-section padding-common'>
      <div className='fourth-section__wrapper wrapper'>
        {textTitle}
        {textDescription}
        {containerImg}
      </div>
    </section>
  );
};

export default FourthSection;
