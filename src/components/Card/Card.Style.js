import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    margin: 5,
    width: (Dimensions.get('window').width - 40) / 2,
    height: 250,
  },
});

export default styles;
