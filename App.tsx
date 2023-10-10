import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import Flatcard from './components/Flatcard'
import Elevatedcard from './components/Elevatedcard'
import Fancycard from './components/Fancycard'
import Actioncard from './components/Actioncard'
import Contactlist from './components/Contactlist'


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
      <Flatcard/>
      <Elevatedcard/>
      <Fancycard/>
      <Actioncard/>
      <Contactlist/>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App