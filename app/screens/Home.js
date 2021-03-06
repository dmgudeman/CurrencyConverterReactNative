import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';

import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';


class Home extends Component {

  handlePressBaseCurrency = () => {
    console.log('press base');
  }

  handlePressQuoteCurrency = () => {
    console.log('press quote');
  }

  render() {
    return (
    <Container>
      <StatusBar
        translucent={false}
        barStyle="light-content" 
      />
      <Logo />
      <InputWithButton 
        buttonText={TEMP_BASE_CURRENCY}
        onPress={this.handlePressBaseCurrency}
      />
      <InputWithButton 
        buttonText={TEMP_QUOTE_CURRENCY}
        onPress={this.handlePressQuoteCurrency}
        editable={false}
      />
    </Container>
    );
  }
}

export default Home;

