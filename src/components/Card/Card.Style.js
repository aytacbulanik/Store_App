import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 5,
    borderRadius: 8,
    width: (Dimensions.get('window').width - 20) / 2,
  },
  large_title: {
    fontSize: 35,
    color: 'cyan',
    fontWeight: 'bold',
  },
  image: {
    width: (Dimensions.get('window').width - 60) / 2,
    height: 150,
  },
  image_view_container: {
    backgroundColor: 'white',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    margin: 5,
  },
  text_view_container: {
    margin: 5,
  },
  name_title: {
    fontSize: 18,
  },
  price_title: {
    fontWeight: 'bold',
  },
  stock_title: {
    color: 'red',
    fontSize: 17,
    fontWeight: '600',
  },
});

export default styles;
