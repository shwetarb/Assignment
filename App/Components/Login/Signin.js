/**
 * Created by shwetabhat on 21/09/17.
 */
import React, { Component } from 'react';
import {View, Text,StyleSheet, TouchableOpacity,ScrollView,TextInput,Alert} from 'react-native'
import {Actions} from 'react-native-router-flux';

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            userName:'',
            password:''
        }
    }
    pressLogin(){

        let userName = this.state.userName;
        let password = this.state.password;
        if(userName == "" && password == ""){
            Alert.alert(
                'Oops!',
                'Please enter username and password to login',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(userName == ""){
            Alert.alert(
                'Oops!',
                'Please enter username to login',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(password == ""){
            Alert.alert(
                'Oops!',
                'Please enter password to login',
                [
                    {text:'OK'}
                ]
            )
        }
        else if(userName != "" && password != ""){
            Actions.SearchPlanets();
        }

    }
    render(){
        return(
            <View style={{flex:1}}>
                <ScrollView style={{flex:1,paddingTop:80}}>


                    <View style={[styles.inputfield,styles.inputFieldTopBorder]}>
                        <Text style={styles.lableText}></Text>
                        <View style={{flex:3}}>
                            <TextInput style={styles.inp} placeholder="User Name" placeholderTextColor='rgb(128,128,128)'
                                       onChangeText={(text) => this.setState({userName:text})}
                                       value={this.state.userName}
                            />
                        </View>
                    </View>
                    <View style={styles.inputfield}>
                        <Text style={styles.lableText}></Text>
                        <View style={{flex:3}}>
                            <TextInput minLength={1} maxLength={60} style={[styles.inp,styles.passwordField]} placeholder="Password" placeholderTextColor='rgb(128,128,128)' secureTextEntry={true}
                                       onChangeText={(text) => this.setState({password:text})}
                                       value={this.state.password}
                            />
                        </View>

                    </View>

                    <View style={styles.loginContainer}>
                        <TouchableOpacity onPress={()=>this.pressLogin()}><Text>LOG IN</Text></TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputfield: {
        flexDirection:'row',
        flex:1,
        borderBottomColor:'#e5e5e5',
        borderBottomWidth:1,
        position:'relative',
        paddingTop:5,
        height:54,
    },
    lableText:{
        flex:1,
        fontSize:10,
        color:'rgb(102,102,102)',
        fontWeight:'bold',
        alignItems:'center',
        paddingTop:17,
        // paddingBottom:19,
        paddingLeft:20,
    },
    inp:{
        flex:3,
        borderBottomWidth:0,
        borderBottomColor:0,
        fontSize:16,
        justifyContent:'flex-start',


    },
    loginContainer:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        marginTop:36,
        marginLeft:20,
        marginRight:20,
    },
    loginButton:{
        borderRadius:43,
        height:48,
        backgroundColor:'rgb(21,147,204)'
    },
    loginText:{

        color:'#FFF',
    },
    inputFieldTopBorder:{
        borderTopWidth:1,
        borderTopColor:'rgba(0,0,0,0.1)',
    },
    passwordField:{
        width:150,
    }
});