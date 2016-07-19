import BaseComponent from './BaseComponent';

const URI_BASE = '/addresses';

export default class Address extends BaseComponent {
  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }
}
