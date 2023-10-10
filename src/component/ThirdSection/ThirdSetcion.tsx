import type { FC } from 'react';
import { useState, useEffect } from 'react';
import SwiperMain from '../SwiperMain/SwiperMain';
import Gallery from '../Gallery/Gallery';
interface ThirdSectionProps {}

const ThirdSection: FC<ThirdSectionProps> = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Обработчик изменения размера окна
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    // Добавление слушателя события изменения размера окна
    window.addEventListener('resize', handleResize);
    console.log('hello');
    // Очистка слушателя при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const componentToRender = windowWidth >= 1024 ? <Gallery /> : <SwiperMain />;

  return (
    <section className='third-section padding-common'>
      <div className='third-section__wrapper wrapper'>
        <h1 className='third-section__title text-title text-title_large'>Эксклюзивный доступ к событиям Самокатов</h1>
        <h3 className='third-section__text text-common'>
          С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч. В 2023 году мы танцевали
          на Даче Плюс с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de Panique
        </h3>
        {componentToRender}
      </div>
    </section>
  );
};

export default ThirdSection;
