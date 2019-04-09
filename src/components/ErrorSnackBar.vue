<template>
  <v-snackbar v-model="error" :timeout="timeout" color="error">
    {{ errorText }}
    <v-btn dark flat @click="error=false">Close</v-btn>
  </v-snackbar>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { namespace } from 'vuex-class';
import {
  HIDE_REQUEST_ERROR,
  SHOW_REQUEST_ERROR,
} from '@/store/constants/mutation-types';

@Component
export default class ErrorSnackBar extends Vue {
  private timeout: number = 15000;

  @namespace('ErrorModule').State('errorText')
  private errorText!: string;
  @namespace('ErrorModule').State('hasErroredRequest')
  private hasErroredRequest!: boolean;

  @namespace('ErrorModule').Mutation(HIDE_REQUEST_ERROR)
  private hideRequestError!: () => void;

  get error(): boolean {
    return this.hasErroredRequest;
  }
  // a setter is required because v-snackbar tries to change the value after the timeout
  set error(error: boolean) {
    this.hideRequestError();
  }
}
</script>

<style scoped>
</style>
