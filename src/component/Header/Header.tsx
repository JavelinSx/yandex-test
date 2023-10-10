import type { FC } from 'react';
import Logo from '../Logo/Logo';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <div className='header'>
      <Logo></Logo>
    </div>
  );
};

export default Header;
