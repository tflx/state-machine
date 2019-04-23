import actions from './actions.js';
import mutations from './mutations.js';
import state from './initialstate.js';
import Store from './store.ts';

export default new Store({
    actions,
    mutations,
    state
});
