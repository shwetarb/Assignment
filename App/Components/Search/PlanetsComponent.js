/**
 * Created by shwetabhat on 22/09/17.
 */
import React,{Component} from 'react'
import {View,Text,Image} from 'react-native'

export default class Planets extends Component{
    constructor(props){
        super(props)
        console.log("props.item",props.item)
    }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={[styles.stateMainContainer,{flex:1,flexDirection:'row'}]}>
                    <Image source={require('./../../../images/Planets.png')} />
                    <Text style={[styles.stateSubscriptionTextStyle,{marginLeft:'20%',marginTop:'10%'}]}>
                        {this.props.item.name}{","}{this.props.item.population}
                    </Text>
                </View>
            </View>
        )
    }
}
const styles={
    cardTxtStyle:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    leftTxtStyle:{
        flex:9,

    },
    listRightIcon:{
        // justfyContent:'flex-end',
        flex:1,
    },
    travelerTxtStyle:{
        lineHeight:18,
        color:'rgb(65,64,66)',

    },
    titleTextStyle:{
        lineHeight:22,
        color:'rgb(65,64,66)',
    },
    incommingTxt:{
        color:'rgb(65,64,66)',
    },
    orderMainView:{
        backgroundColor:'rgb(239,239,239)',
        flex:1,
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems: 'center',
        backgroundColor:'#FFF'
    },

    yourSubscriptionHeader: {
        backgroundColor: 'rgb(21,147,204)'
    },
    yourSubscriptionHeaderSubscription: {
        alignSelf: 'center',
        color: '#FFF',
    },
    stateMainContainer:{
        marginTop:16,
    },
    inactiveStateMarginBottom:{
        marginBottom:75,
    },
    stateSubscriptionTextStyle: {
        color:'rgb(65,64,66)',
        lineHeight:22,
    }
};