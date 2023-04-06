import { defineStore } from "pinia";
import Films from "types/Film";
import { ref } from "vue";
import SwDataServices from "../services/SwDataServices";

export const swStore = defineStore("sw", () => {
  const swFilmsData = ref<Films[]>([]);
  const swPeopleData = ref<any>([]);
  const swStarshipData = ref<any>([]);

  const getSwFilm = async () => {
    try {
      const response = await SwDataServices.getAllFilms();
      console.log(response);
      swFilmsData.value = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };
  const getSwPeople = async () => {
    try {
      const response = await SwDataServices.getAllPeople();
      swPeopleData.value = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };
  const getSwStarship = async () => {
    try {
      const response = await SwDataServices.getAllStarShips();
      swStarshipData.value = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  return {
    swFilmsData,
    swPeopleData,
    swStarshipData,
    getSwFilm,
    getSwPeople,
    getSwStarship,
  };
});
