import User from './components/User';
import Company from './components/Company';
import BankAccount from './components/BankAccount';
import CardAccount from './components/CardAccount';
import PaypalAccount from './components/PaypalAccount';
import WalletAccount from './components/WalletAccount';
import Charge from './components/Charge';
import Item from './components/Item';
import ItemAction from './components/ItemAction';
import MarketPlace from './components/MarketPlace';
import Transaction from './components/Transaction';
import BatchTransaction from './components/BatchTransaction';
import DirectDebitAuthority from './components/DirectDebitAuthority';
import Fee from './components/Fee';
import Callback from './components/Callback';
import Tool from './components/Tool';
import Token from './components/Token';
import Requester from './Requester';

export default function instance(config) {
  if (!config.userName) {
    throw new Error('PromisePay requires a userName');
  }

  const requester = new Requester(config);

  return {
    users: new User(requester),
    companies: new Company(requester),
    bankAccounts: new BankAccount(requester),
    cardAccounts: new CardAccount(requester),
    paypalAccounts: new PaypalAccount(requester),
    walletAccounts: new WalletAccount(requester),
    directDebitAuthority: new DirectDebitAuthority(requester),
    fees: new Fee(requester),
    items: new Item(requester),
    itemActions: new ItemAction(requester),
    charges: new Charge(requester),
    marketPlaces: new MarketPlace(requester),
    transactions: new Transaction(requester),
    batchTransactions: new BatchTransaction(requester),
    callbacks: new Callback(requester),
    tools: new Tool(requester),
    tokens: new Token(requester),
  };
}
