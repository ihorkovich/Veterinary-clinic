import { useState } from "react";
import data from "./index";

const QNA = () => {
  const [selected, setSelected] = useState();
  const answersHandler = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div className="container px-4 mt-14">
      <h2 className="px-4 text-3xl text-blackGreen font-bold text-center my-6">
        Pet Care FAQs
      </h2>
      <div className="flex flex-col gap-2 ">
        {data.map((qna, i) => (
          <div
            key={qna.id}
            className="flex flex-col border border-blackGreen bg-bgGreen"
          >
            <div
              className="flex justify-between items-center p-2 hover:cursor-pointer"
              onClick={() => answersHandler(i)}
            >
              <h2 className="font-semibold text-blackGreen text-sm">
                {qna.question}
              </h2>
              <span
                className={`h-6 duration-[0.4s] select-none ${
                  selected == i ? "rotate-180" : ""
                }`}
              >
                ⮟
              </span>
            </div>
            <div
              className={`text-sm ${
                selected == i
                  ? "h-auto scale-y-100 overflow-visible p-2 duration-300"
                  : "h-0 scale-y-0 overflow-hidden duration-300"
              }`}
            >
              {qna.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default QNA;
