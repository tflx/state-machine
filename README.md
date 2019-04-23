# State Machine


## Publish state change
```javascript
import store from './store/index.js';

store.dispatch('addItem', 'A new item');
```



## Subscribe to state change
```javascript
import store from './store/index.js';


constructor() {
    store.events.subscribe('stateChange', () => this.render());
  }

  render = () => {
    console.log(store.state.items);

    /**
      Compare to local state and update/re-render if necessary
    */
  }
```
