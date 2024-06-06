import useAuth from "../hooks/useAuth";

const WelcomeMessage = () => {
  const { user } = useAuth();
  return (
    <div className="font-open-sans font-semibold  md:text-[20px] ">
      <h1 className="hidden md:block ml-4">
        Hi <span className="text-green-500">{user?.displayName}</span> Welcome
        to Our organization
      </h1>
      <a className="text-2xl md:text-3xl  md:hidden font-bold">
        Blood<span className="text-orange-500">Unity</span>
      </a>
    </div>
  );
};

export default WelcomeMessage;
