import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import reduxStorage from "./storage";
import {persistReducer,persistStore,FLUSH,REGISTER,REHYDRATE,PAUSE,PURGE,PERSIST} from 'redux-persist'

const presistConfig = {
    key:'root',
    storage:reduxStorage,
    whitelist:['game'],
};
const presistedReducer = persistReducer(presistConfig,rootReducer);

export const store = configureStore({
    reducer:presistedReducer,
    middleware:getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck:{
                ignoreActions:[FLUSH,REGISTER,REHYDRATE,PAUSE,PURGE,PERSIST]
            },
        }),
});

export const presistor = persistStore(store)