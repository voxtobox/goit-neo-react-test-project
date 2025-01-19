import css from './FeatureBadgeList.module.css';

import BaseBadge from '../BaseBadge/BaseBadge';

const FeatureList = ({ camper }) => {
  // TODO: Refactor this
  const features = [
    {
      name: 'Automatic',
      icon: camper.transmission === 'automatic' ? 'icon-diagram' : null,
    },
    { name: camper.engine, class: 'fill-icon', icon: 'icon-fuel' },
    {
      name: 'Kitchen',
      class: 'fill-icon',
      icon: camper.kitchen ? 'icon-cup-hot' : null,
    },
    { name: 'AC', class: 'fill-icon', icon: camper.AC ? 'icon-wind' : null },
    {
      name: 'Bathroom',
      class: 'fill-icon',
      icon: camper.bathroom ? 'icon-shower' : null,
    },
    { name: 'TV', class: 'fill-icon', icon: camper.TV ? 'icon-tv' : null },
    {
      name: 'Radio',
      class: 'fill-icon',
      icon: camper.radio ? 'icon-radio' : null,
    },
    {
      name: 'Refrigerator',
      class: 'fill-icon',
      icon: camper.refrigerator ? 'icon-fridge' : null,
    },
    {
      name: 'Microwave',
      class: 'stroke-icon',
      icon: camper.microwave ? 'icon-microwave' : null,
    },
    {
      name: 'Gas',
      class: 'stroke-icon',
      icon: camper.gas ? 'icon-gas-stove' : null,
    },
    {
      name: 'Water',
      class: 'stroke-icon',
      icon: camper.water ? 'icon-water' : null,
    },
  ].filter(feature => feature.icon);

  return (
    <ul className={css.features}>
      {features.map((feature, index) => (
        <li key={index}>
          <BaseBadge icon={feature.icon} text={feature.name} />
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
