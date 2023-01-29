import { defineStore } from "pinia"
import axios from "axios"

export const useWordStore = defineStore("word", {
  state: () => ({
    response: null,
    query: null,
  }),
  getters: {},
  actions: {
    getWordFromDictionary(query) {
      axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((response) => {
          // console.log(response)
          this.response = response // Set state to response
        })
        .catch((error) => {
          // console.log(error.response)
          this.response = error.response // Set state to response
        })
    },
  },
})
