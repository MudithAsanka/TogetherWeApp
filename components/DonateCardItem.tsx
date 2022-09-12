import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from './colors';
import PayCardItem from './PayCardItem';

const DonateCardItem = ({title, image, amount, navigation, ...props}) => {
  const styles = StyleSheet.create({
    cardItemContainer: {
      display: 'flex',
      flex: 1,
      flexDirection: 'column',
      alignItems: 'flex-start',
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
    },
    valueText: {
      fontFamily: 'CircularStd-Medium',
      fontSize: 20,
      lineHeight: 30,
      color: colors.mainblack,
    },
    image: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: 330,
      height: 200,
      borderRadius: 10,
    },
  });
  const [showPayCardItem, setShowPayCardItem] = useState(false);
  return (
    <>
      {!showPayCardItem ? (
        <>
          <View style={styles.cardItemContainer}>
            <Image source={{uri: image}} style={styles.image} />
            <Text style={styles.cardTitle}>{title}</Text>

            {/* Slider */}

            <Text style={styles.valueText}>${amount}</Text>
            <Text style={{color: colors.secondaryblack, paddingBottom: 10}}>
              Raised
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                setShowPayCardItem(true);
              }}>
              <Text style={styles.btnText}>Donate Now</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <PayCardItem />
        </>
      )}
    </>
  );
};

export default DonateCardItem;
