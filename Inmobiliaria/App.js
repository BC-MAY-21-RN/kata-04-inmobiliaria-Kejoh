/*
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import InmuebleDet from './src/InmuebleDet';
import colors from './utils/colors';

const App = () => {

  return (
    <View>
      <InmuebleDet />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.BG_IDT,
    flex: 1,
  },
});

export default App;
