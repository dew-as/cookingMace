import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import Error from "./components/Error";
import About from "./components/About";
import Offers from "./components/Offers";
import Cart from "./components/Cart";
import Search from "./components/Search";
import Footer from "./components/Footer";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserContext } from "./utils/globalContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import SignIn from "./components/SignIn";

const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userDataString = localStorage.getItem("user");
    const user = JSON.parse(userDataString);
    setUser(user);
  }, [localStorage.getItem("user")]);

  return (
    <UserContext.Provider value={{ loggedUser: user, setUser }}>
      <Provider store={appStore}>
        <div className="app">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </Provider>
    </UserContext.Provider>
  );
};

const appRoute = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <SignIn />,
      },
      {
        path: "/home",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading Grocery...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurants/:id",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
