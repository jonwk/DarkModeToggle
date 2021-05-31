import React from "react";
import "../index.css"

export default function ToggleButton(props) {
  return (
    <div class="flex items-center justify-center w-full mb-12 select-none">
      <label for="toggle" class="flex items-center space-x-4">
        <svg
          width="32"
          height="32"
          fill="currentColor"
          class="transition-colors duration-200 text-yellow-300 dark:text-gray-300"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16 2a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0V3.4A1.4 1.4 0 0116 2zM6.1 6.1a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 11-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm19.8 0a1.4 1.4 0 010 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99a1.4 1.4 0 011.98 0zM9 16a7 7 0 1114 0 7 7 0 01-14 0zm-7 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8H3.4A1.4 1.4 0 012 16zm23.8 0a1.4 1.4 0 011.4-1.4h1.4a1.4 1.4 0 110 2.8h-1.4a1.4 1.4 0 01-1.4-1.4zm-2.87 6.93a1.4 1.4 0 011.98 0l.99.99a1.4 1.4 0 01-1.98 1.98l-.99-.99a1.4 1.4 0 010-1.98zm-15.84 0a1.4 1.4 0 011.98 1.98l-.99.99a1.4 1.4 0 01-1.98-1.98l.99-.99zM16 25.8a1.4 1.4 0 011.4 1.4v1.4a1.4 1.4 0 11-2.8 0v-1.4a1.4 1.4 0 011.4-1.4z"
          ></path>
        </svg>

        {/* <!-- toggle --> */}
        <div class="relative">
          {/* <!-- input --> */}
          <input
            type="checkbox"
            id="toggle"
            class="sr-only"
            onChange={props.switchTheme}
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
          class="transition-colors duration-200 text-gray-300 dark:text-gray-900"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.353 2.939a1 1 0 01.22 1.08 8 8 0 0010.408 10.408 1 1 0 011.301 1.3A10.003 10.003 0 0112 22C6.477 22 2 17.523 2 12c0-4.207 2.598-7.805 6.273-9.282a1 1 0 011.08.22z"
          ></path>
        </svg>
      </label>
    </div>
  );
}
