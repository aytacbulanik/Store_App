import {
  View,
  Text,
  Button,
  SafeAreaView,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Card from './components/Card';

const URL = 'https://jsonplaceholder.typicode.com/users';

const App = () => {
  const [userList, setUserList] = useState([]);
  const [useActivite, setUseActivite] = useState(true);

  async function getData() {
    const response = await axios.get(URL);
    setUseActivite(false);
    setUserList(response.data);
  }
  const renderItem = ({item}) => <Card cards={item} />;

  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        {useActivite ? (
          <ActivityIndicator size={'large'} />
        ) : (
          <FlatList data={userList} renderItem={renderItem} />
        )}
      </View>
    </SafeAreaView>
  );
};

export default App;
