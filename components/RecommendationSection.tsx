import { useState } from 'react';
import Image from 'next/image';
import thumbs_up from '../public/svg/thumbs-up.svg';
import thumbs_down from '../public/svg/thumbs-down.svg';
import thumbs_up_black from '../public/svg/thumbs-up-black.svg';
import thumbs_down_black from '../public/svg/thumbs-down-black.svg';

const RecommendationSection = () => {
  const [thumbsUpSelected, setThumbsUpSelected] = useState(false);
  const [thumbsDownSelected, setThumbsDownSelected] = useState(false);

  const handleRecommend = (recommendation: string) => {
    if (recommendation === 'yes') {
      setThumbsUpSelected(true);
      setThumbsDownSelected(false);
    } else if (recommendation === 'no') {
      setThumbsUpSelected(false);
      setThumbsDownSelected(true);
    }
  };

  return (
    <div className="py-3">
      <h2 className="font-semibold">Would you recommend Trausti?</h2>
      <div className="text-xs pb-2">How would you recommend our service</div>
      <div className="flex items-center">
        <button
          className={`flex items-center mr-4 py-2 rounded ${
            thumbsUpSelected ? 'bg-blue-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => handleRecommend('yes')}
        >
          <Image
            src={thumbsUpSelected ? thumbs_up_black : thumbs_up}
            alt="Thumbs Up"
            width={24}
            height={24}
          />
          <div className="px-1">Yes</div>
        </button>
        <button
          className={`flex items-center py-2 rounded ${
            thumbsDownSelected ? 'bg-red-500 text-white' : 'text-gray-700'
          }`}
          onClick={() => handleRecommend('no')}
        >
          <Image
            src={thumbsDownSelected ? thumbs_down_black : thumbs_down}
            alt="Thumbs Down"
            width={24}
            height={24}
          />
          <div className="px-1">No</div>
        </button>
      </div>
    </div>
  );
};

export default RecommendationSection;
