import React from 'react';
import {useSearchParams} from "expo-router";
import {cities} from "../data/cities";
import { Image, StyleSheet, Text, View } from 'react-native';

const CityDetails = ({}) => {
  const {id} = useSearchParams()
  const city = cities.find(city => city.id === id)
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: city.image }} />
      <View style={styles.details}>
        <Text style={styles.name}>{city.name}</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          nec diam vitae tincidunt. Pellentesque hendrerit felis sed ante
          tristique, eu pharetra turpis rutrum. Nunc tincidunt ex ut elit
          imperdiet rhoncus.
        </Text>
      </View>
    </View>
  );
};

export default CityDetails;
// by Rokas with ❤️

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
  },
});
