import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import Elevatedcard from './components/Elevatedcard'
import Fancycard from './components/Fancycard'
import Actioncard from './components/Actioncard'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Flatcard/>
      <Elevatedcard/>
      <Fancycard/>
      <Actioncard/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App