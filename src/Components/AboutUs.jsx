import {motion} from 'framer-motion';
const AboutUs = () => {
  return (
    <div>
      <section>
  <div className=" mx-auto  max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div className="relative mt-4 h-64 overflow-hidden  sm:h-80 lg:order-last lg:h-full">
        <motion.img
          alt=""
          src="/img0.png"
          initial={{opacity:0,x:100}}
          animate={{opacity:1,x:0}}
          transition={{duration:1}}
          className=" inset-0 h-full w-[80%] object-cover"
        />
      </div>

      <div className="lg:py-24">
        <motion.h2 
         initial={{opacity:0,x:-100}}
         animate={{opacity:1,x:0}}
         transition={{duration:1 , delay:0.5}} 
        className="text-3xl  text-[#191047] font-bold sm:text-4xl">Welcome to ArtConnect</motion.h2>
        <motion.p
        initial={{opacity:0,x:-100}}
        animate={{opacity:1,x:0}}
        transition={{duration:1 , delay:0.5}} 
        className="mt-4 text-[#191047]">
        Art-Connect connects artists and art lovers in a vibrant space to explore, share, and celebrate creativity. Discover inspiring artwork and support emerging talent.Whether you’re looking to discover inspiring pieces or support emerging artists, Art-Connect is your gateway to a world of creativity and connection.
        </motion.p>

        <a
          href="#"
          className="mt-8 inline-block rounded bg-orange-500 px-12 py-3 text-sm font-medium text-white transition hover:bg-orange-200 hover:text-orange-500 focus:outline-none focus:ring focus:ring-yellow-400"
        >
          Sign Up today
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  );
};

export default AboutUs;
