import Resource from './Resource';

const URI_BASE = '/bank_accounts';

export default class BankAccount extends Resource {
  constructor(requester) {
    const resourceFields = [
      'user_id', 'bank_name', 'account_name', 'routing_number', 'account_number', 'account_type', 'holder_type',
      'country',
    ];
    const requiredFields = [];
    super(requester, URI_BASE, resourceFields, requiredFields);
  }

  delete(id) {
    return this.client.delete(`${URI_BASE}/${id}`);
  }

  getUsers(id) {
    return this.client.get(`${URI_BASE}/${id}/users`);
  }

  verifyRoutingNumber(number) {
    return this.client.get('status', { routing_number: number });
  }
}
