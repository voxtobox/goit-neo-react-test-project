import { useId } from 'react';
import css from './FilterLocation.module.css';
import BaseInput from '../BaseInput/BaseInput';

export default function FilterLocation() {
  const id = useId();

  return (
    <div className={css.location}>
      <label className={css.label} htmlFor={id}>
        Location
      </label>
      <BaseInput
        id={id}
        name="location"
        placeholder="City"
        icon="icon-location"
      />
    </div>
  );
}
