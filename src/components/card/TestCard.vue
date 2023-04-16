<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800">
    <img :src="dogImageData" alt="" />
    <h1>{{ props.name }}</h1>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { dogStore } from "@/stores/dogStore.js";

const props = defineProps<{
  name: string;
}>();

const store = dogStore();
const dogName = ref("");

const dogImageData = computed(() => {
  return store.dogBreedImageData;
});
</script>
