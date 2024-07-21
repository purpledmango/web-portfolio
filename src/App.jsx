import "./index.css";

import resume from "./Resume.pdf";

import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiTwitterLogoLight,
  PiCodeDuotone,
  PiMonitorDuotone,
} from "react-icons/pi";

import { BiLogoMongodb, BiLogoCss3 } from "react-icons/bi";
import { DiDjango } from "react-icons/di";
import { FaLinux, FaPython } from "react-icons/fa";
import { SiGnubash, SiExpress } from "react-icons/si";
import { RiHtml5Line } from "react-icons/ri";

import { LiaReact, LiaNode, LiaJsSquare } from "react-icons/lia";
import ProjectInfo from "./components/ProjectInfo.jsx";
import SkillInfoCard from "./components/SkillInfoCard.jsx";
import SkillSetMisc from "./components/SkillSetMisc.jsx";
import projectData from "./constants/projectData.js";
import aboutMe from "./constants/aboutMe.js";
function App() {
  const skillData = [
    {
      name: "Building Engaging Frontend Experiencesk",
      description:
        "As a React.js enthusiast, I thrive on creating dynamic, interactive user interfaces. My expertise lies in crafting seamless frontend experiences that captivate users and elevate web applications. I'm well-versed in leveraging React's component-based architecture to develop scalable, reusable UI elements. With a keen eye for design and a commitment to performance optimization, I deliver visually stunning and lightning-fast web applications.",
      logo: <LiaReact />,
    },

    {
      name: "Crafting Lightning-Fast, Scalable APIs",
      description:
        "My expertise lies in creating efficient, real-time applications, ensuring a seamless user experience. With a strong foundation in RESTful architecture and modern API design, I deliver robust solutions tailored to project requirements.",
      logo: <LiaNode />,
    },
    {
      name: "Efficient NoSQL Database Management",
      description:
        "Proficient in MongoDB, I excel in designing and managing NoSQL databases for seamless data storage and retrieval. My expertise lies in crafting efficient database schemas and optimizing queries for optimal performance. I'm skilled in handling large volumes of unstructured data, ensuring robust and scalable solutions. With a deep understanding of MongoDB's features, I implement effective data modeling strategies to meet project-specific requirements.",
      logo: <BiLogoMongodb />,
    },
  ];

  const MiscSkillset = [
    {
      logo: <FaLinux />,
    },
    {
      logo: <SiGnubash />,
    },
    {
      logo: <FaPython />,
    },
    {
      logo: <LiaJsSquare />,
    },
    {
      logo: <BiLogoCss3 />,
    },
    {
      logo: <RiHtml5Line />,
    },
    {
      logo: <DiDjango />,
    },
    {
      logo: <SiExpress />,
    },
  ];

  return (
    <>
      {/* Intro */}
      <section className="w-screen mt-8">
        <div className="w-[80%] flex flex-col items-center justify-center my-5 mx-auto space-y-4">
          <span className="text-xl">Hello, I am</span>
          <h1 className="text-3xl font-bold tracking-tighter pt-4 text-center">
            Nitish K. Chauhan
          </h1>
          <span className="text-md  uppercase tracking-wide text-center">
            Creative Frontend & Backend Web Developer
          </span>
          <a
            href={resume}
            className="my-2 p-2 rounded bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary-dark)] text-xs shadow-lg transition-all ease-in-out hover:scale-105"
          >
            Download Resume
          </a>

          {/* Logos */}
          <div className="flex space-x-4 text-3xl py-3">
            <PiGithubLogoLight className="text-[var(--primary-dark)] transition-all ease-in-out hover:scale-125 hover:text-[var(--font-color)]" />
            <PiLinkedinLogoLight className="text-[var(--primary-dark)] transition-all ease-in-out hover:scale-125 hover:text-[var(--font-color)]" />
            <PiTwitterLogoLight className="text-[var(--primary-dark)] transition-all ease-in-out hover:scale-125 hover:text-[var(--font-color)]" />
          </div>
        </div>
      </section>
      <section className="w-screen h-auto lg:h-96 mb-24">
        <article className="relative h-full py-6 space-y-4 flex flex-col items-center justify-center">
          <h2 className="text-md lg:text-3xl font-semibold text-center relative z-10 pt-6">
            A little About Me
          </h2>
        

          <span className="relative z-10 w-[85%]  mx-auto flex text-justify">
            {aboutMe}
          </span>
          <div className="bg-[var(--card-bg)] absolute w-full h-full"></div>
        </article>
      </section>
      <section className="w-screen my-12">
        <h2 className="text-md lg:text-2xl text-center font-bold tracking-tighter my-6">
          Skills
        </h2>
        <div className="text-6xl grid grid-cols-3 md:grid-cols-4 place-items-center mx-auto lg:flex items-center justify-center gap-5 md:flex-row lg:justify-evenly py-4">
          {MiscSkillset.map((skill, index) => {
            return <SkillSetMisc icon={skill.logo} key={index} />;
          })}
        </div>
      </section>
      <section className="w-screen pt-6">
        <h2 className="font-bold text-md lg:text-2xl text-center"> My Expertise Include</h2>
        <div className="w-[85%] flex-col mx-auto justify-center items-center flex flex-col md:flex-col md:space-y-6">
          {skillData.map((skill, index) => (
            <SkillInfoCard
              key={index}
              skillName={skill.name}
              skillDescription={skill.description}
              logo={skill.logo}
              index={index}
            />
          ))}
        </div>
      </section>
      <section className="w-screen my-8">
      <h2 className="font-bold text-md lg:text-2xl text-center mt-6"> My Projects</h2>
        <div className="flex flex-col items-center justify-center space-y-4 w-[85%] mx-auto">
          {projectData.map((info, index) => {
            return (
              <ProjectInfo
                key={index}
                name={info.name}
                description={info.description}
                liveLink={info.liveLink}
                img={info.img}
              />
            );
          })}
        </div>
      </section>
    </>
  );
}

export default App;
