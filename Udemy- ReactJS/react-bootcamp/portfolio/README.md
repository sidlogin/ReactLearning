# DAY-1 learnings
1. Creating new project using npx create-new-app <project-name>
    - npm run start
    - test http://localhost:3000
2. Create new jsx react component and export in for other components
    class Projects extends Component {
        render() {
            return (
                <div></div>
            )
        }
    }
3. Class basic concenpts for inheritance using extends, check Oops.js for reference.
4. Use of setState() to update/modify the state
5. Import mock JSON object in to component to render the view
6. Use of React Props to pass an object in to component to make reusable
7. Use of className="" and style={} properties on JSX elements
8. First Method: To attach class property to the method from constructor:

    // Code snippet
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

    Second Method: To attach class property to the method without constructor:
    // Code snippet
    class App extends Component {
        state = {displayBio: false};

    // Attaching toggleDisplayBio method to 'this' object using arrow method
        toggleDisplayBio = () => {
            this.setState({displayBio: !this.state.displayBio});
        }
    }


# Day-2 React Core Concepts

1. React Life-cycle methods:
    componentDidMount() => Fires when component is inserted into DOM
    componentWillUnmount() => Fires when component is going to leave DOM
    
