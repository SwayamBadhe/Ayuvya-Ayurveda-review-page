import Image from 'next/image';
import { useState } from 'react';

import star from '../public/svg/star.svg';
import star_blank from '../public/svg/star-blank.svg';

const filledStarSVG = (
  <Image src={star} alt="Filled Star" width={20} height={20} />
);

const emptyStarSVG = (
  <Image src={star_blank} alt="Empty Star" width={20} height={20} />
);

const StarRating = () => {
  const [filledStars, setFilledStars] = useState(0);

  const handleToggle = (index: number) => {
    if (index <= filledStars) {
      setFilledStars(index - 1);
    } else {
      setFilledStars(index);
    }
  };

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => (
        <span
          key={index}
          onClick={() => handleToggle(index)}
          className={`text-3xl cursor-pointer`}
        >
          {index <= filledStars ? filledStarSVG : emptyStarSVG}
        </span>
      ))}
    </div>
  );
};

export default StarRating;
