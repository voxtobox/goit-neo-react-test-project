import css from './CamperListItem.module.css';

import { Link, useLocation } from 'react-router-dom';

import FeatureList from '../FeatureBadgeList/FeatureBadgeList';
import BaseIcon from '../BaseIcon/BaseIcon';
import BaseButton from '../BaseButton/BaseButton';

export default function CamperListItem({ camper }) {
  const pageLocation = useLocation();
  const price = camper.price.toFixed(2);

  return (
    <div className={css.card}>
      <img
        src={camper.gallery[0].thumb}
        alt={camper.name}
        className={css.image}
      />
      <div className={css.content}>
        <div>
          <div className={css.header}>
            <h2 className={css.title}>{camper.name}</h2>
            <p className={css.price}>&#8364;{price}</p>
            <button className={css.favoriteButton} type="button">
              <BaseIcon
                className={css.favoriteIcon}
                name="icon-heart"
                width={24}
                height={24}
              />
            </button>
          </div>
          <div className={css.meta}>
            <div className={css.rating}>
              <BaseIcon
                className={css.ratingIcon}
                name="icon-star"
                width={16}
                height={16}
              />
              <p className={css.metaText}>
                {camper.rating} ({camper.reviews.length} Reviews)
              </p>
            </div>
            <div className={css.location}>
              <BaseIcon
                className={css['location-icon']}
                name="icon-location"
                width={16}
                height={16}
              />
              <p className={css.metaText}>{camper.location}</p>
            </div>
          </div>
        </div>
        <p className={css.description}>{camper.description}</p>
        <FeatureList camper={camper} />
        <Link to={`/catalog/${camper.id}`} state={pageLocation}>
          <BaseButton primary>Show more</BaseButton>
        </Link>
      </div>
    </div>
  );
}
