import { Link } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
const Login = () => {
  const phone = useRef();
  const password = useRef();
  const submitlogin = async (e) => {
    e.preventDefault();
    const filters = {
      phone: phone.current.value,
      password: password.current.value,
    };

    try {
      const response = await axios.get("http://127.0.0.1:8000/api/login", {
        params: filters,
      });
      if (response.data.length > 0) {
        alert(`welcome ${response.data[0].rank}`);
        const user = response.data[0].rank;
        localStorage.setItem(user , response.data[0].name);
        if (user === "CHEF") {
          window.location.href = "/chef";
        }
        if (user === "MANAGER") {
          window.location.href = "/MANAGER";
        }
        if (user === "STAFF") {
          window.location.href = "/waiter";
        }


      } else {
        {
          alert("wrong credentials");
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <div className="bg-gradient-to-br from-[#FFF8EE] to-[#F0E3E0] w-screen ">
      <nav className=" sticky z-50 top-0 flex justify-between items-center h-[119px] drop-shadow-xl font-bold bg-[#FFF8EE] px-32 transition-colors duration-300">
        <div className="flex items-center gap-2">
          <img src="Images/logo.svg" alt="logo" />
          <div className="uppercase">Hotel California</div>
        </div>
      </nav>

      <div className="flex flex-row justify-between w-full h-screen gap-32 px-32 overflow-hidden">
        <form
          className="flex flex-col w-1/2 p-8 mt-32 ml-8 rounded h-1/2"
          onSubmit={submitlogin}
        >
          <h1 className="text-[#2A435D] text-3xl font-bold pb-16">Login</h1>

          <label className="text-[#395471] font-semibold">
           Phone
            <input
              type="number"
              autoComplete="off"
              id="username"
              ref={phone}
              className="block w-1/2 px-4 py-2 transition-shadow duration-300 border rounded-lg focus:shadow-outline focus:outline-none focus:border-red-600 required:"
            />
          </label>

          <label className="text-[#2A435D] font-semibold mt-16">
            Password
            <input
              autoComplete="off"
              type="password"
              id="password"
              ref={password}
              className="block w-1/2 px-4 py-2 transition-shadow duration-300 border rounded-lg focus:shadow-outline focus:outline-none focus:border-red-600 required:"
            />
          </label>

          <button
            type="submit"
            className="w-1/2 my-16 animated-button-secondary"
          >
            Login
          </button>

          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <input
                type="checkbox"
                id="rememberme"
                name="remember"
                className="text-red-700 rounded focus:text-red-400"
              />
              <label>Remember Me</label>
            </div>
            <a href="/" className="border-b-2 border-red-500 text-md">
              Forgot Password?
            </a>
          </div>
          <p className="flex gap-2 mt-8">
            Don&apos;t have an account?&nbsp;
            <span className="border-b-2 border-red-500 text-md">
              <Link to="/register">Register Now</Link>
            </span>
          </p>
        </form>

        <div className="flex flex-row w-1/2 pb-8 mt-0">
          <div className="grid grid-cols-1 gap-4 mt-4 masonry-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* <!-- Masonry items --> */}
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=1" alt="Image 1" />
            </div>
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=2" alt="Image 2" />
            </div>
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=3" alt="Image 3" />
            </div>
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=4" alt="Image 4" />
            </div>
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=5" alt="Image 5" />
            </div>
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=6" alt="Image 6" />
            </div>
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=7" alt="Image 7" />
            </div>
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=8" alt="Image 8" />
            </div>
            <div className="masonry-item">
              <img src="https://picsum.photos/800/300?random=9" alt="Image 9" />
            </div>
            <div className="masonry-item">
              <img
                src="https://picsum.photos/800/300?random=10"
                alt="Image 10"
              />
            </div>
            {/* <!-- Add more items as needed --> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
