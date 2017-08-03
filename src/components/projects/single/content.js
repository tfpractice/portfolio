import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { MarkdownPreview } from 'react-marked-markdown';

import { slug } from '../../../utils';
import { Expand } from '../../misc';
import { getContent } from './pages';

const mapState = (state, { project }) => ({ content: getContent(slug(project)) });

const PJContent = ({ content }) =>
  !!content &&
  <Expand
    open
    header={
      <Text color="inherit" type="title">
        In-Depth
      </Text>
    }
  >
    <Text component="div" color="inherit" type="body1">
      <MarkdownPreview value={content} />
    </Text>
  </Expand>;

export default connect(mapState)(PJContent);
