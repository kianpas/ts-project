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
          <!-- <template v-slot:prepend>
          <v-icon :icon="item.icon"></v-icon>
        </template> -->

          <v-list-item-title v-text="item"></v-list-item-title>
        </v-list-item>
      </router-link>
    </v-list>
  </v-row>
  <v-col cols="6" v-if="isLoading">
    <v-progress-linear
      color="deep-purple-accent-4"
      indeterminate
      rounded
      height="6"
    ></v-progress-linear>
  </v-col>
  <router-view v-else></router-view>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { dogStore } from "@/stores/dogStore.js";
import PreviewBreedCard from "@components/card/PreviewBreedCard.vue";

const store = dogStore();
const searchWord = ref("");
const selectedBreed = ref("");
const isLoading = ref(false);

const detailView = (item: string, i: number) => {
  isLoading.value = true;
  selectedBreed.value = item;
  console.log("selected Breed : " + selectedBreed.value);
  console.log("before : " + isLoading.value);
  store.getBreedImage(selectedBreed.value);
  isLoading.value = false;
  console.log("after : " + isLoading.value);
};

// const dogImageData = computed(() => {
//   return store.dogBreedImageData;
// });

const searchResult = computed(() => {
  return store.dogBreedData.filter((data: any) =>
    data.includes(searchWord.value)
  );
});

onMounted(() => {
  // store.getBreedList();
});
</script>

<style></style>
