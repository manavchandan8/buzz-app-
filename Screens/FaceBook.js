import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class FaceBookScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}> 
                <View style = {styles.header}>
                    <Text style = {styles.text}>Buzz - App</Text>
                </View>
                <View style = {styles.box} >
                    <Image 
                        source = {{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDfIHJmjj8HmHb5iwi11Pyg_aFhSW5J6Ru0w&usqp=CAU'}}
                        style = {styles.logo} />
                    <Text style = {styles.name}>https://www.facebook.com/</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'tomato'
    },
    box:{
        width:'50%',
        height:'80%',
        marginTop:'1%',
        marginLeft:'25%',
    },
    logo:{
        marginTop:'2%',
        width:'100%',
        height:'100%',
    },
    name:{
        position:'absolute',
        textAlign:'center',
        fontSize:35,
        fontWeight:'900',
        marginTop:'35%',
        marginLeft:'15%'
    },
    header : {
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'10%',
        backgroundColor:'black'
    },
    text : {
        fontSize:30,
        color:'white',
        fontWeight:800
    },
})