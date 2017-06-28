import React from 'react';
import Card from 'material-ui/Card';

const cardStyle = ({
  backgroundImage: 'url(/images/hex05.svg)',
  backgroundPosition: 'left',
  backgroundSize: '200% 200%',
  backgroundRepeat: 'no-repeat',
});

const HexCard = props => (
  <Card {...props} style={cardStyle} />
);

export default HexCard;
