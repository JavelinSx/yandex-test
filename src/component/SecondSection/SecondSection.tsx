import type { FC } from 'react';
import { useState, useEffect } from 'react';
import iconMoney from '../../img/secondSectionIconMoney.svg';
import iconTime from '../../img/secondSectionIconTime.svg';
import iconSamokat from '../../img/secondSectionIconSamokat.svg';
import iconBattarey from '../../img/secondSectionIconBattarey.svg';
import iconMoney375 from '../../img/secondSectionIconMoney375.svg';
import iconTime375 from '../../img/secondSectionIconTime375.svg';
import iconSamokat375 from '../../img/secondSectionIconSamokat375.svg';
import iconBattarey375 from '../../img/secondSectionIconBattarey375.svg';
interface SecondSectionProps {}

const SecondSection: FC<SecondSectionProps> = () => {
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

  const renderItems =
    windowWidth >= 1024 ? (
      <>
        <li className='second-section__item'>
          <img src={iconMoney} alt='' className='second-section__img'></img>
          <span className='second-section__item-text text-common'>0 ₽ за старт в каждой поездке</span>
        </li>
        <li className='second-section__item'>
          <img src={iconSamokat} alt='' className='second-section__img'></img>
          <span className='second-section__item-text text-common'>
            Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так у всех будет бесплатный
            старт
          </span>
        </li>
        <li className='second-section__item'>
          <img src={iconTime} alt='' className='second-section__img'></img>
          <span className='second-section__item-text text-common'>
            Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть
          </span>
        </li>
        <li className='second-section__item'>
          <img src={iconBattarey} alt='' className='second-section__img'></img>
          <span className='second-section__item-text text-common'>
            Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой —
            это бесплатно
          </span>
        </li>
      </>
    ) : (
      <>
        <li className='second-section__item'>
          <img src={iconMoney375} alt='' className='second-section__img'></img>
          <span className='second-section__item-text text-common'>0 ₽ за старт в каждой поездке</span>
        </li>
        <li className='second-section__item'>
          <img src={iconSamokat375} alt='' className='second-section__img'></img>
          <span className='second-section__item-text text-common'>
            Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так у всех будет бесплатный
            старт
          </span>
        </li>
        <li className='second-section__item'>
          <img src={iconTime375} alt='' className='second-section__img'></img>
          <span className='second-section__item-text text-common'>
            Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть
          </span>
        </li>
        <li className='second-section__item'>
          <img src={iconBattarey375} alt='' className='second-section__img'></img>
          <span className='second-section__item-text text-common'>
            Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой —
            это бесплатно
          </span>
        </li>
      </>
    );
  return (
    <section className='second-section padding-common'>
      <div className='second-section__wrapper'>
        <h1 className='second-section__title text-title text-title_large'>Вот что даёт участие в клубе</h1>
        <ul className='second-section__list'>{renderItems}</ul>
      </div>
    </section>
  );
};

export default SecondSection;
