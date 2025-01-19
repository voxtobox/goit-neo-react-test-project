import css from './CamperListItem.module.css';
import clsx from 'clsx';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../../redux/favoritesSlice.js';
import { selectFavoritesList } from '../../redux/favoritesSlice.js';
import FeatureList from '../FeatureBadgeList/FeatureBadgeList';
import BaseIcon from '../BaseIcon/BaseIcon';
import BaseButton from '../BaseButton/BaseButton';

export default function CamperListItem({ camper }) {
  const dispatch = useDispatch();
  const pageLocation = useLocation();
  const price = camper.price.toFixed(2);
  const favoritesList = useSelector(selectFavoritesList);
  const isFavorite = favoritesList.includes(camper.id);

  function handlerFavoriteClick() {
    if (isFavorite) {
      dispatch(removeFavorite(camper.id));
    } else {
      dispatch(addFavorite(camper.id));
    }
  }

  const favoriteIconClass = clsx(
    css.favoriteIcon,
    isFavorite && css.favoriteIconSelected
  );

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
            <button
              className={css.favoriteButton}
              type="button"
              onClick={handlerFavoriteClick}
            >
              <BaseIcon
                className={favoriteIconClass}
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
