import natural from 'natural';
import stopword from 'stopword';
import contractions from 'contractions';
import { IAnalysis } from '@/interfaces/data';

export default class TextAnalyser {
  public static analyse(text: string): IAnalysis {
    const tokens = this.tokenize(text);
    const sentenceTokens = this.sentenceTokenize(text);
    const numberOfWords = tokens.length;
    const numberOfUniqueWords = this.getUniqueElementsOfArray(tokens).length;
    const averageNumberOfSyllablesPerWord = this.computeAverageNumberOfSyllablesPerWord(
      tokens
    );
    const numberOfCharacters = tokens.join('').length;
    const averageNumberOfCharactersPerWord = numberOfCharacters / numberOfWords;
    const numberOfSentences = sentenceTokens.length;
    const wordsPerSentence = this.countWordsPerSentence(sentenceTokens);
    const averageNumberOfWordsPerSentence =
      wordsPerSentence.reduce((a, b) => a + b) / wordsPerSentence.length;
    const colemanLiauIndex = this.getColemanLiau(
      numberOfCharacters,
      numberOfWords,
      numberOfSentences
    );
    const lexicalDiversity = this.getLexicalDiversity(tokens);
    // const sentimentScore = this.getSentimentScore(tokens);
    const sentimentScore = 0;
    const wordFrequency = this.getFrequency(tokens);
    const nGramsFrequency: {
      [n: number]: Array<{ term: string; value: number }>;
    } = {};
    for (let i = 2; i < 10; i += 1) {
      const nGrams = this.getNGrams(tokens, i);
      const frequency = this.getFrequency(nGrams);
      if (frequency.length > 0) {
        nGramsFrequency[i] = frequency;
      }
    }
    return {
      numberOfWords,
      numberOfUniqueWords,
      averageNumberOfSyllablesPerWord:
        Math.round(averageNumberOfSyllablesPerWord * 10) / 10,
      averageNumberOfCharactersPerWord:
        Math.round(averageNumberOfCharactersPerWord * 10) / 10,
      numberOfCharacters,
      numberOfSentences,
      averageNumberOfWordsPerSentence:
        Math.round(averageNumberOfWordsPerSentence * 10) / 10,
      colemanLiauIndex: Math.round(colemanLiauIndex * 10) / 10,
      lexicalDiversity: Math.round(lexicalDiversity * 100),
      sentimentScore,
      wordFrequency,
      nGramsFrequency,
    };
  }

  public static tokenize(text: string): string[] {
    const normalisedText = contractions.expand(
      text.toLowerCase().replace(/’/g, "'")
    );
    return this.tokenizer.tokenize(normalisedText);
  }

  public static punctTokenize(text: string): string[] {
    return this.punctTokenizer.tokenize(text.toLowerCase());
  }

  public static sentenceTokenize(text: string): string[] {
    return this.sentenceTokenizer.tokenize(text.toLowerCase() + ' ');
  }

  public static countSyllables(word: string): number {
    word = word.toLowerCase();
    if (word.length <= 3) {
      return 1;
    }
    word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
    word = word.replace(/^y/, '');
    const count = (word.match(/[aeiouy]{1,2}/g) || '').length;
    if (word[word.length - 1] === 'e') {
      return count - 1;
    }
    return count;
  }

  public static countWords(text: string): number {
    return this.tokenize(text).length;
  }

  public static getUniqueElementsOfArray(array: string[]): string[] {
    return array.filter((v, i, a) => a.indexOf(v) === i);
  }

  public static countWordsPerSentence(sentenceTokens: string[]): number[] {
    const count = sentenceTokens.map(sentence => this.countWords(sentence));
    return count;
  }

  public static computeAverageNumberOfSyllablesPerWord(
    tokens: string[]
  ): number {
    const numberOfSyllables = tokens.map(token => this.countSyllables(token));
    const averageNumberOfSyllables =
      numberOfSyllables.reduce((a, b) => a + b) / numberOfSyllables.length;
    return averageNumberOfSyllables;
  }

