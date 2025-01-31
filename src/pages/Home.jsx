import headerPic from "../assets/headerPic.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import brand1 from '../assets/brand1.png'
import brand2 from '../assets/brand2.png'
import brand3 from '../assets/brand3.png'
import brand4 from '../assets/brand4.png'



import Services from "../components/Services";
import FitTools from "../components/FitTools";


function Home() {
  const motionContainer = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
  });

  return (
    <>
      <header className="pt-40 w-full flex h-fit justify-center bg-cover bg-center overflow-hidden">
        <div
          className="flex items-center w-full lg:items-end justify-between px-20"
          id="home"
        >
          {/* Content Section */}
          <div className=" w-full flex flex-col gap-8  md:w-[40%] ">
            <motion.h1
              variants={motionContainer(0.1)}
              initial="hidden"
              animate="visible"
              className="text-white font-bold text-6xl leading-[75px]"
            >
              ACHIEVE YOUR <br />{" "}
              <span className="font-agdasima text-5xl gradient_text">
                FITNESS GOALS
              </span>
              <br />
              WITH <br />{" "}
              <span className="font-agdasima text-5xl gradient_text">
                LIFTOLOGY
              </span>
            </motion.h1>

            <motion.p
              variants={motionContainer(0.2)}
              initial="hidden"
              animate="visible"
              className="text-white text-center md:px-20 text-opacity-30"
            >
              where fitness meets inspiration, and every drop of sweat tells a
              story of determination
            </motion.p>

            <motion.div
              variants={motionContainer(0.3)}
              initial="hidden"
              animate="visible"
              className="flex gap-8 md:gap-16 mt-5 flex-col md:flex-row justify-center items-center"
            >
              <Link to="login">
                <button className="btn bg-white text-black hover:bg-gray-200">
                  Get Started
                </button>
              </Link>

              <Link to="/about">
                <button className="btn">How it Works</button>
              </Link>
            </motion.div>

            <motion.div
              variants={motionContainer(0.4)}
              initial="hidden"
              animate="visible"
              className="flex gap-5 lg:gap-0 justify-between items-start text-center pb-5 mt-5 gradient_text"
            >
              <div>
                <h5 className="text-white text-2xl font-bungee">1200+</h5>
                <p className="text-white">Members</p>
              </div>
              <div>
                <h5 className="text-white text-2xl font-bungee">10+</h5>
                <p className="text-white">Trainers</p>
              </div>
              <div>
                <h5 className="text-white text-2xl font-bungee">20+</h5>
                <p className="text-white">Years</p>
              </div>
            </motion.div>
          </div>

          {/* Image Section */}
          <div className="  w-[55%] hidden md:flex justify-end items-end p-0 m-0">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              src={headerPic}
              alt="logo"
              className=" lg:flex filter drop-shadow-[0px_1px_10px_#7b0202]"
            />
          </div>
        </div>
      </header>



 {/* Brands Container */}
<div className="w-full bg-[#a30d0a] flex items-center justify-between flex-wrap py-1 lg:px-28">
  {/* Brands Images */}
  <img src={brand1} className="w-[65px] p-[10px] md:w-[120px] " />
  <img src={brand2} className="w-[65px] p-[10px] md:w-[120px] " />
  <img src={brand3} className="w-[65px] p-[10px] md:w-[120px] " />
  <img src={brand4} className="w-[65px] p-[10px] md:w-[120px] " />
</div>




{/* Services */}

<Services/>

{/* Fitness Tools */}

<FitTools/>
    </>
  );
}

export default Home;