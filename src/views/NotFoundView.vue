<template>
  <v-container fluid grid-list-lg fill-height>
    <v-layout align-center justify-center column fill-height>
      <span class="text-md-center headline">Oops! Page not found</span>
      <br>
      <v-btn color="secondary" @click="onRouteClick('')">Go to Home Page</v-btn>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class NotFoundView extends Vue {
  private onRouteClick(route: string): void {
    this.$router.push(`/${route}`);
  }
}
</script>

<style scoped>
</style>
