import React, { Component } from "react";

const TITLES = [
    'Sotware Engineer',
    'Musician',
    'Teacher',
    'Swimmer'
];

class Lifecycle extends Component {
    state = { titleIndex: 0};
    
    componentDidMount() {
        console.log('Lifecycle Component has mounted');

        this.animateTitles();
    }

    componentWillUnmount() {
        console.log('Lifecycle Component will unmount');

        this.animateTitles();
    }

    animateTitles = () => {
        setInterval(() => {
            const titleIndex = (this.state.titleIndex + 1) % TITLES.length;
            this.setState({ titleIndex });
        }, 3000)
    }

    render() {
        const title = TITLES[this.state.titleIndex];

        return(
            <p>I am {title}</p>
        )
    }
}

export default Lifecycle;