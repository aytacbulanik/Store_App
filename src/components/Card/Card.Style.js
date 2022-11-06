import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 5,
    borderRadius: 8,
    width: (Dimensions.get('window').width - 20) / 2,
    height: 250,
  },
  image_view_container: {},
  text_view_container: {},
  name_title: {},
  price_title: {},
  stock_title: {},
});

export default styles;
