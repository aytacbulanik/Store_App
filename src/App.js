import {View, Text, Button, SafeAreaView, FlatList} from 'react-native';
import React, {useState} from 'react';
import axios from 'axios';
import Card from './components/Card';

const App = () => {
  const [userList, setUserList] = useState([]);
  async function getData() {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setUserList(response.data);
  }
  const renderItem = ({item}) => <Card cards={item} />;
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        <FlatList data={userList} renderItem={renderItem} />
        <Button title="GetData" onPress={getData} />
      </View>
    </SafeAreaView>
  );
};

export default App;
