import _ from 'lodash';

export default class Resource {

  constructor(requester, resourceUri, resourceFields, requiredFields) {
    this.client = requester;
    this.resourceUri = resourceUri;
    this.resourceFields = resourceFields;
    this.requiredFields = requiredFields;
  }

  list({ limit, offset, search }) {
    return this.client.get(this.resourceUri, { limit, offset, search });
  }

  get(id) {
    return this.client.get(`${this.resourceUri}/${id}`);
  }

  create(fields) {
    return this.client.post(this.resourceUri, { ..._.omit(fields, this.resourceFields) });
  }

  update(id, fields) {
    return this.client.patch(`${this.resourceUri}/${id}`, { ..._.omit(fields, this.resourceFields, 'id') });
  }
}
