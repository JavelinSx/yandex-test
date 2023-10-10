import type { FC } from 'react';

interface FooterProps {}

const Footer: FC<FooterProps> = () => {
    return (
        <footer className='footer padding-common'>
            <span className='footer-text'>
            Доп. опция «Абонемент на самокаты» на 8 месяцев (240 дней) активируется автоматически с момента старта сезона 2024 г. самокатов Яндекс Go, далее предусмотрено автопродление доп.опции за 399 руб./мес. 
            Сертификат на доп.опцию «Абонемент на самокаты» на 8 месяцев оформляется на условиях документа 
            <a className='footer-link' target="_blank" rel='noreferrer' href='https://yandex.ru/legal/scooters_seasonpass'> yandex.ru/legal/scooters_seasonpass</a>.
            Доп.опция доступна пользователям с активной подпиской (условия подписки: 
            <a className='footer-link' target="_blank" rel='noreferrer' href='https://yandex.ru/legal/yandex_plus_conditions'> yandex.ru/legal/yandex_plus_conditions</a>
            ), есть ограничения, подробнее: 
            <a className='footer-link' target="_blank" rel='noreferrer' href='https://yandex.ru/legal/yandex_plus_opzii_list'> yandex.ru/legal/yandex_plus_opzii_list</a>.
            В случае отсутствия у пользователя активной подписки на дату активации доп.опции, пользователю предоставляется 7 дней подписки Яндекс Плюс бесплатно, далее автопродление — 299 руб./мес. 
            Электросамокаты Яндекс Go — сервис аренды электросамокатов на условиях: 
            <a className='footer-link' target="_blank" rel='noreferrer' href='https://clck.ru/gwDGn'> clck.ru/gwDGn</a>
            . 0+
            </span>
        </footer>
    );
}

export default Footer;
