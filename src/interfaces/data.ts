export interface IAnalysis {
  numberOfWords: number;
  numberOfUniqueWords: number;
  averageNumberOfSyllablesPerWord: number;
  averageNumberOfCharactersPerWord: number;
  numberOfCharacters: number;
  numberOfSentences: number;
  averageNumberOfWordsPerSentence: number;
  colemanLiauIndex: number;
  lexicalDiversity: number;
  sentimentScore: number;
  wordFrequency: Array<{ term: string; value: number }>;
  nGramsFrequency: { [n: number]: Array<{ term: string; value: number }> };
}
