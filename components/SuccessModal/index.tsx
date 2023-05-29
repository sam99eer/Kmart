import ModalWrapper from '@components/ModalWrapper';
import PrimaryButton from '@components/PrimaryButton';
import styles from '@styles/CommonModal';
import SuccessTick from '@svg/SuccessTick';
import React from 'react';
import { Text, View } from 'react-native';

const SuccessModal = (props: {
    heading: string;
    text: string;
    btnText: string;
    onSuccess: () => void;
}) => {
    return (
        <ModalWrapper>
            <View style={styles.container}>
                <SuccessTick />
                <Text style={styles.heading}>{props.heading}</Text>
                <Text style={styles.text}>{props.text}</Text>
                <View style={styles.btnContainer}>
                    <PrimaryButton
                        text={props.btnText}
                        onPress={props.onSuccess}
                    />
                </View>
            </View>
        </ModalWrapper>
    );
};

export default SuccessModal;
