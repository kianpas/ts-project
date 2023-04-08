<template>
  <div class="text-h2 mb-10">고양이 종류</div>
  <!-- <v-text-field
    v-model="searchWord"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  ></v-text-field> -->
  <v-row class="ma-0">
    <PreviewBreedCard
      v-for="(breedData, idx) in catBreedData"
      :key="idx"
      :breed="breedData.breed"
      :country="breedData.country"
    ></PreviewBreedCard>
  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { catStore } from "@/stores/catStore";
import PreviewBreedCard from "@components/card/PreviewBreedCard.vue";

const store = catStore();

const catBreedData = computed(() => {
  console.log(catBreedData);

  return store.catBreedData;
});

onMounted(() => {
  store.getCatBreed();
});
</script>
