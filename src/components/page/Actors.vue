<template>
  <div class="text-h2 mb-10">배우</div>
  <v-text-field
    v-model="searchWords"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  ></v-text-field>
  <v-row class="ma-0">
    <!-- <PreviewCardActors
      v-for="(dummyData, idx) in searchResult"
      :key="dummyData.id"
      :idx="idx"
      :id="dummyData.id"
      :name="dummyData.name"
      :image="dummyData.image"
    ></PreviewCardActors> -->
  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
const searchWords = ref("");
// import PreviewCardActors from "../card/PreviewCardActor.vue";
// export default {
//   components: { PreviewCardActors },
//   data() {
//     return {
//       dummyData: [],
//       searchWord: "",
//     };
//   },
//   methods: {
//     async getDummyData() {
//       await axios
//         .get("https://api.tvmaze.com/people?page=1")
//         .then((res) => {
//           this.dummyData = res.data;
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     },
//   },
//   computed: {
//     searchResult() {
//       return this.dummyData.filter((data) =>
//         data.name.includes(this.searchWord)
//       );
//     },
//   },
//   mounted() {
//     this.getDummyData();
//   },
// };
</script>
