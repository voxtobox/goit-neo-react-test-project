import { useId } from 'react';
import css from './FilterLocation.module.css';
import BaseInput from '../BaseInput/BaseInput';

export default function FilterLocation({ onChange, ...props }) {
  const id = useId();

  function handleChange(event) {
    onChange(event.target.value);
  }

  return (
    <div className={css.location}>
      <label className={css.label} htmlFor={id}>
        Location
      </label>
      <BaseInput
        {...props}
        id={id}
        name="location"
        placeholder="City"
        icon="icon-location"
        onChange={handleChange}
      />
    </div>
  );
}
