import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Console from './Console.js';
import Search from './Search.js';
import Login2 from './Login2.js';
import Signup2 from './Signup2.js';
const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Welcome"
        component={Welcome}
        options={{ title: 'Welcome',
        headerShown: false }}
      />
      <Stack.Screen name="Login2"  component={Login2} options={{ title: 'Login',
      headerShown: false }} />

      <Stack.Screen name="Signup2"  component={Signup2} options={{ title: 'Signup',
      headerShown: false }} />


      
      <Stack.Screen name="Console"  component={Console} options={{ title: 'Console',
      headerShown: false }} />

      <Stack.Screen name="Search"  component={Search} options={{ title: 'Search',
      headerShown: false }} />
      
      </Stack.Navigator>
    </NavigationContainer>

  );
}

var background="#232222"
function Welcome({navigation})
{
  return(
    <View  style={{flex:1,backgroundColor:'#232222',alignItems:'center',justifyContent:'center'}}>
      <View style={{height:'60%',width:'85%'}}>
        <View style={{flex:1,height:'100%',width:'100%'}}>
            <View style={{height:'80%'}}>
                <View style={{height:'100%',flex:1,flexDirection:'row',alignItems:'center',}}>
                      <View style={{width:'40%'}}>
                      <Image source={require('./assets/logo.png')}/>
                      </View>
                      <View style={{width:'50%'}}>
                      <Text style={{fontWeight:'600',fontSize:45,color:'#FFFFFF'}}>Stock </Text>
                      <Text style={{fontWeight:'600',fontSize:40,color:'#FFFFFF'}}>Glimpse</Text>
                      </View>
                </View>
              
            
            </View>
            <View style={{height:'14%'}}>
            <TouchableOpacity onPress={()=>navigation.navigate('Login2')}>
              <View style={{height:'100%',justifyContent:'center',alignItems:'center',backgroundColor:'#3F3D3D',borderRadius:30}}>
              <Text style={{fontWeight:'600',fontSize:25,color:'#FFFFFF'}} >Get Started</Text>
              </View>
              </TouchableOpacity>
              </View>
        </View>
      </View>
    </View>
  )
}
