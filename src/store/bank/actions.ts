import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { BankModuleState } from './state';
import transactions from '../api/transactions.json';
import account from '../api/account.json';

const actions: ActionTree<BankModuleState, StateInterface> = {
  fetchTransactions({ commit }) {
    commit('updateTransactions', transactions);
  },
  fetchAccounts({ commit }) {
    commit('updateAccounts', account);
  },
};

export default actions;
