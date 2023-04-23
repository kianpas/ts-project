<template>
  <v-app id="inspire">
    <SystemBar></SystemBar>
    <NavDrawer></NavDrawer>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import NavDrawer from "@components/ui/NavDrawer.vue";
import SystemBar from "@components/ui/SystemBar.vue";
import { dogStore } from "@/stores/dogStore.js";
import { swStore } from "@/stores/swStore";
const storeDog = dogStore();
const storeSw = swStore();

onMounted(() => {
  storeDog.getBreedList();
  storeSw.getSwFilm();
  storeSw.getSwPeople();
  storeSw.getSwStarship();
});
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");

* {
  font-family: "Inter", sans-serif;
}
</style>
