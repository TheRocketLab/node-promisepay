import BaseComponent from './BaseComponent';

const URI_BASE = '/token_auths';

export default class Token extends BaseComponent {

  get(userId, tokenType = 'card') {
    return this.client.post(URI_BASE, { token_type: tokenType, user_id: userId });
  }
}
