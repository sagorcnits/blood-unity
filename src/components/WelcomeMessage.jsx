import useAuth from "../hooks/useAuth";

const WelcomeMessage = () => {
  const { user } = useAuth();
  return (
    <h1 className="font-open-sans font-semibold hidden md:text-[25px] ml-4 ">
      Hi <span className="text-green-500">{user?.displayName}</span> Welcome to Our organization
    </h1>
  );
};

export default WelcomeMessage;
