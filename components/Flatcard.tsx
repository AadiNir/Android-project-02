import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcard = () => {
  return (
    <View>
      <View style={styles.container}>
        <View style={[styles.card,styles.cardone]}>
            <Text style={styles.headingfont}>Red</Text>
        </View>
        <View style={[styles.card,styles.cardtwo]}>
            <Text style={styles.headingfont}>Blue</Text>
        </View>
        <View style={[styles.card,styles.cardthree]}>
            <Text style={styles.headingfont}>Green</Text>
        </View>
        <View style={[styles.card,styles.cardone]}>
            <Text style={styles.headingfont}>Red</Text>
        </View>
      </View>
    </View>
  )
}

export default Flatcard

const styles = StyleSheet.create({
    headingfont:{
        fontSize:24,
        paddingHorizontal:8,
        fontWeight:"bold"
    },
    container:{
        flex:1,
        flexDirection:'row'
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        borderRadius:5,
        margin:8
    },
    cardone:{
        backgroundColor:'red'
    },
    cardtwo:{
        backgroundColor:'blue'
    },
    cardthree:{
        backgroundColor:'green'
    }
})