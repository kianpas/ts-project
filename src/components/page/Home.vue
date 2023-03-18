<template>
  <div class="text-h2 mb-10">홈</div>
  <button @click="getSwData">test</button>
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
      <div class="text-h4 my-5">추천 리스트</div>
      <v-slide-group class="pa-4" selected-class="bg-success" show-arrows>
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
      <!-- <v-slide-group
        v-model="model"
        class="pa-4"
        selected-class="bg-success"
        show-arrows
      >
        <v-slide-group-item>
          <PreviewCard
            v-for="(dummyData, idx) in dummyDataHome"
            :key="dummyData.id"
            :idx="idx"
            :id="dummyData.id"
            :name="dummyData.name"
            :image="dummyData.image"
            :summary="dummyData.summary"
          ></PreviewCard>
        </v-slide-group-item>
      </v-slide-group> -->
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";
import PreviewCard from "../card/PreviewCard.vue";
import SwDataServices from "../../services/SwDataServices";

const swFilmsData = ref<any>([]);
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
const getSwData = async () => {
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

//   methods: {
//     async getDummyDataHome() {
//       await axios
//         .get("https://api.tvmaze.com/shows?page=1")
//         .then((res) => {
//           this.dummyDataHome = res.data.filter((data) => data.id <= 259);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },
//   mounted() {
//     this.getDummyDataHome();
//   },
// };
</script>

<style scoped></style>
