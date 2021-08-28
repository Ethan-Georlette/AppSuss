
export function ReviewPreview({ review, onRemoveReview }) {
    return (
        <div className="card-review">
            <button onClick={() => {onRemoveReview(review.id)}}><i className="fas fa-trash-alt"></i></button>
            <div className="review-info">
                <span className="review-name"> Name:{review.name}</span>
                <small className="review-date"> Date:{review.date}</small>
            </div>
            <div>{review.txt}</div>
            <div>
                <i className={review.rate >= 1 ? "fas fa-star yellow" : "fas fa-star"}></i>
                <i className={review.rate >= 2 ? "fas fa-star yellow" : "fas fa-star"}></i>
                <i className={review.rate >= 3 ? "fas fa-star yellow" : "fas fa-star"}></i>
                <i className={review.rate >= 4 ? "fas fa-star yellow" : "fas fa-star"}></i>
                <i className={review.rate >= 5 ? "fas fa-star yellow" : "fas fa-star"}></i>
            </div>
        </div>
    );
}