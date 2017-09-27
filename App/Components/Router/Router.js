/**
 * Created by shwetabhat on 21/09/17.
 */
import React from 'react';
import { Router, Scene, ActionConst, Actions, DefaultRenderer } from 'react-native-router-flux';
import SignIn from './../Login/Signin'
import SearchPlanets from './../Search/SearchPlanets'

const RouterComponent =() =>{
    return (
        <Router>
            <Scene key="Main">
                <Scene key="LoginFlow" >
                    <Scene key="Main_log"
                           tabBarStyle={{backgroundColor:'#000'}} initial>

                            <Scene
                                key='SignIn'
                                component={SignIn}
                                title="Login"
                                navigationBarStyle={styles.navigationBarStyles}
                                hideNavBar={true}
                                hideTabBar={true}
                                initial
                            />
                            <Scene
                                sceneStyle={{paddingTop:20}}
                                key='SearchPlanets'
                                component={SearchPlanets}
                                title="Search"
                                hideNavBar={true}
                                hideTabBar={true}
                            />
                    </Scene>
                </Scene>
            </Scene>
        </Router>
    );
};
const styles={
    navigationBarStyles:{
        backgroundColor: '#077CE5',
        width: '70%',
        height:'20%',

    }
}
export default RouterComponent;
