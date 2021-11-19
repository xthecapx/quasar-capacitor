import { Module } from 'vuex';
import { StateInterface } from '../index';
import state, { UserModuleState } from './state';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const bankModule: Module<UserModuleState, StateInterface> = {
  namespaced: true,
  actions,
  getters,
  mutations,
  state,
};

export default bankModule;
