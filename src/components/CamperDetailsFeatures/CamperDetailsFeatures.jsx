import css from './CamperDetailsFeatures.module.css';
import FeatureBadgeList from '../FeatureBadgeList/FeatureBadgeList';

export default function CamperDetailsFeatures({ camper, id }) {
  const getFormValue = value => {
    if (!value) {
      return null;
    } else if (value === 'alcove') {
      return 'Alcove';
    } else if (value == 'panelTruck') {
      return 'Panel truck';
    } else if (value == 'fullyIntegrated') {
      return 'Fully integrated';
    }
  };

  const fixDimensionValue = value => {
    if (!value) return null;
    return value.replace('m', ' m').replace('l', ' l');
  };

  const details = [
    {
      name: 'Form',
      value: getFormValue(camper.form),
    },
    {
      name: 'Length',
      value: fixDimensionValue(camper.length),
    },
    {
      name: 'Width',
      value: fixDimensionValue(camper.width),
    },
    {
      name: 'Height',
      value: fixDimensionValue(camper.height),
    },
    {
      name: 'Tank',
      value: fixDimensionValue(camper.tank),
    },
    {
      name: 'Consumption',
      value: camper.consumption,
    },
  ].filter(detail => detail.value);

  return (
    <div className={css.container} id={id}>
      <FeatureBadgeList camper={camper} />
      <div>
        <h3 className={css.title}>Vehicle Details</h3>
        <ul className={css.detailList}>
          {details.map(detail => (
            <li key={detail.name} className={css.detailItem}>
              <p>{detail.name}</p>
              <p>{detail.value}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