  public static getNGrams(tokens: string[], n: number): string[] {
    const NGrams = natural.NGrams;
    const arrayNgrams = NGrams.ngrams(tokens, n);
    const stringNGrams = arrayNgrams.map(arrayNgram => arrayNgram.join(' '));
    return stringNGrams;
  }

  public static getSentimentScore(tokens: string[]): number {
    const Analyzer = (natural as any).SentimentAnalyzer;
    const stemmer = natural.PorterStemmer;
    const analyzer = new Analyzer('English', stemmer, 'senticon');
    const score = analyzer.getSentiment(tokens);
    return score;
  }

  public static getColemanLiau(
    nbOfCharachters: number,
    nbOfWords: number,
    nbOfSentences: number
  ): number {
    return (
      100 *
        (0.0588 * (nbOfCharachters / nbOfWords) -
          0.296 * (nbOfSentences / nbOfWords)) -
      15.8
    );
  }

  public static getLexicalDiversity(tokens: string[]): number {
    const stemList = tokens.map(token => natural.PorterStemmer.stem(token));
    const lexicalDiversity =
      this.getUniqueElementsOfArray(stemList).length / tokens.length;
    return lexicalDiversity;
  }

  public static getFrequency(
    tokens: string[]
  ): Array<{ term: string; value: number }> {
    const stopWords = [
      'a',
      'able',
      'about',
      'across',
      'after',
      'all',
      'almost',
      'also',
      'am',
      'among',
      'an',
      'and',
      'any',
      'are',
      'as',
      'at',
      'be',
      'because',
      'been',
      'but',
      'by',
      'can',
      'cannot',
      'could',
      'dear',
      'did',
      'do',
      'does',
      'either',
      'else',
      'ever',
      'every',
      'for',
      'from',
      'get',
      'got',
      'had',
      'has',
      'have',
      'he',
      'her',
      'hers',
      'him',
      'his',
      'how',
      'however',
      'i',
      'if',
      'in',
      'into',
      'is',
      'it',
      'its',
      'just',
      'least',
      'let',
      'like',
      'likely',
      'may',
      'me',
      'might',
      'most',
      'must',
      'my',
      'neither',
      'no',
      'nor',
      'not',
      'of',
      'off',
      'often',
      'on',
      'only',
      'or',
      'other',
      'our',
      'own',
      'rather',
      'said',
      'say',
      'says',
      'she',
      'should',
      'since',
      'so',
      'some',
      'than',
      'that',
      'the',
      'their',
      'them',
      'then',
      'there',
      'these',
      'they',
      'this',
      'tis',
      'to',
      'too',
      'twas',
      'us',
      'wants',
      'was',
      'we',
      'were',
      'what',
      'when',
      'where',
      'which',
      'while',
      'who',
      'whom',
      'why',
      'will',
      'with',
      'would',
      'yet',
      'you',
      'your',
    ];
    const tokensWithoutStopwords: string[] = stopword.removeStopwords(
      tokens,
      stopWords
    );
    const tokensWithoutStopAndShortWords = tokensWithoutStopwords.filter(
      word => word.length > 2
    );
    const counts: { [tokensWithoutStopAndShortWords: string]: number } = {};
    tokensWithoutStopAndShortWords.forEach((x: string) => {
      counts[x] = (counts[x] || 0) + 1;
    });
    const items = Object.keys(counts).map(key => ({
      term: key,
      value: counts[key],
    }));
    items.sort((first, second) => second.value - first.value);
    const sortedItemsGreaterThanOne = items.filter(s => s.value > 1);
    return sortedItemsGreaterThanOne;
  }

  private static tokenizer = new (natural as any).AggressiveTokenizerFr();
  private static punctTokenizer = new natural.WordPunctTokenizer();
  private static sentenceTokenizer = new (natural as any).SentenceTokenizer();
}
