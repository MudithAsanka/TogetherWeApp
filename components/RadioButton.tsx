import React, {useContext} from 'react';
import {Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { colors } from './colors';


const RadioButton = ({
  onPress,
  checked,
  children = null,
  disabled,
  textStyle = null,
  isMainMenu = false,
  radioViewStyle = null,
  radioItemStyle = {},
}) => {

  const styles = StyleSheet.create({
    radioButtonView: {
      flexDirection: 'row',
      marginVertical: 5,
      flex: 1,
      alignItems: 'center',
    },
    mainMenuCircle: {
      height: 24,
      width: 24,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#FFFFFF',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
    },
    circle: {
      height: 20,
      width: 20,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: !disabled ? '#CED7E6' : '#CED7E6',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 10,
      backgroundColor: '#CED7E6',
    },
    checkedCircleBorder: {
      borderColor: !disabled ? '#B2B4BA' : '#CED7E6',
    },
    checkedCircle: {
      width: 12,
      height: 12,
      borderRadius: 7,
      backgroundColor: !disabled ? '#B2B4BA' : '#CED7E6',
    },
    checkedCircleForMainMenu: {
      width: 16,
      height: 16,
      borderRadius: 7,
      backgroundColor: colors.white,
    },
    disabled: {
      borderColor: !disabled ? colors.mainblack : '#CED7E6',
    },
    disabledText: {
      color: !disabled ? colors.secondaryblack : '#CED7E6',
      flexWrap: 'wrap',
      fontSize: 20
    },
  });

  return (
    <View
      style={[
        styles.radioButtonView,
        radioViewStyle != null ? radioViewStyle : {},
      ]}>
      <TouchableOpacity
        style={[
          isMainMenu === false ? styles.circle : styles.mainMenuCircle,
          disabled ? styles.disabled : {},
          checked && styles.checkedCircleBorder,
          radioItemStyle,
        ]}
        onPress={onPress}
        activeOpacity={disabled ? 0 : 0.2}
        disabled={disabled}>
        {isMainMenu === false ? (
          checked ? (
            <View style={styles.checkedCircle} />
          ) : (
            <View />
          )
        ) : checked ? (
          <View style={styles.checkedCircleForMainMenu} />
        ) : (
          <View style={styles.checkedCircle} />
        )}
      </TouchableOpacity>
      {children != null && (
        <TouchableOpacity
          style={[{flex: 1}, Platform.OS === 'ios' && {minHeight: 30}]}
          onPress={onPress}
          activeOpacity={disabled ? 0 : 0.2}
          disabled={disabled}>
          <Text style={[styles.disabledText, textStyle !== null && textStyle]}>
            {children}
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default RadioButton;
