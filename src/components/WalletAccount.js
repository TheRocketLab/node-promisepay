import BaseComponent from './BaseComponent';

const URI_BASE = '/wallet_accounts';

export default class PaypalAccount extends BaseComponent {

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  withdraw(id, { account_id, amount }) {
    return this.client.post(`${URI_BASE}/${id}/withdraw`, { account_id, amount });
  }

  deposit(id, { account_id, amount }) {
    return this.client.post(`${URI_BASE}/${id}/deposit`, { account_id, amount });
  }

  getUser(id) {
    return this.client.get(`${URI_BASE}/${id}/users`);
  }
}
