<template>
  <v-footer color="primary" dark class="pa-3" app>
    <span>
      &copy; {{ year }} -
      <strong>Côme Willot</strong>
    </span>
  </v-footer>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';

@Component
export default class TheFooter extends Vue {
  private year = new Date().getFullYear();
}
</script>

<style scoped>
</style>
