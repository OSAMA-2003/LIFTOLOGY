import logo from "../assets/fitness_logo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <>
      <div className="container min-h-screen mt-20">
        <div className="flex justify-center items-center pt-24">
          <div className="w-full lg:w-10/12 xl:w-9/12 mx-auto h-full">
            <div className="card flex flex-col lg:flex-row my-5 border-0 shadow-lg rounded-3xl overflow-hidden">
              {/* Left Side (Image Section) */}
              <div className="w-full lg:w-1/2 bg-gradient-to-br from-black   flex justify-center items-center p-10">
                <div className="flex justify-center items-center">
                  <img src={logo} className="w-1/2" alt="Logo" />
                </div>
              </div>

              {/* Right Side (Form Section) */}
              <div className="w-full lg:w-1/2 p-4 sm:p-5">
                <h3 className="text-center text-4xl font-bold mb-5 text-white">Login</h3>

                <form onSubmit={handleSubmit(() => {})}>
                  {/* Username Field */}
                  <div className="mb-3">
                    <input
                      type="text"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingInputUserName"
                      placeholder="User name"
                      {...register("name", {
                        required: true,
                        minLength: 3,
                        pattern: /^[A-Za-z]+$/i,
                      })}
                    />
                    {errors.name?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                    {errors.name?.type === "minLength" && (
                      <p className="text-red-500">Three letters minimum</p>
                    )}
                    {errors.name?.type === "pattern" && (
                      <p className="text-red-500">Letters only</p>
                    )}
                  </div>

                  {/* Password Field */}
                  <div className="mb-3">
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingPassword"
                      placeholder="Password"
                      {...register("password", {
                        required: true,
                        minLength: 8,
                      })}
                    />
                    {errors.password?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                    {errors.password?.type === "minLength" && (
                      <p className="text-red-600">8 characters minimum</p>
                    )}
                  </div>

                  {/* Login Button */}
                  <div className="mb-2">
                    <button
                      className="w-full btn"
                      type="submit"
                    >
                      Login
                    </button>
                  </div>

                  {/* Sign Up Link */}
                  <Link
                    to="/signUp"
                    className="block text-center text-white mt-2 hover:text-red-500"
                  >
                    Don't have an account? Sign Up
                  </Link>

                  {/* Divider */}
                  <hr className="my-4 border-gray-300" />

                  {/* Google Login Button */}
                  <div className="mb-2">
                    <button
                      className="w-full btn !flex "
                      type="submit"
                    >
                      <FcGoogle className="mr-3 text-xl" />
                      Sign in with Google
                    </button>
                  </div>

                  {/* Facebook Login Button */}
                  <div className="mb-2 ">
                    <button
                      className="w-full !flex btn"
                      type="submit"
                    >
                      <FaFacebook className="mr-3 text-xl" />
                      Sign in with Facebook
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;