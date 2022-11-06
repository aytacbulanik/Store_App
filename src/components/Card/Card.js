import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './Card.Style';

const Card = ({product}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_view_container}>
        <Image />
      </View>
      <View style={styles.text_view_container}>
        <Text style={styles.name_title}>{product.title}</Text>
        <Text style={styles.price_title} />
        <Text style={styles.stock_title} />
      </View>
    </View>
  );
};

export default Card;
