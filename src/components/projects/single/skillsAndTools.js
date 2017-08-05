import React from 'react';
import Grid from 'material-ui/Grid';
import Text from 'material-ui/Typography';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import { dStyles, slug } from '../../../utils';

import { containers } from '../../../store/projects';
import { Expand } from '../../misc';

const { DropTool } = containers;

const SkillsAndTools = (props) => {
  const { project, pTools, xTools, pSkills, xSkills } = props;
  let view;

  if (!project) {
    view = (
      <Grid container align="center" justify="center">
        <Grid item xs>
          <CircularProgress color="accent" />
        </Grid>
      </Grid>
    );
  } else {
    view = (
      <Grid container align="center" justify="center">
        <Grid item xs={6}>
          <Expand
            dStyle={dStyles[project.category]}
            header={
              <Text color="inherit" type="title">
                Skills
              </Text>
            }
          >
            <Grid container>
              {pSkills.map(t =>
                (<Grid item key={t.id}>
                  <Button color="primary" onClick={() => props.dropSkill(t)}>
                    {t.name}
                  </Button>
                </Grid>)
              )}
            </Grid>
          </Expand>
        </Grid>
        <Grid item xs={6}>
          <Expand
            header={
              <Text color="inherit" type="title">
                XSKILLS
              </Text>
            }
          >
            <Grid container>
              {xSkills.map(t =>
                (<Grid item key={t.id}>
                  <Button color="primary" onClick={() => props.addSkill(t)}>
                    {t.name}
                  </Button>
                </Grid>)
              )}
            </Grid>
          </Expand>
        </Grid>
        <Grid item xs={6}>
          <Expand
            dStyle={dStyles[project.category]}
            header={
              <Text color="inherit" type="title">
                tools
              </Text>
            }
          >
            <Grid container>
              {pTools.map(t =>
                (<Grid item key={t.id}>
                  <Button color="primary" onClick={e => props.dropTool(t)}>
                    {t.name}
                  </Button>
                </Grid>)
              )}
            </Grid>
          </Expand>
        </Grid>
        <Grid item xs={6}>
          <Expand
            dStyle={dStyles[project.category]}
            header={
              <Text color="inherit" type="title">
                XTOOLS
              </Text>
            }
          >
            <Grid container>
              {xTools.map(t =>
                (<Grid item key={t.id}>
                  <Button color="primary" onClick={e => props.addTool(t)}>
                    {t.name}
                  </Button>
                </Grid>)
              )}
            </Grid>
          </Expand>
        </Grid>
      </Grid>
    );
  }

  return view;
};

export default DropTool(SkillsAndTools);
