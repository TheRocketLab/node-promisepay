import _ from 'lodash';
import BaseComponent from './BaseComponent';

const URI_BASE = '/companies';

export default class Company extends BaseComponent {
  create(params) {
    const cleanParams = _.pickBy(params, _.identity);
    return this.client.post(URI_BASE, cleanParams);
  }

  list({ limit, offset }) {
    return this.client.get(URI_BASE, { limit, offset });
  }

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  update(id, params) {
    const cleanParams = _.pickBy(params, _.identity);
    return this.client.patch(`${URI_BASE}/${id}`, cleanParams);
  }
}
