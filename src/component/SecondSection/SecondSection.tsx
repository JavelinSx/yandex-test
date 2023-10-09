import type { FC } from 'react';
import iconMoney from '../../img/secondSectionIconMoney.svg'
import iconTime from '../../img/secondSectionIconTime.svg'
import iconSamokat from '../../img/secondSectionIconSamokat.svg'
import iconBattarey from '../../img/secondSectionIconBattarey.svg'
interface SecondSectionProps {}

const SecondSection: FC<SecondSectionProps> = () => {
    return (
        <section className='second-section padding-common'>
            <div className='second-section__wrapper'>
                <h1 className='second-section__title text-title'>Вот что даёт участие в клубе</h1>
                <ul className='second-section__list'>
                    <li className='second-section__item'>
                        <img src={iconMoney} alt=''></img>
                        <span className='second-section__item-text text-common'>0 ₽ за старт в каждой поездке</span>
                    </li>
                    <li className='second-section__item'>
                        <img src={iconSamokat} alt=''></img>
                        <span className='second-section__item-text text-common'>Катаетесь с друзьями? Бронируйте до трёх самокатов с аккаунта с абонементом — так у всех будет бесплатный старт</span>
                    </li>
                    <li className='second-section__item'>
                        <img src={iconTime} alt=''></img>
                        <span className='second-section__item-text text-common'>Бесплатная пауза 15 минут в поездке — например, чтобы зайти за кофе или передохнуть</span>
                    </li>
                    <li className='second-section__item'>
                        <img src={iconBattarey} alt=''></img>
                        <span className='second-section__item-text text-common'>Если самокат недостаточно заряжен или с ним неудобно переходить дорогу, замените по пути на другой — это бесплатно</span>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default SecondSection;
