import FeaturedCard from "../../components/FeaturedCard";
import Banner from "./Banner";
import Contact from "./Contact";

const featured = [
  {
    image:
      "https://img.freepik.com/free-photo/doctor-nurses-special-equipment_23-2148980721.jpg?t=st=1717384309~exp=1717387909~hmac=570b0b64f7d75c797f59d596992b1540786a5670a0d6e2e54ea396616cf65912&w=740",
    name: "Volunteer facilities",
  },

  {
    image:
      "https://img.freepik.com/premium-photo/blood-donor-donation-world-blood-donor-day-transfusion-blood-donation_419829-176.jpg?w=740",
    name: "Donor facilities",
  },

  {
    image:
      "https://img.freepik.com/free-vector/red-blood-drop_23-2147495573.jpg?t=st=1717384520~exp=1717388120~hmac=4f450dea0952e74136d71f21ea18efb0ccb6ba28e60cf87d0d891a05b9415a8a&w=740",
    name: "How to Donate",
  },

  {
    image:
      "https://img.freepik.com/free-vector/modern-emergency-word-concept-with-flat-design_23-2147935068.jpg?t=st=1717384572~exp=1717388172~hmac=03b3b32ddf0f4cf38cd6d2c4b314f6a6c379d7908c7737fa3811fbf2af312e1c&w=740",
    name: "Urgent Alerts",
  },

  {
    image:
      "https://img.freepik.com/free-photo/occupation-science-digitally-generated-folder-chemistry_1134-676.jpg?t=st=1717385024~exp=1717388624~hmac=28960c5f845d4ebdb238017b97d4fcd730fc0226fde8e8a5dd93c1d08a247d34&w=740",
    name: "Health Information",
  },

  {
    image:
      "https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150104473.jpg?t=st=1717385255~exp=1717388855~hmac=813e37c92a277062c3b5a896d37f8c68a16600152149a2a8970b4084d18a5e92&w=740",
    name: "Mobile App Integration",
  },
];
const Home = () => {
  return (
    <div className="mt-32">
      <Banner></Banner>
      <section className="mt-20 font-open-sans">
        <h1 className="text-[40px]  font-bold text-center ">Our Featured</h1>
        <p className="text-paragraph text-center py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dolores nemo impedit velit repellat{" "}
        </p>
        <div className="mt-10 md:w-[80%] lg:w-[65%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((item, id) => (
            <FeaturedCard item={item} key={id}></FeaturedCard>
          ))}
        </div>
      </section>
      <section className="mt-20">
        <h1 className="text-center text-[40px] font-open-sans font-bold ">
          Contact Us
        </h1>
        <p className="text-paragraph text-center py-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          dolores nemo impedit velit repellat{" "}
        </p>
        <div className="nt-10">
          <Contact></Contact>
        </div>
      </section>
    </div>
  );
};

export default Home;
