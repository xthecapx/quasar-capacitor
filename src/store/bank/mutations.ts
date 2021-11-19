import { MutationTree } from 'vuex';
import { Account, BankModuleState, Transactions } from './state';

const mutation: MutationTree<BankModuleState> = {
  updateTransactions(state, transactions: Transactions[]) {
    console.log(transactions);
    state.transactions = transactions;
  },
  updateAccounts(state, accounts: Account[]) {
    console.log(accounts);
    state.accounts = accounts;
  },
};

export default mutation;
