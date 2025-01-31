import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import icon4 from "../assets/icon4.png";

function FitTools() {
  // Array of card data
  const cards = [
    {
      id: 1,
      title: "Calories Calculator",
      imgSrc: icon1,
      toLink: "/calories-calculator",
    },
    {
      id: 2,
      title: "BMI Calculator",
      imgSrc: icon2,
      toLink: "/bmi-calculator",
    },
    {
      id: 3,
      title: "Goal Setting Tool",
      imgSrc: icon4,
      toLink: "/goal-setting-tool",
    },
    {
      id: 4,
      title: "Food Calculator",
      imgSrc: icon3,
      toLink: "/food-calculator",
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.2 } }, 
  };

  return (
    <section className="container mx-auto my-8 p-6 flex flex-col justify-center items-center">
      <h1 className="gradient_text">Our Fitness Tools</h1>
      <p className="text-gray-500 my-10 text-center">
        Access a variety of tools to help you reach your fitness goals more
        effectively
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-28 p-10">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"

            className="max-w-sm w-full flex justify-center flex-col max-h-[360px] md:max-h-[360px] md:hover:scale-105 transition-transform duration-500 border border-gray-200 rounded-lg text-center backdrop-blur-md backdrop-saturate-150 bg-[rgba(40,17,17,0.25)] border-[rgba(227,38,38,0.125)] filter drop-shadow-[0.5px_0.5px_10px_rgba(255,0,0,0.612)]"
          >
            {/* Card Image */}
            <div className="flex justify-center pt-5 pb-2">
              <img
                className="rounded-t-lg w-28 pt-5"
                src={card.imgSrc}
                alt={card.title}
              />
            </div>

            {/* Card Content */}
            <div className="p-5 mb-5">
              <h5 className="text-2xl font-bold tracking-tight gradient_text mb-5 filter drop-shadow-[0.5px_0.5px_5px_rgba(0,0,0,0.733)]">
                {card.title}
              </h5>

              {/* Link to Tool */}
              <Link to={card.toLink}>
                <button className="btn">LEARN MORE</button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default FitTools;