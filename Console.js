import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import { StyleSheet, Text, View,Image,Button, TextInput, ScrollView,Picker} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Ytd from './Ytd.js'
import Footer from './Footer.js'
import Chart from './Chart.js'





export default function Console({ route, navigation })
{
    const [selectedValue, setSelectedValue] = useState("java");
    const { Company } = route.params;
    return(
      <View style={{flex:1,backgroundColor:'#242424'}}>
                            {/* top header */}
                            <View style={{height:'30%'}}>
                                        <View style={{height:'100%',width:'100%',flex:1}}>
                                                {/* search notify my account */}

                                                <View style={{height:'40%',width:'50%',alignSelf:'flex-end',alignItems:'center',justifyContent:'center',position:'relative',top:20}}>

                                                    <View style={{height:'50%',width:'100%',alignItems:'center',flexDirection:'row',justifyContent:'space-evenly'}}>
                                                        <TouchableOpacity>
                                                        <Image source={require('./assets/search.png')}  />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity>
                                                        <Image source={require('./assets/notify.png')}   />
                                                        </TouchableOpacity>
                                                        <TouchableOpacity>
                                                        <Image source={require('./assets/account.png')}   />
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                
                                {/* display */}
                                
                                                <View style={{height:'40%',backgroundColor:'#3A3939'}}>

                                                    <View style={{height:'100%',width:'100%',flex:1,flexDirection:'row'}}>
                                                        <View style={{width:'62%'}}>
                                                        
                                                        
                                                        <View style={{height:'40%'}}>
                                                        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
                                                        <View style={{height:'100%',width:'100%',alignItems:'center',flexDirection:'row'}}>
                                                        <Text style={{fontWeight:'500',fontSize:22,color:'#FFFFFF'}}>{Company}</Text>
                                                        <Image source={require('./assets/down.png')}   />

                                                        </View>
                                                        
                                                        </TouchableOpacity>
                                                        
                                                    </View>
                                                    
                                                
                                                    
                                                    <Text style={{position:'relative',top:10,fontWeight:'500',color:'#FFFFFF',fontSize:30}}>36,333.22</Text>



                                                </View> 
                                                {/* display */}
                                
                                                
                                                <View style={{width:'38%'}}>
                                                <Text style={{position:'relative',top:'70%',color:'#717171'}}>15 aug 2020 1:15 pm</Text>
                                                </View>
                                                
                                                
                                                </View>
                                            </View>
                                                
                                            {/* Ende of 2nd disp */}
                                            <View style={{height:'20%',backgroundColor:'#2E2C2C',justifyContent:'center'}}>
                                            <Text  style={{color:'#FFFFFF',fontWeight:'400',fontSize:25}}>Overview</Text>
                                            
                                            </View>
                                                
                                               
                                                
                                                
                                        </View>


                                
                                        
                                                
                                
                            
                            
                            </View>

        
        <ScrollView style={{backgroundColor:'#242424'}}>
        {/*View for chart */}
        <Chart />
        {/* End for View for chart */}


        {/* View for Open price and todays High & LOWS*/}

        <View style={{height:75,flex:1,flexDirection:'row',justifyContent:'space-evenly',marginTop:10}}>
        
            {/*Inner View For  Flex */}

            <View style={{width:'45%',flexDirection:'column',borderBottomWidth:1,borderBottomColor:"rgba(196, 196, 196, 0.37)"}}>
                <Text style={{color:'#918F8F',fontSize:17}}>OPEN PRICE</Text>

                <Text style={{color:'#FFFFFF',fontWeight:'600',fontSize:35,marginTop:2}}>37,762.26</Text>
            
            
            
            </View>

            {/*View for low high banner */}
            <View style={{width:'45%',borderBottomWidth:1,borderBottomColor:"rgba(196, 196, 196, 0.37)"}}>
            <Text style={{color:'#918F8F',fontSize:17}}>TODAY`s LOW /HIGH</Text>

            {/*View for low high price flex numbers */}
            <View style={{height:'45%',flexDirection:'row',justifyContent:'space-around',marginTop:5}}>
            <Text style={{color:'#FFFFFF',fontSize:20}}>36,247</Text>
            <Text style={{color:'#FFFFFF',fontSize:20}}>40,000</Text>
            </View>
            <Image source={require('./assets/statusbar.png')}   />
            </View>
            {/* END View for low high price flex numbers */}
        </View>

        {/*End  View for Open price and todays Highlights*/}

        
        
        
        {/* View for Previous Close and Last Week High & LOWS*/}

        <View style={{height:75,flex:1,flexDirection:'row',justifyContent:'space-evenly',marginTop:25}}>
        
            {/*Inner View For  Flex */}

            <View style={{width:'45%',flexDirection:'column',borderBottomWidth:1,borderBottomColor:"rgba(196, 196, 196, 0.37)"}}>
                <Text style={{color:'#918F8F',fontSize:17}}>CLOSE PRICE</Text>

                <Text style={{color:'#FFFFFF',fontWeight:'600',fontSize:35,marginTop:2}}>37,762.26</Text>
            
            
            
            </View>

            {/*View for low high banner */}
            <View style={{width:'45%',borderBottomWidth:1,borderBottomColor:"rgba(196, 196, 196, 0.37)"}}>
            <Text style={{color:'#918F8F',fontSize:17}}>52WK LOW /HIGH</Text>

            {/*View for low high price flex numbers */}
            <View style={{height:'45%',flexDirection:'row',justifyContent:'space-around',marginTop:5}}>
            <Text style={{color:'#FFFFFF',fontSize:20}}>36,247</Text>
            <Text style={{color:'#FFFFFF',fontSize:20}}>40,000</Text>
            </View>
            <Image source={require('./assets/statusbar.png')}   />
            </View>
            {/* END View for low high price flex numbers */}
        </View>

        {/*End  View for Open price and todays Highlights*/}


         {/*View for Returns Side Heading*/}
        <View style={{height:'10%',justifyContent:'center',marginTop:10}}>
        <Text  style={{color:'#FFFFFF',fontWeight:'400',fontSize:25,left:10}}>Returns</Text>
        
        </View>

        {/*END VIEW for Returns Side Heading*/}



      
      <Ytd n1="YTD" v1="5.2" n2="YTD" v2="-6.2"/>
      <Ytd  n1="1MONTH" v1="2.4" n2="2MONTHS" v2="1.3"/>
      <Ytd  n1="3MONTH" v1="-1.2" n2="6MONTHS" v2="-0.3"/>
      <Ytd  n1="2YEARS" v1="2.2" n2="3YEARS" v2="4.3" islast='true'/>

    
         {/*View for simple moving averages Side Heading*/}
         <View style={{height:'10%',justifyContent:'center',marginTop:10}}>
         <Text  style={{color:'#FFFFFF',fontWeight:'400',fontSize:25,left:10}}>Simple Moving Averages</Text>
         
         </View>
 
         {/*END VIEW for Returns Side Heading*/}


         <Ytd n1="30 DAYS" v1="5.2" n2="60DAYS" v2="-6.2"/>
      <Ytd  n1="150DAYS" v1="2.4" n2="200DAYS" v2="1.3"/>

      <Footer/>



     
    
      
            

        




        
        
        
        
        
        
        </ScrollView>
                        
       


       
       </View>
    )
}