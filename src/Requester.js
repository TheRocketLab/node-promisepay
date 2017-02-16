import _ from 'lodash';
import request from 'request-promise';

const PRE_LIVE_API = process.env.PROMISE_PAY_TEST_API || 'https://test.api.promisepay.com';
const LIVE_API = process.env.PROMISE_PAY_PROD_API || 'https://secure.api.promisepay.com';

export default class Requester {
  constructor(config = {}) {
    this.config = config;
    const baseUrl = config.preLive === false ? LIVE_API : PRE_LIVE_API;
    this.log(`API endpoint: ${baseUrl}`);
    this.client = request.defaults({
      baseUrl,
      auth: {
        user: config.userName,
        pass: config.token,
      },
      headers: {
        Accept: 'application/json',
        Authorization: `basic ${config.apiToken}`,
      },
      resolveWithFullResponse: true,
    });
  }

  request(uri, params, method = 'GET') {
    return this.client({ ...params, uri, method }).then((response) => {
      const contentType = response.headers['content-type'];
      if (_.isString(response.body) && contentType !== null && contentType.match(/json/i)) {
        _.set(response, 'body', JSON.parse(response.body));
      }
      return response.body;
    });
  }

  post(uri, params) {
    this.log(`[POST] ${uri} with params: ${JSON.stringify(params)}`);
    const postParams = params ? { body: params, json: true } : {};
    return this.request(uri, postParams, 'POST');
  }

  get(uri, params) {
    this.log(`[GET] ${uri} with params: ${JSON.stringify(params)}`);
    const getParams = params ? { qs: params } : {};
    return this.request(uri, getParams);
  }

  patch(uri, params) {
    this.log(`[PATCH] ${uri} with params: ${JSON.stringify(params)}`);
    const postParams = params ? { body: params, json: true } : {};
    return this.request(uri, postParams, 'PATCH');
  }

  delete(uri) {
    this.log(`[DELETE] ${uri}`);
    return this.request(uri, {}, 'DELETE');
  }

  log(message) {
    if (this.config.debug === true) {
      const formattedMessage = `💰 [PromisePay] ${message}`;
      if (this.config.logger && _.isFunction(this.config.logger)) {
        this.config.logger(formattedMessage);
      } else {
        console.log(formattedMessage); // eslint-disable-line
      }
    }
  }
}
