import store from './index';

export default class Publish {
  constructor() {
    setTimeout(() => {
      console.log('dispatch');
      store.dispatch('addItem', 'Bum');

    }, 1000);
  }
}