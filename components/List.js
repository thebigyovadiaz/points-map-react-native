import React from 'react';
import { FlatList, Text, StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({ listPoints, closeModal }) => {
  return (
    <>
      <View style={styles.list}>
        <FlatList
          data={listPoints.map(point => point.name)}
          renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View>}
          keyExtractor={item => item}
        />
      </View>
      <View styles={styles.button}>
        <Button onPress={closeModal} title="Close" />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingBottom: 25
  },
  list: {
    height: Dimensions.get('window').height - 225
  },
  item: {
    borderBottomWidth: 1,
    borderColor: '#ccc',
    height: 40,
    justifyContent: 'center'
  }
})
