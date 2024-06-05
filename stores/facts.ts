import { defineStore } from 'pinia';

export const useFactsStore = defineStore('facts', {
  state: () => ({
    facts: [],
    loaded: false
  }),
  actions: {
    async loadFacts() {
      if (!this.loaded) {
        const response = await fetch('/api/facts');
        const data = await response.json();
        this.facts = data;
        this.loaded = true;
      }
    },
    getRandomFact() {
      const randomIndex = Math.floor(Math.random() * this.facts.length);
      const randomFact = this.facts[randomIndex];
      return randomFact;
    },
  },
})
