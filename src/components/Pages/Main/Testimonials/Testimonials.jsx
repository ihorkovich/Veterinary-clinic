import { useState, useEffect } from "react";
import { getAllDocumentsFromCollection } from "../../../../firebaseQueries";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    (async () => {
      const allReviews = await getAllDocumentsFromCollection("reviews");
      const shuffled = allReviews
        .filter((review) => review.approved === true)
        .sort(() => 0.5 - Math.random());
      setReviews(shuffled.slice(0, 4));
    })();
  }, []);

  return (
    <div className="mt-20 bg-bgGreen max-w-[1280px] mx-auto">
      <div className="py-12 mx-auto">
        <div className="grid items-center gap-4 lg:grid-cols-5">
          <div className="mx-auto space-y-4 text-center lg:col-span-2 lg:text-left lg:pl-4">
            <h2 className="text-4xl font-bold text-blackGreen px-4 lg:px-0">
              Client feedback and reviews
            </h2>
            <p className="dark:text-gray-500 px-4 lg:px-0">
              Read what our clients have to say about the exceptional care and
              services provided by our veterinary clinic
            </p>
          </div>
          <div className="p-4 lg:col-span-3">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid content-center gap-4">
                {reviews.slice(0, 2).map((review) => {
                  return (
                    <div
                      className="p-6 rounded-sm shadow-md relative"
                      key={review.id}
                    >
                      <div className="text-[100px] absolute -top-3 left-3 opacity-10 select-none">
                        🙷
                      </div>
                      <p className="text-blackGreen text-[16px]">
                        {review.text}
                      </p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="src/assets/users/user-icon.svg"
                          alt="profile"
                          className="w-10 h-10"
                        />
                        <div>
                          <p className="text-lg font-semibold">{review.from}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="grid content-center gap-4">
                {reviews.slice(2, 4).map((review) => {
                  return (
                    <div
                      className="p-6 rounded-sm shadow-md relative"
                      key={review.id}
                    >
                      <div className="text-[100px] absolute -top-3 left-3 opacity-10 select-none">
                        🙷
                      </div>
                      <p>{review.text}</p>
                      <div className="flex items-center mt-4 space-x-4">
                        <img
                          src="src/assets/users/user-icon.svg"
                          alt="profile"
                          className="w-10 h-10"
                        />
                        <div>
                          <p className="text-lg font-semibold">{review.from}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
