import { GetterTree } from 'vuex';
import { StateInterface } from '../index';
import { UserModuleState } from './state';

const getters: GetterTree<UserModuleState, StateInterface> = {
  getUsers(state) {
    return state.users;
  },
};

export default getters;
