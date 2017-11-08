import React, { Component } from 'react';
import { View, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { Header } from '../components/Header';
// import { LastConverted } from '../components/Text';

import { InputWithButton } from '../components/TextInput';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.74';
const TEMP_CONVERSION_RATE = 0.7974;
const TEMP_CONVERSION_DATE = new Date();

class Home extends Component {

  handlePressBaseCurrency = () => {
    console.log('press base');
    this.props.navigation.navigate('CurrencyList', {title: 'Base Currency'})
  }

  handlePressQuoteCurrency = () => {
    console.log('press quote');
    this.props.navigation.navigate('CurrencyList', {title: 'Quote Currency'})
    
  }

  handleTextChange = (text) => {
    console.log('change text', text);
  }

  handleOptionsPress= () => {
    console.log('handle Options press');
    this.props.navigation.navigate('Options', {title: 'Options'})
  }

  render() {
    return (
    <Container>
      <StatusBar
        translucent={false}
        barStyle="light-content" 
      />
      <Header onPress={this.handleOptionsPress} />
      <Logo />
      <InputWithButton 
        buttonText={TEMP_BASE_CURRENCY}
        onPress={this.handlePressBaseCurrency}
        defaultValue={TEMP_BASE_PRICE }
        keyboardType="numeric" 
        onChangeText={this.handleTextChange}
      />
      <InputWithButton 
        buttonText={TEMP_QUOTE_CURRENCY}
        onPress={this.handlePressQuoteCurrency}
        editable={false}
        value={TEMP_QUOTE_PRICE}
      />
      
    </Container>
    );
  }
}


export default Home;

