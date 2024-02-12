import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import stepsSlice from "../utils/stepsSlice";

export const store = configureStore({
    reducer: {
        steps: stepsSlice
    }
})

type DispatchType = () => typeof store.dispatch;
type SelectorType = TypedUseSelectorHook<ReturnType<typeof store.getState>>;

export const useAppDispatch: DispatchType = useDispatch;
export const useAppSelector: SelectorType = useSelector;