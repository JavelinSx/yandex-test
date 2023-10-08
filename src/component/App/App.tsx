import type { FC } from 'react';
import FirstSection from '../FirstSection/FirstSection';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className='app'>
      <FirstSection></FirstSection>
      <Footer></Footer>
    </div>
  );
}

export default App;

