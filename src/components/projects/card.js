export { default } from './pjCard';

// import React from 'react';
// import Grid from 'material-ui/Grid';
// import Text from 'material-ui/Typography';
// import Avatar from 'material-ui/Avatar';
// import Collapse from 'material-ui/transitions/Collapse';
// import IconButton from 'material-ui/IconButton';
// import Button from 'material-ui/Button';
// import ExpandLess from 'material-ui-icons/ExpandLess';
// import Card, {
//   CardActions,
//   CardContent,
//   CardHeader,
//   CardMedia,
// } from 'material-ui/Card';
// import { createStyleSheet, withStyles } from 'material-ui/styles';
// import { compose, withHandlers, withState } from 'recompose';
// import { connect } from 'react-redux';
//
// import { containers } from '../../store/projects';
// import { Expand, HexCard, SwipeTabs } from '../misc';
// import { qUtils } from '../../utils';
// import { ChipList } from '../tools';
// import { Features } from './pjCard';
// import ProjectLink from './link';
// import FeatureList from './featureList';
// import PJMedia from './pjMedia';
//
// const { WithProject, WithSkills, DropTool } = containers;
// const { edgeNodes } = qUtils;
// const gitLogo = 'https://jarroba.com/wp-content/uploads/2014/01/gitHub.png';
//
// const withSwitch = compose(
//   withState('open', 'flip', ({ open }) => !!open),
//   withHandlers({
//     toggle: ({ flip }) => () => flip(x => !x),
//     show: ({ flip }) => () => flip(true),
//     hide: ({ flip }) => () => flip(false),
//   })
// );
//
// const getChips = p =>
//   p.category === 'APP' ? edgeNodes(p.tools) : edgeNodes(p.skills);
// const colors = {
//   APP: 'rgba(255,0,255,1)',
//   LIB: 'rgba(0,255,255,1)',
// };
// const dStyles = {
//   APP: { backgroundColor: colors.APP },
//   LIB: { backgroundColor: colors.LIB },
// };
// const Styled = withStyles(
//   createStyleSheet('ProjectCard', theme => ({
//     APP: { backgroundColor: 'rgba(255,0,255,0.3)' },
//     LIB: { backgroundColor: 'rgba(0,255 ,255,0.3)' },
//     SCRIPT: { backgroundColor: '#00796b' },
//     actions: { overflowX: 'auto', overflowY: 'hidden' },
//   }))
// );
//
// const ProjectCard = ({ project, show, classes, toggle, open, ...props }) => {
//   const features = project.features || [
//     'built with es6, bundled with Rollup',
//     '90% code-coverage, tested with Jest',
//     'full documentation deployed on surge',
//   ];
//
//   return (
//     <HexCard raised>
//       <Expand
//         dStyle={dStyles[project.category]}
//         color="default"
//         open={true}
//         header={
//           <CardHeader
//             avatar={
//               <a target="_blank" href={project.repo}>
//                 <Avatar src={gitLogo} aria-label={`${project.title}`} />
//               </a>
//             }
//             title={
//               <a target="_blank" href={project.url}>
//                 <Text type="subheading" children={project.title} />
//               </a>
//             }
//           />
//         }
//       >
//         <CardMedia
//           onClick={show}
//           className={!open ? classes[project.category] : ''}
//         >
//           <Collapse in={!open}>
//             <PJMedia project={project} />
//           </Collapse>
//           <Collapse in={open}>
//             <SwipeTabs iHue={colors[project.category]}>
//               <FeatureList
//                 tabLabel="highlights"
//                 data={project.details.map(d => d.caption)}
//               />
//               <FeatureList tabLabel="tech" data={features} />
//             </SwipeTabs>
//           </Collapse>
//         </CardMedia>
//
//         <Collapse in={open}>
//           <CardActions className={classes.actions}>
//             <ProjectLink project={project}>
//               <Button>learn more</Button>
//             </ProjectLink>
//
//             <Button target="_blank" href={project.url}>
//               view online
//             </Button>
//
//             <IconButton onClick={toggle}>
//               <ExpandLess />
//             </IconButton>
//           </CardActions>
//         </Collapse>
//
//         <Collapse in={!open}>
//           <CardActions>
//             <ChipList tools={getChips(project)} />
//           </CardActions>
//         </Collapse>
//       </Expand>
//     </HexCard>
//   );
// };
//
// export default DropTool(withSwitch(Styled(ProjectCard)));
