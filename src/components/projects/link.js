import React from 'react';
import { Link, } from 'react-router-dom';
import qs from 'qs';
import { containers, } from '../../store/projects';
import { slug, } from '../../utils';
const { WithProject, } = containers;

const ProjectLink = ({ project, children, ...props }) => {
  const a = 0;

  return (
    <Link to={`/projects/${slug(project)}`}>
      {children}
    </Link>);
};

export default WithProject(ProjectLink);
