/**
 * Created by shwetabhat on 22/09/17.
 */
import { NetInfo, Alert } from 'react-native';

class Services{
    getStatus(response) {

        if ((response.status >= 200 && response.status <= 300) || response.status === 0) {

            console.log('response', response);
            return Promise.resolve(response)
        } /*else if(response.status == 401){
         Alert.alert(
         'Something went Wrong',
         'Please try again later.',
         [
         {text: 'OK', onPress: () => console.log('OK Pressed')},
         ],
         { cancelable: false }
         )
         }*/else {
            //  let error=new Error(response.statusText)
            // error.response = response;
            //return error

            //console.log(response);
            //throw Error(response.statusText)

            return Promise.reject(response);
        }
    }
    parseJson(response) {
        return response.json();
    };
    getSearchAPIData(url,type = "GET"){
        console.log("urlurl",url)
        return fetch(url, {
            method: type,
            headers: {
                'Content-Type': 'application/json',
            },
        }).then(this.getStatus)
            .then(this.parseJson)

    }
}
export default new Services();
