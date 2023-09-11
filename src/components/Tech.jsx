import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="group relative inline-block">
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas
              data-tooltip-target="tooltip-default"
              icon={technology.icon}
            />
          </div>
          <span
            className="
           group-hover:visible group-hover:opacity-100 transition cyan-gradient text-white p-1 absolute whitespace-nowrap
          text-sm font-medium transition-opacity duration-300 rounded-lg shadow-sm opacity-0
          tooltip dark:bg-gray-700 z-10 invisible inline-block px-3 py-2
          "
          >
            {"The tip of the tool bitch"}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Tech;
