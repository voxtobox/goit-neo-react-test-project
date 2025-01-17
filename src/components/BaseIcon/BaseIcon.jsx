import icons from '../../assets/icons.svg';

export default function BaseIcon({ className, width, height, name }) {
  return (
    <svg className={className} width={width} height={height}>
      <use xlinkHref={`${icons}#${name}`} />
    </svg>
  );
}
