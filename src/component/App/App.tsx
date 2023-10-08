import type { FC } from 'react';
import FirstSection from '../FirstSection/FirstSection';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SecondSection from '../SecondSection/SecondSection';
import ThirdSection from '../ThirdSection/ThirdSetcion';
interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className='app'>
      <FirstSection></FirstSection>
      <SecondSection></SecondSection>
      <ThirdSection></ThirdSection>
      <Footer></Footer>
    </div>
  );
}

export default App;

