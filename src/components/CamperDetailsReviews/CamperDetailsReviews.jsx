import css from './CamperDetailsReviews.module.css';
import BaseIcon from '../BaseIcon/BaseIcon';

export default function CamperDetailsReviews({ reviews, id }) {
  return (
    <ul className={css.reviewList} id={id}>
      {reviews.map(review => (
        <li key={review.reviewer_name} className={css.review}>
          <div className={css.container}>
            <div className={css.avatar}>
              <p className={css.avatarText}>{review.reviewer_name[0]}</p>
            </div>
            <div>
              <h3 className={css.name}>{review.reviewer_name}</h3>
              <ul className={css.rating}>
                {[...Array(5)].map((_, index) => (
                  <li key={index}>
                    <BaseIcon
                      className={
                        index + 1 < review.reviewer_rating
                          ? css.fillStar
                          : css.emptyStar
                      }
                      name="icon-star"
                      width={16}
                      height={16}
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className={css.comment}>{review.comment}</p>
        </li>
      ))}
    </ul>
  );
}
