import "./index.css";
import nitishPic from "./nitish-no-bg.png";
import resume from "./Resume.docx";

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

function App() {
  const projectData = [
    {
      name: "Blog Api",
      description: "The Api was developed for a Blog App developed in Reactjs",
      liveLink: "https://www.google.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxJAEO-pgjKjxsE_S0eeX94jDXLz0jmD2GrN8aJ8QB8oF8Tcrv4sixkrBDv6zHSxbR6E&usqp=CAU",
    },
    {
      name: "Swimble HTML Template",
      description: "The Api was developed for a Blog App developed in Reactjs",
      liveLink: "https://www.google.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxJAEO-pgjKjxsE_S0eeX94jDXLz0jmD2GrN8aJ8QB8oF8Tcrv4sixkrBDv6zHSxbR6E&usqp=CAU",
    },
    {
      name: "Blog Api",
      description: "The Api was developed for a Blog App developed in Reactjs",
      liveLink: "https://www.google.com",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKxJAEO-pgjKjxsE_S0eeX94jDXLz0jmD2GrN8aJ8QB8oF8Tcrv4sixkrBDv6zHSxbR6E&usqp=CAU",
    },
    {
      name: "Api2",
      description: "The Api was developed for a Blog App developed in Reactjs",
    },
  ];

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
      <section className="w-screen pt-8">
        <div className="w-[80%] flex flex-col items-center justify-center my-5 mx-auto space-y-2">
          <span className="font-lg">Hello, I am</span>
          <h1 className="text-3xl font-bold tracking-tighter pt-4">
            Nitish Kumar Chauhan
          </h1>
          <span className="text-xs uppercase tracking-wide flex justify-center items-center">
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

      <section className="w-screen pt-6">
        <h2 className="font-bold text-xl text-center"> My Skillsets</h2>
        <div className="w-[85%] flex-col mx-auto justify-center items-center flex flex-col md:flex-col md:space-y-6">
          {skillData.map((skill, index) => (
            <SkillInfoCard
              skillName={skill.name}
              skillDescription={skill.description}
              logo={skill.logo}
              index={index}
            />
          ))}
        </div>
      </section>

      <section className="w-screen my-6 h-[460px]">
        <article className="relative h-full py-12">
          <div className="bg-[var(--card-bg)]  skew-y-[-3deg] absolute w-full h-full"></div>
          <h2 className="text-xl font-semibold text-center relative z-10 pt-6">
            A little About Me
          </h2>
          <div className="relative z-10 flex justify-center py-6 ">
            <img
              src={nitishPic}
              className="w-24 h-24 md:w-32 md:h-32  object-cover rounded-full border-2 border-[var(--primary-dark)] "
            />
          </div>

          <span className="relative z-10 w-[85%] mx-auto flex text-justify">
            I am a passionate web developer with a strong focus on mastering the
            MERN stack. Proficient in MongoDB, Express.js, React, and Node.js, I
            am dedicated to creating innovative and efficient web applications.
            I possess a natural talent for problem-solving and thrive in
            collaborative environments. I am excited to contribute my skills to
            cutting-edge projects and work alongside like-minded professionals
          </span>
        </article>
      </section>

      <section className="w-screen py-12">
        <h2 className="text-xl text-center font-bold tracking-tighter py-6">
          Other Skillsets
        </h2>
        <div className="text-6xl flex flex-col items-center justify-center gap-5 md:flex-row lg:justify-evenly py-4">
          {MiscSkillset.map((skill) => {
            return <SkillSetMisc icon={skill.logo} />;
          })}
        </div>
      </section>

      {/*<section className="w-screen py-6">
        <div className=" relative  ">
          <h2 className="text-xl font-bold tracking-tighter text-center py-6">
            My Work and Projects
          </h2>

          <div className="flex flex-col space-y-8">

         {projectData.map((project) => {
           return <ProjectInfo name={project.name} description={project.description} liveLink={project.liveLink} img={project.img} />;
        })}

         </div>


        </div>


      </section>*/}
    </>
  );
}

export default App;
