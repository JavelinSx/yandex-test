import type { FC } from 'react';
import FirstSection from '../FirstSection/FirstSection';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSetcion';
import FourthSection from '../FourthSection/FourthSection';
import FifthSection from '../FifthSection/FifthSection';
interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className='app'>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <FourthSection></FourthSection>
      <FifthSection></FifthSection>
      <Footer></Footer>
      <button className='button_abonement'>Хочу абонимент</button>
    </div>
  );
}

export default App;

