import React from 'react';
import Text from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import { MarkdownPreview } from 'react-marked-markdown';

import { Expand } from '../../misc';
import { dStyles, slug } from '../../../utils';
import { getSections } from './pages';

const mapState = (state, { project }) => ({ sections: getSections(slug(project)) });

const PJSections = ({ sections, project }) =>
  (<Grid container justify="center">
    {sections.map((s, i) =>
      (<Grid item xs={12} sm={11} md={6} lg key={i}>
        <Expand
          open
          dStyle={dStyles[project.category]}
          header={<MarkdownPreview value={s.caption || s.header} />}
        >
          <Text component="div" color="inherit" type="body1">
            <MarkdownPreview value={s.content} />
          </Text>
        </Expand>
      </Grid>)
    )}
  </Grid>);

export default connect(mapState)(PJSections);
