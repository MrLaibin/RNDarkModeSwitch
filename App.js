/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {View, Text, StatusBar, useColorScheme} from 'react-native';
import MyFIrstView from './MyFIrstView';
const ThemeContext = React.createContext('light');
import {Appearance, AppearanceProvider} from 'react-native-appearance';
import {IBUThemeContext, IBUThemeProvider} from './src/IBUThemeProvider';
import MyClass from './src/MyClass';
export const LoginContext = React.createContext(null);

const user = {
  isLoggedIn: true,
  username: 'test',
};

Appearance.getColorScheme();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      user: user,
    };
  }
  componentDidMount() {
    console.log('component did');
  }
  componentWillUnmount() {}

  render() {
    return (
      <AppearanceProvider>
        <IBUThemeProvider>
          <MyClass>
            <Text> my class Text</Text>
          </MyClass>
          <Test />
        </IBUThemeProvider>
      </AppearanceProvider>
    );
  }
}

function Test() {
  const colorScheme = useColorScheme();
  useEffect(() => {
    Appearance.addChangeListener((preferences) => {
      console.log(preferences);
    });
  }, []);
  return (
    <View style={{padding: 20}}>
      <Text>{colorScheme}</Text>
    </View>
  );
}
