import { motion } from "framer-motion";
import aboutImage from "../assets/fitness_logo.png";
import { useEffect } from "react";

const About = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    
  return (
    <div className="min-h-screen flex items-center justify-center  text-white mt-10 py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center"
      >
       
        <div className=" shadow-xl p-6 rounded-2xl">
          <h1 className="text-5xl text-start font-bold mb-4 text-red-500">About Liftology</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Liftology is revolutionizing fitness with a personalized and data-driven
            approach to health and wellness. Our platform predicts a 7-day fitness plan
            tailored to users’ weight and height, ensuring accessibility for all fitness levels.
          </p>
          <p className="text-lg text-gray-300 mt-4 leading-relaxed">
            Future enhancements, such as progress tracking and AI-powered performance analysis,
            will provide real-time feedback and customized recommendations. Join us in shaping
            the future of AI-driven fitness solutions!
          </p>
        </div>
        <div className="relative">
          <img
            src={aboutImage}
            alt="Liftology Gym"
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default About;
