<template>
  <v-container fluid grid-list-md>
    <v-textarea name="input-7-1" box label="NLP" auto-grow v-model="input"></v-textarea>
    <p>{{analysis}}</p>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ANALYSE_TEXT } from '@/store/constants/mutation-types';
import { IAnalysis } from '@/interfaces/data';

@Component
export default class Analysis extends Vue {
  @(namespace('NlpModule').State('analysis')) private analysis!: IAnalysis;
  @(namespace('NlpModule').Mutation(ANALYSE_TEXT))
  private analyseText!: (payload: { text: string }) => void;

  get input(): string {
    return '';
  }
  set input(text) {
    this.analyseText({ text });
  }
}
</script>

<style scoped>
</style>
