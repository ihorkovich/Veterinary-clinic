import NavBar from "../../NavBar/NavBar";
import { useEffect, useState } from "react";
import {
  getAllDocumentsFromCollection,
  updateSpecificDocumentInCollection,
} from "../../../firebaseQueries";

const UserList = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const users = await getAllDocumentsFromCollection("users");
        setAllUsers(users);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const banUser = async (e) => {
    e.preventDefault();
    await updateSpecificDocumentInCollection("users", e.target.dataset.userid, {
      banned: true,
    });
    e.target.closest(".user").classList.add("hidden");
  };

  return (
    <>
      <NavBar />
      <div className="pt-[100px] h-auto w-full">
        <ul className="h-96 w-full text-black flex flex-col justify-start items-center gap-5">
          {allUsers
            .filter((user) => user.role === "user" && user.banned === false)
            .map((user) => (
              <li
                id={`${user.id}`}
                key={`${user.email}${Date.now()}${Math.random()}`}
                className="user text-black text-xl font-bold flex justify-between items-center w-full px-4"
              >
                <div>
                  {user.name} {user.surname}
                </div>
                <div>{user.email}</div>
                <div className="border-2 border-black">
                  <button onClick={banUser} data-userid={user.id}>
                    Ban User
                  </button>
                </div>
                <div className="border-2">
                  <button>Delete User</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default UserList;
