import NavBar from "../../NavBar/NavBar";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllDocumentsFromSubcollection } from "../../../firebaseQueries";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { name } = useSelector((state) => state.user);

  useEffect(() => {
    (async () => {
      try {
        const allReviews = await getAllDocumentsFromSubcollection(
          "doctors",
          name.toLowerCase(),
          "reviews"
        );
        const data = allReviews.filter((doc) => doc.approved === true);
        setReviews(data);
        console.log(reviews);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        Reviews
      </h2>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 gap-5 px-4 pb-5 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => {
          return (
            <div
              key={`${review.from}${review.text.slice(-10)}`}
              className="h-30px flex w-full auto-rows-min flex-col items-start justify-start gap-4 rounded-md border-2 border-gray-300 bg-[#f2ffe2de] p-3 shadow-lg"
            >
              <div className="text-blckGreen text-xl font-bold">
                {review.from}:
              </div>
              <div>{review.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
