import { useCallback, useRef } from 'react';
import { View, Text, ImageURISource, ViewToken, Pressable, StyleSheet, SafeAreaView } from "react-native";
import Animated, { useAnimatedRef, useAnimatedScrollHandler, useSharedValue } from "react-native-reanimated"
import ListItem from 'components/ListItem';
import PaginationElement from 'components/PaginationElement';
import Button from 'components/Button';
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
//Types
import {
  AuthNavScreenList,
  AuthStackParamList,
} from "../navigation/AuthNavConstants";

//Store
import {
  getAccountStatus,
  setAccountStatus,
} from "../../../store/slice/applicationSlice";


const page = [
  {
    text: "Thinking of\nMaking a life better! \nThen How?",
    image: require("../../../assets/images/think.png"),
  },
  {
    text: "Creating a daily list\nTurning it into a habit!\nSounds like a cool",
    image: require("../../../assets/images/todo.png"),
  },
  {
    text: "Explore more\ninto you!\nMake Your life Better.",
    image: require("../../../assets/images/explore.png"),
  },


]

interface IOnBoardingScreen {
  navigation: StackNavigationProp<
    AuthStackParamList,
    AuthNavScreenList.ONBOARDING_SCREEN
  >;
  route: RouteProp<AuthStackParamList, AuthNavScreenList.ONBOARDING_SCREEN>;
}


const  OnboardingScreen = ({navigation, route}: IOnBoardingScreen) => {
  const x = useSharedValue(0);
  const flatListIndex = useSharedValue(0);
  const flatListRef = useAnimatedRef<
    Animated.FlatList<{
      text: string;
      image: ImageURISource;
    }>
  >();

  const onViewableItemsChanged = useCallback(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      flatListIndex.value = viewableItems[0].index ?? 0;
    },
    []
  );
  const scrollHandle = useAnimatedScrollHandler({
    onScroll: (event) => {
      x.value = event.contentOffset.x;
    },
  });

  const renderItem = useCallback(
    ({
      item,
      index,
    }: {
      item: { text: string; image: ImageURISource };
      index: number;
    }) => {
      return <ListItem item={item} index={index} x={x} />;
    },
    [x]
  );
  return (
    <SafeAreaView style={styles.container}>
      <Animated.FlatList
        ref={flatListRef}
        onScroll={scrollHandle}
        horizontal
        scrollEventThrottle={16}
        pagingEnabled={true}
        data={page}
        keyExtractor={(_, index) => index.toString()}
        bounces={false}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewableItemsChanged}
      />
      <View style={styles.bottomContainer}>
        <PaginationElement length={page.length} x={x} />
        <Button
          currentIndex={flatListIndex}
          length={page.length}
          flatListRef={flatListRef}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"white",
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default OnboardingScreen;

