import React from "react"; 
import {Provider} from "react-redux"; 
import {persistStore} from "redux-persist"
import {PersistGate} from "redux-persist/integration/react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import {GestureHandlerRootView} from "react-native-gesture-handler";

//store
import store from './store/store';

const persistor = persistStore(store);

const Providers = ({children}: {children: React.ReactNode}) => {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GestureHandlerRootView style={{flex: 1}}>
                    <SafeAreaProvider>{children}</SafeAreaProvider>
                </GestureHandlerRootView>
            </PersistGate>
        </Provider>
    )
}

export default Providers;



