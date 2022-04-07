import React, { Component } from 'react';

class Project extends Component {
    render() {
        // console.log('this.props', this.props);
        const { title, image, description, link } = this.props.project;

        return (
            <div className="profile">
                <h3>{title}</h3>
                <img src={image} alt="profile" className="profile-image" />
                <p>{description}</p>
                <a href="{link}">{link}</a>
            </div>
        )
    }
}
export default Project;