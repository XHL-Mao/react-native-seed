// @flow
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';


type Props = {};

@observer class App extends Component<Props> {

  @observable value = 1;

  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterLabel}>{this.value}</Text>
        <Button
          onPress={() => { this.onTapPlus() }}
          title="+"
        />
        <Button
          onPress={() => { this.onTapMinus() }}
          title="-"
        />

      </View>
    );
  }

  onTapPlus() {
    this.value += 1;
  }

  onTapMinus() {
    this.value -= 1;
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  counterLabel: {
    fontSize: 48,
    textAlign: 'center',
    margin: 10,
    color: '#fff'
  }
});

export default App;
