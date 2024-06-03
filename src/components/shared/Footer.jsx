const Footer = () => {
  return (
    <div className=" bg-darkGray text-white mt-20 pt-10">
      <footer className="max-w-7xl mx-auto">
        <div className=" flex items-center justify-between flex-col gap-10 py-10 mx-auto space-y-8 md:flex-row lg:space-y-0 ">
          <div>
            <a className="text-2xl md:text-3xl  font-bold ">
              Blood<span className="text-[#DF1E26]">Unity</span>
            </a>
            <p className="pt-3 text-[#D7DBDD]">
              SKT Industries Ltd. <br />
              Providing reliable treatment since 2004
            </p>
          </div>
          <div className="grid md:grid-cols-2  lg:grid-cols-4 gap-10 font-open-sans md:w-[60%] *:pl-8">
            <div className="space-y-3">
              <h3 className="text-[20px]">Company</h3>
              <ul className="space-y-1 *:text-[#D7DBDD] ">
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">About Us</a>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h3 className="text-[20px]">Support</h3>
              <ul className="space-y-1 text-paragraph-text *:text-[#D7DBDD]">
                <li>
                  <a href="#">Support Center</a>
                </li>
                <li>
                  <a href="#">Feedback</a>
                </li>
                <li>
                  <a href="#">Accesbility</a>
                </li>
              </ul>
            </div>
            <form className="pl-4 font-open-sans">
              <h6 className="text-[20px]">Subscribe Now</h6>
              <fieldset className="form-control w-80">
                <div className="join mt-10">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="input input-bordered join-item text-black"
                  />
                  <button className="button px-4 join-item">Subscribe</button>
                </div>
              </fieldset>
            </form>
          </div>
        </div>
      </footer>
      <footer className="footer items-center p-4 bg-neutral text-[#D7DBDD]">
        <div className="max-w-7xl footer mx-auto flex justify-between items-center">
          <aside className="items-center grid-flow-col">
            <p>
              ©2024{" "}
              <a className=" font-bold ">
                Blood<span className="text-[#DF1E26]">Unity</span>
              </a>{" "}
              Company . All rights reserved.
            </p>
          </aside>
          <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end *:cursor-pointer">
            <a className="hover:text-darkRed duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a className="hover:text-darkRed duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a className="hover:text-darkRed duration-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
