import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div class="h-screen w-full flex flex-col justify-center items-center bg-secGreen select-none">
      <h1 class="text-9xl font-extrabold tracking-widest text-bgGreen">404</h1>
      <div class="bg-red-400 px-2 text-sm rounded rotate-12 absolute text-bgGreen">
        Page Not Found
      </div>
      <Link to="/">
        <button class="mt-5">
          <a class="relative inline-block text-sm font-medium text-bgGreen group active:text-bgGreen focus:outline-none focus:ring">
            <span class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-bgGreen group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span class="relative block px-8 py-3 bg-secGreen border border-current">
              Go Home
            </span>
          </a>
        </button>
      </Link>
    </div>
  );
};

export default Error;
