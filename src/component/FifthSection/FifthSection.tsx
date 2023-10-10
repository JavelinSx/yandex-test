import type { FC } from 'react';
import { useState, useEffect } from 'react';
import samolatSoloAndText from '../../img/samokat-solo+text.webp';
import Button from '../Button/Button';
interface FifthSectionProps {}

const FifthSection: FC<FifthSectionProps> = () => {
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
    windowWidth > 1023 ? <img src={samolatSoloAndText} alt='' className='fifth-section__img'></img> : null;
  const button = windowWidth > 1023 ? <Button className='button button-small' text='Хочу абонемент'></Button> : null;
  return (
    <section className='fifth-section padding-common'>
      <div className='fifth-section__wrapper wrapper'>
        <h1 className='fifth-section__title text-title'>
          80  % наших пользователей уже в клубе и экономят на поездках
        </h1>
        <h3 className='fifth-section__text text-common'>
          Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии сезона предупредим заранее, чтобы
          вы были готовы
        </h3>
        {containerImg}
        {button}
      </div>
    </section>
  );
};

export default FifthSection;
