import BaseComponent from './BaseComponent';

const URI_BASE = '/fees';

export default class Fee extends BaseComponent {
  create({ name, fee_type_id, amount, cap, min, max, to }) {
    return this.client.post(`${URI_BASE}`, { name, fee_type_id, amount, cap, min, max, to });
  }

  list({ limit, offset }) {
    return this.client.get(`${URI_BASE}`, { limit, offset });
  }

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }
}
