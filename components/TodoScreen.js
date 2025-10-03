
// import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useEffect, useState } from "react";
// import { useFocusEffect } from "@react-navigation/native";

// function TodoScreen({ navigation: navigator }) {
//     const [todos, setTodos] = useState([]);

//     useFocusEffect(() => {
//         const fetchTodos = async () => {
//             const data = await AsyncStorage.getItem("todos");
//             if (data) {
//                 setTodos(JSON.parse(data));
//             }
//         };
//         fetchTodos();
//     }, []);

//     return (
//         <View style={styles.container}>
//             <Text style={styles.header}>My Todos</Text>

//             <FlatList
//                 data={todos}
//                 keyExtractor={(item, index) => index.toString()}
//                 renderItem={({ item }) => (
//                     <View style={styles.todoItem}>
//                         <Text style={styles.todoText}>{item}</Text>
//                         <TouchableOpacity style={styles.deleteButton} onPress={async () => {
//                             const filteredTodos = todos.filter(todo => todo !== item);
//                             setTodos(filteredTodos);
//                             await AsyncStorage.setItem('todos', JSON.stringify(filteredTodos));
//                         }}>
//                             <Text style={styles.deleteButtonText}>Delete</Text>
//                         </TouchableOpacity>
//                     </View>
//                 )}
//                 ListEmptyComponent={
//                     <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
//                 }
//                 contentContainerStyle={{ paddingBottom: 100 }}
//             />

//             <TouchableOpacity
//                 style={styles.fab}
//                 onPress={() => navigator.navigate("AddTodoScreen")}
//             >
//                 <Text style={styles.fabText}>+</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#F9FAFB",
//         paddingHorizontal: 20,
//         paddingTop: 60,
//     },
//     header: {
//         fontSize: 28,
//         fontWeight: "700",
//         color: "#111827",
//         marginBottom: 20,
//     },
//     todoItem: {
//         backgroundColor: "#fff",
//         padding: 15,
//         borderRadius: 10,
//         marginBottom: 12,
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.1,
//         shadowRadius: 4,
//         elevation: 3,
//     },
//     todoText: {
//         fontSize: 18,
//         color: "#374151",
//     },
//     emptyText: {
//         fontSize: 16,
//         color: "#9CA3AF",
//         textAlign: "center",
//         marginTop: 50,
//     },
//     fab: {
//         position: "absolute",
//         bottom: 30,
//         right: 30,
//         width: 60,
//         height: 60,
//         borderRadius: 30,
//         backgroundColor: "#2563EB",
//         alignItems: "center",
//         justifyContent: "center",
//         shadowColor: "#000",
//         shadowOffset: { width: 0, height: 2 },
//         shadowOpacity: 0.3,
//         shadowRadius: 4,
//         elevation: 5,
//     },
//     fabText: {
//         color: "#fff",
//         fontSize: 32,
//         fontWeight: "bold",
//         marginTop: -2,
//     },
//     deleteButton: {
//         position: "absolute",
//         right: 15,
//         top: 15,
//         backgroundColor: "#EF4444",
//         borderRadius: 5,
//         paddingHorizontal: 10,
//         paddingVertical: 5,
//     },
//     deleteButtonText: {
//         color: "#fff",
//         fontSize: 14,
//     }
// });

// export default TodoScreen;




import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback } from "react";
import { useFocusEffect } from '@react-navigation/native'; // ✅ استيراد useFocusEffect
import { useState } from "react";

function TodoScreen({ navigation: navigator }) {
    const [todos, setTodos] = useState([]);

    // ✅ استبدل useEffect بـ useFocusEffect
    useFocusEffect(
        useCallback(() => {
            const fetchTodos = async () => {
                const data = await AsyncStorage.getItem("todos");
                if (data) {
                    setTodos(JSON.parse(data));
                }
            };
            fetchTodos();
        }, []) // ✅ dependency array فارغة صح
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Todos</Text>

            <FlatList
                data={todos}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.todoItem}>
                        <Text style={styles.todoText}>{item}</Text>
                        <TouchableOpacity style={styles.deleteButton} onPress={async () => {
                            const filteredTodos = todos.filter(todo => todo !== item);
                            setTodos(filteredTodos);
                            await AsyncStorage.setItem('todos', JSON.stringify(filteredTodos));
                        }}>
                            <Text style={styles.deleteButtonText}>Delete</Text>
                        </TouchableOpacity>
                    </View>
                )}
                ListEmptyComponent={
                    <Text style={styles.emptyText}>No tasks yet. Add one!</Text>
                }
                contentContainerStyle={{ paddingBottom: 100 }}
            />

            <TouchableOpacity
                style={styles.fab}
                onPress={() => navigator.navigate("AddTodoScreen")}
            >
                <Text style={styles.fabText}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F9FAFB",
        paddingHorizontal: 20,
        paddingTop: 60,
    },
    header: {
        fontSize: 28,
        fontWeight: "700",
        color: "#111827",
        marginBottom: 20,
    },
    todoItem: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        marginBottom: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    todoText: {
        fontSize: 18,
        color: "#374151",
    },
    emptyText: {
        fontSize: 16,
        color: "#9CA3AF",
        textAlign: "center",
        marginTop: 50,
    },
    fab: {
        position: "absolute",
        bottom: 30,
        right: 30,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: "#2563EB",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    fabText: {
        color: "#fff",
        fontSize: 32,
        fontWeight: "bold",
        marginTop: -2,
    },
    deleteButton: {
        position: "absolute",
        right: 15,
        top: 15,
        backgroundColor: "#EF4444",
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    deleteButtonText: {
        color: "#fff",
        fontSize: 14,
    }
});

export default TodoScreen;
