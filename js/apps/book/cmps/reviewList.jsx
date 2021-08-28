import { ReviewPreview } from "./reviewPreview.jsx";

export function ReviewList({ book , onRemoveReview }) {
    return (
      <section className="review">
        {book.reviews.map((review) => {
          return <ReviewPreview key={review.id}  onRemoveReview={onRemoveReview} review={review} />;
        })}
      </section>
    );
  }
  
  