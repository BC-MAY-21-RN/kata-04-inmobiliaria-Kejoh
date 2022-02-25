import { StyleSheet, View, FlatList } from 'react-native'
import React from 'react'
import colors from '../utils/colors';
import InmueblesCard from './InmueblesCard';
import Inmuebles from '../utils/Inmuebles';

const Inmuble = () => {
  
  return (
    <View>
      <View>
        <FlatList
          data={Inmuebles}
          renderItem={({item}) => <InmueblesCard  inmueble={item} />}
          keyExtractor={inmueble => inmueble.id}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </View>
  )
}

export default Inmuble

const styles = StyleSheet.create({
  title: {
    color: colors.TITLE,
    fontSize: 25,
    paddingBottom: 10
  }
})