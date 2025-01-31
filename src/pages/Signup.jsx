import logo from "../assets/fitness_logo.png";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const password = watch("password"); // Watch the password field
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="container min-h-screen mt-20">
        <div className="flex justify-center items-center pt-24">
          <div className="w-full lg:w-10/12 xl:w-9/12 mx-auto h-full">
            <div className="card flex flex-col lg:flex-row my-5 border-0 shadow-lg rounded-3xl overflow-hidden">
              {/* Left Side (Image Section) */}
              <div className="w-full lg:w-1/2 bg-gradient-to-br from-black  flex justify-center items-center p-10">
                <div className="flex justify-center items-center">
                  <img src={logo} className="w-1/2" alt="Logo" />
                </div>
              </div>

              {/* Right Side (Form Section) */}
              <div className="w-full lg:w-1/2 p-4 sm:p-5">
                <h3 className="text-center text-4xl font-bold mb-5 text-white">
                  Sign Up
                </h3>

                <form onSubmit={handleSubmit(onSubmit)}>
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

                  {/* Email Field */}
                  <div className="mb-3">
                    <input
                      type="email"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingInputEmail"
                      placeholder="Email address"
                      {...register("email", {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      })}
                    />
                    {errors.email?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                    {errors.email?.type === "pattern" && (
                      <p className="text-red-500">Invalid email</p>
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
                      <p className="text-red-500">8 characters minimum</p>
                    )}
                  </div>

                  {/* Confirm Password Field */}
                  <div className="mb-3">
                    <input
                      type="password"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingConfirmPassword"
                      placeholder="Confirm Password"
                      {...register("confirmPassword", {
                        required: true,
                        validate: (value) =>
                          value === password || "Passwords do not match",
                      })}
                    />
                    {errors.confirmPassword?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                    {errors.confirmPassword && (
                      <p className="text-red-500">
                        {errors.confirmPassword.message}
                      </p>
                    )}
                  </div>

                  {/* Age Field */}
                  <div className="mb-3">
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingAge"
                      placeholder="Age"
                      {...register("age", { required: true, min: 18, max: 100 })}
                    />
                    {errors.age?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                    {errors.age?.type === "min" && (
                      <p className="text-red-500">
                        You must be at least 18 years old
                      </p>
                    )}
                    {errors.age?.type === "max" && (
                      <p className="text-red-500">Age cannot exceed 100 years</p>
                    )}
                  </div>

                  {/* Gender Field */}
                  <div className="mb-3">
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingGender"
                      {...register("gender", { required: true })}
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                  </div>

                  {/* Fitness Goals Field */}
                  <div className="mb-3">
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingFitnessGoals"
                      placeholder="Your Fitness Goals"
                      {...register("fitnessGoals", {
                        required: true,
                        minLength: 10,
                      })}
                    ></textarea>
                    {errors.fitnessGoals?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                    {errors.fitnessGoals?.type === "minLength" && (
                      <p className="text-red-500">
                        Please provide more details (min 10 characters)
                      </p>
                    )}
                  </div>

                  {/* Preferred Workout Type Field */}
                  <div className="mb-3">
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingWorkoutType"
                      {...register("workoutType", { required: true })}
                    >
                      <option value="">Select Preferred Workout</option>
                      <option value="Cardio">Cardio</option>
                      <option value="Strength">Strength</option>
                      <option value="Yoga">Yoga</option>
                      <option value="Pilates">Pilates</option>
                      <option value="Crossfit">Crossfit</option>
                    </select>
                    {errors.workoutType?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                  </div>

                  {/* Fitness Level Field */}
                  <div className="mb-3">
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingFitnessLevel"
                      {...register("fitnessLevel", { required: true })}
                    >
                      <option value="">Select Fitness Level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                    {errors.fitnessLevel?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                  </div>

                  {/* Weight Field */}
                  <div className="mb-3">
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingWeight"
                      placeholder="Weight (kg)"
                      {...register("weight", {
                        required: true,
                        min: 30,
                        max: 300,
                      })}
                    />
                    {errors.weight?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                    {errors.weight?.type === "min" && (
                      <p className="text-red-500">
                        Weight must be at least 30 kg
                      </p>
                    )}
                    {errors.weight?.type === "max" && (
                      <p className="text-red-500">
                        Weight cannot exceed 300 kg
                      </p>
                    )}
                  </div>

                  {/* Height Field */}
                  <div className="mb-3">
                    <input
                      type="number"
                      className="w-full p-3 border border-gray-300 rounded-lg"
                      id="floatingHeight"
                      placeholder="Height (cm)"
                      {...register("height", {
                        required: true,
                        min: 100,
                        max: 250,
                      })}
                    />
                    {errors.height?.type === "required" && (
                      <p className="text-red-500">This field is required</p>
                    )}
                    {errors.height?.type === "min" && (
                      <p className="text-red-500">
                        Height must be at least 100 cm
                      </p>
                    )}
                    {errors.height?.type === "max" && (
                      <p className="text-red-500">
                        Height cannot exceed 250 cm
                      </p>
                    )}
                  </div>

                  {/* Sign Up Button */}
                  <div className="mb-2">
                    <button
                      className="w-full btn"
                      type="submit"
                    >
                      Sign Up
                    </button>
                  </div>

                  {/* Login Link */}
                  <Link
                    to="/login"
                    className="block text-center text-white mt-2 hover:text-red-500"
                  >
                    Have an account? Login
                  </Link>

                  {/* Divider */}
                  <hr className="my-4 border-gray-300" />

                  {/* Google Sign Up Button */}
                  <div className="mb-2">
                    <button
                      className="w-full !flex btn"
                      type="submit"
                    >
                      <FcGoogle className="mr-3 text-xl" />
                      Sign up with Google
                    </button>
                  </div>

                  {/* Facebook Sign Up Button */}
                  <div className="mb-2">
                    <button
                      className="w-full !flex btn"
                      type="submit"
                    >
                      <FaFacebook className="mr-3  text-xl" />
                      Sign up with Facebook
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

export default SignUp;