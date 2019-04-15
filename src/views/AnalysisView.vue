<template>
  <v-container fluid grid-list-lg text-md-center>
    <v-layout row wrap>
      <v-flex xs12>
        <Analysis/>
      </v-flex>
    </v-layout>
    <BackButton/>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BackButton from '@/components/BackButton.vue';
import Analysis from '@/components/Analysis.vue';

@Component({
  components: {
    BackButton,
    Analysis,
  },
})
export default class AnalysisView extends Vue {}
</script>

<style scoped>
</style>
