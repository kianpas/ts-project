<template>
  <v-card class="mx-1 my-3" max-width="300">
    <v-img
      class="align-end text-white"
      height="200"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      cover
    >
      <v-card-title>{{ props.name }}</v-card-title>
    </v-img>
    <v-card-subtitle class="pt-4"> {{ props.name }} </v-card-subtitle>
    <v-card-text>
      <div>Whitehaven Beach</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange"> Share </v-btn>
      <v-btn color="orange"> Explore </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
</script>
