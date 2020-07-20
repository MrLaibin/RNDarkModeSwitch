/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Appearance, Text, StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from './src/ThemeProvider';
import MyClass from './src/MyClass';
export const LoginContext = React.createContext(null);

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ThemeProvider>
        <MyClass>
          <Text> my class Text</Text>
        </MyClass>
      </ThemeProvider>
    );
  }
}
