import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Pages/Home/Home';
import Books from './Pages/Books/Books';
import Movies from './Pages/Movies/Movies';
import Detail from './Pages/Detail/Detail';

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer
      theme={{
        colors: {
          background: 'transparent',
        },
      }}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomePage" component={Home} />
        <Stack.Screen name="BooksPage" component={Books} />
        <Stack.Screen name="MoviesPage" component={Movies} />
        <Stack.Screen name="DetailPage" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
