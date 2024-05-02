import { Habit } from "models/API";

export enum AppNavScreenList {
  BOTTOM_TAB_NAV = "BottomTabNav",
  DETAILS_SCREEN = "DetailsScreen",
  HOME_SCREEN = "HomeScreen",
  PROFILE_SCREEN = "ProfileScreen",
  ACTIVITY_SCREEN = "ActivityScreen",
}

export type AppStackParamList = {
  BottomTabNav: undefined;
  DetailsScreen: { habit: Habit };
  HomeScreen: undefined;
  ProfileScreen: undefined;
  ActivityScreen: undefined;
};
