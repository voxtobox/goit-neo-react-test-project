import { Puff } from 'react-loader-spinner';
import clsx from 'clsx';
import css from './Loader.module.css';

export default function Loader({ absolute }) {
  const className = clsx(css.container, absolute && css.absolute);

  return (
    <div className={className}>
      <Puff width={30} color={'#e44848'} />
    </div>
  );
}
