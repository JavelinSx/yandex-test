import type { FC } from 'react';

interface ButtonProps {
  text: string;
  className: string;
}

const Button: FC<ButtonProps> = ({ text, className }) => {
  return (
    <button className={className}>
      <a href='https://go.yandex/ru_ru/lp/rides/scooter' rel='noreferrer' target='_blank'>
        {text}
      </a>
    </button>
  );
};

export default Button;
