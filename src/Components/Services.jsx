import { MdOutlineCheckCircle } from "react-icons/md";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-8">

            {[
 {
    icon: MdOutlineCheckCircle,
    title: "Showcase Your Art",
    description:
      "Empower artists by providing a platform where their work can be shared, appreciated, and celebrated by a global audience.",
  },
  {
    icon: MdOutlineCheckCircle,
    title: "Facilitate Art Sales",
    description:
      "Enable artists to monetize their creativity by offering an intuitive marketplace to sell their artwork directly to art enthusiasts and collectors.",
  },
  {
    icon: MdOutlineCheckCircle,
    title: "Enhance Discoverability",
    description:
      "Allow users to explore diverse art collections tailored to their interests through dynamic search and categorization features.",
  },
  {
    icon: MdOutlineCheckCircle,
    title: "Connect Through Art",
    description:
      "Bridge the gap between creators and admirers by providing tools to filter art based on preferences, fostering meaningful connections and collaborations.",
  },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-lg bg-orange-50 p-6 shadow-sm sm:p-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  <div>
                    <p className="mt-0.5 text-2xl flex gap-2 font-light text-center  text-[#191047]">
                      <item.icon className="text-4xl text-orange-500" />
                      {item.title}
                    </p>
                  </div>
                  <p className="mt-4 text-black">{item.description}</p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

   
     
    </div>
  );
};

export default Service;
