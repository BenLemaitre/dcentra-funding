import React, { useState, useEffect } from "react";
import { loadWeb3, getProjects } from "../utils";
import ListItem from "../components/ListItem";

import { SimpleGrid, Heading } from "@chakra-ui/react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadWeb3();

    let isCurrent = true;
    getProjects().then((projects) => {
      if (isCurrent) {
        setProjects(projects);
        console.log(projects);
      }
    });
    return () => {
      isCurrent = false;
    };
  }, []);

  return (
    <div>
      <Heading textAlign="center" p="10px">
        Our Users Projects
      </Heading>
      <SimpleGrid columns={{ sm: 2, md: 3 }} spacing="40px" p="20px">
        {projects.map((project, key) => {
          return project.title !== "" ? (
            <ListItem project={project} key={key} />
          ) : (
            <div style={{ display: "none" }} />
          );
        })}
      </SimpleGrid>
    </div>
  );
};

export default Projects;
