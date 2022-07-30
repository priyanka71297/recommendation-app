import { configureStore } from "@reduxjs/toolkit";
import authorReducer from './AuthorSlice';
import appUserReducer from './AppUserSlice';

console.log('store initilized');
const store = configureStore({
    reducer: {
        author: authorReducer,
        appUser: appUserReducer
        // create more reducers for other components 
    }
});

export default store;