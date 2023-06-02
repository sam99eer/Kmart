import { FONTS } from '@constants/Fonts';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '@routes/Routes';
import store from '@store/store';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
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
        }
        loadAssets();
    }, []);

    return (
        <>
            {loaded ? (
                <Provider store={store}>
                    <SafeAreaProvider>
                        <NavigationContainer>
                            <Routes />
                        </NavigationContainer>
                    </SafeAreaProvider>
                </Provider>
            ) : null}
            <StatusBar style="auto" translucent backgroundColor='transparent' />
        </>
    );
};

export default App;
