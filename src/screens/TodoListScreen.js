import React, { useState } from 'react';
import { StyleSheet, View, FlatList, ToastAndroid } from 'react-native';
import { Layout, Text, Input, Button, Icon, Datepicker } from '@ui-kitten/components';
import ItemTodo from '../component/ItemTodo';

const TodoListScreen = () => {



    const [tasks, setTasks] = useState(dataDefault);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');

    const addTask = () => {
        setTasks(prevTasks => [
            ...prevTasks,
            { id: (prevTasks.length + 1).toString(), title: title, description: description, deadline: date.toLocaleDateString('en-US'), completed: false },
        ]);
        ToastAndroid.show("Thêm công việc thành công", ToastAndroid.SHORT),
            setTitle("");
        setDescription('');
        setDate("")
    };

    const toggleTask = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.map(task =>
                task.id === taskId ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (taskId) => {
        setTasks(prevTasks =>
            prevTasks.filter(task => task.id !== taskId)
        );
    };

    return (
        <Layout style={styles.container}>
            <Text category='h4' style={styles.title}>To-do List</Text>
            <FlatList
                data={tasks}
                renderItem={({ item }) => <ItemTodo item={item} toggleTask={toggleTask} deleteTask={deleteTask} />}
                keyExtractor={item => item.id}
                ListEmptyComponent={() => <Text style={styles.emptyText}>Chưa có công việc nào</Text>}
            />
            <View style={styles.containerInput}>
                <View style={{ flexDirection: 'row', }}>
                    <Input
                        placeholder='Nhập tên việc'
                        value={title}
                        onChangeText={setTitle}
                        style={styles.input}
                    />
                    <Datepicker
                        placeholder='Chọn ngày'
                        date={date}
                        onSelect={nextDate => setDate(nextDate)}
                        style={styles.datepicker}
                    />
                </View>
                <Input
                    placeholder='Nhập mô tả công việc'
                    value={description}
                    multiline={true}
                    style={{ marginVertical: 10, }}
                    onChangeText={setDescription}
                />
                <Button
                    disabled={!title || !date || !description}
                    onPress={() => addTask()}
                    accessoryLeft={(props) => (
                        <Icon {...props} name="plus-outline" fill="white" />
                    )}
                >
                    Thêm công việc mới
                </Button>
            </View>

        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f8f8f8',
    },
    containerNewTask: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    containerInput: {
    },
    title: {
        marginBottom: 16,
        color: '#333',
    },

    input: {
        flex: 1,
    },
    datepicker: {
        width: 150,
        marginLeft: 10,
    },
    addButton: {
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#777',
    },
});

export default TodoListScreen;
const dataDefault = [
    { id: '1', title: 'Mua sách cho em trai', description: 'Đi đến siêu thị và mua các mặt hàng cần thiết.', deadline: '2023-12-31', completed: false },
    { id: '2', title: 'Đọc một cuốn sách', description: 'Đọc cuốn tiểu thuyết mới nhất của tác giả yêu thích.', deadline: '2023-12-31', completed: true },
]