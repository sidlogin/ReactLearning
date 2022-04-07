import React, { Component } from "react";
import PROJECTS from "../data/projects";
import Project from "./Project";

const Projects = () => (
    <div>
        <h2>Highlightened Project</h2>
        <div>
            {
                PROJECTS.map(PROJECT => (
                    <Project key={PROJECT.id} project={PROJECT} />
                ))
            }
        </div>
    </div>
)
export default Projects;