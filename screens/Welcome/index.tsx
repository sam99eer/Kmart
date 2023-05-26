import PrimaryButton from '@components/PrimaryButton';
import { IMAGES } from '@constants/Images';
import { WelcomeScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/Welcome';
import WhiteCarrot from '@svg/WhiteCarrot';
import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = ({ navigation }: WelcomeScreenProps) => {
    return (
        <ImageBackground
            source={IMAGES.Welcome}
            style={styles.container}
            resizeMode='cover'
        >
            <SafeAreaView style={styles.safeAreaContainer}>
                <WhiteCarrot />
                <Text style={styles.heading}>Welcome to KMart</Text>
                <Text style={styles.subheading}>
                    Get your groceries as fast as in an hour
                </Text>
                <View style={styles.btnContainer}>
                    <PrimaryButton text='Get Started' onPress={() => {}} />
                </View>
            </SafeAreaView>
        </ImageBackground>
    );
};

export default Welcome;
