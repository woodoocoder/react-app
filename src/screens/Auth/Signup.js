import React from 'react';
import { KeyboardAvoidingView, View, ScrollView, StyleSheet, Text } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

export default class Signup extends React.Component {

    static navigationOptions = {
        header: null,
        //title: 'Login'
    }    

    render() {
        return (                                        
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>                
                <View>
                    <Text style={styles.title}>Sign up</Text>
                    <TextInput
                        mode="outlined" 
                        style={styles.inputContainerStyle}
                        label="Firstname"
                        placeholder=""                        
                    />
                    <TextInput
                        mode="outlined"
                        style={styles.inputContainerStyle}
                        label="Middlename"
                        placeholder=""                        
                    />
                    <TextInput
                        mode="outlined"
                        style={styles.inputContainerStyle}
                        label="Lastname"
                        placeholder=""                        
                    />                                                              
                    <TextInput
                        mode="outlined"
                        style={styles.inputContainerStyle}
                        label="Email"
                        placeholder="example@gmail.com"
                    />
                    <TextInput
                        mode="outlined"
                        style={styles.inputContainerStyle}
                        label="Password confirm"
                        placeholder=""
                        secureTextEntry={true}
                    /> 
                    <TextInput
                        mode="outlined"
                        style={styles.inputContainerStyle}
                        label="Password"
                        placeholder=""
                        secureTextEntry={true}
                    />                    
                    <Button mode="contained" onPress={() => {}} style={styles.button}>
                        Sign up
                    </Button>
                    <Text style={styles.haveAnAccount}>Already have an account ?</Text> 
                    <Text 
                        style={styles.signinLinkText} 
                        onPress={() => this.props.navigation.navigate('Login')}
                    >Sign in</Text>                     
                
                                    
                    <Text 
                        style={styles.terms}                         
                    >By creating an account you agree to our Terms & Privacy</Text>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 45                
    },
    title: {        
        fontSize: 40,        
        fontWeight: 'bold',
        marginBottom: 30,
    },
    inputContainerStyle: {        
        marginBottom: 15
    },
    button: {        
        padding: 8
    },
    
    main: {
        flex: 4,
        justifyContent: 'center',        
        // backgroundColor: 'red'
    }, 
    bottom: {
        flex: 1, 
        justifyContent: 'flex-end',
        // backgroundColor: 'green'
    },
    
    haveAnAccount:{            
      marginTop: 25,
      //marginBottom: 5,
      textAlign: 'center',       
    },

    signinLinkText: {
        textDecorationLine: "underline",
        color: 'blue',
        textAlign: 'center',        
    },    
    terms: {
        textAlign: 'center',
        color: 'silver',
        marginTop: 30
    }         
});