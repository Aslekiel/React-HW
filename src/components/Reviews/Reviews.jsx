import { ReviewText } from "../ReviewText/ReviewText";

export const Reviews = ({ reviews }) => {
  return (
    <div>
      {reviews.map((review) => (
        <ReviewText user={review.user} text={review.text} />
      ))}
    </div>
  );
};
