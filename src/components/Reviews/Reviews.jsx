import NavBar from "../NavBar/NavBar";
import { db } from "../../firebase";
import { collection, getDocs, doc } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  let name = useSelector((state) => state.user.name.toLowerCase());

  const getReviews = async () => {
    try {
      const docRef = doc(db, "doctors", name);
      const subcollectionRef = collection(docRef, "reviews");
      const docsSnap = await getDocs(subcollectionRef);
      docsSnap.forEach((doc) => {
        doc.data().approved === true &&
          setReviews((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getReviews();
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
