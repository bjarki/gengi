import React, { Component } from 'react'
import { Platform, Text, View } from 'react-native'

import styles from '../../styles'

export default props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerLogo}>Gengi.is</Text>
      <Text style={styles.headerItem}>
        {props.currency ? props.currency.code : ''}
      </Text>
    </View>
  )
}
