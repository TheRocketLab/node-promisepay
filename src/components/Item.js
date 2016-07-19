import BaseComponent from './BaseComponent';

const URI_BASE = '/items';

export default class Item extends BaseComponent {

  // @see https://reference.promisepay.com/#create-item
  create(data) {
    return this.client.post(URI_BASE, data);
  }

  // @see https://reference.promisepay.com/#list-items
  list({ limit, offset, search, disbursement_id }) {
    return this.client.get(URI_BASE, { limit, offset, search, disbursement_id });
  }

  // @see https://reference.promisepay.com/#show-item
  get(id) {
    return this.client.get(`${URI_BASE}/${id}`);
  }

  // @see https://reference.promisepay.com/#update-item
  update(id, { name, amount, fee_ids, description, buyer_id, seller_id }) {
    return this.client.patch(`${URI_BASE}/${id}`, { name, amount, fee_ids, description, buyer_id, seller_id });
  }

  deleteFees(id) {
    return this.client.delete(`${URI_BASE}/${id}/fees`);
  }

  // @see https://reference.promisepay.com/#delete-item
  delete(id) {
    return this.client.delete(`${URI_BASE}/${id}`);
  }

  // @see https://reference.promisepay.com/#show-item-status
  status(id) {
    return this.client.get(`${URI_BASE}/${id}/status`);
  }

  // @see https://reference.promisepay.com/#show-item-buyer
  getBuyers(id) {
    return this.client.get(`${URI_BASE}/${id}/buyers`);
  }

  // @see https://reference.promisepay.com/#show-item-seller
  getSellers(id) {
    return this.client.get(`${URI_BASE}/${id}/sellers`);
  }

  // @see https://reference.promisepay.com/#show-item-fees
  getFees(id) {
    return this.client.get(`${URI_BASE}/${id}/fees`);
  }

  // @see https://reference.promisepay.com/#show-item-wire-details
  getWireDetails(id) {
    return this.client.get(`${URI_BASE}/${id}/wire_details`);
  }

  // @see https://reference.promisepay.com/#show-item-bpay-details
  getBPayDetails(id) {
    return this.client.get(`${URI_BASE}/${id}/bpay_details`);
  }

  // @see https://reference.promisepay.com/#list-item-transactions
  getTransactions(id) {
    return this.client.get(`${URI_BASE}/${id}/transactions`);
  }

  // @see https://reference.promisepay.com/#list-item-batch-transactions
  getBatchTransactions(id) {
    return this.client.get(`${URI_BASE}/${id}/batch_transactions`);
  }
}
