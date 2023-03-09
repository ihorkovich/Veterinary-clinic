import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div class="flex h-screen w-full select-none flex-col items-center justify-center bg-secGreen">
      <h1 class="text-9xl font-extrabold tracking-widest text-bgGreen">404</h1>
      <div class="absolute rotate-12 rounded bg-red-400 px-2 text-sm text-bgGreen">
        Page Not Found
      </div>
      <Link to="/">
        <button class="mt-5">
          <a class="group relative inline-block text-sm font-medium text-bgGreen focus:outline-none focus:ring active:text-bgGreen">
            <span class="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-bgGreen transition-transform group-hover:translate-y-0 group-hover:translate-x-0"></span>
            <span class="relative block border border-current bg-secGreen px-8 py-3">
              Go Home
            </span>
          </a>
        </button>
      </Link>
    </div>
  );
};

export default Error;
