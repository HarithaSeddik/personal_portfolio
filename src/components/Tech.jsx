import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { ComputersCanvas } from "./canvas";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
const Tech = () => {
  return (
    <div>
      <div>
        <motion.div variants={textVariant()}>
          <h2 className={`${styles.sectionHeadText}`}>Tech Stacks.</h2>
        </motion.div>
      </div>

      <div className=" flex mt-5 mx-auto  ">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Metabolizing coffee into code since 2020...
        </motion.p>
      </div>
      {/* <div className=" mt-20 grid grid-cols-2 gap-4 content-center"> */}
      <div className=" xl:mt-12 flex-col xl:flex-row flex-col-reverse  ">
        <div className="  flex-[1.2] h-[350px] ">
          <ComputersCanvas />
        </div>
        <div className="xl:flex-1 xl:h-auto">
          {technologies.map((technology) => (
            <div className="group relative gap-5 inline-block ">
              <div className="w-28 h-28" key={technology.name}>
                <BallCanvas
                  data-tooltip-target="tooltip-default"
                  icon={technology.icon}
                />
              </div>
              <span
                className="
              group-hover:visible group-hover:opacity-100 transition  text-white p-1 absolute whitespace-nowrap
              text-sm font-medium transition-opacity duration-300 rounded-lg shadow-sm opacity-0
              tooltip dark:bg-gray-700 z-10 invisible inline-block px-3 py-2 bg-secondaryBg left-5
              "
              >
                {technology.hover}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
