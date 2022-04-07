import React, { Component } from "react";
import PROJECTS from "../data/projects";
import Project from "./Project";

class Projects extends Component {
    render() {
        return (
            <div>
                <h2>Highlightened Project</h2>
                <div>
                    {
                        PROJECTS.map((PROJECT, id) => {
                            return (
                                <Project key={id} project={PROJECT} />
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
export default Projects;