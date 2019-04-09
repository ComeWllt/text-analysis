import Vue from 'vue';
import Vuex from 'vuex';
import { getModule } from 'vuex-module-decorators';

import ErrorModule from '@/store/modules/ErrorModule';
import ExampleModule from '@/store/modules/ExampleModule';

Vue.use(Vuex);

interface IStore {
  ErrorModule: ErrorModule;
  ExampleModule: ExampleModule;
}

const store = new Vuex.Store<IStore>({
  mutations: {},
  actions: {},
  modules: {
    ErrorModule,
    ExampleModule,
  },
});

export default store;

// Vuex modules and store must be linked for actions to work properly.
getModule(ErrorModule, store);
getModule(ExampleModule, store);
