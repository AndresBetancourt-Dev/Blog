import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto bg-cover bg-no-repeat bg-center">
      <Image className="w-full h-full object-cover" src={"/herobg.png"} alt="Hero Background" width={1920} height={1330}/>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white" />
          <div className="w-1 sm:h-80 h-40 bg-white" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white drop-shadow-sm shadow-orange-500`}>
            Andrés Betancourt
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            Fullstack Developer with focus on Web and Mobile Development
          </p>
        </div>
      </div> 
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              className="w-3 h-3 rounded-full bg-white mb-1"
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
