export interface User {
  id: string;
  name_first: string;
  name_last: string;
  created: string;
  address_street: string;
  address_city: string;
  address_state: string;
  phone: string;
  email: string;
  initials: string;
}

export interface UserModuleState {
  users: User[];
}

function state(): UserModuleState {
  return {
    users: [],
  };
}

export default state;
