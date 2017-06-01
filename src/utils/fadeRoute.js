import React from 'react';
import { Route, } from 'react-router-dom';
import { FadeIn, } from 'animate-components';

export const FadeRoute = props => (
  <Route
    {...props} component={rprops =>
      (<FadeIn duration="250ms" timingFunction="ease-in">
        <props.component {...rprops} />
      </FadeIn>)
    }
  />);
