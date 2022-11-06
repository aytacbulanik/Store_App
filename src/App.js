import {View, SafeAreaView, FlatList, Text} from 'react-native';
import React from 'react';
import Card from './components/Card';
import dataArray from './data.json';
import styles from './components/Card/Card.Style';

const App = () => {
  const renderItem = ({item}) => <Card product={item} />;

  return (
    <SafeAreaView>
      <View>
        <Text style={styles.large_title}> Hızla Store</Text>
        <FlatList data={dataArray} numColumns="2" renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default App;
