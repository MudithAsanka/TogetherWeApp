import {
  Image,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {colors} from './colors';

const SucessCardItem = () => {
  const styles = StyleSheet.create({
    cardItemContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 25,
      gap: 17,
      left: 20,
      top: 20,
      right: 20,
      width: 370,
      backgroundColor: colors.white,
      borderRadius: 10,
      marginBottom: 10,
    },
    button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      gap: 10,
      width: 320,
      height: 52,
      backgroundColor: colors.purple,
      borderRadius: 10,
    },
    btnText: {
      fontFamily: 'CircularStd-Bold',
      color: colors.white,
      fontSize: 16,
    },
    cardTitle: {
      fontFamily: 'CircularStd-Bold',
      fontSize: 24,
      lineHeight: 30,
      color: colors.mainblack,
      padding: 10,
    },
    valueText: {
      fontFamily: 'CircularStd-Medium',
      fontSize: 20,
      lineHeight: 30,
      color: colors.secondaryblack,
    },
    image: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 330,
      height: 200,
      borderRadius: 10,
      padding: 10,
    },
  });

  return (
    <View style={styles.cardItemContainer}>
      <Image source={require('../assets/imgs/SuccessImg.png')} style={styles.image}/>
      <Text style={styles.cardTitle}>
        You have successfully made the donation!
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.btnText}>Done</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SucessCardItem;
