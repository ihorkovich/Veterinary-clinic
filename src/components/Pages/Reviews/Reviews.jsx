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
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="mt-[200px] text-4xl font-bold text-center">REVIEWS</h1>
      <div className="border-2 border-black h-96 pt-[200px]">
        <ul>
          {reviews.map((review) => {
            return (
              <li
                key={Math.random()}
                className="w-[400px] p-4 h-30px flex justify-between items-center border-2 border-black"
              >
                <div>{review.from}:</div>
                <div>{review.text}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
