import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const Saya = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{display: 'flex', flexDirection: 'row'}}>
          <MaterialCommunityIcons
            name="account-circle"
            size={50}
            color="white"
          />

          <View>
            <Text>Robby Wahyudi</Text>
            <TouchableOpacity>
              <Text>Sudah Berlangganan </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <TouchableOpacity>
            <Feather name="menu" size={28} color="white" />
          </TouchableOpacity>

          <TouchableOpacity>
            <Feather name="menu" size={28} color="white" />
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

  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
});
