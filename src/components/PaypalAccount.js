import BaseComponent from './BaseComponent';

const URI_BASE = '/paypal_accounts';

export default class PaypalAccount extends BaseComponent {
  create(data) {
    return this.client.post(URI_BASE, data);
  }

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  delete(id) {
    return this.client.delete(`${URI_BASE}/${id}`);
  }

  getUsers(id) {
    return this.client.get(`${URI_BASE}/${id}/users`);
  }
}
