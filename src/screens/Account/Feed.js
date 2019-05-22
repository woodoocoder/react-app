import React from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Text } from 'react-native';

export default class Feed extends React.Component {

   static navigationOptions = {
      header: null,
      //title: 'Feed'
   }   

   render() {
      return (
         <View style={styles.container}>
            <Text>Feed</Text>
         </View>        
      );
   }
}

const styles = StyleSheet.create({
   container: {
       flex: 1,        
       padding: 45,
       justifyContent: 'center',
       alignItems: 'center',               
   },          
});