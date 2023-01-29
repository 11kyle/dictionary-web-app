import { defineStore } from "pinia"
import axios from "axios"

export const useWordStore = defineStore("word", {
  state: () => ({
    response: null,
    word: null,
    query: null,
  }),
  getters: {},
  actions: {
    getWordFromDictionary(query) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((response) => {
          console.log(response)
          this.word = response.data[0] // Set state to response
          this.response = response
        })
        .catch((error) => {
          console.log(error.response)
          this.response = error.response // Set state to response
        })
    },
  },
})
