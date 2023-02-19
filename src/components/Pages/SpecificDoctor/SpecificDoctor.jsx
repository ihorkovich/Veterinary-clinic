import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar/NavBar";
import { db } from "../../../firebase";
import { getDoc, doc, setDoc, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
import uuid from "react-uuid";

const SpecificDoctor = () => {
  let [doctor, setDoctor] = useState({});
  const [modalVisibilty, setModalVisibility] = useState("hidden");
  const [review, setReview] = useState("");
  const [reviewSended, setReviewSended] = useState(false);
  const { id } = useParams();

  const getDocument = async (coll, id) => {
    const snap = await getDoc(doc(db, coll, id));
    setDoctor(snap.data());
  };

  useEffect(() => {
    getDocument("doctors", id);
  }, []);

  const userName = useSelector((state) => state.user.name);

  const sendReview = async (e) => {
    e.preventDefault();
    const customID = uuid();

    const doctorName = doctor.name.split(" ")[0].toLowerCase();
    const docRef = doc(db, "doctors", doctorName);
    const subcollectionRef = collection(docRef, "reviews");
    const newDocRef = doc(subcollectionRef, customID);
    const newDocData = {
      to: doctorName,
      from: userName,
      text: review,
      approved: false,
      id: customID,
    };
    await setDoc(newDocRef, newDocData);

    const reviewRef = doc(db, "reviews", customID);
    await setDoc(reviewRef, newDocData);
    setReviewSended(true);
    setReview("");
  };

  const toggleModal = () => {
    modalVisibilty === "hidden"
      ? setModalVisibility("")
      : setModalVisibility("hidden");
  };

  return (
    <div className="min-h-screen">
      <NavBar />
      <div className="container px-4 flex flex-col justify-start items-center gap-4">
        <img className="w-[200px] h-[200px] bg-green-300" src={doctor.image} />
        <p>{doctor.name}</p> <br />
        <p>{doctor.experience}</p> <br />
        <p>{doctor.description}</p>
        <button className="p-3 border-2 border-red-400" onClick={toggleModal}>
          leave a review
        </button>
        <Link to="/request-appointment">
          <button className="p-3 border-2 border-green-400">
            Make an appointment
          </button>
        </Link>
      </div>
      <div
        className={`${modalVisibilty} w-screen h-screen absolute top-0 left-0 backdrop-blur-sm flex justify-center items-center`}
      >
        <div className="w-96 h-72 border-2 border-black flex flex-col justify-start items-center gap-4">
          <div>
            <button className="border-2 p-3" onClick={toggleModal}>
              close
            </button>
          </div>
          {reviewSended ? (
            <div> You have successfully send a review</div>
          ) : (
            <div>
              <div>
                <h1 className="font-bold text-2xl">
                  leave a review about {doctor.name}
                </h1>
              </div>
              <form>
                <input
                  type="text"
                  onChange={(e) => setReview(e.target.value)}
                />
                <button type="submit" onClick={sendReview}>
                  send
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpecificDoctor;
