import store from './index';



export default class Subscribe {

  constructor() {
    store.subscribe(state => {
      this.render(state);
    })
  }

  render(state) {
    console.log(state.items);
  }
}