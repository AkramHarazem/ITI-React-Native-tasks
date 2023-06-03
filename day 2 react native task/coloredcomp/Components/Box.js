import { View, Text } from 'react-native'
import React from 'react'
import styles from './BoxStyle'

export default function Box({colorName,hexCode}) {
  return (
    <View style={[styles.container,{backgroundColor:hexCode}]}>
      <Text style={styles.boxText}>{colorName}</Text>
    </View>
  )
}