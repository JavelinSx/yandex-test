import type { FC } from 'react';
import logoYandex from '../../img/yandex.svg';
import logoGo from '../../img/Go.png';
import blackGo from '../../img/black-go.svg';
interface LogoProps {}

const Logo: FC<LogoProps> = () => {
  return (
    <div className='logo'>
      <a target='_blank' rel='noreferrer' href='https://ya.ru' className='logo-link'>
        <img src={logoYandex} alt='' className='logo-yandex'></img>
      </a>
      <a target='_blank' rel='noreferrer' href='https://go.yandex' className='logo-link'>
        <img src={logoGo} alt='' className='logo-go'></img>
        <img src={blackGo} alt='' className='logo-go-black'></img>
      </a>
    </div>
  );
};

export default Logo;
