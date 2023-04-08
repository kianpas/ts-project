<template>
  <div class="text-h2 mb-10">둘러보기</div>
  <v-text-field
    v-model="searchWords"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  ></v-text-field>
  <v-row class="ma-0">
    <!-- <PreviewCard></PreviewCard> -->
  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import PreviewCard from "../card/PreviewCard.vue";
const searchWords = ref("");
// export default {
//   components: { PreviewCard },
//   data() {
//     return {
//       dummyData: [],
//       searchWord: "",
//     };
//   },
//   methods: {
//     async getDummyData() {
//       await axios
//         .get("https://api.tvmaze.com/shows?page=1")
//         .then((res) => {
//           console.log(res.data);
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
