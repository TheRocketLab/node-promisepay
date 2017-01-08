import BaseComponent from './BaseComponent';

const URI_BASE = '/transactions';

export default class Transaction extends BaseComponent {

  list({ limit, offset, account_id, item_id, transaction_type, transaction_type_method, direction }) {
    return this.client.get(URI_BASE, {
      limit, offset, account_id, item_id, transaction_type, transaction_type_method, direction,
    });
  }

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  getUser(id) {
    return this.client.get(`${URI_BASE}/${id}/users`);
  }

  getFees(id) {
    return this.client.get(`${URI_BASE}/${id}/fees`);
  }

  getWalletAccount(id) {
    return this.client.get(`${URI_BASE}/${id}/wallet_accounts`);
  }

  getBankAccount(id) {
    return this.client.get(`${URI_BASE}/${id}/bank_accounts`);
  }

  getCardAccount(id) {
    return this.client.get(`${URI_BASE}/${id}/card_accounts`);
  }

  getPaypalAccount(id) {
    return this.client.get(`${URI_BASE}/${id}/paypal_accounts`);
  }

  getItems(id) {
    return this.client.get(`${URI_BASE}/${id}/items`);
  }
}
