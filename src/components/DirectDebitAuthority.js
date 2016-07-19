import BaseComponent from './BaseComponent';

const URI_BASE = '/direct_debit_authorities';

export default class DirectDebitAuthority extends BaseComponent {
  create({ account_id, amount }) {
    return this.client.post(`${URI_BASE}`, { account_id, amount });
  }

  list({ limit, offset, account_id }) {
    return this.client.get(`${URI_BASE}`, { limit, offset, account_id });
  }

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  delete(id) {
    return this.client.delete(`${URI_BASE}/${id}`);
  }
}
