import ErrorModal from '@components/ErrorModal';
import PrimaryButton from '@components/PrimaryButton';
import TextField from '@components/TextField';
import { IModal } from '@models/data/IModalModel';
import { IRegister } from '@models/data/RegisterModel';
import { SCREENS } from '@models/screens';
import { LoginScreenProps } from '@models/screens/StackScreens';
import { personalDetailsActions } from '@store/actions';
import styles from '@styles/Login';
import RedCarrot from '@svg/RedCarrot';
import * as SecureStore from "expo-secure-store";
import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

const Login = ({ navigation }: LoginScreenProps) => {

    const [phone, setPhone] = useState("");
    const [loading, setLoading] = useState(false);
    const [modal, setModal] = useState<IModal>({
        isVisible: false,
        btnText: '',
        heading: '',
        msg: ''
    });

    const dispatch = useDispatch();

    const navigateHandler = (screen: SCREENS) => {
        navigation.navigate(screen);
    };

    const loginHandler = () => {
        if (phone.trim().length !== 10) {
            setModal({
                isVisible: true,
                btnText: 'Retry',
                heading: 'Invalid Mobile Number',
                msg: 'Please enter a valid Mobile Number'
            })
            return;
        }
        setLoading(true);
        SecureStore.getItemAsync("users").then(users => {
            const parsedUsers: IRegister[] = !!users ? JSON.parse(users) : [];
            const findUser = parsedUsers?.find(item => item.phone === phone);
            if (!!findUser === false) {
                setModal({
                    isVisible: true,
                    btnText: 'Go Back',
                    heading: 'Not Registered',
                    msg: 'This mobile number is not registered with us! Please Sign Up first in order to continue.'
                })
                return;
            }
            SecureStore.setItemAsync("details", JSON.stringify(findUser))
                .then(() => dispatch(personalDetailsActions.setDetails({
                    name: findUser!.name,
                    phone: findUser!.phone,
                })))
        })
            .catch(err => setModal({
                isVisible: true,
                btnText: 'Go Back',
                heading: 'Something went wrong',
                msg: err?.toString()
            }))
            .finally(() => setLoading(false));
    }

    const closeModalHandler = () => {
        setModal({
            isVisible: false,
            btnText: '',
            heading: '',
            msg: ''
        })
    }

    return (
        <>
            {modal.isVisible ? <ErrorModal btnText={modal.btnText} heading={modal.heading} text={modal.msg} onClose={closeModalHandler} /> : null}
            <SafeAreaView style={styles.container}>
                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={styles.carrotHolder}>
                        <RedCarrot />
                    </View>
                    <Text style={styles.heading}>
                        Get yourself registered with us
                    </Text>
                    <View style={styles.fields}>
                        <TextField
                            label='Mobile Number'
                            value={phone}
                            onChange={setPhone}
                            maxLength={10}
                            isNumeric
                        />
                        <PrimaryButton
                            text='Log In'
                            onPress={loginHandler}
                            isLoading={loading}
                        />
                        <Text
                            style={styles.alreadyAcct}
                            onPress={navigateHandler.bind(this, SCREENS.REGISTER)}
                        >
                            Don't have an account?{' '}
                            <Text style={styles.signIn}>Sign Up</Text>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default Login;
