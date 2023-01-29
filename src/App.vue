<script setup>
import Navbar from "./components/Navbar.vue"
import SearchBar from "./components/SearchBar.vue"
import Word from "./components/Word.vue"
</script>

<template>
  <Navbar />
  <main class="md:w-[737px] mx-6 md:mx-0">
    <SearchBar />
    <Word />
  </main>
</template>

<style></style>
