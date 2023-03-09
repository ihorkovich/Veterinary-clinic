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
    <div className="mx-auto mt-20 max-w-[1280px] bg-bgGreen px-4">
      <h2 className="my-6 px-4 text-center text-3xl font-bold text-blackGreen">
        Pet Care FAQs
      </h2>
      <div className="grid grid-cols-1 gap-3 ">
        {data.map((qna, i) => (
          <div
            key={qna.id}
            className="flex flex-col rounded-sm border border-blackGreen bg-bgGreen"
          >
            <div
              className="flex items-center justify-between p-3 hover:cursor-pointer"
              onClick={() => answersHandler(i)}
            >
              <h2 className="text-sm font-semibold text-blackGreen">
                {qna.question}
              </h2>
              <span
                className={`h-6 select-none duration-[0.4s] ${
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
