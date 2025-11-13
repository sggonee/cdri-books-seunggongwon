import IconFillLike from '@/assets/icons/icon-fill-like.svg';
import IconLike from '@/assets/icons/icon-like.svg';
import { ButtonHTMLAttributes } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  active?: boolean;
}

const Like = ({ active = false, className, ...props }: Props) => {
  return (
    <button type="button" {...props}>
      <img src={active ? IconFillLike : IconLike} alt="좋아요" className={className} />
    </button>
  );
};

export default Like;
