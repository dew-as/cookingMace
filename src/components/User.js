import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../utils/globalContext";
import { Link } from "react-router-dom";

const User = () => {
  const [currentDate] = useState(new Date());
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; // January is 0
  const { loggedUser, setUser } = useContext(UserContext);
  const year = currentDate.getFullYear();
  const [userData, setUserData] = useState('');

  useEffect(() => {
    console.log(loggedUser);
    setUserData(JSON.parse(localStorage.getItem('user')));
  }, [loggedUser]);

  const { displayName, email, photoURL } = userData;

  return (
    <div>
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="https://images.pexels.com/photos/5718104/pexels-photo-5718104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Delicious
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              From App to Plate:
              <br className="hidden md:block" />
              Your Culinary Connection
              <span className="inline-block text-deep-purple-accent-400"></span>
            </h2>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              Welcome to CookingMace, where flavor meets convenience! 🍽️
              Satisfying cravings, one order at a time. From sizzling pizzas to
              exotic cuisines, we deliver joy straight to your doorstep.
            </p>
            <div className="flex items-center">
              <a
                href="/"
                className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-black font-semibold transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
              <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
          <p>
            Today {day}/{month}/{year}
          </p>
        </p>
        <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
          <div className="mb-4">
            <a
              href="/"
              aria-label="Article"
              className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
            >
              Taste the Difference: Where Excellence is Served.
            </a>
          </div>
          <p className="text-base text-gray-700 md:text-lg">{displayName}</p>
        </div>
        <div className="mb-10 sm:text-center">
          <a href="/" aria-label="Author" className="inline-block mb-1">
            <img
              alt="avatar"
              src={photoURL}
              className="object-cover w-20 h-20 rounded-full shadow-sm"
            />
          </a>
          <div>
            <a
              href="/"
              aria-label="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              {email}
            </a>
            <p className="text-sm font-medium leading-4 text-gray-600">
              {'location'}
            </p>
          </div>
        </div>
        <div className="sm:text-center">
          <Link
            to={`mailto:${email}`}
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Send Mail
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User;
