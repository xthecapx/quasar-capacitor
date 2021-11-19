import { ActionTree } from 'vuex';
import { StateInterface } from '../index';
import { UserModuleState } from './state';
import users from '../api/user.json';

const actions: ActionTree<UserModuleState, StateInterface> = {
  fetchUsers({ commit }) {
    commit('updateUsers', users);
  },
};

export default actions;
