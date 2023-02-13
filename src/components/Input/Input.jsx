import "./Input.scss";
import { useState } from "react";

const Input = (props) => {
  const { type, label } = props;
  const [inputClass, setInputClass] = useState("");

  const inputHandler = (e) => {
    if (e.target.value.length >= 1) {
      setInputClass("input-length-more-1");
    } else {
      setInputClass("");
    }
  };

  return (
    <div className="form-field">
      <input
        type={type}
        className={`${inputClass} text-[#74bb8f] px-[7px] text-[17px]`}
        onChange={inputHandler}
      />
      <label className="text-[17px]">{label}</label>
    </div>
  );
};

export default Input;
