import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      <div className="flex items-center gap-4 text-2xl font-bold">
        <img src="/logo.png" className="w-8 h-8" alt="" />
        <span>lamalog</span>
      </div>

      {/* Mobile Menu  */}
      <div className="md:hidden">
        <div
          className="text-2xl cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? "X" : "☰"}
        </div>
        <div
          className={`absolute flex flex-col items-center text-lg justify-center gap-8 font-medium w-full h-screen top-16 transition-all ease-in-out ${
            open ? "-right-0" : "-right-[100%]"
          }`}
        >
          <a href="/">Home</a>
          <a href="/">Trending</a>
          <a href="/">Most Popular</a>
          <a href="/">About</a>
          <a href="/">
            <button className="px-4 py-2 text-white bg-blue-800 rounded-3xl">
              Login &#x1F44B;
            </button>
          </a>
        </div>
      </div>

      <div className="items-center hidden gap-8 font-medium md:flex xl:gap-12">
        <a href="/">Home</a>
        <a href="/">Trending</a>
        <a href="/">Most Popular</a>
        <a href="/">About</a>
        <a href="/">
          <button className="px-4 py-2 text-white bg-blue-800 rounded-3xl">
            Login &#x1F44B;
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
