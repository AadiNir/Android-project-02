import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Contactlist = () => {
    const contacts =[
        {
            uid:1,
            name:"Aadithya Niranjan",
            url:"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            details:"I'm cool"
        },
        {
            uid:2,
            name:"Varun",
            url:"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            details:"I'm cool"

        },
        {
            uid:3,
            name:"Tarun",
            url:"https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            details:"I'm cool"

        }
    ]
  return (
    <View>
        <ScrollView>
      <Text style={styles.headingtext}>Contact list</Text>
      <View style={styles.container}>
      {contacts.map(({uid,name,url,details})=>(
        <View key={uid} style={styles.container2}>
            <Image source={{uri:url}} style={styles.conimage}/>
            <View>

            <Text style={styles.conname}>{name}</Text>
            <Text style={styles.conname}>{details}</Text>
            </View>



        </View>
      ))}
      </View>
      </ScrollView>

    </View>
  )
}

export default Contactlist

const styles = StyleSheet.create({
    headingtext:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:12
    },
    container:{
        backgroundColor:'green',
        
    },
    conname:{
        color:'black',
        paddingHorizontal:12,
        fontSize:20
    },
    conimage:{
        height:60,
        width:60,
        borderRadius:50
    },
    container2:{
        flex:1,
        flexDirection: 'row',
        margin:10,
        backgroundColor:'white',
        borderRadius:10

    
    }
})