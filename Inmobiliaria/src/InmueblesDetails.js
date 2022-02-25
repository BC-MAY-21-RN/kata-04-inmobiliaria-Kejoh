import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'


const InmueblesDetails = ( {inmueble}) => {
    return (
        <View>
            <Image source={{ uri: inmueble.image}}/>
            <Text >{inmueble.name}</Text>
        </View>
    )
}

export default InmueblesDetails

const styles = StyleSheet.create({
    title: {
        color: 'white',
        marginTop: 5,
        fontSize: 15
    },
    imgTreding:{
        width:   115 , 
        height:  115 ,
    },
    imgRecent: {
        width: 150,
        height: 150,
    },
    container: {
        paddingHorizontal: 10,
        paddingBottom: 15
        
    }
});