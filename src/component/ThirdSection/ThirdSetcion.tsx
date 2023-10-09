import type { FC } from 'react';
import titleText from '../../img/titleTextThirdSection.svg'
import Slider from '../Slider/Slider';
interface ThirdSectionProps {}

const ThirdSection: FC<ThirdSectionProps> = () => {
    return (
        <section className='third-section padding-common'>
            <div className='third-section__wrapper wrapper'>
                <h1 className='third-section__title text-title'>Эксклюзивный доступ к событиям Самокатов</h1>
                <h3 className='third-section__text text-common'>
                    С абонементом — у вас доступ к специальным мероприятиям, скидки и классный мерч. В 2023 году мы танцевали на Даче Плюс с Антохой MC, катались на самокатах с Сергеем Мезенцевым и слушали хор Attaque de Panique
                </h3>
                <Slider></Slider>
            </div>
        </section>
    );
}

export default ThirdSection;
