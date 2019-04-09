<template>
  <v-container fluid grid-list-lg text-md-center>
    <v-layout row wrap>
      <v-flex xs12>
        <ExampleComponent/>
      </v-flex>
    </v-layout>
    <BackButton/>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BackButton from '@/components/BackButton.vue';
import ExampleComponent from '@/components/examples/ExampleComponent.vue';

@Component({
  components: {
    BackButton,
    ExampleComponent,
  },
})
export default class ExampleView extends Vue {}
</script>

<style scoped>
</style>
