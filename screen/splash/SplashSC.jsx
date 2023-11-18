import React, { useEffect } from 'react'
import { View, Image, Text } from 'react-native';
import styles from './splash.style';
import {LogoMerchant} from '../../constants/images';

const SplashSC = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Login')
        }, 3000)
    })
    
    return (
        <View>
            <View style={styles.flexRoot}>
                <Image source={LogoMerchant} />
            </View>
            <View>
                <Text style={styles.Text4}>Powered by Said Amirudin</Text>
            </View>
        </View>
    )
}

export default SplashSC