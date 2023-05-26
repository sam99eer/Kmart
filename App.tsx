import { FONTS } from '@constants/Fonts';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

SplashScreen.preventAutoHideAsync();

const App = () => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        async function loadAssets() {
            await Font.loadAsync({
                light: FONTS.LIGHT,
                regular: FONTS.REGULAR,
                medium: FONTS.MEDIUM,
                semibold: FONTS.SEMIBOLD,
                bold: FONTS.BOLD,
            });

            setLoaded(true);
            await SplashScreen.hideAsync();
        }
        loadAssets();
    }, []);

    return <>{loaded ? <Text>Loaded</Text> : null}</>;
};

export default App;
