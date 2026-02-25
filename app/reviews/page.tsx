import { DeleteReview } from "@/components/form/Buttons";
import SectionTitle from "@/components/global/SectionTitle";
import ReviewCard from "@/components/reviews/ReviewCard";
import { fetchProductReviewsByUser, ReviewType } from "@/lib/actions";
import React from "react";

export const metadata = {
  title: "Comfy Reviews",
  description: "A nifty store built with Next.js",
};

const ReviewsPage = async () => {
  const reviews: ReviewType[] = await fetchProductReviewsByUser();

  if (reviews.length === 0) {
    return <SectionTitle title="you have no reviews yet" />;
  }
  return (
    <React.Fragment>
      <SectionTitle title="your reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4 ">
        {reviews.map((review) => {
          const { comment, rating } = review;
          const { name, image } = review.product;
          const reviewInfo = {
            comment,
            rating,
            image,
            name,
          };
          return (
            <ReviewCard reviewInfo={reviewInfo} key={review.id}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </React.Fragment>
  );
};

// const DeleteReview = ({ reviewId }: { reviewId: string }) => {
//   const deleteReview = deleteReviewAction.bind(null, { reviewId });
//   return (
//     <FormContainer action={deleteReview}>
//       <IconButton actionType="delete" />
//     </FormContainer>
//   );
// };

export default ReviewsPage;
