import { IPersonalDetails } from '@models/store/PersonalDetailsSliceModel';
import ProtectedStackRoutes from '@routes/ProtectedStackRoutes';
import PublicRoutes from '@routes/PublicRoutes';
import { personalDetailsActions } from '@store/actions';
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
                .catch((err) =>
                    console.log('Error while fetching SecureStore - ', err)
                )
                .finally(async () => {
                    setLoading(false);
                    await SplashScreen.hideAsync();
                });
        }
        checkToken();
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
