import { useDispatch, useSelector } from 'react-redux';
import {
  selectFilterFeatures,
  selectFilterVehicleType,
  selectFilterLocation,
  setFilterLocation,
  toggleFilterFeature,
  toggleFilterVehicleType,
} from '../../redux/filterSlice';
import { VEHICLE_FEATURES, VEHICLE_TYPES } from '../../config/filters';
import css from './Filter.module.css';
import BaseButtonIcon from '../BaseButtonIcon/BaseButtonIcon';
import BaseButton from '../BaseButton/BaseButton';
import FilterLocation from '../FilterLocation/FilterLocation';

export default function Filters() {
  const dispatch = useDispatch();

  const location = useSelector(selectFilterLocation);
  const selectedFeatures = useSelector(selectFilterFeatures);
  const selectedVehicleType = useSelector(selectFilterVehicleType);

  function handlerFeatureClick(feature) {
    dispatch(toggleFilterFeature(feature));
  }

  function handlerVehicleTypeClick(vehicleType) {
    dispatch(toggleFilterVehicleType(vehicleType));
  }

  function handleLocationChange(value) {
    dispatch(setFilterLocation(value));
  }

  function getIsFeatureSelected(feature) {
    return selectedFeatures.includes(feature);
  }

  function getIsVehicleTypeSelected(vehicleType) {
    return selectedVehicleType === vehicleType;
  }

  return (
    <div>
      <div className={css.location}>
        <FilterLocation value={location} onChange={handleLocationChange} />
      </div>
      <p className={css.title}>Filters</p>
      <h3 className={css.sectionTitle}>Vehicle equipment</h3>
      <ul className={css.sectionFilterList}>
        {VEHICLE_FEATURES.map(feature => (
          <li key={feature.value}>
            <BaseButtonIcon
              icon={feature.icon}
              active={getIsFeatureSelected(feature.value)}
              onClick={() => handlerFeatureClick(feature.value)}
            >
              {feature.title}
            </BaseButtonIcon>
          </li>
        ))}
      </ul>
      <h3 className={css.sectionTitle}>Vehicle type</h3>
      <ul className={css.sectionFilterList}>
        {VEHICLE_TYPES.map(vtype => (
          <li key={vtype.value}>
            <BaseButtonIcon
              icon={vtype.icon}
              active={getIsVehicleTypeSelected(vtype.value)}
              onClick={() => handlerVehicleTypeClick(vtype.value)}
            >
              {vtype.title}
            </BaseButtonIcon>
          </li>
        ))}
      </ul>
      <BaseButton primary className={css.searchButton}>
        Search
      </BaseButton>
    </div>
  );
}
