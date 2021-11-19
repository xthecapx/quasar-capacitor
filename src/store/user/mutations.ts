import { MutationTree } from 'vuex';
import { UserModuleState, User } from './state';

const mutation: MutationTree<UserModuleState> = {
  updateUsers(state, users: User[]) {
    console.log(users);
    state.users = users.map((user) => ({
      ...user,
      initials: `${user.name_first.charAt(0)}${user.name_last.charAt(
        0
      )}`.toUpperCase(),
    }));
  },
};

export default mutation;
