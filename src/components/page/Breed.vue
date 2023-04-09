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
    <!-- <v-list>
      <v-list-item
        lines="three"
        v-for="(breedData, idx) in searchResult"
        :key="idx"
        :title="breedData"
        subtitle="..."
        ><v-divider></v-divider
      ></v-list-item>
    </v-list> -->
    <v-list>
      <v-list-subheader>종류</v-list-subheader>

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
    </v-list>
    <router-view></router-view>
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

const detailView = (item: string, i: number) => {
  console.log(item, i);
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
