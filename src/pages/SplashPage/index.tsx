import {
  Image,
  StyleSheet,
  View
} from 'react-native';
import React, {useContext, useEffect, useMemo, useRef} from 'react';
import { ScreenHeight, ScreenWidth } from '../../../components/shared';
import {connect} from 'react-redux';
const Pure = ({
  navigation,
  ...props
}) => {
  const styles = StyleSheet.create({
    container: {
      height: ScreenHeight,
      width: ScreenWidth,
    },
    
  });
  useEffect(() => {
    setTimeout(()=>{
      navigation.navigate('LoadingPage')
    },
      2000
  )
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/imgs/splashbg.png')} style={{width:'100%', height:'100%'}}/>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
  
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

const SplashPage = connect(mapStateToProps, mapDispatchToProps)(Pure);
export default SplashPage;
