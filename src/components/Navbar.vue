<script setup>
import { ref } from "vue"

const checked = ref(false)
const font = ref("Sans Serif")

function toggleDarkMode() {
  if (checked.value) {
    document.documentElement.classList.add("dark")
    // localStorage.theme = "dark"
  } else {
    document.documentElement.classList.remove("dark")
    // localStorage.theme = "light"
  }
}

function toggleFont(value) {
  // Update font value
  font.value = value
  // Remove all font classes
  document.documentElement.classList.remove("font-sans")
  document.documentElement.classList.remove("font-serif")
  document.documentElement.classList.remove("font-mono")

  if (font) {
    switch (font.value) {
      case "Sans Serif":
        document.documentElement.classList.add("font-sans")
        break
      case "Serif":
        document.documentElement.classList.add("font-serif")
        break
      case "Mono":
        document.documentElement.classList.add("font-mono")
        break
      default:
        break
    }
  }
}
</script>

<template>
  <nav class="flex items-center h-8 mx-6 md:mx-0 my-6 md:my-10">
    <div>
      <img src="../assets/logo.svg" alt="logo" />
    </div>

    <div class="relative group ml-auto">
      <span
        class="flex items-center gap-4 font-bold text-lg bg-white dark:bg-[#050505] dark:text-white group"
      >
        {{ font }}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="8"
          viewBox="0 0 14 8"
        >
          <path
            fill="none"
            stroke="#A445ED"
            stroke-width="1.5"
            d="m1 1 6 6 6-6"
          />
        </svg>
      </span>
      <div
        class="z-10 hidden group-hover:block absolute right-0 bg-white dark:bg-[#1F1F1F] rounded-2xl drop-shadow-[0_5px_30px_rgba(0,0,0,1)] dark:drop-shadow-[0px_5px_30px_rgba(164,69,237,1)] w-[183px] h-[152px] p-6"
      >
        <ul>
          <li
            @click="toggleFont('Sans Serif')"
            class="font-sans text-[#2D2D2D] dark:text-white font-bold text-lg hover:text-[#A445ED] dark:hover:text-[#A445ED] py-1 cursor-pointer"
          >
            Sans Serif
          </li>
          <li
            @click="toggleFont('Serif')"
            class="font-serif text-[#2D2D2D] dark:text-white font-bold text-lg hover:text-[#A445ED] dark:hover:text-[#A445ED] py-1 cursor-pointer"
          >
            Serif
          </li>
          <li
            @click="toggleFont('Mono')"
            class="font-mono text-[#2D2D2D] dark:text-white font-bold text-lg hover:text-[#A445ED] dark:hover:text-[#A445ED] py-1 cursor-pointer"
          >
            Mono
          </li>
        </ul>
      </div>
    </div>

    <!-- <div>
      <select
        v-model="font"
        @change="toggleFont"
        class="font-bold text-lg bg-white dark:bg-[#050505] dark:text-white"
      >
        <option class="hover:text-[#A445ED]" value="font-sans">
          Sans Serif
        </option>
        <option value="font-serif">Serif</option>
        <option value="font-mono">Mono</option>
      </select>
    </div> -->
    <span class="w-[1px] h-full bg-[#E9E9E9] dark:bg-[#3A3A3A] mx-4"></span>
    <div class="flex flex-col items-center">
      <label class="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          v-model="checked"
          @change="toggleDarkMode"
          class="sr-only peer"
        />
        <div
          class="w-11 h-6 bg-[#757575] peer-focus:outline-none rounded-full peer dark:bg-[#A445ED] peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-white peer-checked:bg-[#A445ED]"
        ></div>
        <span class="ml-3">
          <svg
            class="stroke-[#838383] dark:stroke-[#A445ED]"
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </span>
      </label>
    </div>
  </nav>
</template>

<style></style>
