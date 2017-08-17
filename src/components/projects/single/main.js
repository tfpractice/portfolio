import React from 'react';
import AppBar from 'material-ui/AppBar';
import ToolBar from 'material-ui/Toolbar';
import Grid from 'material-ui/Grid';
import SvgIcon from 'material-ui/SvgIcon';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import LeftIcon from 'material-ui-icons/ChevronLeft';
import { CircularProgress } from 'material-ui/Progress';
import Dialog, { DialogContent, DialogTitle } from 'material-ui/Dialog';
import Slide from 'material-ui/transitions/Slide';
import { compose, withHandlers, withState } from 'recompose';
import { createStyleSheet, withStyles } from 'material-ui/styles';

import { RawPath } from '../../visualization';
import PageCard from './header/pageCard';
import PJSections from './sections';

const Styled = withStyles(
  createStyleSheet('PJModal', { paper: { backgroundColor: 'rgba(238,238,238,0.85)' }})
);
const withModal = compose(
  withState('open', 'turn', false),
  withHandlers({ toggle: ({ turn }) => () => turn(x => !x) })
);

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
            fullScreen
            classes={classes}
            open={open}
            onRequestClose={toggle}
            transition={<Slide direction="up" />}
          >
            <DialogContent>
              <AppBar>
                <ToolBar>
                  <Button fab color="accent" onClick={toggle}>
                    <SvgIcon viewBox="-1,-1,2,2">
                      <RawPath />
                    </SvgIcon>
                  </Button>
                </ToolBar>
              </AppBar>
              <Grid
                container
                align="center"
                justify="center"
                style={{ marginTop: '3rem' }}
              >
                <Grid item xs={12}>
                  <PageCard project={project} />
                </Grid>
                <Grid item xs={11}>
                  <PJSections project={project} />
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

export default withModal(Styled(Project));
