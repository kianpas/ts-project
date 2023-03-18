<template>
  <v-navigation-drawer v-model="drawer">
    <v-sheet color="grey-lighten-4" class="pa-4">
      <!-- <v-avatar class="mb-4" color="grey-darken-1" size="64"></v-avatar>

      <div>john@google.com</div> -->
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item>
        <template>
          <!-- <v-icon>{{ icon }}</v-icon> -->
        </template>

        <v-list><router-link to="/">홈</router-link></v-list>
        <v-list><router-link to="/browse">둘러보기</router-link></v-list>
        <!-- <v-list><router-link to="/genre">장르</router-link></v-list> -->
        <!-- <v-list><router-link to="/actors">배우</router-link></v-list> -->
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref<any>(null);
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
