import Resource from './Resource';

const URI_BASE = '/addresses';

export default class Charge extends Resource {
  constructor(requester) {
    const resourceFields = [
      'account_id', 'name', 'amount', 'email', 'zip', 'country', 'user_id', 'fee_ids', 'currency',
      'retain_account', 'device_id', 'ip_address',
    ];
    const requiredFields = ['account_id', 'amount', 'email', 'zip', 'country'];
    super(requester, URI_BASE, resourceFields, requiredFields);
  }

  getBuyer(id) {
    return this.client.get(`${URI_BASE}/${id}/buyers`);
  }

  getStatus(id) {
    return this.client.get(`${URI_BASE}/${id}/status`);
  }
}
