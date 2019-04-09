import { expect } from 'chai';
import { getModule } from 'vuex-module-decorators';
import store from '@/store/index';
import {
  SHOW_REQUEST_ERROR,
  HIDE_REQUEST_ERROR,
} from '@/store/constants/mutation-types';
import ErrorModule from '@/store/modules/ErrorModule';
const errorModule = getModule(ErrorModule, store);

describe('mutations', () => {
  describe('error module', () => {
    it('should show request error', () => {
      const payload = {
        errorText: 'Hi, I am the new error',
      };
      errorModule[SHOW_REQUEST_ERROR](payload);
      expect(errorModule.hasErroredRequest).to.equal(true) &&
        expect(errorModule.errorText).to.equal(payload.errorText);
    });
    it('should hide request error', () => {
      errorModule[HIDE_REQUEST_ERROR]();
      expect(errorModule.hasErroredRequest).to.equal(false);
    });
  });
});
