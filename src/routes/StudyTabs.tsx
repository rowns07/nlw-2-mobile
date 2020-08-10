import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const {Navigator,Screen} = createBottomTabNavigator();

function StudyTabs(){
return (
    <Navigator 
    tabBarOptions={{
      style:{
        elevation:0,
        shadowOpacity:0,
        height: Platform.OS === 'ios' ? 64 : 64,
      },
      tabStyle:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        
      },
      safeAreaInsets: {
        bottom: 0,
      },
      iconStyle:{
        flex: 0,
        width: 20,
        height: Platform.OS === 'ios' ? 24 : 20,
      },
      labelStyle:{
        fontFamily:'Archivo_700Bold',
        fontSize:13,
        marginLeft:16
      },
      inactiveBackgroundColor:'#fafafc',
      activeBackgroundColor:'#ebebf5',
      inactiveTintColor:'#c1bccc',
      activeTintColor:'#32264d'
      
    }}
    >
        <Screen 
        name="TeacherList" 
        component={TeacherList} 
        options={{
          tabBarLabel:'Proffys',
          tabBarIcon: ({color,size,focused})=>{
            return <Ionicons name="ios-easel" color={focused ? '#8257E5' : color} size={size}></Ionicons>
          }
        }}
        />
        <Screen name="Favorites" 
        component={Favorites} 
        options={{
          tabBarLabel:'Favoritos',
          tabBarIcon: ({color,size, focused})=>{
            return <Ionicons name="ios-heart" color={focused ? '#8257E5' : color} size={size}></Ionicons>
          }
        }}
        />
      </Navigator>
)
}

export default StudyTabs;