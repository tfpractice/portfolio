import React from 'react';
import { Link, } from 'react-router-dom';

import { containers, } from '../../store/projects';

const { WithProject, } = containers;

//     onMouseOver={() => props.projectQuery.refetch({ id: project.id, })}

const ProjectLink = (props) => {
  console.log('ProjectLink props', props);
  return (
    <Link to={`/projects/${props.project.id}`}>
      { props.project.title}
    </Link>);
};

export default WithProject(ProjectLink);
