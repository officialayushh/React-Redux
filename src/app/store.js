import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./createSlice";

export const store = configureStore({
    reducer: { counter: counterSlice }
});
// , incrementByAmount => As a action if we need to use then we can use it

// 2 mistakes in store not giving proper format of counterSlice
// and second is inside reducer counter : counterSlice  (file imported
// right but after that you need to write its name where its originated)
