import Header from '@components/Header'
import PrimaryButton from '@components/PrimaryButton'
import SecondaryButton from '@components/SecondaryButton'
import { COLORS } from '@constants/Colors'
import { IRegister } from '@models/data/RegisterModel'
import { personalDetailsActions } from '@store/actions'
import { StoreModel } from '@store/store'
import styles from '@styles/EditDetails'
import * as SecureStore from 'expo-secure-store'
import React, { useState } from 'react'
import { Keyboard, TextInput, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from 'react-redux'

const EditDetails = () => {

    const personalDetails = useSelector((state: StoreModel) => state.personalDetailsReducer);
    const dispatch = useDispatch();

    const [name, setName] = useState(!!personalDetails.name ? personalDetails.name : '')
    const [loading, setLoading] = useState(false);

    const isNameChanged = name !== personalDetails.name;

    const cancelHandler = () => {
        if (isNameChanged) {
            setName(!!personalDetails?.name ? personalDetails.name : '');
        }
        Keyboard.dismiss()
    }

    const saveHandler = () => {
        if (!isNameChanged) return;

        setLoading(true);
        const formattedData: IRegister = {
            name,
            phone: !!personalDetails?.phone ? personalDetails.phone : ''
        };

        SecureStore.setItemAsync("details", JSON.stringify(formattedData))
            .then(() => dispatch(personalDetailsActions.setDetails(formattedData)))
            .catch(err => console.log(err))
            .finally(() => {
                Keyboard.dismiss();
                setLoading(false);
            })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header title='Edit Details' />
            <View style={styles.subContainer}>
                <TextInput
                    value={name}
                    onChangeText={setName}
                    placeholder='Your Name'
                    placeholderTextColor={COLORS.grey}
                    style={[styles.textBox, styles.enabled]}
                />
                <TextInput
                    value={!!personalDetails?.phone ? personalDetails.phone : ''}
                    placeholder='Mobile Number'
                    placeholderTextColor={COLORS.grey}
                    style={styles.textBox}
                    editable={false}
                />
                <View style={styles.buttonHolder}>
                    <SecondaryButton
                        text='Cancel'
                        onPress={cancelHandler}
                        colView
                    />
                    {isNameChanged ? <PrimaryButton
                        text='Save'
                        onPress={saveHandler}
                        isLoading={loading}
                        colView
                    /> : null}
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditDetails