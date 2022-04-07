import React, { Component } from "react";
import Lifecycle from './Lifecycle';
import Projects from "./Projects";
import Header from "./common/Header";

class App extends Component {
    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    
    render() {
        return (
            <div>
                <Header />
                <h1>Hello!</h1>
                <p>My name is Siddharth, I am Web Architect.</p>
                { this.state.displayBio ? <Lifecycle /> : null }
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