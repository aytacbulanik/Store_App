import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    margin: 5,
    borderRadius: 10,
    width: (Dimensions.get('window').width - 20) / 2,
  },
  large_title: {
    fontSize: 35,
    color: 'cyan',
    fontWeight: 'bold',
  },
  image: {
    height: Dimensions.get('window').height / 4,
  },
  image_view_container: {
    backgroundColor: 'white',
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
  text_input: {
    backgroundColor: 'lightgray',
    height: 40,
    borderRadius: 8,
    margin: 5,
    padding: 5,
  },
});

export default styles;
