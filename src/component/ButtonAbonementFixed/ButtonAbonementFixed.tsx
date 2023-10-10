import type { FC } from 'react';

interface ButtonAbonementFixedProps {}

const ButtonAbonementFixed: FC<ButtonAbonementFixedProps> = () => {
  return (
    <button className='button__abonement'>
      <a href='https://go.yandex/ru_ru/lp/rides/scooter' rel='noreferrer' target='_blank'>
        Хочу абонимент
      </a>
    </button>
  );
};

export default ButtonAbonementFixed;
