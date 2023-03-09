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
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        Pending Reviews
      </h2>
      <div className="mx-auto flex w-full flex-col gap-5 px-4">
        {reviews.length !== 0 ? (
          <table className="mx-auto w-full max-w-[1280px] table-auto">
            <thead className="grid grid-cols-6 px-4 text-xl font-bold text-blackGreen underline">
              <th className="text-center">From</th>
              <th className="text-center">To</th>
              <th className="col-span-3 text-center">Review</th>
              <th className="text-center">Actions</th>
            </thead>
            {reviews.map((review) => (
              <li
                key={review.id}
                data-id={review.id}
                className="review grid grid-cols-6 items-center rounded-md border-y-2 border-gray-300 px-4 shadow-md"
              >
                <div className="text-center">{review.from}</div>
                <div id="to" className="p-1 text-center">{`${review.to
                  .slice(0, 1)
                  .toUpperCase()}${review.to.slice(1)}`}</div>
                <div className="col-span-3 p-5 text-justify">{review.text}</div>
                <div className="flex items-center justify-center gap-3 md:gap-6">
                  <button className="" onClick={approveReview}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="bi bi-check-square rounded-sm duration-200 hover:rounded-md hover:bg-blackGreen hover:p-[1px] hover:text-bgGreen"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                        id="mainIconPathAttribute"
                      ></path>{" "}
                      <path
                        d="M10.97 4.97a.75.75 0 0 1 1.071 1.05l-3.992 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.235.235 0 0 1 .02-.022z"
                        id="mainIconPathAttribute"
                      ></path>{" "}
                    </svg>
                  </button>
                  <button onClick={deleteReview}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
                      fill="currentColor"
                      className="rounded-sm duration-200 hover:rounded-md hover:bg-blackGreen hover:p-[1px] hover:text-bgGreen"
                      viewBox="0 0 16 16"
                      id="IconChangeColor"
                    >
                      {" "}
                      <path
                        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
                        id="mainIconPathAttribute"
                      ></path>{" "}
                      <path
                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
                        id="mainIconPathAttribute"
                      ></path>{" "}
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </table>
        ) : (
          <p className="w-full text-center text-xl font-bold text-blackGreen">
            There are no reviews to approve
          </p>
        )}
      </div>
    </div>
  );
};

export default PendingReviews;
