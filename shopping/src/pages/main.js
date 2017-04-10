import React, { Component } from 'react';
import {
  AppState,
  StyleSheet,
  View,
  Button,
  Text
} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
  }
});

import ShopCart from './shop';

export default class App extends Component {
  gotoShopCart = () => {
    const { navigator } = this.props;
    navigator.push({
      component: ShopCart,
    });
  };
  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.text}>这是首页</Text>
        <Button onPress={this.gotoShopCart} title="点这里跳转到购物车" />
      </View>
    );
  }
}
