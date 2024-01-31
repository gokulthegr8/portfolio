"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello I'm {""}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Gokul",
                1000,
                "a Software Engineer",
                1000,
                "a QA Engineer",
                1000,
                "a Software Engineer in Test",
                1000,
                "a future Software Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Software Engineer in Test @Oracle | UNC Charlotte Graduate Student |
            Former QA Analyst Intern @PlayStation | Former Software Engineer
            @Wipro Limited
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/gokul-mani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via via-purple-500 to-pink-500 hover:bg-slate-200 text-white">
                Linkedin
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gokul-mani/overlay/1705693408307/single-media-viewer/?profileId=ACoAACMC8McBr4ctDqO5C4dZ_H--7RPZ9IDWV7M"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via via-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Resume
                </span>
              </button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/avatar.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
