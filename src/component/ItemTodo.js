
import React, { useEffect } from "react";

import { StyleSheet, View } from "react-native";
import { Calendar, Card, CheckBox, Icon, Text } from "@ui-kitten/components";
const ItemTodo = ({ item, toggleTask, deleteTask }) => {

    return (
        <Card style={styles.card}>
            <View style={styles.taskContainer}>
                <CheckBox checked={item.completed} onChange={() => {
                    toggleTask(item.id)
                }} />
                <View style={styles.taskDetails}>
                    <Text
                        numberOfLines={1}
                        category="h6" style={[styles.taskTitle, item.completed && styles.completedTask]}>
                        {item.title}
                    </Text>
                    <Text
                        numberOfLines={2}
                        style={[styles.taskDescription, item.completed && styles.completedTask]}>{item.description}</Text>
                    {item.deadline && <Text style={[styles.deadlineText, item.completed && styles.completedTask]}>Deadline: {item.deadline} </Text>}
                </View>
                <Icon
                    name="trash-2-outline"
                    fill="#ff4d4f"
                    width={20}
                    height={20}
                    onPress={() => deleteTask(item.id)}
                />
            </View>
        </Card>
    );
};

export default ItemTodo;

const styles = StyleSheet.create({
    card: {
        marginVertical: 5,
        borderRadius: 12,
    },
    taskContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    taskDetails: {
        flex: 1,
        marginLeft: 8,
        justifyContent: 'space-around',
    },
    taskTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    taskDescription: {
        color: '#555',
        marginTop: 4,
    },
    completedTask: {
        textDecorationLine: 'line-through',
        color: '#777',
    },
    deadlineText: {
        color: '#777',
        marginTop: 4,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 16,
    },
    input: {
        flex: 1,
        marginRight: 8,
    },
    datepicker: {
        width: 150,
        marginRight: 8,
    },
    addButton: {
        marginLeft: 8,
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#777',
    },
})