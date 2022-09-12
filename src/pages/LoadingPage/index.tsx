import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {FlatList, Text, StyleSheet} from 'react-native';
import {View} from 'react-native';

import {getDataList} from '../../model/togetherWeModel';
import {colors} from '../../../components/colors';

import DonateCardItem from '../../../components/DonateCardItem';

const Pure = ({dataList, getDataList, navigation, ...props}) => {
  useEffect(() => {
    getDataList({pagination: 1, limit: 10});
  }, []);

  useEffect(() => {
    console.log('zzzzzzzzzzzzzzzzzzzzzzzzz', JSON.stringify(dataList));
  }, [dataList]);

  const renderItem = (item, index, length) => {
    return (
      <View style={{flex: 1}}>
        <DonateCardItem
          title={item.title}
          image={item.urls.regular}
          amount={item.target_amount}
          navigation={navigation}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={dataList}
        numColumns={1}
        renderItem={({item, index}) => renderItem(item, index, dataList.length)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardItemContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: 25,
    gap: 17,
    position: 'absolute',
    left: 20,
    top: 20,
    right: 20,
    backgroundColor: colors.white,
    borderRadius: 10,
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
    color: colors.secondaryblack,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

const mapStateToProps = state => {
  return {
    dataList: state.app.dataList,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getDataList: payload => dispatch(getDataList(payload)),
  };
};

const LoadingPage = connect(mapStateToProps, mapDispatchToProps)(Pure);
export default LoadingPage;
