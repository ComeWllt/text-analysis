import Vue from 'vue';
import Vuex from 'vuex';
import { getModule } from 'vuex-module-decorators';

import ErrorModule from '@/store/modules/ErrorModule';
import NlpModule from '@/store/modules/NlpModule';

Vue.use(Vuex);

interface IStore {
  ErrorModule: ErrorModule;
  NlpModule: NlpModule;
}

const store = new Vuex.Store<IStore>({
  mutations: {},
  actions: {},
  modules: {
    ErrorModule,
    NlpModule,
  },
});

export default store;

// Vuex modules and store must be linked for actions to work properly.
getModule(ErrorModule, store);
getModule(NlpModule, store);
