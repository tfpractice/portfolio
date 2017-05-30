import React from 'react';
import { Link, } from 'react-router-dom';
import qs from 'qs';
import { containers, } from '../../store/projects';

const { WithProject, } = containers;
const slug = ({ title, }) => title.toLowerCase().replace(/(\W)/, '-');
const ProjectLink = ({ project, children, ...props }) => {
  console.log('project.title', project.title);
  console.log('slug(project)', slug(project));

  return (
    <Link to={`/projects/${slug(project)}`}>
      {children}
    </Link>);
};

export default WithProject(ProjectLink);
