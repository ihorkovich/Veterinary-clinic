import "./Footer.scss";
import Input from "../../Input/Input";

const Footer = () => {
  return (
    <div className="footer bg-bgGreen pt-4">
      <div className="px-6">
        <h2 className="text-center font-bold text-[#74bb8f] text-[1.75rem] ">
          STILL HAVE QUESTIONS? THEN THERE IS AN ANSWER!
        </h2>
        <form className="flex flex-col justify-around items-start gap-7 mt-6">
          <Input type="text" label="Subject of address" />
          <Input type="text" label="Your name" />
          <Input type="email" label="Email" />
          <Input type="text" label="Message" />
          <div className="z-0 mt-3">
            <button
              type="submit"
              className="footer-button bg-bgGreen border border-[#74bb8f] text-[#74bb8f] w-[100px] h-[45px]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-center items-center gap-5 mt-14 mb-4">
        <a href="">
          <img
            src="src/assets/contact-links-img/github.svg"
            alt="github"
            className="w-7 aspect-square hover:opacity-80 duration-200"
          />
        </a>
        <a href="">
          <img
            src="src/assets/contact-links-img/linkedin.svg"
            alt="linkedin"
            className="w-7 aspect-square hover:opacity-80 duration-200"
          />
        </a>
        <a href="">
          <img
            src="src/assets/contact-links-img/twitter.svg"
            alt="twitter"
            className="w-7 aspect-square hover:opacity-80 duration-200"
          />
        </a>
        <a href="">
          <img
            src="src/assets/contact-links-img/money.svg"
            alt="money"
            className="w-7 aspect-square hover:opacity-80 duration-200"
          />
        </a>
      </div>
      <div className="border-t border-t-[#74bb8f] text-center py-2 text-[12px]">
        <p className="text-[#74bb8f] leading-[14px]">
          Copyright © {new Date().getFullYear()} Clerks Corp.
          <br /> All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
