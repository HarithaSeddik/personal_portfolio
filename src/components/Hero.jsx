import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { cartoonImgNoBg } from "../assets";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const TypingAnimation = () => {
    return (
      <TypeAnimation
        sequence={[
          "a Software Developer",
          500,
          "a Web Developer",
          500,
          "a Mobile Developer",
          500,
          "a Freelancer",
          500,
          "an Engineer",
          500,
        ]}
        speed={30}
        className="text-textPrimary"
        repeat={Infinity}
      />
    );
  };

  return (
    <section className="relative w-full h-screen mx-auto ">
      <div
        className={`${styles.paddingX} absolute inset top-[90px] sm:top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5 ">
          <div className="w-5 h-5 rounded-full secondary-gradient" />
          <div className="w-1 sm:h-80 h-40 cyan-gradient" />
        </div>
        <div>
          {" "}
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I am <span className="text-textPrimary"> Haritha </span>
          </h1>
          <p className={` ${styles.heroSubText}  mt-5`}>
            I'm &nbsp; <br className=" sm:block hidden" />
            <span>{TypingAnimation()}</span>
          </p>
        </div>
      </div>

      {/* <div className="relative  left-0 right-0 top-[250px] sm:top-[350px]"> */}
      <div className="h-screen flex flex-col justify-center gap-5">
        <div className="relative mx-auto bg-gradient-to-b from-teal-500  rounded-full h-52 w-52 sm:w-72 sm:h-72 lg:h-72 lg:w-72 overflow-hidden mt-14 sm:mt-56 ">
          <img src={cartoonImgNoBg} />
        </div>
        <div className="relative text-5xl flex justify-center gap-16 py-3 text-gray-400 mt-10">
          <a href="https://www.linkedin.com/in/harithaseddik/" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="https://github.com/HarithaSeddik" target="_blank">
            <AiFillGithub />
          </a>
          <a href="https://www.instagram.com/harithaakkad/" target="_blank">
            <AiFillInstagram />
          </a>
        </div>
      </div>

      <div className=" md:hidden absolute xs:bottom-12 bottom-24 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.dev
              animate={{ y: [0, 25, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
