export interface IAnalysis {
  numberOfWords: number;
  numberOfUniqueWords: number;
  averageNumberOfSyllablesPerWord: number;
  averageNumberOfCharactersPerWord: number;
  numberOfCharacters: number;
  numberOfSentences: number;
  wordsPerSentence: number[];
  averageNumberOfWordsPerSentence: number;
  colemanLiauIndex: number;
  lexicalDiversity: number;
  sentimentScore: number;
  wordFrequency: Array<Array<string | number>>;
  nGramsFrequency: { [n: number]: Array<Array<string | number>> };
}
