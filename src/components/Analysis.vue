<template>
  <v-container fluid grid-list-md>
    <v-textarea name="input-7-1" box label="Text" auto-grow v-model="input"></v-textarea>
    <v-layout row wrap>
      <v-flex xs12 md6 lg3>
        <Card title="Number of Words" :content="analysis.numberOfWords"/>
      </v-flex>
      <v-flex xs12 md6 lg3>
        <Card title="Number of Unique Words" :content="analysis.numberOfUniqueWords"/>
      </v-flex>
      <v-flex xs12 md6 lg3>
        <Card title="Number of Characters" :content="analysis.numberOfCharacters"/>
      </v-flex>
      <v-flex xs12 md6 lg3>
        <Card title="Number of Sentences" :content="analysis.numberOfSentences"/>
      </v-flex>

      <v-flex xs12 md6 lg4>
        <Card title="Average Number of Characters per Word" :content="analysis.averageNumberOfCharactersPerWord"/>
      </v-flex>
      <v-flex xs12 md6 lg4>
        <Card title="Average Number of Syllables per Word" :content="analysis.averageNumberOfSyllablesPerWord"/>
      </v-flex>
      <v-flex xs12 md6 lg4>
        <Card title="Average Number of Words per Sentence" :content="analysis.averageNumberOfWordsPerSentence"/>
      </v-flex>

      <v-flex xs12 md6>
        <Card title="Lexical Diversity" :content="`${analysis.lexicalDiversity}%`" color="accent"/>
      </v-flex>
      <v-flex xs12 md6>
        <Card title="Coleman-Liau Readability Index" :content="analysis.colemanLiauIndex" color="accent"/>
      </v-flex>

      <v-flex xs12 md6>
        <WordFrequencyTable :frequencyList="analysis.wordFrequency" title="Word"/>
      </v-flex>

      <v-flex xs12 md6 v-for="(freq,n) in analysis.nGramsFrequency" :key="n">
        <WordFrequencyTable :frequencyList="freq" :title="`${n}-Gram`"/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import { ANALYSE_TEXT } from '@/store/constants/mutation-types';
import { IAnalysis } from '@/interfaces/data';
import Card from '@/components/Card.vue';
import WordFrequencyTable from '@/components/WordFrequencyTable.vue';

@Component({
  components: {
    Card,
    WordFrequencyTable,
  },
})
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
