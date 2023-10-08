import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Elevatedcard = () => {
  return (
    <View>
      <Text style={styles.headingfont}>Elevatedcard</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card,styles.elevatedcardone]}>
            <Text style={styles.f1}>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevatedcardone]}>
            <Text style={styles.f1}>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevatedcardone]}>
            <Text style={styles.f1}>Tap</Text>
        </View>
        <View style={[styles.card,styles.elevatedcardone]}>
            <Text style={styles.f1}>Tap</Text>
        </View>
      </ScrollView>
    </View>
  )
}

export default Elevatedcard

const styles = StyleSheet.create({
    headingfont:{
        fontSize:24,
        paddingHorizontal:8,
        fontWeight:"bold"
    },
    container:{
        padding:8
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:3,
        width:100,
        height:100,
        borderRadius:5,
        margin:8,
    
    },
    elevatedcardone:{
        backgroundColor:'yellow',
        elevation:4
    },
    f1:{
        color:'black'
    }
})