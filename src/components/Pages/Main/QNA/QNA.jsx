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
    <div className="px-4 mt-20 bg-bgGreen max-w-[1280px] mx-auto">
      <h2 className="px-4 text-3xl text-blackGreen font-bold text-center my-6">
        Pet Care FAQs
      </h2>
      <div className="grid grid-cols-1 gap-3 ">
        {data.map((qna, i) => (
          <div
            key={qna.id}
            className="flex flex-col border border-blackGreen bg-bgGreen rounded-sm"
          >
            <div
              className="flex justify-between items-center p-3 hover:cursor-pointer"
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
              className={`p-3 text-sm ${
                selected === i
                  ? "h-auto overflow-visible p-3"
                  : "h-0 overflow-hidden p-0"
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
