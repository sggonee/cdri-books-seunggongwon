import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { NavLink, NavLinkProps } from 'react-router';
import style from './index.module.css';

interface Props extends NavLinkProps {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Link = ({
  to = '/',
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <NavLink to={to} className={clsx(style.button, style[variant], style[size], className)} {...rest}>
      {children}
    </NavLink>
  );
};

export default Link;
