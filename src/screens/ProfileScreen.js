import React, { useState } from 'react';
import { StyleSheet, View, ScrollView, ToastAndroid } from 'react-native';
import { Layout, Text, Avatar, Button, Card, Icon, Divider, Input, Datepicker } from '@ui-kitten/components';
import { useAuth } from '../context/AuthContext';
const ProfileScreen = () => {
    const { isLogin, login, logout } = useAuth();

    const handlerLogout = () => {
        logout()
        ToastAndroid.show("Đăng xuất thành công", ToastAndroid.SHORT)
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Avatar
                    source={{ uri: 'https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png' }}
                    size='giant'
                />
                <Text category='h4' style={styles.username}>Trần Anh Tuấn</Text>
                <Text category='s1' style={styles.subtitle}>Software Developer</Text>
            </View>

            <Card style={styles.card}>
                <Text category='h6'>About Me</Text>
                <Text category='p1'>Là 1 sinh viên lập trình mobile chuyên về React-Native kỳ cuối của trường CĐ FPT, em luôn cố gắng phát triển bản thân 1 cách toàn diện nhất.
                    @ui-kitten là framework lần đầu em sử dụng nên có nhiều sai sót mong anh/chị bỏ qua cho em</Text>
            </Card>

            <Card style={styles.card}>
                <Text category='h6'>Contact Information</Text>
                <View style={styles.contactContainer}>
                    <View style={styles.contactItem}>
                        <Icon name='email-outline' width={20} height={20} />
                        <Text category='s1' style={styles.contactText}>tuantaps22199@gmail.com</Text>
                    </View>
                    <Divider />
                    <View style={styles.contactItem}>
                        <Icon name='phone-outline' width={20} height={20} />
                        <Text category='s1' style={styles.contactText}>0378200497</Text>
                    </View>
                </View>
            </Card>

            <Card style={styles.card}>
                <Text category='h6'>Personal Information</Text>
                <View style={styles.infoContainer}>
                    <View style={styles.infoItem}>
                        <Text category='s1'>Address:</Text>
                        <Text category='s1'>Quận  9, HCM</Text>
                    </View>
                    <Divider />
                    <View style={styles.infoItem}>
                        <Text category='s1'>Date of Birth:</Text>
                        <Text category='s1'>04/08/2003</Text>
                    </View>

                </View>
            </Card>

            <Button
                onPress={handlerLogout}
                style={styles.logoutButton} appearance='outline' status='danger'>Logout</Button>
        </ScrollView>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16,
        paddingTop: 16,
        backgroundColor: '#f7f7f7',
    },
    header: {
        alignItems: 'center',
        marginBottom: 16,
    },
    username: {
        marginTop: 8,
        color: '#333',
    },
    subtitle: {
        color: '#666',
    },
    card: {
        marginVertical: 8,
        borderRadius: 10,
        overflow: 'hidden',
    },
    contactContainer: {
        marginTop: 8,
    },
    contactItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    contactText: {
        marginLeft: 8,
        color: '#555',
    },
    logoutButton: {
        marginTop: 16,
    },
    infoContainer: {
        marginTop: 8,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 8,
    },
});

export default ProfileScreen;
