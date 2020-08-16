import React,{ useState} from 'react';
import { NativeModules } from 'react-native';
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  ScrollView,
  Picker,
} from "react-native";



export default function Footer()
{
    return(
    <View style={{marginTop:25,height:300,width:'100%',backgroundColor:'rgba(46, 44, 44, 0.81)',alignItems:'center'}}>

        <Text  style={{color:'#FFFFFF',fontWeight:'200',fontSize:15,top:60}}>Designed By MohitKumar Kanchi</Text>
    </View>
    )
}