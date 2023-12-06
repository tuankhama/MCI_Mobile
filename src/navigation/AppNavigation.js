import { KeyboardAvoidingView, Platform } from "react-native";
import { useAuth } from "../context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { HomeNavigator } from "./BottomTab";
import LoginScreen from "../screens/Login";
import { default as theme } from '../../custom-theme.json';
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from '@eva-design/eva';
export default AppNavigation = () => {
    const { isLogin } = useAuth();

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
        >
            <NavigationContainer>
                <IconRegistry icons={EvaIconsPack} />
                <ApplicationProvider {...eva} theme={{ ...eva.light, ...theme }}>
                    {isLogin ? <HomeNavigator /> : <LoginScreen />}
                </ApplicationProvider>
            </NavigationContainer>
        </KeyboardAvoidingView>
    );
};