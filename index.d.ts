import request = require('request-promise');
import Requester from './src/Requester';

export interface Config {

}

type Response = request.RequestPromise;

export interface ListArgs {
  limit: number;
  offset: number;
  search?: string;
}

export class Requester<Config> {
  request(uri, params, method): Response;
  post(uri, params): Response;
  get(uri, params): Response;
  patch(uri, params): Response;
  delete(uri): Response;
  log(message): void;
}

export interface Http<Requester> {
  create(data): Response;
  list(data: ListArgs): Response;
  get(id: string): Response;
  update(data, id: string): Response;
}

export interface User<Requester> extends Http {
  getBankAccount(id: string): Response;
  getCardAccount(id: string): Response;
  getPaypalAccount(id: string): Response;
  getWalletAccount(id: string): Response;
  setDisbursementAccount(id: string, accountId: string): Response;
  listItems(id: string): Response;
};

export interface BankAccount<Requester> extends Http {
  getUsers(id: string): Response;
  verifyRoutingNumber(number: number): Response;
}

export interface CardAccount<Requester> extends Http {
  getUsers(id: string): Response;
}

export interface PaypalAccount<Requester> extends Http {}

export interface DirectDebitAuthority<Requester> extends Http {}

interface FeeArgs {
  name: string;
  fee_type_id: string;
  amount: number;
  cap: number;
  min: number;
  max: number;
  to: string;
}
export interface Fee<Requester> extends Http {
  create(params: FeeArgs): Response;
  list(params: ListArgs): Response;
}

interface ItemUpdateArgs {
  name: string;
  amount: number;
  fee_ids: Array<string>;
  description: string;
  buyer_id: string;
  seller_id: string;
};

interface ItemListArgs extends ListArgs {
  disbursement_id: string;
}
export interface Item<Requester> extends Http {
  list(params: ItemListArgs): Response;
  update(id: string, data: ItemUpdateArgs): Response;
  deleteFees(id: string): Response;
  status(id: string): Response;
  getBuyers(id: string): Response;
  getSellers(id: string): Response;
  getFees(id: string): Response;
  getWireDetails(id: string): Response;
  getBPayDetails(id: string): Response;
  getTransactions(id: string): Response;
  getBatchTransactions(id: string): Response;
}

// Payment
interface MakePaymentArgs {
  account_id: string;
  ip_address: string;
  device_id: string;
}


interface RequestReleaseArgs {
  release_amount: number;
}

interface RequestRefundArgs {
  refund_amount: number;
  refund_message: string;
}

interface RefundArgs {
  refund_amount: number;
  refund_message: string;
}

interface RaiseDisputeArgs {
  user_id: string;
}

export interface ItemAction<Requester> extends Http {
  triggerAction(action: string, itemId: string, params: any):  Response;
  requestPayment(itemId: string): Response;
  makePayment(itemId: string, params: MakePaymentArgs): Response;
  requestRelease(itemId: string, params: RequestReleaseArgs): Response;
  requestRefund(itemId: string, params: RequestRefundArgs): Response;
  refund(itemId: string, params: RefundArgs): Response;
  declineRefund(itemId: string): Response;
  raiseDispute(itemId, params: RaiseDisputeArgs): Response;
  requestDisputeResolution(itemId: string): Response;
  resolveDispute(itemId: string): Response;
  escalateDispute(itemId: string): Response;
  acknowledgeWireTransfer(itemId: string): Response;
  revertWireTransfer(itemId: string): Response;
  cancel(itemId: string): Response;
  sendTaxInvoice(itemId: string): Response;
  requestTaxInvoice(itemId: string): Response;
}

interface WalletArgs {
  account_id: string;
  amount: number;
}

export interface WalletAccount<Requester> extends Http {
  withdraw(id: string, params: WalletArgs): Response;
  deposit(id: string, params: WalletArgs): Response;
  getUser(id: string): Response;
}

export interface Company<Requester> extends Http {}

export interface Promisepay {
  users: User<request.RequestPromise>;
  companies: Company<request.RequestPromise>;
}

declare module 'node-promisepay' {
  export default function (config: Config) : Promisepay;
};
