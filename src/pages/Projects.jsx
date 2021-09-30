import React, { useState, useEffect } from "react";

import ListItem from "../components/ListItem";

const Projects = ({ dcentra, projects }) => {
  useEffect(() => {}, []);

  return (
    <div>
      {projects.map((project, key) => {
        return <ListItem project={project} key={key} />;
      })}
    </div>
  );
};

export default Projects;
