import React from 'react';
import Card from 'material-ui/Card';
import Grid from 'material-ui/Grid';
import Divider from 'material-ui/Divider';

const hexPath = `
  <svg>
    
    <path class="hexPath" d="M0,0L1,0L0.9285714285714286,0.12371791482634836L0,0L0.8571428571428572,0.24743582965269673L0.7857142857142858,0.3711537444790451L0,0L0.7142857142857144,0.49487165930539345L0.642857142857143,0.6185895741317418L0,0L0.5714285714285716,0.7423074889580902L0.5000000000000001,0.8660254037844386L0,0L0.3571428571428573,0.8660254037844386L0.21428571428571447,0.8660254037844386L0,0L0.07142857142857162,0.8660254037844386L-0.07142857142857117,0.8660254037844387L0,0L-0.21428571428571397,0.8660254037844387L-0.3571428571428569,0.8660254037844387L0,0L-0.4999999999999998,0.8660254037844387L-0.5714285714285712,0.7423074889580903L0,0L-0.6428571428571427,0.618589574131742L-0.7142857142857142,0.4948716593053936L0,0L-0.7857142857142856,0.37115374447904526L-0.857142857142857,0.24743582965269695L0,0L-0.9285714285714285,0.12371791482634853L-1,1.2246467991473532e-16L0,0L-0.9285714285714286,-0.12371791482634824L-0.8571428571428573,-0.24743582965269661L0,0L-0.7857142857142859,-0.371153744479045L-0.7142857142857146,-0.49487165930539334L0,0L-0.6428571428571432,-0.6185895741317416L-0.5714285714285718,-0.7423074889580901L0,0L-0.5000000000000004,-0.8660254037844385L-0.35714285714285765,-0.8660254037844386L0,0L-0.2142857142857148,-0.8660254037844386L-0.07142857142857201,-0.8660254037844387L0,0L0.07142857142857084,-0.8660254037844388L0.21428571428571364,-0.8660254037844389L0,0L0.35714285714285643,-0.8660254037844389L0.49999999999999933,-0.866025403784439L0,0L0.5714285714285708,-0.7423074889580906L0.6428571428571423,-0.6185895741317422L0,0L0.7142857142857139,-0.49487165930539384L0.7857142857142854,-0.3711537444790455L0,0L0.857142857142857,-0.24743582965269706L0.9285714285714284,-0.12371791482634864L0,0" stroke="none"></path>

  </svg>
`;

const lRatios = [[ 0, 0, ], [ 1, 0, ], [ 1, 1, ], [ 2 / 9, 1, ], [ 0, 0, ], ];
const rRatios = [[ 0, 0, ], [ 7 / 9, 0, ], [ 1, 1, ], [ 0, 1, ], [ 0, 0, ], ];
const dRatios = [[ 7 / 9, 0, ], [ 1, 1, ], [ 2 / 9, 1, ], [ 0, 0, ], ];
const makePath = pts => pts.map(r => r.map(v => `${Math.floor(v * 100)}%`).join(' ')).join(',');

const cardStyle = {
  backgroundImage: 'url(/images/hex05.svg)',
  backgroundPosition: 'left',
  backgroundColor: 'rgba(66,66,66,0.85)',
  backgroundSize: '200% 200%',
  backgroundRepeat: 'no-repeat',
};

const right = ({
  backgroundImage: 'url(/images/hex05.svg)',
  backgroundPosition: 'top left ',
  backgroundSize: '200% 200%',
  backgroundRepeat: 'no-repeat',
  paddingRight: '16%',
  clipPath: `polygon(${makePath(rRatios)})`,
});

const left = ({
  backgroundImage: 'url(/images/hex05.svg)',
  backgroundPosition: 'top left ',
  backgroundSize: '200% 200%',
  backgroundRepeat: 'no-repeat',
  paddingLeft: '16%',
  clipPath: `polygon(${makePath(lRatios)})`,
});
const double = ({
  backgroundImage: 'url(/images/hex05.svg)',
  backgroundPosition: 'top left ',
  backgroundSize: '200% 200%',
  backgroundRepeat: 'no-repeat',
  paddingRight: '16%',
  paddingLeft: '16%',
  clipPath: `polygon(${makePath(dRatios)})`,
});

export const HexCard = props => (
  
  <Card {...props} style={cardStyle}/>

);
export const LeftHex = props => (
  
  <Card {...props} style={left}/>

);

export const RightHex = props => (
  
  <Card {...props} style={right}/>

);

export const DoubleHex = props => (
  
  <Card {...props} style={double}/>

);

export default RightHex;
