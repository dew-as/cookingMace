import { useState } from "react";
import resImg from "../../public/ResImg.png";
import { message } from "antd";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState("");
  const navigate = useNavigate();

  const [messageApi, contextHolder] = message.useMessage();
  const key = "updatable";
  const openMessage = () => {
    messageApi.open({
      key,
      type: "loading",
      content: "Loading",
    });
    setTimeout(() => {
      messageApi.open({
        key,
        type: "warning",
        content: "Invalid username",
        duration: 3,
      });
    }, 1000);
  };

  const fetchUser = async () => {
    try {
      const data = await fetch(`https://api.github.com/users/${user}`);
      const json = await data.json();
      if (json.login) {
        localStorage.setItem("userData", JSON.stringify(json));
        navigate("/home");
      } else {
        await openMessage();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetchUser();
  };

  return (
    <div>
      {contextHolder}
      <section className="bg-gray-50">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="/"
            className="flex items-center mb-6 text-2xl font-extrabold font-mono text-gray-900"
          >
            <img className="w-8 h-8 mr-2" src={resImg} alt="logo" />
            CookingMace
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl font-mono">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6">
                <div>
                  <label className="block mb-2 text-sm font-medium text-gray-900 font-mono">
                    Your Github Username
                  </label>
                  <input
                    type="text"
                    value={user}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="ex : dew-as"
                    required
                    onChange={(e) => setUser(e.target.value)}
                  />
                </div>
                <button
                  className="w-full text-white bg-black outline-none text-xl rounded-lg px-5 py-2.5 text-center font-mono tracking-tighter"
                  onClick={(e) => handleSubmit(e)}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-800 font-mono">
                  Don’t have an Github account yet?
                  <a
                    href="https://github.com/"
                    className="font-medium text-gray-600 hover:underline"
                  >
                    Sign up
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
