import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import {
  HIDE_REQUEST_ERROR,
  SHOW_REQUEST_ERROR,
} from '@/store/constants/mutation-types';

@Module({ namespaced: true, name: 'ErrorModule' })
export default class ErrorModule extends VuexModule {
  public hasErroredRequest: boolean = false;
  public errorText: string = 'Oops, there has been an error...';

  @Mutation
  public [SHOW_REQUEST_ERROR](payload: { errorText: string }): void {
    this.errorText = payload.errorText;
    this.hasErroredRequest = true;
  }
  @Mutation
  public [HIDE_REQUEST_ERROR](): void {
    this.hasErroredRequest = false;
  }
}
