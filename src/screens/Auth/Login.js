import React from 'react';
import { KeyboardAvoidingView, View, StyleSheet, Text, Alert, ToastAndroid } from 'react-native';

import { TextInput, Button } from 'react-native-paper';

import { connect } from 'react-redux';

import AuthService from '../../services';

class Login extends React.Component {

    static navigationOptions = {
        header: null,
        //title: 'Login'
    }  
    
    state = {
        email: '',
        password: ''
    }    

    onChangeText = (key, val) => {
        this.setState({ [key] : val })
    }  
    
    handleLogin = () => {  
        const { email, password } = this.state;

        //ToastAndroid.show(email, ToastAndroid.SHORT);

        //Alert.alert(email, password);
        
        this.props.dispatch(AuthService.Login( email, password ))
		//this.props.dispatch(AuthService.Test(email, password ))
    }    

    render() {
        return (                                        
            <View style={styles.container}>                
                <View style={styles.main}>
                    <Text style={styles.title}>Login</Text>
                    <TextInput
                        mode="outlined"
                        style={styles.inputContainerStyle}
                        label="Email"
                        value={this.state.email}
                        placeholder="example@gmail.com"
                        onChangeText={val => this.onChangeText('email', val)}
                    />
                    <TextInput
                        mode="outlined"
                        style={styles.inputContainerStyle}
                        label="Password"
                        value={this.state.password}
                        placeholder=""
                        onChangeText={val => this.onChangeText('password', val)}
                        secureTextEntry={true}
                    /> 
                    <Button mode="contained" onPress={this.handleLogin} style={styles.button}>
                        Log in 
                    </Button>
                    <Text 
                        style={styles.forgotText}
                        onPress={() => this.props.navigation.navigate('ForgotPassword')}
                    >Forgot your password ?</Text>  
                </View>
                <View style={styles.bottom}>
                    <Text style={styles.dontHaveAnaccountText}>Don't have an account ?</Text>
                    <Text 
                        style={styles.signupLinkText} 
                        onPress={() => this.props.navigation.navigate('Signup')}
                    >Sign up</Text>
                </View>
            </View>
        );
    }
}

export default connect()(Login)

const styles = StyleSheet.create({
    container: {
        flex: 1,        
        padding: 45,        
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
    
    forgotText: {
        textDecorationLine: "underline",
        color: 'silver',
        marginTop: 25,
        textAlign: 'center',
    },
    main: {
        flex: 4,
        justifyContent: 'center',        
    }, 
    bottom: {
        flex: 1, 
        justifyContent: 'flex-end',        
    }, 

    signupLinkText: {
        textDecorationLine: "underline",
        color: 'blue',
        textAlign: 'center',        
    },    
    dontHaveAnaccountText: {
        textAlign: 'center',
    }         
});