import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between w-full h-16 md:h-20">
      <Link to={"/"} className="flex items-center gap-4 text-2xl font-bold">
        <Image src="logo.png" alt="Lama logo" w={32} h={32} />
        <span>lamalog</span>
      </Link>

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
          <Link to="/">Home</Link>
          <Link to="/">Trending</Link>
          <Link to="/">Most Popular</Link>
          <Link to="/">About</Link>
          <Link to="/login">
            <button className="px-4 py-2 text-white bg-blue-800 rounded-3xl">
              Login &#x1F44B;
            </button>
          </Link>
        </div>
      </div>

      {/* Desktop menu  */}
      <div className="items-center hidden gap-8 font-medium md:flex xl:gap-12">
        <Link to="/">Home</Link>
        <Link to="/">Trending</Link>
        <Link to="/">Most Popular</Link>
        <Link to="/">About</Link>
        <SignedOut>
          <Link to="/login">
            <button className="px-4 py-2 text-white bg-blue-800 rounded-3xl">
              Login &#x1F44B;
            </button>
          </Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default Navbar;
