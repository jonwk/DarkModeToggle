import "./index.css";
import ReactLogo from "./ReactLogo.svg";
import React from "react";
import {
  logoViewBoxDimensions,
  tailwindLogo_d,
  tailwindLogo_color,
  tailwindText_d,
  plus_d,
  sun_d,
  moon_d,
} from "./components/Constants.js";

// import * as constants from "./components/Constants.js";

// import ToggleButton from "./components/ToggleButton";

function getCurrentTheme() {
  const cb = document.getElementById("toggle");
  return cb.checked ? "dark" : "light";
}

function changeIcon() {
  const faviconTag = document.getElementById("favicon");
  const mobileIconTag = document.getElementById("mobile-icon");

  // console.log(faviconTag);
  const CurrentTheme = getCurrentTheme();
  // console.log(CurrentTheme);
  faviconTag.href =
    CurrentTheme === "dark" ? "./MoonLogo.ico" : "./SunLogo.ico";
  mobileIconTag.href =
    CurrentTheme === "dark" ? "./MoonLogo.ico" : "./SunLogo.ico";
  // console.log(faviconTag);
}

function switchTheme() {
  var element = document.body;
  element.classList.toggle("dark");
  changeIcon();
}

function App() {
  return (
    <div className="App" class="bg-white dark:bg-gray-900 w-screen h-screen">
      {/* <div className="container">
      </div> */}
      <div className="... flex flex-col justify-center items-center h-screen w-screen ...">
        <div class="... flex w-auto ...">
          <text class="antialiased text-2xl text-black dark:text-white font-mono md:SFMono-Regular">
            Made with
          </text>
        </div>
        
        {/* Logo images */}
        <div class="... flex items-center justify-center w-contain md:h-1/4 lg:h-1/6 select-none   ...">
          {/* {tailwind logo} */}
          <div class="... flex w-auto ...">
            <div class="... w-auto h-48 flex flex-wrap content-center ...">
              <svg viewBox={logoViewBoxDimensions} class="h-6 content-center">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d={tailwindLogo_d}
                  fill={tailwindLogo_color}
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  class="fill-current text-black dark:text-white"
                  d={tailwindText_d}
                ></path>
              </svg>
            </div>
            <div class="... w-auto h-48 flex flex-wrap content-center ...">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-current text-black dark:text-white"
                viewBox="0 0 20 20"
              >
                <path fill-rule="evenodd" d={plus_d} clip-rule="evenodd" />
              </svg>
            </div>
            {/* React Logo */}
            <img
              class="... w-auto h-48 flex flex-wrap content-evenly"
              src={ReactLogo}
              viewBox={logoViewBoxDimensions}
              alt="logo"
            />
          </div>
        </div>

        {/* <!-- toggle --> */}
        <div class="flex items-center justify-center w-6/12 h-6/12 select-none">
          <label for="toggle" class="flex items-center space-x-4">
            <svg
              width="32"
              height="32"
              fill="currentColor"
              class="transition-colors duration-200 text-yellow-300 dark:text-gray-700"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d={sun_d}></path>
            </svg>

            {/* <!-- toggle --> */}
            <div class="relative">
              {/* <!-- input --> */}
              <input
                type="checkbox"
                id="toggle"
                class="sr-only"
                onChange={switchTheme}
              />
              {/* <!-- line --> */}
              <div class="block bg-green-400 w-14 h-8 rounded-full"></div>
              {/* <!--       dot --> */}
              <div class="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
            </div>
            {/* <!-- label --> */}
            <svg
              width="24"
              height="24"
              fill="currentColor"
              class="transition-colors duration-200 text-gray-300 dark:text-yellow-300"
            >
              <path fill-rule="evenodd" clip-rule="evenodd" d={moon_d}></path>
            </svg>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;
