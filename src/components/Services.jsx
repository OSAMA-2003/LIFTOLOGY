import { motion } from "framer-motion";
import img1 from "../assets/loss_weight.jpg";
import img2 from "../assets/make_muscles.jpg";
import img3 from "../assets/at_home.jpg";
import img4 from "../assets/gym_plan.jpg";

function Services() {
  // Array of card data
  const cards = [
    {
      id: 1,
      title: "Losing Weight",
      description:
        "Achieve Sustainable Weight Loss With Our Customized Programs, Designed To Help You Burn Fat And Build A Healthier, Leaner Body. Start Your Journey To A Fitter You Today.",
      image: img1,
    },
    {
      id: 2,
      title: "Building Muscles",
      description:
        "Develop Strength And Define Your Muscles With Tailored Programs Designed To Help You Gain Lean Mass Efficiently. Click On The Button Below And Start Your Journey Right Now. Don't Miss This Chance.",
      image: img2,
    },
    {
      id: 3,
      title: "Training at Home",
      description:
        "Stay Fit And Strong With Our Effective Home Workout Plans, Requiring Minimal Equipment. You Can Have Access To A Lot Of Plans By Just Clicking On Learn More!",
      image: img3,
    },
    {
      id: 4,
      title: "GYM Plan",
      description:
        "Maximize Your Gym Sessions With Structured Plans That Guide You Towards Your Fitness Goals.",
      image: img4,
    },
  ];

  // Animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 50 }, 
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="container mx-auto my-8 p-6 flex flex-col justify-center items-center h-fit">
      <h1 className="gradient_text">Our Services</h1>
      <p className="text-gray-500 my-10 text-center">
        At This Part You Can Easily access all of our services. Take a look at
        them and choose whichever you want.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 p-10">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }} 
            transition={{ delay: index * 0.5 }}
            className="backdrop-blur-md backdrop-saturate-150 bg-[rgba(40,17,17,0.25)] rounded-xl border border-[rgba(227,38,38,0.125)] p-6 filter drop-shadow-[0.5px_0.5px_10px_rgba(255,0,0,0.612)] flex flex-col items-center justify-center text-center"
          >
            <div className="w-full h-full">
              <div
                className="bg-cover bg-center h-[300px] w-full rounded-xl border border-[rgba(0,0,0,0.805)]"
                style={{ backgroundImage: `url(${card.image})` }}
              ></div>
              <h1 className="gradient_text text-2xl font-bold uppercase my-5 filter drop-shadow-[0.5px_0.5px_5px_rgba(0,0,0,0.733)]">
                {card.title}
              </h1>
              <p className="text-[#adaaaa] text-sm text-left uppercase leading-6 tracking-wider">
                {card.description}
              </p>
            </div>
            <div className="mt-5">
              <button className="btn">LEARN MORE</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Services;