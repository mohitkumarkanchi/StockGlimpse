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
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { color } from 'react-native-reanimated';


function Ytd(props)
{
    var val1=props.v1;
    var val2=props.v2;
    var redcolor='#E43131';
    var greencolor='#31E463';
    var txtcolor1;
    var txtcolor2;
    var islast=false;
    var marginbtm=0;

    if(val1> 0)
    {
        txtcolor1=greencolor;
    }
    else{
        txtcolor1=redcolor;
    }

    if(val2 > 0)
    {
        txtcolor2=greencolor;
    }
    else{
        txtcolor2=redcolor;
    }
    if(islast == true)
    {
        paddingbtm=10;
    }





    
    return(
        
        <View style={{height:75,flex:1,flexDirection:'row',justifyContent:'space-evenly',marginTop:10,marginBottom:marginbtm}}>
        
        {/*Inner View For  Flex for ytd */}

        <View style={{width:'45%',flexDirection:'column',borderBottomWidth:1,borderBottomColor:"rgba(196, 196, 196, 0.37)"}}>
            <Text style={{color:'#918F8F',fontSize:17}}>{props.n1}</Text>

            <Text style={{color:txtcolor1,fontWeight:'300',fontSize:35,marginTop:2}}>{props.v1}%</Text>
        
        
        
        </View>

        {/*View for low ytd 2 */}
        <View style={{width:'45%',borderBottomWidth:1,borderBottomColor:"rgba(196, 196, 196, 0.37)"}}>
        <Text style={{color:'#918F8F',fontSize:17}}>{props.n2}</Text>
      
        <Text style={{color:txtcolor2,fontWeight:'300',fontSize:35,marginTop:2}}>{props.v2}%</Text>
        
        
        </View>
        {/* END View for low high price flex numbers */}
    </View>

    


    )
}

export default Ytd;

