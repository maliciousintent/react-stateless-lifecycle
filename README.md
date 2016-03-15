
# React Stateless Lifecycle

Add component did mount and component will receive props to stateless component.


### Known issues:
- correct bind this

### Example

```
import addLifecycle from 'react-stateless-lifecycle';

const wrapLifecycle = addLifecycle({
  handleComponentDidMount: triggerRequestFetch,
  handleComponentWillReceiveProps: Function,
});

// ...

export default wrapLifecycle(MyComponent);
```
