import TextField from '@components/TextField';
import { IMAGES } from '@constants/Images';
import styles from '@styles/Details';
import React from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = () => {
    return (
        <ScrollView style={styles.container}>
            <Image source={IMAGES.Veggies} />
            <SafeAreaView style={styles.safeAreaContainer}>
                <Text style={styles.heading}>Get your registered with us</Text>
                <View style={styles.fields}>
                    <TextField
                        label='Full Name'
                        value=''
                        onChange={() => {}}
                        maxLength={40}
                    />
                    <TextField
                        label='Mobile Number'
                        value=''
                        onChange={() => {}}
                        maxLength={10}
                        isNumeric
                    />
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

export default Details;
