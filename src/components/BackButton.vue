<template>
  <v-btn :style="{'bottom': '50px'}" class="hidden-xs-only" color="primary" dark fab fixed bottom left @click="onBackPageClick()">
    <v-icon :style="{'height': 'auto'}">chevron_left</v-icon>
  </v-btn>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class BackButton extends Vue {
  private onBackPageClick(): void {
    this.$router.go(-1);
  }
}
</script>

<style scoped>
</style>
