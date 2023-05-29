import ErrorModal from '@components/ErrorModal';
import PrimaryButton from '@components/PrimaryButton';
import SuccessModal from '@components/SuccessModal';
import TextField from '@components/TextField';
import { IMAGES } from '@constants/Images';
import { IRegister } from '@models/data/RegisterModel';
import { ISuccessError } from '@models/data/SuccessErrorModel';
import { SCREENS } from '@models/screens';
import styles from '@styles/Details';
import * as SecureStore from 'expo-secure-store';
import React, { useState } from 'react';
import { Image, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Details = () => {
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
                        setLoading(false);
                        return;
                    }
                    SecureStore.setItemAsync(
                        'details',
                        JSON.stringify(data)
                    ).then(async () => {
                        parsedUsers.push(data);
                        SecureStore.setItemAsync(
                            'users',
                            JSON.stringify(users)
                        ).then(() =>
                            setModal((oldState) => ({
                                ...oldState,
                                success: {
                                    isVisible: true,
                                    msg: 'You have successfully registered your account with Kmart',
                                    btnText: 'Go to Home',
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
            .finally(() => {
                console.log('final block');

                setLoading(false);
            });
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

    const navigateHandler = (screen: SCREENS) => {};

    return (
        <>
            {modal.success.isVisible ? (
                <SuccessModal
                    heading={modal.success.heading}
                    text={modal.success.msg}
                    btnText={modal.success.btnText}
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
                        <Text style={styles.alreadyAcct}>
                            Already have an account?{' '}
                            <Text style={styles.signUp}>Sign In</Text>
                        </Text>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </>
    );
};

export default Details;
