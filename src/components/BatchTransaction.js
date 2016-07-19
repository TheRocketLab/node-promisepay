import BaseComponent from './BaseComponent';

const URI_BASE = '/batch_transactions';

export default class BatchTransaction extends BaseComponent {

  list({ limit, offset, account_id, batch_id, item_id, transaction_type, transaction_type_method, direction }) {
    return this.client.get(URI_BASE, {
      limit, offset, account_id, batch_id, item_id, transaction_type, transaction_type_method, direction,
    });
  }

  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }
}
