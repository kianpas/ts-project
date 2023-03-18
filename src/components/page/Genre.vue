<template>
  <div class="text-h2 mb-10">장르</div>
  <v-text-field
    v-model="searchWord"
    append-icon="mdi-magnify"
    label="Search"
    single-line
    hide-details
  ></v-text-field>
  <v-row class="ma-0">
    <PreviewCard
      v-for="(dummyData, idx) in searchResult"
      :key="dummyData.id"
      :idx="idx"
      :id="dummyData.id"
      :title="dummyData.title"
    ></PreviewCard>
  </v-row>
</template>

<script>
import axios from "axios";
import PreviewCard from "../card/PreviewCard.vue";
export default {
  components: { PreviewCard },
  data() {
    return {
      dummyData: [],
      searchWord: "",
    };
  },
  methods: {
    async getDummyData() {
      await axios
        .get("https://api.tvmaze.com/shows?page=1")
        .then((res) => {
          this.dummyData = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    searchResult() {
      return this.dummyData.filter((data) =>
        data.name.includes(this.searchWord)
      );
    },
  },
  mounted() {
    this.getDummyData();
  },
};
</script>
