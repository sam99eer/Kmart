import { COLORS } from '@constants/Colors';
import styles from '@styles/TextField';
import React from 'react';
import { Text, TextInput, View } from 'react-native';

const TextField = (props: {
    value: string;
    onChange: (text: string) => void;
    label: string;
    maxLength?: number;
    isNumeric?: boolean;
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{props.label}</Text>
            <TextInput
                value={props.value}
                onChangeText={props.onChange}
                keyboardType={!!props.isNumeric ? 'number-pad' : undefined}
                maxLength={!!props.maxLength ? props.maxLength : undefined}
                placeholder={props.label}
                placeholderTextColor={COLORS.grey}
                style={styles.textBox}
            />
        </View>
    );
};

export default TextField;
