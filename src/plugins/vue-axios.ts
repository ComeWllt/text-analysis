import Vue from 'vue';
import { getModule } from 'vuex-module-decorators';
import axios, { AxiosError } from 'axios';
import VueAxios from 'vue-axios';
import {
  SHOW_REQUEST_ERROR,
} from '@/store/constants/mutation-types';
import ErrorModule from '@/store/modules/ErrorModule';

Vue.use(VueAxios, axios);

Vue.axios.interceptors.response.use(
  response => response,
  (error: AxiosError) => {
    const errorModule = getModule(ErrorModule);
    if (!error.response) {
      errorModule[SHOW_REQUEST_ERROR]({
        errorText: 'Oops, there has been an error...',
      });
      return Promise.reject(error);
    }
    switch (error.response.status) {
      default:
        errorModule[SHOW_REQUEST_ERROR]({
          errorText: 'Oops, there has been an error...',
        });
        return Promise.reject(error);
    }
  }
);
