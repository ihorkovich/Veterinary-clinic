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
    <div className="mx-auto mt-20 max-w-[1280px] bg-bgGreen">
      <div className="mx-auto py-12">
        <div className="grid items-center gap-4 lg:grid-cols-5">
          <div className="mx-auto space-y-4 text-center lg:col-span-2 lg:pl-4 lg:text-left">
            <h2 className="px-4 text-4xl font-bold text-blackGreen lg:px-0">
              Client feedback and reviews
            </h2>
            <p className="px-4 dark:text-gray-500 lg:px-0">
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
                      className="relative rounded-sm p-6 shadow-md"
                      key={review.id}
                    >
                      <div className="absolute -top-3 left-3 select-none text-[100px] opacity-10">
                        🙷
                      </div>
                      <p className="text-[16px] text-gray-500">{review.text}</p>
                      <div className="mt-4 flex items-center space-x-4">
                        <img
                          src="/assets/users/user-icon.svg"
                          alt="profile"
                          className="h-10 w-10"
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
                      className="relative rounded-sm p-6 shadow-md"
                      key={review.id}
                    >
                      <div className="absolute -top-3 left-3 select-none text-[100px] opacity-10">
                        🙷
                      </div>
                      <p className="text-gray-500">{review.text}</p>
                      <div className="mt-4 flex items-center space-x-4">
                        <img
                          src="/assets/users/user-icon.svg"
                          alt="profile"
                          className="h-10 w-10"
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
