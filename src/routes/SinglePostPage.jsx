import { Link } from "react-router";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* details  */}
      <div className="flex gap-8">
        <div className="flex flex-col gap-8 lg:w-3/5">
          <h1 className="text-xl font-semibold md:text-xl xl:text-4xl 2xl:text-5xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            dignissimos a eligendi tempora.
          </h1>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
          </div>
          <p className="font-medium text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            officiis dolorum dicta quasi error quisquam fuga voluptate
            repellendus similique cumque, aliquid quas ducimus, deserunt optio
            laboriosam tenetur placeat provident eveniet!
          </p>
        </div>
        <div className="hidden w-2/5 lg:block">
          <Image src="postImg.jpeg" w="600" className="rounded-2xl" />
        </div>
      </div>

      {/* content  */}
      <div className="flex flex-col gap-8 md:flex-row">
        {/* text */}
        <div className="flex flex-col gap-6 text-justify lg:text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            voluptatibus quos, obcaecati quo quisquam iusto sed sit odit est
            vitae nostrum doloremque, error, quae ipsa necessitatibus
            repellendus eos veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Recusandae, accusamus minus explicabo debitis
            aspernatur perspiciatis nam quos ut necessitatibus voluptate ipsa
            dolores quidem ipsum id nisi maiores omnis facilis velit.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            voluptatibus quos, obcaecati quo quisquam iusto sed sit odit est
            vitae nostrum doloremque, error, quae ipsa necessitatibus
            repellendus eos veritatis. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Porro atque dolorem qui officia. Id itaque
            corrupti inventore veniam non! Voluptatum vel animi odit vero
            exercitationem eos nemo eum recusandae delectus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            voluptatibus quos, obcaecati quo quisquam iusto sed sit odit est
            vitae nostrum doloremque, error, quae ipsa necessitatibus
            repellendus eos veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellendus quia asperiores similique distinctio
            aspernatur, consequuntur, tempore voluptatum delectus ipsam id vel,
            consequatur doloribus? Similique neque nesciunt quaerat repellat
            nisi ullam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            voluptatibus quos, obcaecati quo quisquam iusto sed sit odit est
            vitae nostrum doloremque, error, quae ipsa necessitatibus
            repellendus eos veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellendus quia asperiores similique distinctio
            aspernatur, consequuntur, tempore voluptatum delectus ipsam id vel,
            consequatur doloribus? Similique neque nesciunt quaerat repellat
            nisi ullam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            voluptatibus quos, obcaecati quo quisquam iusto sed sit odit est
            vitae nostrum doloremque, error, quae ipsa necessitatibus
            repellendus eos veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellendus quia asperiores similique distinctio
            aspernatur, consequuntur, tempore voluptatum delectus ipsam id vel,
            consequatur doloribus? Similique neque nesciunt quaerat repellat
            nisi ullam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            voluptatibus quos, obcaecati quo quisquam iusto sed sit odit est
            vitae nostrum doloremque, error, quae ipsa necessitatibus
            repellendus eos veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellendus quia asperiores similique distinctio
            aspernatur, consequuntur, tempore voluptatum delectus ipsam id vel,
            consequatur doloribus? Similique neque nesciunt quaerat repellat
            nisi ullam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            voluptatibus quos, obcaecati quo quisquam iusto sed sit odit est
            vitae nostrum doloremque, error, quae ipsa necessitatibus
            repellendus eos veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellendus quia asperiores similique distinctio
            aspernatur, consequuntur, tempore voluptatum delectus ipsam id vel,
            consequatur doloribus? Similique neque nesciunt quaerat repellat
            nisi ullam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi
            voluptatibus quos, obcaecati quo quisquam iusto sed sit odit est
            vitae nostrum doloremque, error, quae ipsa necessitatibus
            repellendus eos veritatis. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Repellendus quia asperiores similique distinctio
            aspernatur, consequuntur, tempore voluptatum delectus ipsam id vel,
            consequatur doloribus? Similique neque nesciunt quaerat repellat
            nisi ullam?
          </p>
        </div>

        {/* menu */}
        <div className="sticky px-4 h-max top-8">
          <h1 className="mb-4 text-sm font-medium">Author</h1>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-8">
              <Image
                src="userImg.jpeg"
                className="object-cover w-12 h-12 rounded-full"
                w="48"
                h="48"
              />
              <Link className="text-blue-800">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex gap-2">
              <Link>
                <Image src="facebook.svg" />
              </Link>
              <Link>
                <Image src="instagram.svg" />
              </Link>
            </div>
          </div>
          <PostMenuActions />
          <h1>Categories</h1>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">All</Link>
            <Link className="underline" to="/">
              Web Design
            </Link>
            <Link className="underline" to="/">
              Development
            </Link>
            <Link className="underline" to="/">
              Databases
            </Link>
            <Link className="underline" to="/">
              Search Engines
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
          <Search />
        </div>
      </div>
    </div>
  );
};

export default SinglePostPage;
