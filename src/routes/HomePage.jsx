import { Link } from "react-router";
import MainCategories from "../components/MainCategories";
import FeaturedPosts from "../components/FeaturedPosts";
import RecentPosts from "../components/RecentPosts";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-4 mt-4">
      {/* BREADCRUMB */}
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <span>.</span>
        <span className="text-blue-800">Blogs and Articles</span>
      </div>
      {/* INTRODUCTION */}
      <div className="flex items-center justify-between">
        <div className="">
          <h1 className="text-2xl font-bold text-gray-800 md:text-5xl lg:text-6xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h1>
          <p className="mt-8 text-md md:text-xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
            aperiam magnam enim nihil vitae excepturi
          </p>
        </div>
        <Link to="/write" className="relative hidden md:block">
          <svg
            viewBox="0 0 200 200"
            width="200"
            height="200"
            className="text-lg tracking-widest animate-spin animatedButton"
          >
            <path
              id="circlePath"
              fill="none"
              d="M 100, 100 m -75, 0 a 75, 75 0 1, 1 150, 0 a 75, 75 0 1, 1 -150, 0"
            />
            <text>
              <textPath href="#circlePath" startOffset="0%">
                Write your story .
              </textPath>
              <textPath href="#circlePath" startOffset="50%">
                Share your idea .
              </textPath>
            </text>
          </svg>
          <button className="absolute inset-0 flex items-center justify-center w-20 h-20 m-auto bg-blue-800 rounded-full">
            <svg
              xmlns="http://www.w3.org/200/svg"
              viewBox="0 0 24 24"
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="6" y1="18" x2="18" y2="6" />
              <polyline points="9 6 18 6 18 15" />
            </svg>
          </button>
        </Link>
      </div>
      {/* MAIN CATEGORIES */}
      <MainCategories />
      {/* FEATURED POSTS */}
      <FeaturedPosts />
      {/* RECENT POSTS */}
      <div className="">
        <h1 className="my-8 text-2xl text-gray-600">Recent Posts</h1>
        <RecentPosts />
      </div>
    </div>
  );
};

export default HomePage;
