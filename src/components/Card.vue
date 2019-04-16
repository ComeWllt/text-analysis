<template>
  <v-card :color="color" dark>
    <v-card-title>
      <span class="title font-weight-light">{{title}}</span>
    </v-card-title>
    <v-card-text class="headline font-weight-bold">{{content}}</v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop({ type: String, required: true }) private title!: string;
  @Prop({ type: [Number, String], required: true }) private content!:
    | number
    | string;
  @Prop({ type: String, default: 'secondary' }) private color!: string;
}
</script>

<style scoped>
</style>
