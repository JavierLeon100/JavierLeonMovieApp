import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MoviesContainer from "../containers/MoviesContainer";
import DetailsScreen from "./DetailsScreen";

const Stack = createNativeStackNavigator();

const MoviesScreen = ({ navigation }) => {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="MoviesContainer"
                    component={MoviesContainer}
                    navigation={navigation}
                />
                <Stack.Screen
                    name="Details"
                    component={DetailsScreen}
                    options={({ route }) => ({
                        title: "",
                        id: route.params.id,
                        type: "movie",
                        canGoBack: "canGoBack",
                        headerShown: true,
                    })}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default MoviesScreen;
