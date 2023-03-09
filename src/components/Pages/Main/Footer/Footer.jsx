import "./Footer.scss";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Modal from "../../../Modal/Modal";
import {
  getSpecificDocumentFromCollection,
  updateSpecificDocumentInCollection,
} from "../../../../firebaseQueries";

const Footer = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const schema = yup.object().shape({
    user_name: yup
      .string()
      .required("Name is required")
      .min(3, "Name should contain 3 or more letters"),
    subject_of_address: yup
      .string()
      .required("Subject of address is required")
      .min(6, "Subject of address should contain 6 or more letters"),
    user_email: yup
      .string()
      .required("Email is required")
      .email("Entered value does not match email format")
      .min(11, "Email should contain 11 or more symbols"),
    message: yup
      .string()
      .required("Message is required")
      .min(30, "Message must be at least 30 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ mode: "onBlur", resolver: yupResolver(schema) });

  const handleInputChange = (e) => {
    if (e.target.value.length >= 1) {
      setInputClass(e.target.classList.add("input-length-more-1"));
    } else {
      setInputClass(e.target.classList.remove("input-length-more-1"));
    }
  };

  const [inputClass, setInputClass] = useState("");
  const form = useRef();

  const id = useSelector((state) => state.user.id);

  const sendEmail = async () => {
    const userSent = await getSpecificDocumentFromCollection("users", id);
    try {
      if (userSent.sent === false) {
        emailjs.sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          import.meta.env.VITE_PUBLIC_KEY
        );
        reset();
        setInputClass("");
        await updateSpecificDocumentInCollection("users", id, {
          sent: true,
        });
        setModalActive(true);
        setTitle("Thank you for your message");
        setMessage("Expect a response in the near future");
      }
      if (userSent.sent === true) {
        setModalActive(true);
        setTitle("You have already sent an email");
        setMessage("Expect a response in the near future");
      }
    } catch (error) {
      if (
        error.message == "Cannot read properties of null (reading 'indexOf')"
      ) {
        setModalActive(true);
        setTitle("Only registered users can send message");
        setMessage("Register or sign in to send an email");
      } else {
        setModalActive(true);
        setTitle("Something went wrong");
        setMessage(
          "Please try again. If the error hasn't disappeared, go to the contacts section and try to connect with us through those ways"
        );
      }
    }
  };

  return (
    <div className="footer mt-20 bg-bgGreen">
      <div className="px-4">
        <h2 className="mx-auto w-5/6 text-center text-[2rem] font-bold leading-[2rem] text-[#74bb8f] sm:text-4xl md:text-5xl lg:w-[900px] lg:text-6xl lg:leading-[4rem]">
          STILL HAVE QUESTIONS? THEN THERE IS AN ANSWER!
        </h2>
        <form
          className="mx-auto mt-10 flex max-w-[1280px] flex-col items-start justify-around gap-7 md:mt-10 lg:mt-16"
          ref={form}
          onSubmit={handleSubmit(sendEmail)}
        >
          <div className="form-field border-b-2 border-secGreen">
            <input
              type="text"
              {...register("subject_of_address")}
              className={`${inputClass} input px-[7px] text-[17px] text-[#74bb8f]`}
              onChange={handleInputChange}
            />
            <label className="label text-[17px]">Subject of address</label>
          </div>
          {errors.subject_of_address && (
            <p className="-mt-6 text-[12px] text-red-500">
              {errors.subject_of_address.message}
            </p>
          )}
          <div className="flex w-full flex-col gap-7 lg:flex-row">
            <div className="lg:w-1/2">
              <div className="form-field border-b-2 border-secGreen">
                <input
                  type="text"
                  {...register("user_name")}
                  className={`${inputClass} input px-[7px] text-[17px] text-[#74bb8f]`}
                  onChange={handleInputChange}
                />
                <label className="label text-[17px]">Your name</label>
              </div>
              {errors.user_name && (
                <p className="mt-1 text-[12px] text-red-500">
                  {errors.user_name.message}
                </p>
              )}
            </div>
            <div className="lg:w-1/2">
              <div className="form-field border-b-2 border-secGreen">
                <input
                  type="email"
                  {...register("user_email")}
                  className={`${inputClass} input px-[7px] text-[17px] text-[#74bb8f]`}
                  onChange={handleInputChange}
                />
                <label className="label text-[17px]">Email</label>
              </div>
              {errors.user_email && (
                <p className="mt-1 text-[12px] text-red-500">
                  {errors.user_email.message}
                </p>
              )}
            </div>
          </div>
          <div className="form-field border-b-2 border-secGreen">
            <input
              type="text"
              {...register("message")}
              className={`${inputClass} input px-[7px] text-[17px] text-[#74bb8f]`}
              onChange={handleInputChange}
            />
            <label className="label text-[17px]">Message</label>
          </div>
          {errors.message && (
            <p className="-mt-6 text-[12px] text-red-500">
              {errors.message.message}
            </p>
          )}
          <div className="z-0 mt-3">
            <button
              type="submit"
              className="footer-button h-[45px] w-[100px] border border-[#74bb8f] bg-bgGreen text-[#74bb8f]"
              value="Send"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="mt-14 mb-2 flex items-center justify-center gap-5">
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="/assets/contact-links-img/github.svg"
            alt="github"
            className="aspect-square w-7 duration-200 hover:opacity-80"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="/assets/contact-links-img/linkedin.svg"
            alt="linkedin"
            className="aspect-square w-7 duration-200 hover:opacity-80"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="/assets/contact-links-img/twitter.svg"
            alt="twitter"
            className="aspect-square w-7 duration-200 hover:opacity-80"
          />
        </a>
        <a href="https://uahelp.monobank.ua/" target={"_blank"}>
          <img
            src="/assets/contact-links-img/money.svg"
            alt="money"
            className="aspect-square w-7 duration-200 hover:opacity-80"
          />
        </a>
      </div>
      <div className="py-2 text-center text-[12px]">
        <p className="leading-[14px] text-[#74bb8f]">
          Copyright © {new Date().getFullYear()} Clerks Corp.
          <br /> All rights reserved.
        </p>
      </div>
      <Modal
        active={modalActive}
        setActive={setModalActive}
        title={title}
        message={message}
        button={true}
        linkTo={null}
        buttonText={"Ok"}
      />
    </div>
  );
};

export default Footer;
