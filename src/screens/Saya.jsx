import {StyleSheet, Text, View, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Saya = () => {
  const alertLangganan = () =>
    Alert.alert('Langganan', 'Anda sudah berlangganan', [{text: 'OK'}]);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.accountContainer}>
          <MaterialCommunityIcons
            name="account-circle"
            size={75}
            color="salmon"
          />

          <View style={styles.accountName}>
            <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
              Robby Wahyudi
            </Text>

            <TouchableOpacity
              onPress={alertLangganan}
              style={{backgroundColor: 'white', borderRadius: 50}}>
              <Text style={styles.langganan}>Sudah Berlangganan {' >'}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.options}>
          <TouchableOpacity>
            <Feather name="bell" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="settings" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Saya;

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
  },

  accountContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },

  accountName: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },

  langganan: {
    color: 'black',
    fontSize: 10,
    fontWeight: 'bold',
    padding: 6,
    textAlign: 'center',
  },

  options: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
  },
});
