import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { ANALYSE_TEXT } from '@/store/constants/mutation-types';
import TextAnalyser from '@/nlp/TextAnalyser';
import { IAnalysis } from '@/interfaces/data';

@Module({ namespaced: true, name: 'NlpModule' })
export default class NlpModule extends VuexModule {
  public analysis: IAnalysis = {
    numberOfWords: 0,
    numberOfUniqueWords: 0,
    averageNumberOfSyllablesPerWord: 0,
    averageNumberOfCharactersPerWord: 0,
    numberOfCharacters: 0,
    numberOfSentences: 0,
    averageNumberOfWordsPerSentence: 0,
    colemanLiauIndex: 0,
    lexicalDiversity: 0,
    sentimentScore: 0,
    wordFrequency: [],
    nGramsFrequency: {},
  };

  @Mutation
  public [ANALYSE_TEXT](payload: { text: string }): void {
    this.analysis = TextAnalyser.analyse(payload.text);
  }
}
