<template>
  <p>{{text}}</p>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';

@Component
export default class ExampleComponent extends Vue {
  @namespace('ExampleModule').State('exampleText') private text!: string;
}
</script>

<style scoped>
</style>
