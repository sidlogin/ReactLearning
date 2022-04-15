## Functional Component

### Basic structure of functional component
```
import React, { Component, ReactDOM } from "react";

class FunctionalComponent extends Component {
    render() {
        return (
            <div>
                <h3>Functional Component</h3>
            </div>
        )
    }
}
export default FunctionalComponent;
```

### Basic structure of class component
```
import React, { Component } from "react";

class ClassComponent extends Component {
    render() {
        return (
            <div>Class Component</div>
        )
    }
}
export default ClassComponent;
```