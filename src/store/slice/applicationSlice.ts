import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppStateStatus } from "react-native";
import { AccountStatus } from "types/types";

interface IApplication {
  appState: AppStateStatus;
  accountStatus: AccountStatus;
}

const initialState: IApplication = {
  appState: "active" as AppStateStatus,
  accountStatus: AccountStatus.INACTIVE,
};

// Slice
const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    setAppState: (state, action: PayloadAction<AppStateStatus>) => {
      state.appState = action.payload;
    },
    setAccountStatus: (state, action: PayloadAction<AccountStatus>) => {
      state.accountStatus = action.payload;
    },
  },
});

// Actions
export const { setAppState, setAccountStatus } = applicationSlice.actions;

// Selectors
export const getApplication = ({
  application,
}: {
  application: IApplication;
}) => application;
export const getApplicationAppState = ({
  application,
}: {
  application: IApplication;
}) => application.appState;
export const getAccountStatus = ({
  application,
}: {
  application: IApplication;
}) => application.accountStatus;
export const getIsUserSigned = ({
  application,
}: {
  application: IApplication;
}) => application.accountStatus === AccountStatus.SIGNED_IN;


export default applicationSlice.reducer;
