import { IOrderHistory } from '@models/data/OrderHistory';
import { IPersonalDetails } from '@models/store/PersonalDetailsSliceModel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ProtectedStackRoutes from '@routes/ProtectedStackRoutes';
import PublicRoutes from '@routes/PublicRoutes';
import { orderHistoryActions, personalDetailsActions } from '@store/actions';
import { StoreModel } from '@store/store';
import * as SecureStore from 'expo-secure-store';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Routes = () => {
    const details = useSelector(
        (state: StoreModel) => state.personalDetailsReducer
    );

    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();

    useEffect(() => {
        let timer: NodeJS.Timeout | null = null;
        async function checkToken() {
            await SecureStore.getItemAsync('details')
                .then((details) => {
                    if (!!details) {
                        const parsedDetails: IPersonalDetails =
                            JSON.parse(details);
                        dispatch(
                            personalDetailsActions.setDetails({
                                name: parsedDetails.name!,
                                phone: parsedDetails.phone!,
                            })
                        );
                    }
                })
                .then(async () => {
                    const getData = await AsyncStorage.getItem("orderHistory");
                    const cartData: IOrderHistory[] = !!getData ? JSON.parse(getData) : [];
                    dispatch(orderHistoryActions.fillData({ data: cartData }));
                })
                .catch((err) =>
                    console.log('Error while fetching SecureStore - ', err)
                )
                .finally(() => {
                    setLoading(false);
                    timer = setTimeout(async () => await SplashScreen.hideAsync(), 2000);
                });
        }
        checkToken();

        return () => {
            if (!!timer) {
                clearTimeout(timer);
            }
        }
    }, [details.name, details.phone]);

    return (
        <>
            {loading ? null : !!details.name && !!details.phone ? (
                <ProtectedStackRoutes />
            ) : (
                <PublicRoutes />
            )}

        </>
    );
};

export default Routes;
