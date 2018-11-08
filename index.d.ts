import request = require('request-promise');
import Requester from './src/Requester';

export interface Config {

}

type Response = request.RequestPromise;

export class Requester<Config> {
  request(uri, params, method): Response;
  post(uri, params): Response;
  get(uri, params): Response;
  patch(uri, params): Response;
  delete(uri): Response;
  log(message): void;
}

export class Http<Requester> {
  create(data): Response;
  list(data): Response;
  get(id: string): Response;
  update(data, id: string): Response;
}

export class User<Requester> extends Http {
  getBankAccount(id: string): Response;
  getCardAccount(id: string): Response;
  getPaypalAccount(id: string): Response;
  getWalletAccount(id: string): Response;
  setDisbursementAccount(id: string, accountId: string): Response;
  listItems(id: string): Response;
};

export type Company = Http<Requester>

export interface Promisepay {
  users: User<request.RequestPromise>;
  companies: Company<request.RequestPromise>;
}

declare module 'node-promisepay' {
  export default function (config: Config) : Promisepay;
};
