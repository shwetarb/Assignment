/**
 * Created by shwetabhat on 21/09/17.
 */
import React, {Component} from 'react'
import {View,Text,Image,TouchableOpacity,ScrollView,TextInput} from 'react-native'
import {Actions,ActionConst} from 'react-native-router-flux'
import Services from './../Services/Services'
import Planets from './PlanetsComponent'
import _ from 'lodash';
export default class SearchPlanets extends Component{
    constructor(){
        super();
        this.state={
            textData:null,
            planetsData:[]
        }
    }
    getSearchData(data) {
        this.setState({
            textData: data,
        })
        if(data.length == 0){
            Services.getSearchAPIData(`https://swapi.co/api/planets?search=`, 'GET')
                .then(result => {
                    console.log('results test', result.results)
                    this.setState({planetsData:result.results})
                })
                .catch(err => {
                    console.log('Error', err)
                })
        }

       /* if (data.length != 0) {
            Services.getSearchAPIData(`https://swapi.co/api/planets?search=${data}`, 'GET')
                .then(result => {
                    console.log('results test', result.results)
                })
                .catch(err => {
                    console.log('Error', err)
                })
        }*/
    }
    searchIconClick(){
        let data = this.state.textData;
        if (data.length != 0) {
            Services.getSearchAPIData(`https://swapi.co/api/planets?search=${data}`, 'GET')
                .then(result => {
                    this.setState({planetsData:result.results})
                })
                .catch(err => {
                    console.log('Error', err)
                })
        }
        else{
            Services.getSearchAPIData(`https://swapi.co/api/planets?search=`, 'GET')
                .then(result => {
                    this.setState({planetsData:result.results})
                })
                .catch(err => {
                    console.log('Error', err)
                })
        }
    }

    componentWillMount(){
        Services.getSearchAPIData(`https://swapi.co/api/planets?search=`, 'GET')
            .then(result => {

                let planetsdata = result.results
                console.log("planetsdata",planetsdata)
               // planetsdata=  _.sortBy(planetsdata, 'population')
               /* _.forEach(planetsdata, function(value) {
                   if(value.population == "unknown"){
                       value.population =0;
                   }
                });*/

                this.setState({planetsData:result.results})

            })
            .catch(err => {
                console.log('Error', err)
            })
    }

    render(){
        return(
            <View style={[{flex:1},styles.bgColor,{paddingTop:20}]}>
                <ScrollView>
                <View style={[styles.HeaderMainView]}>
                    <Image source={require('./../../../images/header_background.png')}
                           style={{flexDirection:'row',paddingTop:5}}>

                        <View style={{flex:1, alignItems:'flex-start'}}>
                            <TouchableOpacity onPress={() => Actions.pop()}>
                                <Image source={require('./../../../images/close_dashnoard.png')}/>
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:1}}>
                            <Text style={[ styles.headerTitle,styles.fontSize18]}>SEARCH</Text>
                        </View>

                    </Image>
                </View>

                <View style={{ flex: 1 }}>
                    <View style={styles.searchMainView}>
                        <View style={styles.searchBox}>
                            <ScrollView>
                                <TextInput underlineColorAndroid='transparent' placeholder="What you want to search" value={this.state.textData} onChangeText={(text) => this.getSearchData(text)} placeholderTextColor='rgb(204,204,204)'
                                           style={[styles.searchInputStyle1]}
                                />
                                <TouchableOpacity style={styles.searchIconStyle1} onPress={()=>this.searchIconClick()}>
                                    <Image source={require('./../../../images/search.png')} />
                                </TouchableOpacity>
                            </ScrollView>
                         </View>
                    </View>
                </View>

                      {this.state.planetsData.length != undefined?this.state.planetsData.map((item)=>{
                        return(
                            <Planets item={item}/>
                        )
                    }):
                    <View/>}
                  </ScrollView>
            </View>
        )
    }
}
const styles = {
    flex1:{
        flex:1
    },
    marginTop0: {
        marginTop: -10,
        marginBottom: 10,
    },
    funkoNews: {
        marginTop: 8,
        backgroundColor: '#fff',
        padding: 10,
        paddingLeft: 20
    },
    fav: {
        flex: 1,
        paddingVertical: 10
    },
    latestView: {
        backgroundColor: '#fff',
        marginTop: 8,
        flexDirection: 'column'
    },
    bgColor: {
        backgroundColor: '#fff',
        flex:1
    },
    favourite: {
        flex: 1,
        backgroundColor: '#fff',
        paddingVertical: 10

    },
    searchView: {
        flex: 1,

    },
    paddingLeft10: {
        paddingLeft: 10
    },
    paddingRight10: {
        paddingRight: 10
    },
    searchMain1: {
        flex: 4,
        //  alignItems:'center',
        justifyContent: 'center',

        // width:device.width,

    },
    searchBox1: {
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(7,124,229)',
        backgroundColor: '#fff',
        marginLeft: 20,
        marginRight: 20,





    },
    searchInputStyle1: {
        height: 48,
        textAlign: 'center',
        paddingRight: 20,
        color: 'rgb(39,39,39)'
    },
    searchIconStyle1: {
        position: 'absolute',
        top: 15,
        right: 0,
        height: 30,
        width: 30,
        //borderWidth:1

    },
    closeIconStyle: {
        position: 'absolute',
        top: 17,
        padding: 5,
        right: 37,
        height: 27,
        width: 27

    },
    searchBox: {
        position: 'relative',
        borderBottomWidth: 1,
        borderBottomColor: 'rgb(7,124,229)',
        backgroundColor: '#fff',
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,


    },
    searchInputStyle: { height: 48, textAlign: 'left', paddingRight: 20, color: 'rgb(39,39,39)' },
    searchIconStyle: {
        position: 'absolute',
        top: 10,
        right: -5,
        padding: 10,



    },
    searchMainView: {
        backgroundColor: '#fff',
        paddingVertical: 10
    },
    directionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    justifyCenter: {
        justifyContent: 'center'
    },
    alignCenter: {
        alignItems: 'center'
    },
    positionRelative: {
        position: 'relative'
    },
    HeaderMainView: {
        backgroundColor: '#077CE5',
        height: 38,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0,
        elevation: 2,
    },
    directionRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    paddingHorizontal20: {
        paddingHorizontal: 20
    },
    bgImgStyles: {
        width: 25,
        marginTop: 15,
    },
    alignStart: {
        alignItems: 'flex-start'
    },
    headerTitle: { color: '#fff'},
    fontSize18: {
        fontSize: 18,
    },
}