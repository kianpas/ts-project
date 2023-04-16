import { defineStore } from "pinia";

import { ref } from "vue";
import DogDataService from "@/services/DogDataService";

export const dogStore = defineStore("dog", () => {
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

  const getBreedImage = async (breed: string) => {
    try {
      const response = await DogDataService.getBreedImage(breed);
      dogBreedImageData.value = response.data.message;
      console.log(dogBreedImageData.value);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    dogBreedData,
    getBreedList,
    dogBreedImageData,
    getBreedImage,
  };
});
