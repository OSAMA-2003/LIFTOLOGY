import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function ExerciseDetails() {
  const { bodyPart } = useParams();
  const [exercises, setExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const options = {
          method: "GET",
          url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          headers: {
            "x-rapidapi-key": "d8a1537264msh3f0d520464de791p1ea088jsn332ce0de98ba",
            "x-rapidapi-host": "exercisedb.p.rapidapi.com",
          },
        };

        const res = await axios.request(options);
        setExercises(res.data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch exercises");
        setLoading(false);
      }
    };
    fetchExercises();
  }, [bodyPart]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-2xl text-white">Loading exercises...</div>
      </div>
    );
  }

  // Animation variants
  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <h1 className="mt-10 mb-32 text-white text-center capitalize pt-32 gradient_text">
        {bodyPart} Exercise
      </h1>

      {exercises.map((ex, index) => (
        <div key={ex.id} className="space-y-24 p-3">
          {/* Exercise - Odd (Normal Order) */}
          {index % 2 === 0 ? (
            <div className="flex flex-col lg:flex-row items-center space-y-10 lg:space-y-0 overflow-hidden capitalize">
              {/* Text Section */}
              <motion.div
                className="lg:w-1/2 text-white space-y-5"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold">
                  <i className="fa-thin fa-chevron-right mr-2 text-red-500"></i>
                  {ex.name}
                </h2>
                <div className="p-6 rounded-lg shadow-lg space-y-5">
                  <h3 className="font-light text-lg">Exercise Profile</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-bold">Target Muscle Group</span>
                      <span>{ex.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Exercise Equipment</span>
                      <span>{ex.equipment}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <a
                    href={ex.videoUrl}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </a>
                </div>
              </motion.div>

              {/* Video Section */}
              <motion.div
                className="lg:w-1/2 flex justify-center md:justify-end bg-white rounded-lg shadow-lg overflow-hidden relative md:[clip-path:polygon(40%_0,_100%_0,_100%_100%,_0%_100%)]"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={ex.gifUrl}
                  alt={ex.name}
                  className="w-1/2 rounded-lg"
                />
              </motion.div>
            </div>
          ) : (
            /* Exercise - Even (Reverse Order) */
            <div className="flex flex-col-reverse lg:flex-row items-center space-y-10 lg:space-y-0 overflow-hidden capitalize">
              {/* Video Section */}
              <motion.div
                className="lg:w-1/2 flex justify-center md:justify-start bg-white rounded-lg shadow-lg overflow-hidden relative md:[clip-path:polygon(0_0,_60%_0,_100%_100%,_0%_100%)]"
                variants={imageVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <img
                  src={ex.gifUrl}
                  alt={ex.name}
                  className="w-1/2 rounded-lg"
                />
              </motion.div>

              {/* Text Section */}
              <motion.div
                className="lg:w-1/2 text-white space-y-5"
                variants={textVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl font-bold">
                  <i className="fa-thin fa-chevron-right mr-2 text-red-500"></i>
                  {ex.name}
                </h2>
                <div className="p-6 rounded-lg shadow-lg space-y-5">
                  <h3 className="font-light text-lg">Exercise Profile</h3>
                  <div className="space-y-5">
                    <div className="flex justify-between">
                      <span className="font-bold">Target Muscle Group</span>
                      <span>{ex.target}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-bold">Exercise Equipment</span>
                      <span>{ex.equipment}</span>
                    </div>
                  </div>
                </div>
                <div className="my-3">
                  <a
                    href={ex.videoUrl}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch Video
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </>
  );
}

export default ExerciseDetails;