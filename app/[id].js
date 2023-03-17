import React from 'react';
import {useRouter, useSearchParams} from "expo-router";
import {cities} from "../data/cities";
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Ionicons} from "@expo/vector-icons";
import Animated from "react-native-reanimated";
const CityDetails = ({}) => {
  const {id} = useSearchParams()
  const city = cities.find(city => city.id == id)
  const router = useRouter()
  return (
    <View style={styles.container}>
      <Animated.Image sharedTransitionTag={"image"} style={styles.image} source={{ uri: city?.image }} />
      <View style={styles.details}>
        <Text style={styles.name}>{city?.name}</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
          nec diam vitae tincidunt. Pellentesque hendrerit felis sed ante
          tristique, eu pharetra turpis rutrum. Nunc tincidunt ex ut elit
          imperdiet rhoncus.
        </Text>
      </View>
      <TouchableOpacity onPress={() => router.back()} className="absolute top-16 left-10 bg-black rounded-md p-1" activeOpacity={0.7}>
        <Ionicons name="arrow-back-circle-sharp" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default CityDetails;
// by Rokas with ❤️

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '65%',
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
