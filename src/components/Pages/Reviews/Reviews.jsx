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
    <div className="bg-bgGreen min-h-screen">
      <NavBar />
      <h2 class="mb-10 text-5xl md:text-7xl xl:text-8xl text-center font-bold font-heading tracking-px-n leading-none text-secGreen">
        Reviews
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 px-4 lg:grid-cols-3 mx-auto max-w-[1280px] pb-5">
        {reviews.map((review) => {
          return (
            <div
              key={`${review.from}${review.text.slice(-10)}`}
              className="w-full p-3 bg-[#f2ffe2de] h-30px flex flex-col justify-start auto-rows-min items-start gap-4 border-2 rounded-md border-gray-300 shadow-lg"
            >
              <div className="text-xl font-bold text-blckGreen">
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
