<template>
  <v-card>
    <v-card-title>
      <h3 class="headline">{{title}} Frequency</h3>
      <v-spacer/>
      <v-text-field v-model="search" append-icon="search" label="Search" single-line/>
    </v-card-title>
    <v-data-table :headers="headers" :items="frequencyList" :pagination.sync="pagination" :item-key="key" class="elevation-1" :search="search">
      <template slot="items" slot-scope="props">
        <td class="text-xs-left">{{ props.item.term }}</td>
        <td class="text-xs-center">{{ props.item.value }}</td>
      </template>
      <v-alert class="text-xs-center" slot="no-data" :value="true" color="error" icon="warning">Sorry, nothing to display here :(</v-alert>
      <v-alert class="text-xs-center" slot="no-results" :value="true" color="error" icon="warning">Your search for "{{ search }}" found no results.</v-alert>
    </v-data-table>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class WordFrequencyTable extends Vue {
  @Prop({ type: Array, required: true }) private frequencyList!: Array<{
    term: string;
    value: number;
  }>;
  @Prop({ type: String, required: true }) private title!: string;

  private search = '';
  private headers = [
    { text: this.title, value: 'term' },
    { text: 'Number of Occurences', value: 'value', align: 'center' },
  ];
  private key = 'term';
  private pagination = {
    sortBy: 'value',
    descending: true,
  };
}
</script>

<style scoped>
</style>
