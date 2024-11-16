import axios from "axios";
import { useRef } from "react";
const Register = () => {
const password = useRef();
    const username= useRef();
     const handleSubmit = async (e) => {
       e.preventDefault();
       const formData = {
         username: username.current.value,
         password: password.current.value,
       };
       console.log(formData);
       try {
         const response = await axios.post(
           "http://127.0.0.1:8000/api/signup",
           formData
         );
         alert(response.data.message);
       } catch (error) {
         console.error(error.response.data);
         alert("An error occurred.");
       }
     };
    return (
        <div className="bg-gradient-to-br from-[#FFF8EE] to-[#F0E3E0] w-screen -mx-32">
            <nav className=" sticky z-50 top-0 flex justify-between items-center h-[119px] drop-shadow-xl font-bold bg-[#FFF8EE] px-32 transition-colors duration-300">
                <div className="flex items-center gap-2">
                    <img src="Images/logo.svg" alt="logo" />
                    <div className="uppercase">Hotel California</div>
                </div>
            </nav>

            <div className="flex flex-row justify-between w-full h-screen gap-32 px-32 overflow-hidden">
                <form onSubmit={handleSubmit} className="flex flex-col w-1/2 p-8 mt-32 ml-8 rounded h-1/2">
                    <h1 className="text-[#2A435D] text-3xl font-bold pb-16">
                        Register
                    </h1>
                    <label className="text-[#395471] font-semibold">
                        Your Name
                        <input
                            type="text"
                            autoComplete="off"
                            id="email"
                            className="block w-1/2 px-4 py-2 transition-shadow duration-300 border rounded-lg focus:shadow-outline focus:outline-none focus:border-red-600 required:"
                        />
                    </label>

                    <label className="text-[#395471] font-semibold mt-8">
                        Set Your Email
                        <input
                            type="text"
                            autoComplete="off"
                            ref={username}
                            id="email"
                            className="block w-1/2 px-4 py-2 transition-shadow duration-300 border rounded-lg focus:shadow-outline focus:outline-none focus:border-red-600 required:"
                        />
                    </label>

                    <label className="text-[#2A435D] font-semibold mt-8">
                        Set Your Password
                        <input
                            autoComplete="off"
                            type="password"
                            ref={password}
                            id="password"
                            className="block w-1/2 px-4 py-2 transition-shadow duration-300 border rounded-lg focus:shadow-outline focus:outline-none focus:border-red-600 required:"
                        />
                    </label>
                    <label className="text-[#2A435D] font-semibold mt-8">
                        Confirm Your Password
                        <input
                            autoComplete="off"
                            type="password"
                            id="password"
                            className="block w-1/2 px-4 py-2 transition-shadow duration-300 border rounded-lg focus:shadow-outline focus:outline-none focus:border-red-600 required:"
                        />
                    </label>

                    <input
                        type="submit"
                        value="Login"
                        className="w-1/2 my-16 animated-button-secondary "
                    />
                    <div className="flex items-center gap-4">
                        <div className="flex justify-start gap-4">
                            <input
                                type="checkbox"
                                id="rememberme"
                                name="remember"
                                className="text-red-700 rounded focus:text-red-400"
                            />
                            <label>Remember Me</label>
                        </div>
                    </div>
                </form>

                <div className="flex flex-row w-1/2 pb-8 mt-0">
                    <div className="grid grid-cols-1 gap-4 mt-4 masonry-grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        {/* <!-- Masonry items --> */}
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=1"
                                alt="Image 1"
                            />
                        </div>
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=2"
                                alt="Image 2"
                            />
                        </div>
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=3"
                                alt="Image 3"
                            />
                        </div>
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=4"
                                alt="Image 4"
                            />
                        </div>
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=5"
                                alt="Image 5"
                            />
                        </div>
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=6"
                                alt="Image 6"
                            />
                        </div>
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=7"
                                alt="Image 7"
                            />
                        </div>
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=8"
                                alt="Image 8"
                            />
                        </div>
                        <div className="masonry-item">
                            <img
                                src="https://picsum.photos/800/300?random=9"
                                alt="Image 9"
                            />
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

export default Register;
