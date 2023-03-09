import { useState, useEffect } from "react";
import NavBar from "../../NavBar/NavBar";
import {
  getAllDocumentsFromCollection,
  updateSpecificDocumentInCollection,
} from "../../../firebaseQueries";

const BannedUsers = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const users = await getAllDocumentsFromCollection("users");
        setAllUsers(users);
      } catch (error) {
        alert(error);
      }
    })();
  }, []);

  const removeBan = async (e) => {
    e.preventDefault();
    await updateSpecificDocumentInCollection("users", e.target.dataset.userid, {
      banned: false,
    });
    e.target.closest(".user").classList.add("hidden");
  };

  return (
    <div className="min-h-screen bg-bgGreen">
      <NavBar />
      <h2 class="font-heading tracking-px-n mb-10 text-center text-5xl font-bold leading-none text-secGreen md:text-7xl xl:text-8xl">
        User list
      </h2>
      <div className="mx-auto w-full max-w-[800px] px-4">
        {allUsers.filter((user) => user.banned === true).length !== 0 ? (
          allUsers
            .filter((user) => user.banned === true)
            .map((user) => (
              <div
                id={`${user.id}`}
                key={Math.random()}
                className="user mx-auto mt-2 flex items-center justify-between rounded-sm border-y border-gray-300 p-2 px-4 text-xl font-bold shadow-sm"
              >
                <div>{`${user.name} ${user.surname} has banned!`}</div>
                <button
                  className="rounded-sm border-2 border-blackGreen p-2 duration-200 hover:bg-blackGreen hover:text-bgGreen"
                  onClick={removeBan}
                  data-userid={user.id}
                >
                  Remove ban
                </button>
              </div>
            ))
        ) : (
          <p className="w-full text-center text-xl font-bold text-blackGreen">
            There are no banned users
          </p>
        )}
      </div>
      {/* {allUsers
        .filter((user) => user.banned === true)
        .map((user) => (
          <tr
            id={`${user.id}`}
            key={`${user.email}${Date.now()}${Math.random()}`}
            className="user p-2 rounded-sm border-y border-gray-300 shadow-sm text-xl font-bold grid grid-cols-3 items-center mx-auto mt-2"
          >
            <td className="text-left pl-8">
              {user.name} {user.surname}
            </td>
            <td className="text-left pl-9">
              <button
                onClick={banUser}
                data-userid={user.id}
                className="bg-emerald-400 text-bgGreen rounded-sm p-1"
              >
                Ban User
              </button>
            </td>
            <td className="text-left pl-10">
              <button className="bg-red-400 rounded-sm text-bgGreen p-1">
                Delete User
              </button>
            </td>
          </tr>
        ))} */}
    </div>
  );
};

export default BannedUsers;
