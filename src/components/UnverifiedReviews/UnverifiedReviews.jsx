import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const UnverifiedReviews = () => {
  const [reviews, setReviews] = useState([]);

  const getReviews = async () => {
    try {
      const colRef = collection(db, "reviews");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        setReviews((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getReviews();
  }, []);

  const approveReview = async (e) => {
    e.preventDefault();
    const doctorName = e.target
      .closest(".review")
      .children[1].innerHTML.split(" ")[1];
    const docId = e.target.parentNode.parentNode.dataset.id;
    const docRef = doc(db, "doctors", doctorName);
    const subcollectionRef = collection(docRef, "reviews");
    const newDocRef = doc(subcollectionRef, docId);
    const newDocData = {
      approved: true,
    };
    await updateDoc(newDocRef, newDocData);

    e.target.parentNode.parentNode.classList.add("hidden");
  };

  const deleteReview = async (e) => {
    e.preventDefault();
    const doctorName = e.target
      .closest(".review")
      .children[1].innerHTML.split(" ")[1];
    const docId = e.target.parentNode.parentNode.dataset.id;
    const docRef = doc(db, "doctors", doctorName);
    const subcollectionRef = collection(docRef, "reviews");
    const newDocRef = doc(subcollectionRef, docId);
    await deleteDoc(newDocRef);
    await deleteDoc(doc(db, "reviews", docId));
    e.target.parentNode.parentNode.classList.add("hidden");
  };

  return (
    <div>
      <NavBar />
      <div className="mt-[200px]">
        <ul className="flex flex-col gap-3">
          {reviews.map((review) => {
            return (
              <li
                key={review.id}
                data-id={`${review.id}`}
                className="review flex justify-between items-center gap-6 border border-blackGreen"
              >
                <div>from: {review.from}</div>
                <div id="to">to: {review.to}</div>
                <div>text: {review.text}</div>
                <div>
                  <button
                    className="border border-black"
                    onClick={approveReview}
                  >
                    Approve
                  </button>
                  <button
                    className="border border-black"
                    onClick={deleteReview}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default UnverifiedReviews;
