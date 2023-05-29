import styles from '@styles/ModalWrapper';
import React, { ReactNode } from 'react';
import { Modal, View } from 'react-native';

const ModalWrapper = (props: { children: ReactNode }) => {
    return (
        <Modal visible statusBarTranslucent transparent animationType='fade'>
            <View style={styles.container}>{props.children}</View>
        </Modal>
    );
};

export default ModalWrapper;
