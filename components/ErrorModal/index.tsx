import ModalWrapper from '@components/ModalWrapper';
import PrimaryButton from '@components/PrimaryButton';
import styles from '@styles/CommonModal';
import VeggieBasket from '@svg/VeggieBasket';
import React from 'react';
import { Text, View } from 'react-native';

const ErrorModal = (props: {
    heading: string;
    text: string;
    btnText: string;
    onClose: () => void;
}) => {
    return (
        <ModalWrapper>
            <View style={styles.container}>
                <VeggieBasket />
                <Text style={styles.heading}>{props.heading}</Text>
                <Text style={styles.text}>{props.text}</Text>
                <View style={styles.btnContainer}>
                    <PrimaryButton
                        text={props.btnText}
                        onPress={props.onClose}
                        error
                    />
                </View>
            </View>
        </ModalWrapper>
    );
};

export default ErrorModal;
