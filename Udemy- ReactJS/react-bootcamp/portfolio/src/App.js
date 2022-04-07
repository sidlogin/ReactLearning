import React, { Component } from "react";
import Projects from "./Projects";

class App extends Component {
    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    
    render() {

        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Siddharth, I am Web Architect.</p>
                <p>I am learning React JS and looking forward to learn react project and examples</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Dallas and love Javascript</p>
                            <button onClick={this.toggleDisplayBio}> Show Less</button>
                        </div>
                    ) : (<button onClick={this.toggleDisplayBio}> Read More</button>)
                }

                < hr/>
                <Projects />
            </div>
        )
    }
}

export default App;