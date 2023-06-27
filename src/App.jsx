import { useState } from "react";
import "./index.css";
import nitishPic from "./nitish.jpeg";

import {
  PiGithubLogoLight,
  PiLinkedinLogoLight,
  PiTwitterLogoLight,
  PiCodeDuotone,
  PiMonitorDuotone,
} from "react-icons/pi";

import { LiaReact, LiaJsSquare, LiaNode, LiaCss3 } from "react-icons/lia";

function App() {
  return (
    <>
      {/* Intro */}
      <section className="w-screen pt-8">
        <div className="w-[80%] flex flex-col items-center justify-center my-5 mx-auto space-y-2">
          <span className="font-lg">Hello, I am</span>
          <h1 className="text-3xl font-bold tracking-tighter pt-4">
            Nitish K. Chauhan
          </h1>
          <span className="text-xs uppercase tracking-wide flex justify-center items-center">
            Creative Frontend & Backend Web Developer
          </span>
          <button className="my-2 p-2 rounded bg-gradient-to-r from-[var(--primary-light)] to-[var(--primary-dark)] text-xs shadow-lg transition-all ease-in-out hover:scale-105">
            Download Resume
          </button>

          {/* Logos */}
          <div className="flex space-x-4 text-3xl py-3">
            <PiGithubLogoLight className="text-[var(--primary-dark)] transition-all ease-in-out hover:scale-125 hover:text-[var(--font-color)]" />
            <PiLinkedinLogoLight className="text-[var(--primary-dark)] transition-all ease-in-out hover:scale-125 hover:text-[var(--font-color)]" />
            <PiTwitterLogoLight className="text-[var(--primary-dark)] transition-all ease-in-out hover:scale-125 hover:text-[var(--font-color)]" />
          </div>
        </div>
      </section>

      <section className="w-screen pt-6">
        <h2 className="font-bold text-xl text-center">Things I love</h2>
        <div className="w-[85%] flex-col mx-auto justify-center items-center flex flex-col flex-wrap md:flex-row md:space-x-2">
          <div className="flex py-2">
            <div className="p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-2xl bg-[var(--card-bg)]">
              <div className="relative h-24 w-24 bg-[var(--primary-dark)] rounded-full transition-all ease-in-out hover:scale-125">
                <PiCodeDuotone className="text-6xl absolute top-[20%] left-[20%] " />
              </div>
              <h3 className="text-xl font-semibold">Front End</h3>
              <span>I enjoy building interactive Frontend using Reactjs</span>
            </div>
          </div>
          <div className="flex py-2">
            <div className="p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-2xl bg-[var(--card-bg)]">
              <div className="relative h-24 w-24 bg-[var(--primary-dark)] rounded-full transition-all ease-in-out hover:scale-125">
                <PiMonitorDuotone className="text-6xl absolute top-[20%] left-[20%]" />
              </div>
              <h3 className="text-xl font-semibold">Backend APIs</h3>
              <span>I enjoy building interactive Frontend using Reactjs</span>
            </div>
          </div>
          <div className="flex py-2">
            <div className="p-6 rounded-xl flex flex-col items-center justify-center space-y-4 shadow-2xl bg-[var(--card-bg)]">
              <div className="relative h-24 w-24 bg-[var(--primary-dark)] rounded-full transition-all ease-in-out hover:scale-125">
                <PiCodeDuotone className="text-6xl absolute top-[20%] left-[20%]" />
              </div>
              <h3 className="text-xl font-semibold">MERN Stack</h3>
              <span>I enjoy building interactive Frontend using Reactjs</span>
            </div>
          </div>
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
          My Skillsets
        </h2>
        <div className="text-6xl flex justify-evenly py-4">
          <LiaJsSquare className="text-[var(--primary-dark)] transition-all ease-in-out  hover:text-[var(--primary-light)] hover:scale-105" />
          <LiaReact className="text-[var(--primary-dark)] transition-all ease-in-out  hover:text-[var(--primary-light)] hover:scale-105" />
          <LiaNode className="text-[var(--primary-dark)] transition-all ease-in-out  hover:text-[var(--primary-light)] hover:scale-105" />
          <LiaCss3 className="text-[var(--primary-dark)] transition-all ease-in-out  hover:text-[var(--primary-light)] hover:scale-105" />
        </div>
      </section>

      <section className="w-screen py-12">
        <div className=" relative z-10 ">
          <h2 className="text-xl font-bold tracking-tighter text-center py-6">
            My Work and Projects
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 m w-[80%] mx-auto gap-3 mt-6">
            <div className=" p-6 bg-[var(--card-bg)] rounded-xl">
              <img
                src="https://picsum.photos/id/237/200/300 "
                className="w-full object-cover rounded-xl h-24"
              />
            </div>
            <div className="p-6 bg-[var(--card-bg)] rounded-xl">
              <h3 className="font-semibold"> HrTools</h3>
              <p className="text-md font-thin">
                Developed using the MERN stack. Hrs can use this service to
                regiser their company using the API of the UI build in Reactjs
                and Manage their Employees all under a single Dashboard
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
