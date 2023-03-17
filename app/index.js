import {View, StyleSheet, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import {cities} from "../data/cities";
import {Link} from "expo-router";
import Animated from "react-native-reanimated";
import {useState} from "react/cjs/react.production.min";
export default function Page() {
  const numColumns = 2;
  const CityItem = ({ item }) => (
    <Link href={`/${item.id}`} asChild>
      <TouchableOpacity activeOpacity={0.7} style={styles.item}>
        <Animated.Image sharedTransitionTag={`image-${item.id}`} style={styles.image} source={{ uri: item.image }} />
        <Animated.Text sharedTransitionTag={`title-${item.name}`} style={styles.name}>{item.name}</Animated.Text>
      </TouchableOpacity>
    </Link>
  );

  const CityItemSkeleton = () => (
    <View style={styles.item}>
      <View style={styles.imageLoading} />
      <View style={{height: 20, width: '50%', backgroundColor: 'gainsboro'}}/>
    </View>
  );
  const keyExtractor = (item, index) => index.toString();
  const [loading, setLoading] = useState(true);

  if(loading) {
    return (
      <View className="bg-white flex-1 pt-16">
        <FlatList
          data={Array(4)}
          renderItem={CityItemSkeleton}
          numColumns={numColumns}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
        />
      </View>
    )
  }

  return (
    <View className="bg-white flex-1 pt-16">
      <FlatList
        data={cities}
        renderItem={CityItem}
        keyExtractor={keyExtractor}
        numColumns={numColumns}
        columnWrapperStyle={styles.columnWrapper}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

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
