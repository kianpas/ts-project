import { defineStore } from "pinia";

import { ref } from "vue";
import CatFactService from "@/services/CatFactService";

export const catStore = defineStore("cat", () => {
  const catBreedData = ref<any>([]);

  const getCatBreed = async () => {
    try {
      const response = await CatFactService.getBreeds();
      catBreedData.value = response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    catBreedData,
    getCatBreed,
  };
});
