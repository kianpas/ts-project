import { defineStore } from "pinia";

import { ref } from "vue";
import DogDataService from "@/services/DogDataService";

export const dogStore = defineStore("cat", () => {
  const dogBreedData = ref<any>([]);
  const dogBreedImageData = ref<any>([]);

  const getBreedList = async () => {
    try {
      const response = await DogDataService.getBreedList();
      dogBreedData.value = Object.keys(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const getBreedImage = async () => {
    try {
      const response = await DogDataService.getBreedImage("");
      dogBreedData.value = Object.keys(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    dogBreedData,
    getBreedList,
  };
});
