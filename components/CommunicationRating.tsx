import StarRating from './StarRating';

const CommunicationRating = () => {
  return (
    <div className="py-3">
      <h2 className="font-semibold">Communication</h2>
      <div className="text-xs pb-2">How would you rate our communication</div>
      <StarRating />
    </div>
  );
};

export default CommunicationRating;
