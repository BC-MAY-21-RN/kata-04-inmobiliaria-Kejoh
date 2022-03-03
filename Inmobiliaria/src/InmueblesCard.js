import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const InmueblesDetails = ( {inmueble}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={{ uri: inmueble.image}}/>
            <View> 
                {/* <Icon name="search" size={15} color="#ffffff" /> */}
                <Text style={styles.title}>{inmueble.name}</Text>
                <Text style={{paddingLeft: 20}}>{inmueble.direction}</Text>
                <View style={styles.datos}>
                    <Icon name="bed"/><Text>{inmueble.rooms}</Text>
                    <Icon name="bath"/><Text>{inmueble.bathroom}</Text>
                    <Text>{inmueble.superfice}</Text>
                </View>
                <Text style={styles.cost}>{inmueble.cost}</Text>
            </View>
            
        </View>
    )
}

export default InmueblesDetails

const styles = StyleSheet.create({
    title: {
        color: 'black',
        marginTop: 5,
        fontSize: 30,
        paddingLeft: 20,
    },
    img:{
        width:   125 , 
        height:  125 ,
        borderRadius: 10,
    },
    container: {
        paddingHorizontal: 10,
        paddingBottom: 15 ,
        flexDirection: 'row',  
    },
    datos: {
        paddingLeft: 20,
        flexDirection: 'row',
    },
    cost: {
        paddingLeft: 20,
        fontSize: 21,
    }
});