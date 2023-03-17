import React from 'react';
import {useSharedValue} from "react-native-reanimated";
import {StyleSheet, View} from "react-native";

const CityItemSkeleton = ({}) => {
  const opacity = useSharedValue(1)
    return (
      <View style={styles.item}>
        <Animated.View style={[styles.imageLoading, opacity]} />
        <View style={{height: 20, width: '50%', backgroundColor: 'gainsboro'}} />
      </View>
    )
  }

export default CityItemSkeleton;
// by Rokas with ❤️

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'column',
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 10,
  },
  imageLoading: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    backgroundColor: 'gray',
  },
  name: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
});
