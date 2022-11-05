import {
  View,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import Card from './components/Card';


const App = () => {

  return (
    <SafeAreaView>
      <View>
        <Card />
      </View>
    </SafeAreaView>
  );
};

export default App;
