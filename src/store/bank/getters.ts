import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { BankModuleState } from './state';

const getters: GetterTree<BankModuleState, StateInterface> = {
  getTransactions(state) {
    return state.transactions;
  },
  getAccounts(state) {
    return state.accounts;
  },
};

export default getters;
