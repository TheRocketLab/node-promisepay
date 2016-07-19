import BaseComponent from './BaseComponent';

const URI_BASE = '/callbacks';

export default class Callback extends BaseComponent {
  create({ description, url, object_type, enabled }) {
    return this.client.post(`${URI_BASE}`, { description, url, object_type, enabled });
  }

  list({ limit, offset, filter, id }) {
    return this.client.get(`${URI_BASE}`, { limit, offset, filter, id });
  }

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  update(id, { description, url, object_type, enabled }) {
    return this.client.patch(`${URI_BASE}/${id}`, { description, url, object_type, enabled });
  }

  delete(id) {
    return this.client.delete(`${URI_BASE}/${id}`);
  }

  listResponses(id) {
    return this.client.get(`${URI_BASE}/${id}/responses`);
  }

  getCallbackResponse(id, responseId) {
    return this.client.get(`${URI_BASE}/${id}/responses/${responseId}`);
  }
}
