<script setup>
import axios from "axios"
import { onMounted, reactive } from "vue"
import { useWordStore } from "../stores/WordStore"

const store = useWordStore()
// let state = reactive({ data: "" })

// function getWordFromDictionary(word = "hello") {
//   axios
//     .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
//     .then((response) => {
//       console.log(response.data)
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }

// onMounted(() => {
//   store.getWordFromDictionary("hello")
// })
function onSubmit() {
  // handle form submit
  store.getWordFromDictionary(store.query)
}
</script>

<template>
  <div class="relative">
    <form @submit.prevent="onSubmit">
      <button type="submit" class="absolute top-1/2 -translate-y-1/2 right-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
        >
          <path
            fill="none"
            stroke="#A445ED"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m12.663 12.663 3.887 3.887M1 7.664a6.665 6.665 0 1 0 13.33 0 6.665 6.665 0 0 0-13.33 0Z"
          />
        </svg>
      </button>
      <input
        type="text"
        v-model="store.query"
        class="bg-[#F4F4F4] border border-[#F4F4F4] text-[#2D2D2D] font-bold md:text-xl rounded-2xl focus:ring-[#A445ED] focus:border-[#A445ED] focus:outline-none block w-full h-12 md:h-16 px-6 my-6 dark:bg-[#1F1F1F] dark:border-[#1F1F1F] dark:placeholder-[#757575] dark:text-white dark:focus:ring-[#A445ED] dark:focus:border-[#A445ED]"
        placeholder="Search for any word..."
        required
      />
      <span
        class="invisible peer-invalid:visible absolute -bottom-6 text-[#FF5252]"
        >Woops, can't be empty...</span
      >
    </form>
  </div>
</template>

<style>
.search-bar {
  @apply block w-full h-12 md:h-16 bg-[#F4F4F4] rounded-2xl border-none text-[#2D2D2D] font-bold px-6 my-6 focus:outline focus:outline-1 focus:outline-[#A445ED] dark:bg-[#1F1F1F] dark:text-white invalid:outline invalid:outline-1 invalid:outline-[#FF5252];
}
</style>

<!--         class="peer search-bar" -->
