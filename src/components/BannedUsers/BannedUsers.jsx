import NavBar from "../NavBar/NavBar";
import { useState, useEffect } from "react";
import { getDocs, updateDoc, doc, collection } from "firebase/firestore";
import { db } from "../../firebase";

const BannedUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const colRef = collection(db, "users");
      const docsSnap = await getDocs(colRef);
      docsSnap.forEach((doc) => {
        setAllUsers((prev) => [...prev, doc.data()]);
      });
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);
  console.log(allUsers);

  const removeBan = async (e) => {
    e.preventDefault();
    await updateDoc(doc(db, "users", e.target.dataset.userid), {
      banned: false,
    });
    e.target.closest(".user").classList.add("hidden");
  };

  return (
    <div>
      <NavBar />
      <div className="w-full flex flex-col justify-start items-center gap-5 pt-[200px]">
        {allUsers
          .filter((user) => user.banned === true)
          .map((user) => (
            <div
              id={`${user.id}`}
              key={Math.random()}
              className="user w-full h-40px border-2 flex justify-between items-center"
            >
              <div>{`${user.name} ${user.surname} has banned!`}</div>
              <div>
                <button
                  className="p-3 border-2 border-black"
                  onClick={removeBan}
                  data-userid={user.id}
                >
                  Remove a ban
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BannedUsers;
