import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {LoginContext} from './App';
export default class MyFIrstView extends React.Component {
  render() {
    return (
      <LoginContext.Consumer>
        <View style={styles.container}>
          <Text>十六点九分{}</Text>
          <MText />
        </View>
      </LoginContext.Consumer>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
function MText(props) {
  return (
    <LoginContext.Consumer>
      {(user) => (
        <View>
          <Text>{JSON.stringify(user) + '---'}</Text>
        </View>
      )}
    </LoginContext.Consumer>
  );
}
