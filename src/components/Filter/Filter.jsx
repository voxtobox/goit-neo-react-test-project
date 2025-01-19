import { VEHICLE_FEATURES, VEHICLE_TYPES } from '../../config/filters';
import css from './Filter.module.css';
import BaseButtonIcon from '../BaseButtonIcon/BaseButtonIcon';
import BaseButton from '../BaseButton/BaseButton';
import FilterLocation from '../FilterLocation/FilterLocation';

export default function Filters() {
  return (
    <div>
      <div className={css.location}>
        <FilterLocation />
      </div>
      <p className={css.title}>Filters</p>
      <h3 className={css.sectionTitle}>Vehicle equipment</h3>
      <ul className={css.sectionFilterList}>
        {VEHICLE_FEATURES.map(F => (
          <li key={F.value}>
            <BaseButtonIcon icon={F.icon}>{F.title}</BaseButtonIcon>
          </li>
        ))}
      </ul>
      <h3 className={css.sectionTitle}>Vehicle type</h3>
      <ul className={css.sectionFilterList}>
        {VEHICLE_TYPES.map(F => (
          <li key={F.value}>
            <BaseButtonIcon icon={F.icon}>{F.title}</BaseButtonIcon>
          </li>
        ))}
      </ul>
      <BaseButton primary className={css.searchButton}>
        Search
      </BaseButton>
    </div>
  );
}
