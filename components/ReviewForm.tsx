'use client';

import CommunicationRating from './CommunicationRating';
import RecommendationSection from './RecommendationSection';
import SafetyRating from './SafetyRating';

const ReviewForm = () => {
  return (
    <div className="h-screen bg-gray-200 flex justify-center">
      <div className="p-8">
        <div className="max-w-md bg-white p-4 rounded-3xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-6 w-6 top-0 left-0 cursor-pointer"
            onClick={() => console.log('Close clicked')}
          >
            <path
              fill="currentColor"
              d="M19 6.41l-1.41-1.41L12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"
            />
          </svg>
          <h1 className="text-lg font-bold">Leave a review</h1>
          <SafetyRating />
          <CommunicationRating />
          <RecommendationSection />
        </div>
      </div>
    </div>
  );
};

export default ReviewForm;
