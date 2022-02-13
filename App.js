import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import Header from "./src/components/layout/Header";
import AppStack from "./src/components/stacks/AppStack";

export default function App() {
    return (
        <NativeBaseProvider>
            <Header />
            <AppStack />
        </NativeBaseProvider>
    );
}
