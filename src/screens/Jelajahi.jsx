import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Jelajahi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.search}>
          <Feather name="search" size={24} color="gray" />
          <Text style={styles.searchText}>Lagu</Text>
        </View>

        <TouchableOpacity>
          <MaterialCommunityIcons
            name="music-circle-outline"
            size={35}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Jelajahi;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    padding: 22,
    backgroundColor: '#191717',
  },

  headerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '85%',
    height: 38,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingStart: 10,
  },

  searchText: {
    color: 'gray',
    marginStart: 10,
  },
});
