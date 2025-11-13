import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import style from './Button.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button = ({ variant = 'primary', size = 'md', className, children, ...props }: Props) => {
  return (
    <button className={clsx(style.button, style[variant], style[size], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
