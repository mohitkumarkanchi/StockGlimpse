import { StatusBar } from "expo-status-bar";
import React ,{ useState} from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ImageBackground,
} from "react-native";




import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NavigationContainer } from "@react-navigation/native";


export default function Signup2({navigation}) {
  const [username,setUsername]=useState('');
    const [Password,setPassword]=useState('');
    const [email,setEmail]=useState('');
    
  return (
    
      <View style={{backgroundColor:'#232222',flex:1}}>
            <View style={{height:120,backgroundColor:'#232222'}}>
            <Text style={{position:"absolute",left:150,top:60,fontWeight:'700',fontSize:15,lineHeight:22,}}>Stock glimpse</Text>
            </View>

            <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            style={{width:'100%'}}
            contentContainerStyle={{width:"100%"}}
            scrollEnabled={true}>
            <View style={{height:75,alignItems:'center',justifyContent:'center'}}>
            <Text style={{ fontWeight:"600",fontSize: 25,lineHeight: 25,letterSpacing: 2,color: "#000000",marginBottom:10}}>Sign Up!</Text>
            <Text style={{fontSize:10,lineHeight: 25,letterSpacing: 2,color: "#6D6666",}}>Fill Up The Below Credentials</Text>
            </View>
            <View style={{height:196,alignItems:'center'}}>
            <Image source={require('./assets/signupill.png')} style={{}}/>
            </View>

            {/* Username */}
            <View style={{height:84,flex:1,padding:12}}>
              <View style={{backgroundColor:'#FFFFFF',height:'100%',padding:10,borderRadius:25}}>
              <TextInput
              style={{height:'100%'}}
              placeholder="Username"
              onChangeText={username => setUsername(username)}
              defaultValue={username}
              
              />
              </View>

            </View>

            {/* Email */}
            <View style={{height:84,flex:1,padding:12}}>
              <View style={{backgroundColor:'#FFFFFF',height:'100%',padding:10,borderRadius:25}}>
              <TextInput
              style={{height:'100%'}}
              placeholder="Email"
              onChangeText={email => setEmail(email)}
              defaultValue={email}
              
              />
              </View>

            </View>

         

            {/*Password */}

            <View style={{height:84,flex:1,padding:12}}>
            <View style={{backgroundColor:'#FFFFFF',height:'100%',padding:10,borderRadius:25}}>
            <TextInput
            style={{height:'100%'}}
            placeholder="Password"
            onChangeText={Password => setPassword(Password)}
            defaultValue={Password}
            
            />
            </View>

          </View>

        {/*signup  */}

          <View style={{height:81,flex:1,padding:10,paddingLeft:25,paddingRight:25,marginBottom:20}}>
          <TouchableOpacity onPress={()=> navigation.navigate('Login2')}>
          <View style={{height:'100%',backgroundColor:'#454343',alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontWeight: "600",
          fontSize: 24,
          textAlign: "center",
          color: "#FAFAFA"}}>Sign up</Text>
          </View>
          </TouchableOpacity>

          </View>

          
          <Text style={{color:'rgba(92, 85, 85, 0.35)',textAlign:'center', fontWeight: "600",
          fontSize: 13,
          lineHeight: 16,}}>your data is safe with us  </Text>

            
            
            
            
            
            </KeyboardAwareScrollView>
      
      
      



      </View>




  );
  }