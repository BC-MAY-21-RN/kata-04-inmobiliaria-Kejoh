import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';


const InmueblesDetails = ( {inmueble}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img} source={{ uri: inmueble.image}}/>
                <Icon 
                    name="close" 
                    size={20}
                    />
            </View>
            <View> 
                {/* <Icon name="search" size={15} color="#ffffff" /> */}
                <Text style={styles.title}>{inmueble.name}</Text>
                <Text style={{paddingLeft: 20}}>{inmueble.direction}</Text>
                <View style={styles.datos}>
                    <Icon 
                        name="bed"
                        size={20}
                    />
                    <Text>{inmueble.rooms}</Text>
                    <Icon 
                        name="bath"
                        size={20}
                    /><Text>{inmueble.bathroom}</Text>
                    <Text>
                        {inmueble.superfice}
                        <Icon name="superscript" />
                    </Text>
                </View>
                <Text style={styles.cost}>{inmueble.cost}</Text>
                <View style={styles.buttonHeart}>
                    <Icon 
                        name="heart"
                        color="white"
                    />
                </View>
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
        justifyContent: 'space-around',
    },
    cost: {
        paddingLeft: 20,
        fontSize: 21,
        fontWeight: 'bold',
    },
    buttonHeart: {
        backgroundColor: '#00af74',
        width: 25,
        height: 25,
        borderRadius: 25,    
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 170,
        marginTop: -20,
        padding: 1,
    }
});