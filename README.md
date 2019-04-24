# State Machine

Based on https://css-tricks.com/build-a-state-management-system-with-vanilla-javascript/


## Publish state change
```javascript
import store from './store/index.js';

store.dispatch('addItem', 'A new item');
```



## Subscribe to state change
```javascript
import store from './store/index.js';


constructor() {
    store.subscribe('stateChange', () => this.render());
  }

  render = () => {
    console.log(store.state.items);

    /**
      Compare to local state and update/re-render if necessary
    */
  }
```
