import { Link } from "react-router";
import Image from "./Image";

const PostCard = () => {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      {/* image */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="postImg.jpeg" className="object-cover rounded-2xl" />
      </div>
      {/* details */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel illum
          earum sapiente laboriosam sit
        </Link>
        <div className="flex items-center gap-2 text-sm text-gray-400">
          <span>Written by</span>
          <Link className="text-blue-800">John Doe</Link>
          <span>on</span>
          <Link className="text-blue-800">Web Design</Link>
          <span>2 days ago</span>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          quibusdam eius nostrum, ab accusamus tempora cum velit repellendus
          saepe adipisci quas quam tenetur recusandae
        </p>
        <Link to="/test" className="text-sm text-blue-800 underline">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
