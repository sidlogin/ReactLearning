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

# HTTP Request using fetch()

1. Integrate REST API for HTTP Response using fetch() on page load with componentDidMount()
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