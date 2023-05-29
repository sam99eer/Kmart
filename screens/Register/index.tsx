import ErrorModal from '@components/ErrorModal';
import PrimaryButton from '@components/PrimaryButton';
import SuccessModal from '@components/SuccessModal';
import TextField from '@components/TextField';
import { IMAGES } from '@constants/Images';
import { IRegister } from '@models/data/RegisterModel';
import { ISuccessError } from '@models/data/SuccessErrorModel';
import { SCREENS } from '@models/screens';
import { RegisterScreenProps } from '@models/screens/StackScreens';
import styles from '@styles/Register';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = ({ navigation }: RegisterScreenProps) => {
    const [data, setData] = useState<IRegister>({
        phone: '',
        name: '',
    });

    const [modal, setModal] = useState<ISuccessError>({
        error: {
            isVisible: false,
            msg: '',
            heading: '',
            btnText: '',
        },
        success: {
            isVisible: false,
            msg: '',
            heading: '',
            btnText: '',
        },
    });

    const [loading, setLoading] = useState(false);

    const changeHandler = (uid: keyof IRegister, text: string) => {
        setData((oldState) => ({
            ...oldState,
            [uid]: text,
        }));
    };

    const signUpHandler = () => {
        if (data.name.trim().length < 1) {
            setModal(oldState => ({
                ...oldState,
                error: {
                    isVisible: true,
                    btnText: 'Go Back',
                    heading: 'Invalid Name',
                    msg: 'Please enter a valid Name'
                }
            }))
            return;
        }

        if (data.phone.trim().length !== 10) {
            setModal(oldState => ({
                ...oldState,
                error: {
                    isVisible: true,
                    btnText: 'Go Back',
                    heading: 'Invalid Mobile Number',
                    msg: 'Please enter a valid 10 digits Mobile Number'
                }
            }))
            return;
        }
        setLoading(true);
        SecureStore.getItemAsync('users')
            .then(
                (users) => {
                    const parsedUsers: IRegister[] = !!users
                        ? JSON.parse(users)
                        : [];
                    const checkUser = parsedUsers?.findIndex(
                        (item) => item.phone === data.phone
                    );
                    if (checkUser !== -1) {
                        setModal((oldState) => ({
                            ...oldState,
                            error: {
                                isVisible: true,
                                msg: 'You already have an account with us! Please tap on login to proceed.',
                                btnText: 'Go Back',
                                heading: 'Already Registered',
                            },
                        }));
                        return;
                    }
                    SecureStore.setItemAsync(
                        'details',
                        JSON.stringify(data)
                    ).then(() => {
                        parsedUsers.push(data);
                        SecureStore.setItemAsync(
                            'users',
                            JSON.stringify(parsedUsers)
                        ).then(() =>
                            setModal((oldState) => ({
                                ...oldState,
                                success: {
                                    isVisible: true,
                                    msg: 'You have successfully registered your account with Kmart',
                                    btnText: 'Go to Login',
                                    heading: 'Registration Successful!',
                                },
                            }))
                        );
                    });
                },
                (err) => {
                    setModal((oldState) => ({
                        ...oldState,
                        error: {
                            isVisible: true,
                            msg: err?.toString(),
                            btnText: 'Go Back',
                            heading: 'Some Error occured',
                        },
                    }));
                }
            )
            .catch(err => setModal((oldState) => ({
                ...oldState,
                error: {
                    isVisible: true,
                    msg: err?.toString(),
                    btnText: 'Go Back',
                    heading: 'Some Error occured',
                },
            })))
            .finally(() => setLoading(false));
    };

    const closeModalHandler = (modalId: keyof ISuccessError) => {
        setModal((oldState) => ({
            ...oldState,
            [modalId]: {
                isVisible: false,
                msg: '',
                heading: '',
                btnText: '',
            },
        }));
    };

    const navigateHandler = () => {
        navigation.navigate(SCREENS.LOGIN);
    };

    return (
        <>
            {modal.success.isVisible ? (
                <SuccessModal
                    heading={modal.success.heading}
                    text={modal.success.msg}
                    btnText={modal.success.btnText}
                    onSuccess={navigateHandler.bind(this, SCREENS.LOGIN)}
                />
            ) : null}
            {modal.error.isVisible ? (
                <ErrorModal
                    heading={modal.error.heading}
                    text={modal.error.msg}
                    btnText={modal.error.btnText}
                    onClose={closeModalHandler.bind(this, 'error')}
                />
            ) : null}
            <ScrollView
                style={styles.container}
                contentContainerStyle={styles.contentContainer}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
            >
                <Image source={IMAGES.Veggies} />
                <SafeAreaView style={styles.safeAreaContainer}>
                    <Text style={styles.heading}>
                        Get yourself registered with us
                    </Text>
                    <View style={styles.fields}>
                        <TextField
                            label='Full Name'
                            value={data.name}
                            onChange={changeHandler.bind(this, 'name')}
                            maxLength={40}
                        />
                        <TextField
                            label='Mobile Number'
                            value={data.phone}
                            onChange={changeHandler.bind(this, 'phone')}
                            maxLength={10}
                            isNumeric
                        />
                        <PrimaryButton
                            text='Sign Up'
                            onPress={signUpHandler}
                            isLoading={loading}
                        />
                        <Text
                            style={styles.alreadyAcct}
                            onPress={navigateHandler}
                        >
                            Already have an account?{' '}
                            <Text style={styles.signUp}>Sign In</Text>
                        </Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

export default Register;
