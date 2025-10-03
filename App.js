import { StyleSheet, Text, View } from 'react-native';
import TodoScreen from './components/TodoScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddTodoScreen from './components/AddTotoScreen';
import RegisterScreen from './components/form';
const stack = createNativeStackNavigator();
export default function App() {
  return (

    <NavigationContainer>
      {/* <RegisterScreen /> */}
      <stack.Navigator>
        <stack.Screen name='register' component={RegisterScreen} />
        <stack.Screen name="Todo" component={TodoScreen} options={{ title: 'My Todos', headerShown: false }} />
        <stack.Screen name="AddTodoScreen" component={AddTodoScreen} />

      </stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
