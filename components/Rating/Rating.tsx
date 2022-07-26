import React from 'react';
import { IRating } from './Rating.props';

import styles from './Rating.module.css';
import cn from 'classnames';

import StarIcon from './star.svg';

export const Rating = ({ isEdited = false, rating, setRating, ...props }: IRating): JSX.Element => {
  const [ratingArr, setRatingArr] = React.useState<JSX.Element[]>(new Array(5).fill(<></>));

  React.useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedRating = ratingArr.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEdited,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => changeRating(i + 1)}
        >
          <StarIcon
            tabIndex={isEdited ? 0 : -1}
            onKeyDown={(e: React.KeyboardEvent<SVGAElement>) => isEdited && handleSpace(i + 1, e)}
          />
        </span>
      );
    });

    setRatingArr(updatedRating);
  };

  const changeDisplay = (i: number) => {
    if (!isEdited) return;

    constructRating(i);
  };

  const changeRating = (i: number) => {
    if (!isEdited || !setRating) return;

    setRating(i);
  };

  const handleSpace = (i: number, e: React.KeyboardEvent<SVGAElement>) => {
    if (e.code !== 'Space' || !setRating) return;

    setRating(i);
  };

  return (
    <div {...props}>
      {ratingArr.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
