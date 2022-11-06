import {View, SafeAreaView, FlatList, Text} from 'react-native';
import React from 'react';
import Card from './components/Card';
import dataArray from './data.json';

const App = () => {
  const renderItem = ({item}) => <Card product={item} />;

  return (
    <SafeAreaView>
      <View>
        <Text> Hızla Store</Text>
        <FlatList data={dataArray} renderItem={renderItem} />
      </View>
    </SafeAreaView>
  );
};

export default App;
