import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Actioncard = () => {
    function touch(weburl:string){
        Linking.openURL(weburl);

    }
  return (
    <View>
      <View>
        <Text style={styles.headerfont}>Action Card</Text>
        <View style={styles.card}>
            <Text style={styles.title}>What's new in Javascript ES12 !</Text>
            <Image source={{uri:'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'}} style={styles.cardimage}/>
            <Text numberOfLines={8} style={styles.details}>Back in 2015, the revolutionary ES6 was introduced with a variety of features that are commonly used in modern-day web development.

Since then, ECMAScript has evolved significantly up to ES12, officially known as ECMAScript 2021. ES12 arrived in June 2021 with new capabilities, improvements, and some syntax changes.

Every JavaScript developer eager to perform at their best should learn the latest features of ES12. In this blog, we’ll look into the top six features with examples.</Text>
    <TouchableOpacity onPress={()=>touch('https://www.syncfusion.com/blogs/post/top-6-javascript-es12-features-you-should-use.aspx')} style={styles.button}>
        <Text>Read more</Text>
    </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Actioncard

const styles = StyleSheet.create({
    headerfont:{
        fontSize:23,
        fontWeight:"bold",
        paddingHorizontal:12
    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:9,
        paddingHorizontal:12,
        backgroundColor:'white',
        borderRadius:4
    },
    title:{
        fontSize:27,
        color:'black'

    },
    cardimage:{
        height:100,
        width:100,
        marginVertical:7
    },
    details:{
        paddingVertical:5,
        color:'black'
    },
    button:{
        backgroundColor:'green',
        color:'black',
        paddingHorizontal:10,
        paddingVertical:5,
        borderRadius:4,
        margin:10

    
    }
})