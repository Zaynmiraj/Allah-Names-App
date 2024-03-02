import { StyleSheet } from "react-native";


 export default StyleSheet.create({
    MainView:{
        elevation: 10,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white'
    },
    InnerView:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btn:{
        backgroundColor:'white',
        color:'gray',
        width:120,
        height:120,
        padding:10,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        elevation:10,
        borderBottomLeftRadius:40,

    },
    text:{
        fontSize:18,
        color:'gray',
        textAlign:'center'
    },
    box:{
        elevation:10,
        margin:10,
        backgroundColor:'#ddea',
        padding:10
    },
    name:{
        backgroundColor:'gray',
        color:'white',
        padding:5,
        textAlign:'center',
        fontSize:20,
        marginBottom:10,
    }
})