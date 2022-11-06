import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Card.Style';

const Card = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_view_container}>
        <Image style={styles.image} source={{uri: product.imgURL}} />
      </View>
      <View style={styles.text_view_container}>
        <Text style={styles.name_title}>{product.title}</Text>
        <Text style={styles.price_title}>{product.price}</Text>
        {product.inStock ? (
          <Text style={styles.stock_title}> Stokta Yok</Text>
        ) : null}
      </View>
    </View>
  );
};

export default Card;
