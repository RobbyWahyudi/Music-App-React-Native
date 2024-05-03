import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';

const Jelajahi = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.search}>
          <Feather name="search" size={24} color="gray" />
          <Text style={styles.searchText}>Lagu</Text>
        </View>

        <Feather name="music" size={26} color="white" />
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
  },

  search: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
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
