import React from 'react';

import Home from './screens/Home';
import EStyleSheet from 'react-native-extended-stylesheet';

EStyleSheet.build({
  $primaryBlue: '#4f6D7A',
  $white: '#FFFFFF'
})

export default () => <Home />;
