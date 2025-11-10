import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import style from './index.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ variant = 'primary', size = 'md', className, children, ...rest }: Props) => {
  return (
    <button className={clsx(style.button, style[variant], style[size], className)} {...rest}>
      {children}
    </button>
  );
};

export default Button;
