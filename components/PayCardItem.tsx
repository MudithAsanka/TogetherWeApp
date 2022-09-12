import {StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import React, {useState} from 'react';
import {colors} from './colors';
import RadioButton from './RadioButton';
import SuccessCardItem from './SuccessCardItem';

const PayCardItem = () => {
  const [selected, setSelected] = useState(false);

  const styles = StyleSheet.create({
    cardItemContainer: {
      display: 'flex',
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
      backgroundColor: colors.yellow,
      borderRadius: 10,
    },
    closeButton: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 15,
      marginBottom: 10,
      gap: 10,
      width: 24,
      height: 24,
      backgroundColor: colors.backgroundgrey,
      borderRadius: 20,
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
      color: colors.secondaryblack,
    },
    radioButtonContainer: {
      flex: 1,
      //display: 'flex',
      // flexDirection: 'row',
      // alignItems: 'flex-start',
      padding: 15,
    },
  });

  const renderRadioButtonValues = (item, index) => {
    return (
      <View style={{flex: 1, width: 100}}>
        <RadioButton
          onPress={() => {
            setSelected(item);
          }}
          checked={item === selected}>
          {item}
        </RadioButton>
      </View>
    );
  };

  const [showSuccessCardItem, setShowSuccessCardItem] = useState(false);

  return (
    <>
      {!showSuccessCardItem ? (
        <>
          <View style={styles.cardItemContainer}>
            <View style={{width: '100%', alignItems: 'flex-end'}}>
              <TouchableOpacity style={styles.closeButton} onPress={() => {}} />
            </View>
            <Text style={styles.cardTitle}>
              Select the amount that you want to donate{' '}
            </Text>
            <View style={styles.radioButtonContainer}>
              <FlatList
                data={[10, 20, 30, 40]}
                numColumns={1}
                renderItem={({item, index}) =>
                  renderRadioButtonValues(item, index)
                }
              />
            </View>
            <View style={{flex: 1}}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  setShowSuccessCardItem(true);
                }}>
                <Text style={styles.btnText}>Pay Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      ) : (
        <>
          <SuccessCardItem />
        </>
      )}
    </>
  );
};

export default PayCardItem;
