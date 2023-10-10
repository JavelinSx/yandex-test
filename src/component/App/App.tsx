import type { FC } from 'react';
import { useState, useEffect } from 'react';
import FirstSection from '../FirstSection/FirstSection';
import Footer from '../Footer/Footer';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSetcion';
import FourthSection from '../FourthSection/FourthSection';
import FifthSection from '../FifthSection/FifthSection';
import ButtonAbonementFixed from '../ButtonAbonementFixed/ButtonAbonementFixed';
interface AppProps {}

const App: FC<AppProps> = () => {
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

  const componentToRender = windowWidth > 1023 ? null : <ButtonAbonementFixed />;
  return (
    <div className='app'>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <Footer></Footer>
      {componentToRender}
    </div>
  );
};

export default App;
