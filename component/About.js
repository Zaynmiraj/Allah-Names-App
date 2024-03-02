import React from 'react'
import {View , Text ,Linking ,StyleSheet} from 'react-native'


export default function About() {
    return (
        <View style={styles.main}>
            <View style={styles.parent}> 
                <Text style={styles.title}> About app</Text>
                <Text style={styles.detail}> This app all about islamic content such as 99 names of allah with 3 languages And also al quran 114 sura names. </Text>
                <View style={styles.icon}>
                    
                </View>
            </View>
        </View>
    )
}


const styles =StyleSheet.create({
    main:{
        flex:1,
        justifyContent:'center',
        backgroundColor:'#EBEDEE',
        alignItems:'center'
    },
    parent:{
    backgroundColor:'#F5F7F7',
    width:'90%',
    height:'80%',
    margin:30,
    flex:1,
    justifyContent:'center'
    },
    title:{
        textAlign:'center',
        padding:10,
        fontSize:20,
        borderBottomColor:'#37B2EF',
        borderBottomWidth:2,
        marginLeft:30,
        marginRight:30,

    },
    detail:{
        marginLeft:30,
        marginRight:30,
        marginTop:15,
    },
    icon:{
        display:'flex',
        flexDirection:'row',
        margin:30
    },
    icons:{
        backgroundColor:'#37B2EF',
        color:'white',
        margin: 8,
        padding:10,
        fontSize:15,
        borderRadius:10
    }
})