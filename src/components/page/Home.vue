<template>
  <div class="text-h2 mb-10">홈</div>
  <v-row class="ma-0" justify="center">
    <v-col cols="12" align-self="center">
      <v-carousel cycle height="200" hide-delimiters show-arrows="hover">
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">{{ slide }} Slide</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-col>
  </v-row>
  <v-row class="ma-0">
    <v-col cols="12" align-self="center">
      <div class="text-h4 my-5">영화 목록</div>
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-group-item>
          <PreviewCard
            v-for="(filmData, idx) in swFilmsData"
            :key="idx"
            :title="filmData.title"
            :director="filmData.director"
          ></PreviewCard>
        </v-slide-group-item>
      </v-slide-group>
    </v-col>
  </v-row>
  <v-row class="ma-0">
    <v-col cols="12" align-self="center">
      <div class="text-h4 my-5">인기 리스트</div>
      <v-slide-group class="pa-4" show-arrows>
        <v-slide-group-item>
          <PreviewPeopleCard
            v-for="(peopleData, idx) in swPeopleData"
            :key="idx"
            :name="peopleData.name"
          ></PreviewPeopleCard>
        </v-slide-group-item>
      </v-slide-group>
    </v-col>
  </v-row>
  <TestCard></TestCard>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import PreviewCard from "../card/PreviewCard.vue";
import PreviewPeopleCard from "../card/PreviewPeopleCard.vue";
import TestCard from "../card/TestCard.vue";
import SwDataServices from "../../services/SwDataServices";

const swFilmsData = ref<any>([]);
const swPeopleData = ref<any>([]);

const slides = ref<Array<string>>([
  "First",
  "Second",
  "Third",
  "Fourth",
  "Fifth",
]);
const colors = ref<Array<string>>([
  "indigo",
  "warning",
  "pink darken-2",
  "red lighten-1",
  "deep-purple accent-4",
]);
const length = ref<number>(3);
const onboarding = ref<number>(0);

const getSwFilmData = async () => {
  await SwDataServices.getAllFilms()
    .then((res) => {
      console.log(res.data);
      console.log(res.data.results);
      swFilmsData.value = res.data.results;
    })
    .catch((e) => {
      console.log(e);
    });
};

const getSwPeopleData = async () => {
  await SwDataServices.getAllPeople()
    .then((res) => {
      console.log(res.data);
      console.log(res.data.results);
      swPeopleData.value = res.data.results;
    })
    .catch((e) => {
      console.log(e);
    });
};

onMounted(() => {
  getSwFilmData();
  getSwPeopleData();
});
</script>

<style scoped></style>
