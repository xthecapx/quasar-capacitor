export interface Transactions {
  prop: boolean;
  id: string;
  description: string;
  amount: number;
  posted: string;
  status: string;
  direction: string;
}

export interface Account {
  id: string;
  balance: number;
  routing_number: number;
  account_number: number;
  type: string;
}

export interface BankModuleState {
  transactions: Transactions[];
  accounts: Account[];
}

function state(): BankModuleState {
  return {
    transactions: [],
    accounts: [],
  };
}

export default state;
