import React, { useState, useEffect } from 'react';
import {
    Input,
    Button,
    Layout,
    Icon,
    Card,
    Text,
    Spinner,
    CheckBox,
} from '@ui-kitten/components';
import { StyleSheet, Image, View, ToastAndroid } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useAuth } from '../context/AuthContext';

const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(false);
    const { isLogin, login, logout } = useAuth();

    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            ToastAndroid.show("Vui lòng không để trống email và mật khẩu", ToastAndroid.SHORT);
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            ToastAndroid.show("Email không hợp lệ", ToastAndroid.SHORT);
            return;
        }
        login(email, password);
    };



    return (
        <Layout style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={require('../assets/images/logo.png')} />
                <Text category="h1" status="primary" style={styles.title}>
                    Đăng nhập
                </Text>
            </View>

            <View style={styles.formContainer}>
                <Input
                    style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    accessoryLeft={(props) => <Icon {...props} name="email-outline" />}
                />

                <Input
                    style={styles.input}
                    placeholder="Mật khẩu"
                    value={password}
                    secureTextEntry
                    onChangeText={setPassword}
                    accessoryLeft={(props) => <Icon {...props} name="lock-outline" />}
                />

                <View style={styles.rememberMeCheckboxContainer}>
                    <CheckBox
                        style={styles.rememberMeCheckbox}
                        checked={checked}
                        onChange={setChecked}
                    />
                    <Text style={styles.rememberMeCheckboxLabel}>Ghi nhớ tôi</Text>
                </View>

                <Button
                    style={styles.loginButton}
                    appearance="filled"
                    onPress={handleLogin}
                >
                    Đăng nhập
                </Button>
            </View>

            <View style={styles.footer}>
                <Text style={styles.forgotPassword} onPress={() => console.log('Quên mật khẩu')}>
                    Quên mật khẩu?
                </Text>
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 24,
    },

    header: {
        alignItems: 'center',
    },

    logo: {
        width: 150,
        height: 150,
        marginBottom: 16,
    },

    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 48,
    },

    formContainer: {
        padding: 24,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    input: {
        marginVertical: 8,
    },

    rememberMeCheckboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },

    rememberMeCheckbox: {
        marginRight: 8,
    },

    rememberMeCheckboxLabel: {
        fontSize: 16,
        fontWeight: '500',
    },

    loginButton: {
        marginTop: 16,
        backgroundColor: '#007bff',
        borderRadius: 10,
    },
    footer: {
        marginTop: 32,
        alignItems: 'center',
    },

    forgotPassword: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#007bff',
        marginTop: 16,
        marginBottom: 32,
    },
});

export default LoginScreen;
