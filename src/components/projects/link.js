import React from 'react';
import { Link, } from 'react-router-dom';

import { containers, } from '../../store/projects';

const { WithProject, } = containers;

const ProjectLink = ({ project, children, ...props }) => {
  console.log('ProjectLink props', props);
  return (
    <Link to={`/projects/${project.id}`}>
      {children}
    </Link>);
};

export default WithProject(ProjectLink);
