import React from 'react';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogTitle,
} from 'material-ui/Dialog';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import { compose, withHandlers, withState } from 'recompose';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { slug as pSlug } from '../../../utils';
import PageCard from './header/pageCard';
import SkillsAndTools from './skillsAndTools';
import PJContent from './content';

const Styled = withStyles(
  createStyleSheet('PJModal', theme => ({
    paper: {
      backgroundColor: 'rgba(238,238,238,0.85)',
      width: 'inherit',
      maxWidth: 'inherit',
    },
  }))
);
const withModal = compose(
  withState('open', 'turn', false),
  withHandlers({ toggle: ({ turn }) => () => turn(x => !x) })
);
const mapState = ({ projects }, { project }) => ({
  slug: pSlug(project),

  project,
});

const Project = (props) => {
  const { project, classes, open, toggle, trigger } = props;
  let view;

  const label = props.label || project.title;

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
      <Grid container align="center">
        <Grid item>
          <Button onClick={toggle}>
            {label}
          </Button>

          <Dialog
            classes={classes}
            open={open}
            onRequestClose={toggle}
            transition={<Slide direction="up" />}
          >
            <DialogContent>
              <Grid container align="center" justify="center">
                <Grid item xs={11}>
                  <PageCard project={project} />
                </Grid>

                <Grid item xs={11}>
                  <PJContent project={project} />
                </Grid>
              </Grid>
            </DialogContent>
          </Dialog>
        </Grid>
      </Grid>
    );
  }

  return view;
};

export default connect(mapState)(withModal(Styled(Project)));

// export default connect(mapState)(WithSkills(withModal(Styled(Project))));
