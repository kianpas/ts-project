<template>
  <div class="text-h2 mb-10">개 종류</div>
  <v-text-field
    v-model="searchWord"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  ></v-text-field>
  <v-row class="ma-0">
    <v-list>
      <v-list-subheader>종류</v-list-subheader>
      <router-link :to="'/breeds/' + selectedBreed">
        <v-list-item
          v-for="(item, i) in searchResult"
          :key="i"
          :value="item"
          active-color="primary"
          @click="detailView(item, i)"
        >
          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
    <router-view name="photo"></router-view>
    <!-- <PreviewBreedCard
      v-for="(breedData, idx) in searchResult"
      :key="idx"
      :breed="breedData"
    ></PreviewBreedCard> -->
  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { dogStore } from "@/stores/dogStore.js";
import PreviewBreedCard from "@components/card/PreviewBreedCard.vue";

const store = dogStore();
const searchWord = ref("");
const selectedBreed = ref("");

const detailView = (item: string, i: number) => {
  selectedBreed.value = item + "/testpage";
  console.log(selectedBreed.value);
};

const catBreedData = computed(() => {
  return store.dogBreedData;
});

const searchResult = computed(() => {
  return store.dogBreedData.filter((data: any) =>
    data.includes(searchWord.value)
  );
});

onMounted(() => {
  store.getBreedList();
});
</script>

<style></style>
