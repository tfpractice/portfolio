import React from 'react';
import qs from 'qs';
import { Link } from 'react-router-dom';

import { containers } from '../../store/projects';
import { slug } from '../../utils';

const { WithProject } = containers;

const ProjectLink = ({ project, children, ...props }) => {
  const a = 0;

  return (
    <Link to={`/projects/${slug(project)}`}>
      {children || project.title}
    </Link>
  );
};

export default WithProject(ProjectLink);
