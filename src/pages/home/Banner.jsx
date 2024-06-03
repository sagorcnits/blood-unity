const Banner = () => {
  return (
    <div
      className="hero md:h-[500px] rounded-lg overflow-hidden"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/healthcare-concept-clinic_23-2151117930.jpg?t=st=1717378639~exp=1717382239~hmac=ffc8b13e15d2667680650c9d384ecadc0354c6d030ff96c39c28f3c521b847db&w=740)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white font-open-sans">
        <div className="w-1/2">
          <h1 className="mb-5 text-5xl font-bold">Donate Blood & Save a Life</h1>
          <p className="mb-5">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex justify-center gap-4 mx-auto mt-10 font-open-sans">
            <button className="button">Join as a donor</button>
            <button className="button">Search Donors</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
