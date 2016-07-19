import BaseComponent from './BaseComponent';

const URI_BASE = '/marketplace';

export default class MarketPlace extends BaseComponent {
  show() {
    return this.client.get(URI_BASE);
  }
}
