import React from 'react';
import { BottomNavigation, BottomNavigationTab, Icon, Layout, Text } from '@ui-kitten/components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileScreen from '../screens/ProfileScreen';
import TodoListScreen from '../screens/TodoListScreen';

const { Navigator, Screen } = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
    <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}
        style={{ backgroundColor: '#fff', borderTopWidth: 1, borderTopColor: '#ccc' }}>
        <BottomNavigationTab
            title='Todo'
            icon={(props) => <Icon {...props} name='layout-outline' />}
        />
        <BottomNavigationTab
            title='Profile'
            icon={(props) => <Icon {...props} name='person-outline' />}
        />
    </BottomNavigation>
);

export const HomeNavigator = () => (
    <Navigator
        screenOptions={{ headerShown: false }}
        tabBar={props => <BottomTabBar {...props} />}>
        <Screen name='Todo' component={TodoListScreen} />
        <Screen name='Profile' component={ProfileScreen} />
    </Navigator>
);
