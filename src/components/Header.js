import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LOGO_IMG from "../utils/logo.png";
import { UserContext } from "../utils/globalContext";
import CartModal from "./CartModal";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [btnName, setBtnName] = useState("Login");
  const { loggedUser, setUser } = useContext(UserContext);
  const [userData, setUserData] = useState("");

  useEffect(() => {
    setUserData(loggedUser);
  }, [loggedUser]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    setUser("");
    localStorage.removeItem('user')
    navigate('/')
  };

  return (
    <nav className="relative bg-white shadow">
      <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <a className="flex gap-2">
            <i className="bx bx-cookie bx-spin text-orange-400"></i>
            <img className="w-auto h-6 sm:h-7" src={LOGO_IMG} alt="" />
          </a>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
              aria-label="toggle menu"
            >
              {!isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? "translate-x-0 opacity-100" : "opacity-0 -translate-x-full"
            }`}
        >
          <div className="flex flex-col md:flex-row md:mx-6">
            <a
              onClick={() => navigate("/home")}
              className="flex gap-1 items-center cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 md:mx-4 md:my-0"
            >
              <i className="bx bx-home"></i>
              Home
            </a>
            <a
              onClick={() => navigate("/search")}
              className="flex gap-1 items-center cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 md:mx-4 md:my-0"
            >
              <i className="bx bx-search"></i>
              Search
            </a>
            <a
              onClick={() => navigate("/about")}
              className="flex gap-1 items-center cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 md:mx-4 md:my-0"
            >
              <i className="bx bx-info-circle"></i>
              About
            </a>
            <a
              onClick={() => navigate("/grocery")}
              className="flex gap-1 items-center cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 md:mx-4 md:my-0"
            >
              <i className="bx bx-store-alt"></i>
              Grocery
            </a>
            <a
              className="cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 md:mx-4 md:my-0"
            >
              {
                userData?.displayName ? <span onClick={handleLogout}>Logout</span> : <span onClick={() => navigate('/')}>Login</span>
              }
            </a>
            <span className="cursor-pointer my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-500 hover:text-orange-500 dark:hover:text-orange-400 md:mx-4 md:my-0">
              {userData?.displayName}
            </span>
          </div>
          <CartModal />
        </div>
      </div>
    </nav>
  );
};

export default Header;
