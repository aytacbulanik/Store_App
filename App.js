import {View, Text, Button, SafeAreaView} from 'react-native';
import React from 'react';
import axios from 'axios';

const App = () => {
  async function getData() {
    const response = await axios.get(
      //'https://ackapa20200827205202.azurewebsites.net/categories',
      'https://jsonplaceholder.typicode.com/users',
    );
    console.log(response);
  }

  return (
    <SafeAreaView>
      <View>
        <Text>App</Text>
        <Button title="GetData" onPress={getData} />
      </View>
    </SafeAreaView>
  );
};

export default App;
