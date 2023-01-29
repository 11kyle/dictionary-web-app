<script setup>
import { useWordStore } from "../stores/WordStore"

const store = useWordStore()
</script>

<template>
  <div v-if="store.response && store.response.status === 200">
    <template v-for="data in store.response.data">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-[#2D2D2D] font-bold text-3xl dark:text-white">
            {{ data.word }}
          </h1>
          <p class="text-[#A445ED] font-normal text-lg">
            {{ data.phonetic }}
          </p>
        </div>
        <img src="../assets/icon-play.svg" alt="play audio" class="w-12 h-12" />
      </div>
      <div v-for="meaning in data.meanings">
        <div class="flex items-center gap-x-4">
          <h2 class="text-[#2D2D2D] font-bold italic text-lg dark:text-white">
            {{ meaning.partOfSpeech }}
          </h2>
          <span
            class="inline-block h-[1px] w-full bg-[#E9E9E9] dark:bg-[#3A3A3A] my-8"
          ></span>
        </div>

        <h3 class="text-[#757575] font-normal text-base">Meaning</h3>
        <ul>
          <li
            v-for="definition in meaning.definitions"
            class="flex items-baseline ml-1 text-[#2D2D2D] font-normal text-sm my-3 dark:text-white"
          >
            <!-- Bullet Point -->
            <span
              class="shrink-0 block w-[5px] h-[5px] rounded-full bg-[#8F19E8] mr-5"
            ></span>
            <span>
              <span>
                {{ definition.definition }}
              </span>
              <span v-if="definition.example" class="block text-[#757575] mt-3"
                >"{{ definition.example }}"</span
              >
            </span>
          </li>
        </ul>
        <!-- Synonyms -->
        <div v-if="meaning.synonyms.length > 0" class="flex items-start">
          <h3 class="text-[#757575] font-normal text-base mr-6">Synonyms</h3>
          <div class="flex flex-wrap">
            <span
              v-for="synonym in meaning.synonyms"
              class="text-[#A445ED] font-bold text-base mr-4"
              >{{ synonym }}</span
            >
          </div>
        </div>
      </div>
      <span
        class="inline-block h-[1px] w-full bg-[#E9E9E9] dark:bg-[#3A3A3A] my-5"
      ></span>
      <!-- Sources -->
      <div class="mb-20">
        <h3
          class="text-[#757575] font-normal underline decoration-2 underline-offset-2 text-base mr-6"
        >
          Source
        </h3>
        <a
          v-for="sourceUrl in data.sourceUrls"
          :href="sourceUrl"
          class="text-[#2D2D2D] font-normal underline text-sm dark:text-white"
          >{{ sourceUrl }}</a
        >
      </div>
    </template>
  </div>

  <div
    v-else-if="store.response && store.response.status === 404"
    class="mt-20"
  >
    <span class="block text-center" style="font-size: 44px">&#128577;</span>
    <h1
      class="text-[#2D2D2D] dark:text-white font-bold text-xl text-center mt-11 mb-6"
    >
      {{ store.response.data.title }}
    </h1>
    <p class="text-[#757575] text-lg text-center">
      {{ store.response.data.message }} {{ store.response.data.resolution }}
    </p>
  </div>
</template>

<style></style>
