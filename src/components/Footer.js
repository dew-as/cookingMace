const Footer = () => {
  return (
    <div className="relative mt-16 bg-black text-white">
      <svg
        className="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-black"
        preserveAspectRatio="none"
        viewBox="0 0 1440 54"
      >
        <path
          fill="currentColor"
          d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
        />
      </svg>
      <div className="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
          <div className="md:max-w-md lg:col-span-2">
            <a
              href="/"
              aria-label="Go home"
              title="Company"
              className="inline-flex items-center"
            >
              <i className="bx bx-restaurant text-white text-4xl text-teal-accent-400"></i>
              <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase font-mono">
                Cooking Mace
              </span>
            </a>
            <div className="mt-4 lg:max-w-sm">
              <p className="text-sm text-deep-purple-50 font-semibold">
                Relax, savor, repeat. Your culinary journey starts here.
              </p>
              <p className="mt-4 text-sm text-deep-purple-50 font-semibold">
                Convenience served hot. Happiness delivered fresh. Bon appétit!
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Company
              </p>
              <ul className="mt-2 space-y-2">
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  About
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Careers
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Team
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Grocery Mart
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Contact Us
              </p>
              <ul className="mt-2 space-y-2">
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Help & Support
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Partner with us
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Ride with us
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                Legal
              </p>
              <ul className="mt-2 space-y-2">
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Terms & Conditions
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Cookie Policy
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Privacy Policy
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-wide text-teal-accent-400">
                We deliver to:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Coimbatore
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Mysore
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Trivandrum
                </li>
                <li className="transition-colors duration-300 text-deep-purple-50 hover:text-teal-accent-400">
                  Kodaikanal
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between pt-5 pb-10 border-t border-deep-purple-accent-200 sm:flex-row">
          <p className="text-sm text-gray-100">
            © Copyright 2024 Dewas All rights reserved.
          </p>
          <div className="flex items-center mt-4 space-x-4 sm:mt-0">
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <i className="bx bxl-gmail"></i>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <i className="bx bxl-linkedin-square"></i>
            </a>
            <a
              href="/"
              className="transition-colors duration-300 text-deep-purple-100 hover:text-teal-accent-400"
            >
              <i className="bx bxl-github"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
