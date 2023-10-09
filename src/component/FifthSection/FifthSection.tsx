import type { FC } from 'react';
interface FifthSectionProps {}

const FifthSection: FC<FifthSectionProps> = () => {
    return (
        <section className='fifth-section padding-common'>
            <div className='fifth-section__wrapper wrapper'>
                <h1 className='fifth-section__title text-title'>80  % наших пользователей уже в клубе и экономят на поездках</h1>
                <h3 className='fifth-section__text text-common'>
                    Присоединяйтесь — опция начнёт действовать в начале сезона–2024. Об открытии сезона предупредим заранее, чтобы вы были готовы
                </h3>
            </div>
        </section>
    );
}

export default FifthSection;
