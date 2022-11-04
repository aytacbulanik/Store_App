import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Card = ({cards}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{cards.username}</Text>
      </View>
      <View>
        <Text>{cards.email}</Text>
        <Text>{cards.address.city}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    margin: 8,
    padding: 5,
    borderRadius: 10,
  },
});
export default Card;
