import {View, StyleSheet, Image, Text, FlatList, TouchableOpacity} from 'react-native';
import {cities} from "../data/cities";
import {Link} from "expo-router";

export default function Page() {
  const numColumns = 2;
  const renderItem = ({ item }) => (
    <Link href={`/${item.id}`} asChild>
      <TouchableOpacity activeOpacity={0.7} style={styles.item}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </Link>
  );

  const keyExtractor = (item, index) => index.toString();
  return (
    <View className="bg-white flex-1 pt-16">
      <FlatList
        data={cities}
        renderItem={renderItem}
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
