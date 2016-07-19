import BaseComponent from './BaseComponent';

const URI_BASE = '/items';

export default class ItemAction extends BaseComponent {
  triggerAction(action, itemId, params) {
    return this.client.patch(`${URI_BASE}/${itemId}/${action}`, params);
  }

  requestPayment(itemId) {
    return this.triggerAction('request_payment', itemId);
  }

  makePayment(itemId, { account_id, ip_address, device_id }) {
    return this.triggerAction('make_payment', itemId, { account_id, ip_address, device_id });
  }

  requestRelease(itemId, { release_amount }) {
    return this.triggerAction('request_release', itemId, { release_amount });
  }

  releasePayment(itemId, { release_amount, flag_release }) {
    return this.triggerAction('release_payment', itemId, { release_amount, flag_release });
  }

  requestRefund(itemId, { refund_amount, refund_message }) {
    return this.triggerAction('request_refund', itemId, { refund_amount, refund_message });
  }

  refund(itemId, { refund_amount, refund_message }) {
    return this.triggerAction('refund', itemId, { refund_amount, refund_message });
  }

  declineRefund(itemId) {
    return this.triggerAction('decline_refund', itemId);
  }

  raiseDispute(itemId, { user_id }) {
    return this.triggerAction('raise_dispute', itemId, { user_id });
  }

  requestDisputeResolution(itemId) {
    return this.triggerAction('request_resolve_dispute', itemId);
  }

  resolveDispute(itemId) {
    return this.triggerAction('resolve_dispute', itemId);
  }

  escalateDispute(itemId) {
    return this.triggerAction('escalate_dispute', itemId);
  }

  acknowledgeWireTransfer(itemId) {
    return this.triggerAction('acknowledge_wire', itemId);
  }

  revertWireTransfer(itemId) {
    return this.triggerAction('revert_wire', itemId);
  }

  cancel(itemId) {
    return this.triggerAction('cancel', itemId);
  }

  sendTaxInvoice(itemId) {
    return this.triggerAction('send_tax_invoice', itemId);
  }

  requestTaxInvoice(itemId) {
    return this.triggerAction('request_tax_invoice', itemId);
  }
}
