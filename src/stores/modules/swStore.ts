import { defineStore } from "pinia";
import { ref } from "vue";
import SwDataServices from "../../services/SwDataServices";

export const swStore = defineStore("sw", () => {
  const swFilmsData = ref<any>([]);
  const swPeopleData = ref<any>([]);
  const getSwFilmData = async () => {
    return await SwDataServices.getAllFilms()
      .then((res) => {
        console.log(res.data);
        swFilmsData.value = res.data.results;
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return { swFilmsData, swPeopleData, getSwFilmData };
});
