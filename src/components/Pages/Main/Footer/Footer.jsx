import "./Footer.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import {
  getSpecificDocumentFromCollection,
  updateSpecificDocumentInCollection,
} from "../../../../firebaseQueries";

const Footer = () => {
  const [inputClass, setInputClass] = useState("");
  const form = useRef();

  const handleInput = (e) => {
    if (e.target.value.length >= 1) {
      setInputClass(e.target.classList.add("input-length-more-1"));
    } else {
      setInputClass(e.target.classList.remove("input-length-more-1"));
    }
  };
  const id = useSelector((state) => state.user.id);

  const sendEmail = (e) => {
    e.preventDefault();

    (async () => {
      try {
        const userSent = await getSpecificDocumentFromCollection("users", id);

        if (userSent.sent === false) {
          emailjs
            .sendForm(
              import.meta.env.VITE_SERVICE_ID,
              import.meta.env.VITE_TEMPLATE_ID,
              form.current,
              import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
              (result) => {
                console.log(result.text);
                e.target.reset();
                setInputClass("");
                updateSpecificDocumentInCollection("users", id, { sent: true });
              },
              (error) => {
                console.log(error.text);
              }
            );
          console.log("sdfsdfsdf");
        } else {
          alert("You've already sent an email💖");
        }
      } catch (error) {
        console.log(error);
      }
    })();
  };

  return (
    <div className="footer bg-bgGreen mt-20">
      <div className="px-4">
        <h2 className="text-center font-bold text-[#74bb8f] text-[2rem] w-5/6 leading-[2rem] sm:text-4xl md:text-5xl lg:text-6xl lg:w-[900px] mx-auto lg:leading-[4rem]">
          STILL HAVE QUESTIONS? THEN THERE IS AN ANSWER!
        </h2>
        <form
          className="flex flex-col justify-around items-start gap-7 mt-10 md:mt-10 lg:mt-16 max-w-[1280px] mx-auto"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="form-field">
            <input
              type="text"
              name="subject_of_address"
              className={`${inputClass} input text-[#74bb8f] px-[7px] text-[17px]`}
              onChange={handleInput}
            />
            <label className="label text-[17px]">Subject of address</label>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-7">
            <div className="form-field">
              <input
                type="text"
                name="user_name"
                className={`${inputClass} input text-[#74bb8f] px-[7px] text-[17px]`}
                onChange={handleInput}
              />
              <label className="label text-[17px]">Your name</label>
            </div>
            <div className="form-field">
              <input
                type="email"
                name="user_email"
                className={`${inputClass} input text-[#74bb8f] px-[7px] text-[17px]`}
                onChange={handleInput}
              />
              <label className="label text-[17px]">Email</label>
            </div>
          </div>
          <div className="form-field">
            <input
              type="text"
              name="message"
              className={`${inputClass} input text-[#74bb8f] px-[7px] text-[17px]`}
              onChange={handleInput}
            />
            <label className="label text-[17px]">Message</label>
          </div>

          <div className="z-0 mt-3">
            <button
              type="submit"
              className="footer-button bg-bgGreen border border-[#74bb8f] text-[#74bb8f] w-[100px] h-[45px]"
              value="Send"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center gap-5 mt-14 mb-2">
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="src/assets/contact-links-img/github.svg"
            alt="github"
            className="w-7 aspect-square hover:opacity-80 duration-200"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="src/assets/contact-links-img/linkedin.svg"
            alt="linkedin"
            className="w-7 aspect-square hover:opacity-80 duration-200"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="src/assets/contact-links-img/twitter.svg"
            alt="twitter"
            className="w-7 aspect-square hover:opacity-80 duration-200"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="src/assets/contact-links-img/money.svg"
            alt="money"
            className="w-7 aspect-square hover:opacity-80 duration-200"
          />
        </a>
      </div>
      <div className="text-center py-2 text-[12px]">
        <p className="text-[#74bb8f] leading-[14px]">
          Copyright © {new Date().getFullYear()} Clerks Corp.
          <br /> All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
