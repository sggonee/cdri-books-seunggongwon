import IconFillLike from '@/assets/icons/icon-fill-like.svg';
import IconLike from '@/assets/icons/icon-like.svg';

interface Props {
  className?: string;
  active?: boolean;
}

const Like = ({ active = false, className }: Props) => {
  return (
    <button>
      <img src={active ? IconFillLike : IconLike} alt="좋아요 아이콘" className={className} />
    </button>
  );
};

export default Like;
