import React from 'react'
import {View  , Text, TouchableOpacity,SafeAreaView} from 'react-native'
import style from './style'



export default function Main({navigation}) {
    return (

            <View style={style.MainView}>
                <Text style={{marginTop:-50, marginBottom:30, padding:0, color:'gray', fontWeight:'900', fontSize:30}}>LET'S READ</Text>
            <View style={style.InnerView}>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Bangla')}>
                <Text style={style.text}>Bangla</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Arabic')}>
                <Text style={style.text}>Arabic</Text>
            </TouchableOpacity>
            </View>
            <View style={style.InnerView}>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('English')}>
                <Text style={style.text}> English</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.btn} onPress={() => navigation.navigate('Sura')}>
                <Text style={style.text}>Al Quran Sura</Text>
            </TouchableOpacity>
            </View>
             </View>
             
    )
}
