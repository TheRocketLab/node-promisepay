import BaseComponent from './BaseComponent';

export default class Tool extends BaseComponent {
  healthcheck() {
    return this.client.get('/status');
  }
}
