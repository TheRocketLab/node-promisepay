import BaseComponent from './BaseComponent';

const URI_BASE = '/users';

export default class User extends BaseComponent {
  // @see https://reference.promisepay.com/#create-user
  create(data) {
    return this.client.post(URI_BASE, data);
  }

  // @see https://reference.promisepay.com/#list-users
  list({ limit, offset, search }) {
    return this.client.get(URI_BASE, { limit, offset, search });
  }

  // @see https://reference.promisepay.com/#show-user
  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  // @see https://reference.promisepay.com/#update-user
  update(id, data) {
    return this.client.patch(`${URI_BASE}/${id}`, data);
  }

  // @see https://reference.promisepay.com/#show-user-bank-account
  getBankAccount(id) {
    return this.client.get(`${URI_BASE}/${id}/bank_accounts`);
  }

  // @see https://reference.promisepay.com/#show-user-card-account
  getCardAccount(id) {
    return this.client.get(`${URI_BASE}/${id}/card_accounts`);
  }

  // @see https://reference.promisepay.com/#show-user-paypal-account
  getPaypalAccount(id) {
    return this.client.get(`${URI_BASE}/${id}/paypal_accounts`);
  }

  // @see https://reference.promisepay.com/#show-user-wallet-account
  getWalletAccount(id) {
    return this.client.get(`${URI_BASE}/${id}/wallet_accounts`);
  }

  // @see https://reference.promisepay.com/#set-user-disbursement-account
  setDisbursementAccount(id, accountId) {
    return this.client.patch(`${URI_BASE}/${id}/disbursement_account`, { account_id: accountId });
  }

  // @see https://reference.promisepay.com/#list-user-items
  listItems(id) {
    return this.client.get(`${URI_BASE}/${id}/items`);
  }
}
