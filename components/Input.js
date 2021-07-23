import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';

export default ({ title, ...rest }) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput style={styles.top} {...rest} />
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    height: 40
  },
  top: {
    paddingTop: 5
  }
})
