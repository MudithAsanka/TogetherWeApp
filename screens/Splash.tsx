import React, { FunctionComponent, useEffect, useState } from 'react';
import { Platform, View, StyleSheet, Animated, Text, Image, TouchableOpacity, Alert } from 'react-native';
import styled from 'styled-components/native';


// custom components
import { colors } from '../components/colors';
import { Container } from '../components/shared';


const Splash: FunctionComponent = () => {
    return (
        <>
            <Text style={{fontFamily:'CircularStd-Medium'}}>Splash</Text>
        </>
    );
};

export default Splash;



