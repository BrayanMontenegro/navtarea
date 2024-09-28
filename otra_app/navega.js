import React from "react";
import { NavigationContainer } from '@react-navigation/native'; 
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from "./src/home"; // Cambié 'home' a 'Home' para seguir la convención de nombres
import Conta from "./src/conta"; // Cambié 'conta' a 'Conta'
import Seita from "./src/setsuko"; // Cambié 'seita' a 'Seita'

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Contador" 
        component={Conta} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Nombre" 
        component={Seita} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function Naveg() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
