import BaseComponent from './BaseComponent';

const URI_BASE = '/paypal_accounts';

export default class PaypalAccount extends BaseComponent {
  constructor(requester) {
    const resourceFields = [
      'user_id', 'paypal_email', 'pay_in',
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
