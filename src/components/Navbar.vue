<script setup>
import { ref } from "vue"

const checked = ref(false)
const font = ref("font-sans")

function toggleDarkMode() {
  if (checked.value) {
    document.documentElement.classList.add("dark")
    // localStorage.theme = "dark"
  } else {
    document.documentElement.classList.remove("dark")
    // localStorage.theme = "light"
  }
}
function toggleFont() {
  document.documentElement.classList.remove("font-sans")
  document.documentElement.classList.remove("font-serif")
  document.documentElement.classList.remove("font-mono")
  document.documentElement.classList.add(font.value)
}
</script>

<template>
  <nav class="flex items-center h-8 mx-6 md:mx-0 my-6 md:my-10">
    <div>
      <img src="../assets/logo.svg" alt="logo" />
    </div>
    <div class="ml-auto">
      <select
        v-model="font"
        @change="toggleFont"
        class="font-bold text-lg dark:bg-[#050505] dark:text-white"
      >
        <option value="font-sans">Sans Serif</option>
        <option value="font-serif">Serif</option>
        <option value="font-mono">Mono</option>
      </select>
    </div>
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
