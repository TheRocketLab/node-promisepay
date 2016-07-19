import Resource from './Resource';

const URI_BASE = '/card_accounts';

export default class CardAccount extends Resource {
  constructor(requester) {
    const resourceFields = [
      'user_id', 'full_name', 'number', 'expiry_month', 'expiry_year', 'cvv',
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
}
