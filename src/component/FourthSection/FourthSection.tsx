import type { FC } from 'react';
import samokat from '../../img/samokatFourthSection.svg';
interface FourthSectionProps {}

const FourthSection: FC<FourthSectionProps> = () => {
    return (
        <section className='fourth-section padding-common'>
            <div className='fourth-section__wrapper wrapper'>
                <h1 className='fourth-section__title text-title'>Купить абонемент и вступить в клуб смогут те, кто в Плюсе</h1>
                <h3 className='fourth-section__text text-common'>
                    За каждую поездку на самокатах такие пользователи получают кешбэк баллами. Баллы можно тратить на поездки на самокатах и такси с Яндекс Go, покупки и заказы в других сервисах Яндекса
                </h3>
                <img src={samokat} alt='' className='fourth-section__img'></img>
            </div>
        </section>
    );
}

export default FourthSection;
