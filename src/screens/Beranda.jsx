import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Beranda = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.menu}>
          <Feather name="menu" size={28} color="white" />
          <Text style={styles.menuText}>Untuk Anda</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{right: -2}}>
          <Feather name="search" size={26} color="white" />
        </TouchableOpacity>
      </View>

      <Image
        source={{
          uri: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Djo_-_End_of_Beginning_single_cover.png',
        }}
        style={styles.songImage}
      />
    </View>
  );
};

export default Beranda;

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
    marginBottom: 18,
  },

  menu: {
    left: -2,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  menuText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 3,
  },

  songImage: {width: '100%', height: 370},
});
