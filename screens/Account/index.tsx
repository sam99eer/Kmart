import OrderItem from "@components/OrderItem";
import SecondaryButton from "@components/SecondaryButton";
import { SCREENS } from "@models/screens";
import { cartActions, orderHistoryActions, personalDetailsActions } from "@store/actions";
import { StoreModel } from "@store/store";
import styles from "@styles/Account";
import About from "@svg/About";
import ContactCard from "@svg/ContactCard";
import Exit from "@svg/Exit";
import Help from "@svg/Help";
import Order from "@svg/Order";
import UserImg from "@svg/UserImg";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";

const Account = () => {
    const personalDetails = useSelector(
        (state: StoreModel) => state.personalDetailsReducer
    );
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);

    const logoutHandler = () => {
        setLoading(true);
        SecureStore.deleteItemAsync("details")
            .then(() => SecureStore.deleteItemAsync("orders"))
            .then(() => SecureStore.deleteItemAsync("orderHistory"))
            .catch((err) => console.log(err))
            .finally(() => {
                setLoading(false);
                dispatch(cartActions.clearCart());
                dispatch(orderHistoryActions.clearOrderHistory());
                dispatch(personalDetailsActions.removeCredentials());
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.infoRow}>
                    <View style={styles.img}>
                        <UserImg />
                    </View>
                    <View>
                        <Text style={styles.heading}>{personalDetails.name}</Text>
                        <Text style={styles.subHeading}>{personalDetails.phone}</Text>
                    </View>
                </View>

                <OrderItem
                    icon={<Order />}
                    label="Orders"
                    screen={SCREENS.ORDERS}
                />

                <OrderItem
                    icon={<ContactCard />}
                    label="Edit Details"
                    screen={SCREENS.EDIT_DETAILS}
                />

                <OrderItem
                    icon={<Help />}
                    label="FAQs"
                    screen={SCREENS.FAQs}
                />

                <OrderItem
                    icon={<About />}
                    label="About"
                    screen={SCREENS.ABOUT}
                />

                <View style={styles.btnContainer}>
                    <Pressable style={styles.logout} onPress={logoutHandler}>
                        <Exit />
                    </Pressable>
                    <SecondaryButton
                        text="Log Out"
                        onPress={logoutHandler}
                        isLoading={loading}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Account;
