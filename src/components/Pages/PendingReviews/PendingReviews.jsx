import { useState, useEffect } from "react";
import {
  getAllDocumentsFromCollection,
  updateDocumentInSubcollection,
  updateSpecificDocumentInCollection,
  deleteSpecificDocumentFromCollection,
  deleteSpecificDocumentFromSubcollection,
} from "../../../firebaseQueries";

import NavBar from "../../NavBar/NavBar";

const PendingReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const reviewsData = await getAllDocumentsFromCollection("reviews");
        const allReviews = reviewsData.filter(
          (review) => review.approved === false
        );
        setReviews(allReviews);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  const approveReview = async (e) => {
    e.preventDefault();
    const { id } = e.target.closest(".review").dataset;
    const { to } = reviews.find((review) => review.id === id);

    try {
      await updateDocumentInSubcollection("doctors", to, "reviews", id, {
        approved: true,
      });
      await updateSpecificDocumentInCollection("reviews", id, {
        approved: true,
      });
    } catch (error) {
      console.log(error);
    }
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== id)
    );
  };

  const deleteReview = async (e) => {
    e.preventDefault();
    const { id } = e.target.closest(".review").dataset;
    const { to } = reviews.find((review) => review.id === id);
    await deleteSpecificDocumentFromSubcollection("doctors", to, "reviews", id);
    await deleteSpecificDocumentFromCollection("reviews", id);
    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== id)
    );
  };

  return (
    <div>
      <NavBar />
      <div className="mt-[200px]">
        <ul className="flex flex-col gap-3">
          {reviews.map((review) => (
            <li
              key={review.id}
              data-id={review.id}
              className="review flex justify-between items-center gap-6 border border-blackGreen"
            >
              <div>from: {review.from}</div>
              <div id="to">to: {review.to}</div>
              <div>text: {review.text}</div>
              <div>
                <button className="border border-black" onClick={approveReview}>
                  Approve
                </button>
                <button className="border border-black" onClick={deleteReview}>
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PendingReviews;
