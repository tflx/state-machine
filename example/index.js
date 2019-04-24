import Store from '../store/store.js';
import actions from './actions.js';
import mutations from './mutations.js';
import state from './initialstate.js';
import Publish from './publish';
import Subscribe from './subscribe';


export default new Store({
  actions,
  mutations,
  state
});

// var store;
// export default function CreateStore() {
//   console.log(store);
//   // return new Store({
//   //   actions,
//   //   mutations,
//   //   initialState
//   // });
// }

var p = new Publish();
var s = new Subscribe();