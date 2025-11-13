import Icon from '@/components/element/Icon';
import clsx from 'clsx';
import { ButtonHTMLAttributes } from 'react';
import Button from './Button';
import styles from './Toggle.module.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  active?: boolean;
}

const Toggle = ({ children, className, active = false, ...props }: Props) => {
  return (
    <Button
      className={clsx(styles.container, className, {
        [styles['is--active']]: active,
      })}
      {...props}
    >
      {children} <Icon name="arrow" />
    </Button>
  );
};

export default Toggle;
