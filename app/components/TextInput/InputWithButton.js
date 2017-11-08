
import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableHighlight, TextInput } from 'react-native';


import styles from './styles';

const InputWithButton = ({ onPress, buttonText, editable = true }) => null;

InputWithButton.propTypes ={
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable:  PropTypes.bool
};

export default InputWithButton;