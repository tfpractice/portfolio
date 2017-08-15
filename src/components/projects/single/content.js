import React from 'react';
import Text from 'material-ui/Typography';
import { connect } from 'react-redux';
import { MarkdownPreview } from 'react-marked-markdown';

import { Expand } from '../../misc';
import { dStyles, slug } from '../../../utils';
import { getContent } from './pages';

const mapState = (state, { project }) => ({ content: getContent(slug(project)) });

const PJContent = ({ content, project }) =>
  !!content &&
  <Expand
    dStyle={dStyles[project.category]}
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
  
// const PJSections = ({ sections, project }) =>
//   (<Expand
//     dStyle={dStyles[project.category]}
//     open
//     header={
//       <Text color="inherit" type="title">
//       A Closer Look      </Text>
//     }
//    >
//     <Grid <Text component="div" color="inherit" type="body1">
//       <MarkdownPreview value={content} />
//     </Text>
//       </Expand>);
//       
export default connect(mapState)(PJContent);
