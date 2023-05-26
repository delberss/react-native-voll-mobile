// IMPORTAÇÕES BÁSICAS
import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


// TELAS
import Login from "./Login";
import Cadastro from "./Cadastro";

// TABS 
import Tabs from "./Tabs";

// VARIAVEL PARA NAVEGAR NAS TELAS
const Tab = createNativeStackNavigator();

//EXTRAS
// options={{headerShown: false}} - Remover nome da tela

export default function Rotas(){
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Login" component={Login} options={{headerShown: false}}/>  
                <Tab.Screen name="Cadastro" component={Cadastro} options={{headerShown: false}}/>
                <Tab.Screen name="Tabs" component={Tabs} options={{headerShown: false}}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}