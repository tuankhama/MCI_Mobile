import React, { createContext, useContext, useState } from 'react';
import { ToastAndroid } from 'react-native';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);
    const [users, setUsers] = useState([
        { id: 1, email: 'tuantaps22199@gmail.com', password: 'abc123' },
        { id: 2, email: 'user2@example.com', password: 'password2' },
    ]);

    const login = (email, password) => {
        const user = users.find(user => user.email === email && user.password === password);
        console.log(user);
        if (user) {
            ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
            setIsLogin(true);
        } else {
            ToastAndroid.show("Tài khoản hoặc mật khẩu không đúng", ToastAndroid.SHORT);
            setIsLogin(false);
        }
    };

    const logout = () => {
        setIsLogin(false);
    };

    return (
        <AuthContext.Provider value={{ isLogin, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
