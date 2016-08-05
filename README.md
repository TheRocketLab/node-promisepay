# PromisePay Node.js Client

<p align="center">
[![npm version](https://badge.fury.io/js/promisepay.svg)](http://badge.fury.io/js/promisepay)
[![Dependency Status](https://david-dm.org/TheRocketLab/node-promisepay.svg)](https://david-dm.org/TheRocketLab/node-promisepay)
</p>

## Installation

To install use `npm` and add the package to your application's dependencies:

    $ npm install promisepay --save

## Usage

```javascript
import promisepay from 'promisepay';

ppClient = promisePay({
  userName: process.env.PP_USER,
  token: process.env.PP_TOKEN,
  preLive: process.env.PP_LIVE !== 'true',
  currency: 'USD',
  debug: true,
  logger: winston.info,
});

const users = await ppClient.users.list({ limit: 5 });

# or

ppClient.users.list({ limit: 5 }).then(data => {
  console.log(data);
});
```

## Endpoints

```javascript
# User Methods
* promisePay.users.create(data)
* promisePay.users.list({ limit, offset, search })
* promisePay.users.get(id)
* promisePay.users.update(id, data)
* promisePay.users.getBankAccount(id)
* promisePay.users.getCardAccount(id)
* promisePay.users.getPaypalAccount(id)
* promisePay.users.getWalletAccount(id)
* promisePay.users.setDisbursementAccount(id)
* promisePay.users.listItems(id)

# Company Methods
* promisePay.companies.create(data)
* promisePay.companies.list({ limit, offset })
* promisePay.companies.get(id)
* promisePay.companies.update(id, data)

# Bank Account Methods
* promisePay.bankAccounts.create(data)
* promisePay.bankAccounts.get(id)
* promisePay.bankAccounts.delete(id)
* promisePay.bankAccounts.getUsers(id)
* promisePay.bankAccounts.verifyRoutingNumber(number)

# Card Account Methods
* promisePay.cardAccounts.create(data)
* promisePay.cardAccounts.get(id)
* promisePay.cardAccounts.delete(id)
* promisePay.cardAccounts.getUsers(id)

# Paypal Account Methods
* promisePay.paypalAccounts.create(data)
* promisePay.paypalAccounts.get(id)
* promisePay.paypalAccounts.delete(id)
* promisePay.paypalAccounts.getUsers(id)

# Wallet Account Methods
* promisePay.walletAccounts.get(id)
* promisePay.walletAccounts.withdraw(id, { account_id, amount })
* promisePay.walletAccounts.deposit(id, { account_id, amount })
* promisePay.walletAccounts.getUser(id)

# Direct Debit Authority Methods
* promisePay.directDebitAuthority.create({ account_id, amount })
* promisePay.directDebitAuthority.list({ limit, offset, account_id })
* promisePay.directDebitAuthority.get(id)
* promisePay.directDebitAuthority.delete(id)

# Fee Methods
* promisePay.fees.create({ name, fee_type_id, amount, cap, min, max, to })
* promisePay.fees.list({ limit, offset })
* promisePay.fees.get(id)

# Items Methods
* promisePay.items.create(data)
* promisePay.items.list({ limit, offset, search, disbursement_id })
* promisePay.items.get(id)
* promisePay.items.update(id, { name, amount, fee_ids, description, buyer_id, seller_id })
* promisePay.items.deleteFees(id)
* promisePay.items.delete(id)
* promisePay.items.status(id)
* promisePay.items.getBuyers(id)
* promisePay.items.getSellers(id)
* promisePay.items.getFees(id)
* promisePay.items.getWireDetails(id)
* promisePay.items.getBPayDetails(id)
* promisePay.items.getTransactions(id)
* promisePay.items.getBatchTransactions(id)

# Item Action Methods
* promisePay.itemActions.requestPayment(itemId)
* promisePay.itemActions.makePayment(itemId, { account_id, ip_address, device_id })
* promisePay.itemActions.requestRelease(itemId, { release_amount })
* promisePay.itemActions.releasePayment(itemId, { release_amount, flag_release })
* promisePay.itemActions.requestRefund(itemId, { refund_amount, refund_message })
* promisePay.itemActions.refund(itemId, { refund_amount, refund_message })
* promisePay.itemActions.declineRefund(itemId)
* promisePay.itemActions.raiseDispute(itemId, { user_id })
* promisePay.itemActions.requestDisputeResolution(itemId)
* promisePay.itemActions.resolveDispute(itemId)
* promisePay.itemActions.escalateDispute(itemId)
* promisePay.itemActions.acknowledgeWireTransfer(itemId)
* promisePay.itemActions.revertWireTransfer(itemId)
* promisePay.itemActions.cancel(itemId)
* promisePay.itemActions.sendTaxInvoice(itemId)
* promisePay.itemActions.requestTaxInvoice(itemId)

# Charge Methods
* promisePay.charges.create(data)
* promisePay.charges.list({ limit, offset }})
* promisePay.charges.get(id)
* promisePay.charges.getBuyer(id)
* promisePay.charges.getStatus(id)

# Market Place Methods
* promisePay.marketPlaces.show()

# Transaction Methods
* promisePay.transactions.list({ limit, offset, account_id, item_id, transaction_type, transaction_type_method, direction })
* promisePay.transactions.get(id)
* promisePay.transactions.getUser(id)
* promisePay.transactions.getFees(id)
* promisePay.transactions.getWalletAccount(id)
* promisePay.transactions.getBankAccount(id)
* promisePay.transactions.getCardAccount(id)
* promisePay.transactions.getPaypalAccount(id)

# Batch Transaction Methods
* promisePay.batchTransactions.list({ limit, offset, account_id, batch_id, item_id, transaction_type, transaction_type_method, direction })
* promisePay.batchTransactions.get(id)

# Callback Methods
* promisePay.callbacks.create({ description, url, object_type, enabled })
* promisePay.callbacks.list({ limit, offset, filter, id })
* promisePay.callbacks.get(id)
* promisePay.callbacks.update(id, { description, url, object_type, enabled })
* promisePay.callbacks.delete(id)
* promisePay.callbacks.listResponses(id)
* promisePay.callbacks.getCallbackResponse(id, responseId)

# Tool Methods
* promisePay.tools.healthcheck()

# Tokens Methods
* promisePay.tokens.get(userId, tokenType = 'card')

```
