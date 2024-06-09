import { FaSearch } from "react-icons/fa";
import useBlogsData from "../../hooks/useBlogsData";
import Card from "./Card";

const Blog = () => {
  const [blogs] = useBlogsData();
  const blogsFilter = blogs.filter((item) => item.status == "published");

  return (
    <section className="mt-40">
      <div
        className="hero md:h-[250px] rounded-lg overflow-hidden"
        style={{
          backgroundImage:
            "url(https://img.freepik.com/free-photo/healthcare-concept-clinic_23-2151117930.jpg?t=st=1717378639~exp=1717382239~hmac=ffc8b13e15d2667680650c9d384ecadc0354c6d030ff96c39c28f3c521b847db&w=740)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-white font-open-sans">
          <div>
            <h1 className="mb-5 text-3xl md:text-4xl font-bold">
              Recent Blogs
            </h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              incidunt voluptate delectus debitis{" "}
            </p>

            <div className="join mt-10 ">
              <input
                type="text"
                placeholder="Search Your Blog"
                className="input input-bordered join-item text-black w-[400px]"
              />
              <button className="button px-4 join-item">
                <FaSearch></FaSearch>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {blogsFilter?.map((blog, id) => (
          <Card blog={blog} key={id}></Card>
        ))}
      </div>
    </section>
  );
};

export default Blog;
