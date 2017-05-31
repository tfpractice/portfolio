import React from 'react';
import { connect, } from 'react-redux';
import { Route, Switch, } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Text from 'material-ui/Typography';

import { containers, } from '../../store/projects';
import Single from './single';
import ProjectLink from './link';
import ProjectInfo from './info';

const { WithProject, WithAll, } = containers;
const slug = ({ title, }) => title.toLowerCase().replace(/(\W)/, '-');
const stateToProps = ({ projects, }) => ({ projects, });

const Projects = (props) => {
  console.log('projects');
  console.log('Projects props', props);
  return (
    <Grid container justify="center" align="center" direction="column">
      <Grid item sm={12}>
        <Text type="subheading">
          Projects
        </Text>
      </Grid>
      <Grid item sm={12}>
        <Text type="subheading">
          Projects
        </Text>

        {props.projects.map(p =>
          <ProjectLink project={p} key={p.id}>{p.title}</ProjectLink>
        )}
        <Switch >
          <Route exact path={`${props.match.url}`} component={ProjectInfo} />
          
          {props.projects.map(p =>
            (<Route
              key={p.id}
              exact path={`${props.match.url}/${slug(p)}`}
              component={rProps =>
                <Single project={p} {...rProps} />}
            />)
          )}
        </Switch>
      </Grid>
    </Grid>
  );
};

export default connect(stateToProps)(Projects);
