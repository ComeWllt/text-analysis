import { Module, VuexModule } from 'vuex-module-decorators';

@Module({ namespaced: true, name: 'ExampleModule' })
export default class ExampleModule extends VuexModule {
  public exampleText: string = 'Hello World!';
}
