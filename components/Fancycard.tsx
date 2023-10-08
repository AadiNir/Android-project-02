import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fancycard = () => {
  return (
    <View>
      <Text style={styles.headingfont}>Tredning Places</Text>
      <View style={styles.card}>
        <Image source={{
            uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTozZeUh-m7DH2pCwrPxBZOLJwJfw4WRO1hPW3DDc9Q5ccs0UBmqLoZBrMRq8X3PwTNZb4&usqp=CAU'
        }} style={styles.cardimage}/>
        <View style={styles.cardbody}>
            <Text style={styles.title}>Eiffel Tower</Text>
            <Text style={styles.place}>Paris,France</Text>
            <Text style={styles.desc}>12 min away</Text>


        </View>
      </View>
    </View>
  )
}

export default Fancycard

const styles = StyleSheet.create({
    headingfont:{
        fontSize:24,
        paddingHorizontal:8,
        fontWeight:"bold"
    },
    cardimage:{
        height:200,
        width:200,
        
    },
    card:{
        flex:1,
        alignItems:'center',
        height:320,
        width:200,
        margin:8,
        backgroundColor:'white',
        borderRadius:4
    
    },
    cardbody:{},
    title:{
        fontSize:28,
        fontWeight:'bold',
        color:'black'
    },
    place:{
        fontSize:22,
        marginBottom:10,
        color:'black'

    },
    desc:{
        fontSize:19,
        marginBottom:12,

        color:'black'

    }
})