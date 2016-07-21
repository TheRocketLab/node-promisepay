import BaseComponent from './BaseComponent';

const URI_BASE = '/addresses';

export default class Charge extends BaseComponent {
  create(data) {
    return this.client.post(URI_BASE, data);
  }

  list({ limit, offset }) {
    return this.client.get(URI_BASE, { limit, offset });
  }

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  getBuyer(id) {
    return this.client.get(`${URI_BASE}/${id}/buyers`);
  }

  getStatus(id) {
    return this.client.get(`${URI_BASE}/${id}/status`);
  }
}
