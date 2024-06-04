import useAuth from "../hooks/useAuth";

const WelcomeMessage = () => {
  const { user } = useAuth();
  return (
    <h1 className="font-open-sans font-semibold text-[25px] mt-8 ml-8">
      Hi {user.displayName} Welcome to Our organization
    </h1>
  );
};

export default WelcomeMessage;
