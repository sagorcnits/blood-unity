import useAuth from "../../hooks/useAuth";

const Modal = () => {
  const { user } = useAuth();

  return (
    <form className="w-[600px] p-4 bg-black">
      <div>
        <div>
          <input
            type="text"
            placeholder="First name"
            className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-4"
            value={user?.displayName}
            disabled
            name="name"
          />
        </div>
        <div>
          <input
            type="email"
            placeholder="email"
            className="w-full rounded-md py-3 px-4 focus:outline-none bg-white mt-4"
            value={user?.email}
            disabled
            name="email"
          />
        </div>
      </div>
      <div className="text-center mt-8">
        <button className="button">Confirm Donate</button>
      </div>
    </form>
  );
};

export default Modal;
