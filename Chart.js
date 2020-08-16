import { StatusBar } from 'expo-status-bar';
import React,{ useState} from 'react';
import { StyleSheet, Text, View,Image,Button, TextInput, ScrollView,Picker} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
  import { Dimensions } from "react-native"

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(242, 26, 26, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    
  };

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

export default function Chart()
{
    const screenWidth = Dimensions.get("window").width;
    return(
                <LineChart
                data={data}
                width={screenWidth}
                height={220}
                chartConfig={chartConfig}
                />
    )
}