import React from 'react';
import { Link, } from 'react-router-dom';
import qs from 'qs';
import { containers, } from '../../store/projects';

const { WithProject, } = containers;
const slug = ({ title, }) => title.toLowerCase().replace(/(\W)/, '-');
const ProjectLink = ({ project, children, ...props }) => {
  // console.log('ProjectLink props', props);
  // console.log('qs.stringify(project.title)', qs.stringify(project.title));
  // console.log('typeof project.title', typeof project.title);
  console.log('project.title', project.title);

  // project.title && console.log('project.title.toString().replace(/(\W)/, ' - ')', project.title.replace(/(\W)/, '-'));
  console.log('slug(project)', slug(project));

  // console.log('project.title.replace(/\W/,"-")', project.title.replace(/(\W)/, '-'));
  // console.log('encodeURIComponent(project.title)', encodeURIComponent(project.title));
  return (
    <Link to={`/projects/${slug(project)}`}>
      {children}
    </Link>);
};

export default WithProject(ProjectLink);
