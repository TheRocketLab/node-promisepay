import BaseComponent from './BaseComponent';

const URI_BASE = '/card_accounts';

export default class CardAccount extends BaseComponent {
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
