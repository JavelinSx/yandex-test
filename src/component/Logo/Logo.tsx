import type { FC } from 'react';
import logoYandex from '../../img/yandex.svg'
import logoGo from '../../img/Go.svg'
import blackGo from '../../img/black-go.svg'
interface LogoProps {}

const Logo: FC<LogoProps> = () => {
    return (
        <div className='logo'>
            <img src={logoYandex} alt='' className='logo-yandex'></img>
            <img src={logoGo} alt='' className='logo-go'></img>
            <img src={blackGo} alt='' className='logo-go-black'></img>
        </div>

    );
}

export default Logo;
