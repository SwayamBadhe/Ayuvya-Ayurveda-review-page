import StarRating from './StarRating';

const SafetyRating = () => {
  return (
    <div className="py-5">
      <h2 className="font-semibold">Safety</h2>
      <div className="text-xs pb-2">How would you rate our safety</div>
      <StarRating />
    </div>
  );
};

export default SafetyRating;
