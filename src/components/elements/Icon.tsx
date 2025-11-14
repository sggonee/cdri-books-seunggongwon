import type { ImgHTMLAttributes } from 'react';

const iconMap = import.meta.glob('../../assets/icons/*.svg', {
  eager: true,
}) as Record<string, { default: string }>;
interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: string;
}

const Icon = ({ name, ...props }: IconProps) => {
  const path = `../../assets/icons/icon-${name}.svg`;
  const SvgIcon = iconMap[path]?.default;

  if (!SvgIcon) {
    console.warn(`[Not found icon] from ${path}`);
    return null;
  }

  return <img src={SvgIcon} alt={name} {...props} />;
};

export default Icon;
