import useAuth from "../hooks/useAuth";

const WelcomeMessage = () => {
  const { user } = useAuth();
  return (
    <h1 className="font-open-sans font-semibold text-[25px] ml-8">
      Hi <span className="text-green-500">{user?.displayName}</span> Welcome to Our organization
    </h1>
  );
};

export default WelcomeMessage;
