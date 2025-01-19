import { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import clsx from 'clsx';
import { fetchCamperById } from '../../redux/camperOps';
import {
  selectCamperCurrent,
  selectCamperError,
} from '../../redux/camperSlice';
import BaseIcon from '../../components/BaseIcon/BaseIcon';
import CamperDetailsFeatures from '../../components/CamperDetailsFeatures/CamperDetailsFeatures';
import CamperDetailsReviews from '../../components/CamperDetailsReviews/CamperDetailsReviews';
import CamperBookForm from '../../components/CamperBookForm/CamperBookForm';
import css from './PageCamperDetails.module.css';

const TAB_FEATURES = 'features';
const TAB_REVIEWS = 'reviews';

export default function CamperDetailsPage() {
  const { id } = useParams();
  const { hash } = useLocation();

  const dispatch = useDispatch();
  console.log(id);

  useEffect(() => {
    if (!id) {
      return;
    }
    dispatch(fetchCamperById(id));
  }, [dispatch, id]);

  const camper = useSelector(selectCamperCurrent);
  const error = useSelector(selectCamperError);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  const [activeTab, setActiveTab] = useState(
    hash?.replace('#', '') || TAB_FEATURES
  );

  return (
    camper && (
      <main className="container">
        <div className={css.wrap}>
          <div className={css.mainInfo}>
            <div className={css.header}>
              <h2 className={css.title}>{camper.name}</h2>
              <div className={css.meta}>
                <div className={css.rating}>
                  <BaseIcon
                    className={css.ratingIcon}
                    name="icon-star"
                    width={16}
                    height={16}
                  />
                  <a
                    className={css.metaLink}
                    href={`#${TAB_REVIEWS}`}
                    onClick={() => {
                      setActiveTab(TAB_REVIEWS);
                    }}
                  >
                    {camper.rating} ({camper.reviews && camper.reviews.length}{' '}
                    Reviews)
                  </a>
                </div>
                <div className={css.location}>
                  <BaseIcon
                    className={css.locationIcon}
                    name="icon-location"
                    width={16}
                    height={16}
                  />
                  <p className={css.metaText}>{camper.location}</p>
                </div>
              </div>
              <p className={css.price}>
                &#8364;{camper.price && camper.price.toFixed(2)}
              </p>
            </div>
            <ul className={css.gallery}>
              {camper.gallery?.map((item, index) => (
                <li key={index}>
                  <img
                    src={item.thumb}
                    alt={camper.name}
                    className={css.image}
                  />
                </li>
              ))}
            </ul>
            <p className={css.description}>{camper.description}</p>
          </div>
          <div className={css.moreInfo}>
            <ul className={css.tabs}>
              <li>
                <a
                  href={`#${TAB_FEATURES}`}
                  className={clsx(
                    css.tabLink,
                    activeTab === TAB_FEATURES && css.tabLinkSelected
                  )}
                  onClick={() => setActiveTab(TAB_FEATURES)}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href={`#${TAB_REVIEWS}`}
                  className={clsx(
                    css.tabLink,
                    activeTab === TAB_REVIEWS && css.tabLinkSelected
                  )}
                  onClick={() => setActiveTab(TAB_REVIEWS)}
                >
                  Reviews
                </a>
              </li>
            </ul>
            <div className={css.infoContainer}>
              <div className={css.detailsContainer}>
                {activeTab !== TAB_REVIEWS ? (
                  <CamperDetailsFeatures camper={camper} id={TAB_FEATURES} />
                ) : (
                  <CamperDetailsReviews
                    reviews={camper?.reviews || []}
                    id={TAB_REVIEWS}
                  />
                )}
              </div>
              <div className={css.formContainer}>
                <CamperBookForm camper={camper} />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  );
}
