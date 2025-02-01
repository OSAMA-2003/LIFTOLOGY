import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import back from '../assets/back.jpg';
import cardio from '../assets/cardio.jpg';
import chest from '../assets/chest.jpg';
import lower_arms from '../assets/lower_arms.jpg';
import lowerLegs from '../assets/lower-leg.jpg';
import shoulders from '../assets/shoulders.jpg';
import upperArms from '../assets/upper-arm.jpg';
import upperLegs from '../assets/upper-leg.jpg';
import waist from '../assets/waist.jpg';

const Exercises = () => {
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const bodyPartImages = {
    back: back,
    cardio: cardio,
    chest: chest,
    lower_arms: lower_arms,
    lower_legs: lowerLegs,
    shoulders: shoulders,
    upper_arms: upperArms,
    upper_legs: upperLegs,
    waist: waist,
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
          headers: {
            "x-rapidapi-key": "d8a1537264msh3f0d520464de791p1ea088jsn332ce0de98ba",
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          },
        };

        const res = await axios.request(options);
        const filteredExercises = res.data.filter((ex) => ex.toLowerCase() !== "neck");
        setExercises(filteredExercises);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch exercises");
        setLoading(false);
      }
    };

    fetchExercises();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-white">LOADING...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-white">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-[100vh] pt-28 pb-10">
      <motion.h1
        className="gradient_text text-center text-6xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Exercises
      </motion.h1>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {exercises.map((ex, index) => (
          <motion.div
            key={index}
            className="relative shadow-2xl rounded-lg overflow-hidden h-96 bg-cover bg-center cursor-pointer"
            style={{
              backgroundImage: `url(${
                bodyPartImages[ex.replace(/\s+/g, "_").toLowerCase()] || "https://example.com/images/default.jpg"
              })`,
            }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
              <h2 className="text-3xl text-white font-bold uppercase">{ex}</h2>
              <Link to={`/exercise/${ex}`}>
              <motion.button
                className="mt-4 btn"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Let's GO
              </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Exercises;
