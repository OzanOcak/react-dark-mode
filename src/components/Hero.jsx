import React, { useState, useEffect } from "react";
// import logo
import LogoDark from "../assets/img/logo-dark.svg";
import LogoWhite from "../assets/img/logo-white.svg";
// import icons
import {
  BsFillSunFill,
  BsMoonFill,
  BsCheck,
  BsSun,
  BsMoon,
} from "react-icons/bs";
import Cow from "../assets/img/cow.jpeg";

const Hero = () => {
  // theme state
  const [theme, setTheme] = useState("light");

  // if local storage is empty save theme as light
  useEffect(() => {
    if (localStorage.getItem("theme") === null) {
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    // select html elem
    const html = document.querySelector("html");
    if (localStorage.getItem("theme") === "dark") {
      html.classList.add("dark");
      setTheme("dark");
    } else {
      html.classList.remove("dark");
      setTheme("light");
    }
  }, [theme]);

  // handle switch theme
  const handleThemeSwitch = () => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <section className="min-h-[740px] h-screen w-full bg-heroLight bg-cover bg-center bg-no-repeat overflow-hidden dark:bg-heroDark">
      <div className="container mx-auto px-4 lg:px-0">
        {/* header */}
        <header className="flex items-center justify-between py-8">
          {/* logo */}
          <div>
            <a href="#">
              {theme === "light" ? (
                <img src={LogoDark} />
              ) : (
                <img src={LogoWhite} />
              )}
            </a>
          </div>
          {/* button */}
          <button
            onClick={handleThemeSwitch}
            className="p-4 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center"
          >
            {theme === "light" ? <BsMoonFill /> : <BsFillSunFill />}
          </button>
        </header>
        {/* text & image wrapper */}
        <div className="flex flex-col items-center lg:flex-row min-h-[740px]">
          {/* text */}
          <div className="flex-1 flex flex-col justify-center items-start">
            <h1 className="text-5xl text-primary font-bold mb-6 leading-[60px] dark:text-white">
              Country & Farming
              <br />
              <span className="text-green-600">All Nature</span>
            </h1>
            <p className="font-light text-grey mb-12 max-w-[597px] dark:text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
            {/* checked items */}
            <div className="flex flex-col gap-y-6 mb-12">
              {/* item */}
              <div className="flex items-center gap-x-2">
                {/* item icon */}
                <div className="bg-accent/10 text-green-600 w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white">
                  <BsCheck />
                </div>
                {/* item text */}
                <p className="text-base font-light  dark:text-white">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do
                </p>
              </div>
              {/* item */}
              <div className="flex items-center gap-x-2">
                {/* item icon */}
                <div className="bg-accent/10 text-green-600 w-[20px] h-[20px] rounded-full flex justify-center items-center dark:bg-accent/70 dark:text-white">
                  <BsCheck />
                </div>
                {/* item text */}
                <p className="text-base font-light  dark:text-white">
                  Save with plans starting at $10/month.
                </p>
              </div>
            </div>
            {/* button */}
            <button className="btn ">Discover our products</button>
          </div>
          {/* image */}
          <div className="hidden lg:flex self-end">
            <img src={Cow} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
