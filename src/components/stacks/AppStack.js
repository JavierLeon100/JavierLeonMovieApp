import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import MoviesScreen from "../screens/MoviesScreen";
import SearchScreen from "../screens/SearchScreen";
import TvScreen from "../screens/TvScreen";
import { NavigationContainer } from "@react-navigation/native";
import DetailsScreen from "../screens/DetailsScreen";

const Tab = createMaterialTopTabNavigator();

const AppStack = (props) => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Movies" component={MoviesScreen} />
                <Tab.Screen name="Search Results" component={SearchScreen} />
                <Tab.Screen name="Tv Shows" component={TvScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default AppStack;
