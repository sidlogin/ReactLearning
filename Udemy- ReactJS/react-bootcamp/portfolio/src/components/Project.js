import React from 'react';

const Project = (props) => {
    const { title, image, description, link } = props.project;

    return (
        <div className="profile">
            <h3>{title}</h3>
            <img src={image} alt="profile" className="profile-image" />
            <p>{description}</p>
            <a href="{link}">{link}</a>
        </div>
    )
}
export default Project;