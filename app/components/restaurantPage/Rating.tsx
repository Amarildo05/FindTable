import { Review } from "@prisma/client";
import { calculateReviewRatingAverage } from "../../../utils/calculateReviewRatingAverage";
import Stars from "../Stars";

export default function Rating({ reviews }: { reviews: Review[] }) {
  return (
    <div className="flex font-medium items-end">
      <div className="mt-2 flex items-center">
        <Stars reviews={reviews}/>
        <p className="ml-3">{calculateReviewRatingAverage(reviews).toFixed(1)}</p>
      </div>
      <div>
        <p className="ml-4">
          {reviews.length} Review{reviews.length === 1 ? "" : "s"}
        </p>
      </div>
    </div>
  );
}
