import icons from '../../assets/icons.svg';
import css from './BaseIcon.module.css';
import clsx from 'clsx';

const STROKE_ICONS = ['icon-gas-stove', 'icon-microwave', 'icon-water'];

export default function BaseIcon({ className, width, height, name }) {
  const computedClassName = clsx(
    className,
    STROKE_ICONS.includes(name) && css.stroke
  );

  return (
    <svg className={computedClassName} width={width} height={height}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
}
