import { Puff } from 'react-loader-spinner';
import css from './Loader.module.css';

export default function Loader() {
  return (
    <div className={css.container}>
      <Puff width={30} color={'#3f50b5'} />
    </div>
  );
}
