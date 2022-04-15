# Basic React learnings
1. Creating new project using npx create-new-app <project-name>
    - npm run start
    - test http://localhost:3000
2. Create new jsx react component and export in for other components
    ```
    class Projects extends Component {
        render() {
            return (
                <div></div>
            )
        }
    }
    export default Projects
    ```
3. Class basic concenpts for inheritance using extends, check Oops.js for reference.
4. Use of setState() to update/modify the state
5. Import mock JSON object in to component to render the view
6. Use of React Props to pass an object in to component to make reusable
7. Use of className="" and style={} properties on JSX elements
8. First Method: To attach class property to the method from constructor:

    ```
    class App extends Component {
        constructor() {
            this.state = {displayBio: false};

            // binding the this object to pass object as an argument
            this.toggleDisplayBio.bind(this);
        }

        toggleDisplayBio() {
            this.setState({displayBio: !this.state.displayBio});
        }
    }
    ```

    Second Method: To attach class property to the method without constructor:
    ```
    class App extends Component {
        state = {displayBio: false};

    // Attaching toggleDisplayBio method to 'this' object using arrow method
        toggleDisplayBio = () => {
            this.setState({displayBio: !this.state.displayBio});
        }
    }
    ```


# React Core Concepts

1. React Life-cycle methods:
    componentDidMount() => Fires when component is inserted into DOM
    componentWillUnmount() => Fires when component is going to leave DOM
    
2. Creating a component using class style and Stateless Functional Component
3. Difference techniques to create functional component using Class style vs stateless style
    ```
    // Functional Class Component for example App.js
    class Projects extends Component {
        render() {
            return (<div></div>)
        }
    }
    export default Projects

    // STATELESS COMPONENT with PROPS for example Project.js
    const Project = (props) => {
        return (<div></div>)
    }
    export default Project


    // STATELESS COMPONENT with INLINE Return for example Projects.js
    const Projects = () => (
        <div></div>
    )
    export default Projects
    ```

# HTTP API Calls using fetch method

1. Integrate REST API for HTTP Response using fetch() on page load with componentDidMount() hook
2. Integrate REST API using fetchUsers() stateless function on button click
3. Destructuring of React Props for stateless component User
```
PROPS: {
    "user": {
        "id": 2,
        "email": "janet.weaver@reqres.in",
        "first_name": "Janet",
        "last_name": "Weaver",
        "avatar": "https://reqres.in/img/faces/2-image.jpg"
    }
}

- Method 1: Stateless component with props and destructuring props.user properties
const User = props => {
    const { first_name, last_name } = props.user;
    return (
        <p style={{margin: 20}}>{first_name} {last_name}</p>
    )
}

- Method 2: Stateless component with destructured props
const User = ({user}) => {
    const { first_name, last_name } = user;
    return (
        <p style={{margin: 20}}>{first_name} {last_name}</p>
    )
}

- Method 3: Stateless component with nested destructuring
const User = ({user: { first_name, last_name } }) => (
    <p style={{margin: 20}}>{first_name} {last_name}</p>
)
```

# Promise with Resolve and Reject
1. Check Promise.js

# Applying routing to the application using React Router
1. npm i react-router-dom --save
2. npm i history --save

```
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { createBrowserHistory } from 'history'

<Router history={createBrowserHistory()}>
    <Routes>
        <Route exact path='/' element={<App/>} />
        <Route path='/users' element={<Users/>} />
    </Routes>
</Router>
```

# React Link

1. React Link help to create link in react application and using Link it doesn't refresh the state and maintain the session
2. Regular <a href> works as well to navigate user as per given link but it refresh the state and create fresh session at every click.

```
import { Link } from "react-router-dom";

<div className="header">
    <h3> <Link to='/'>Home</Link></h3>
    <h3> <Link to='/users'>Users</Link></h3>
</div>
```

# React Higher-order component 
- A higher-order component is one that takes another component as an input. The idea is to treat the component like a function.
- Have one component as input and then output an entirely new compinent based on that input with new properties, methods and/or JSX!

Refer the Header component which is converted into higher-order component.