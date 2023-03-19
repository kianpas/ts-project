<template>
  <v-sheet class="mx-auto" elevation="8" max-width="800">
    <v-slide-group class="pa-4" show-arrows>
      <v-slide-group-item v-for="n in 15" :key="n">
        <v-card
          color="grey-lighten-1"
          :class="['ma-4']"
          height="200"
          width="100"
        >
          <div class="d-flex fill-height align-center justify-center"></div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>

<script setup lang="ts">
import { ref } from "vue";
const model = ref<any>(null);
</script>
