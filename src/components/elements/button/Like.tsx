import { ButtonHTMLAttributes } from 'react';

import Icon from '@/components/elements/Icon';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean;
}

const Like = ({ active = false, className, ...props }: Props) => {
  return (
    <button type="button" {...props}>
      <Icon name={active ? 'fill-like' : 'like'} className={className} />
    </button>
  );
};

export default Like;
