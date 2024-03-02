import 'react-native-gesture-handler';
import React from 'react'
import {Platform,Share,SafeAreaView, Linking} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import{createDrawerNavigator , DrawerItem,DrawerContentScrollView ,DrawerItemList} from '@react-navigation/drawer'
import About from './component/About'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as StoreReview from 'react-native-store-review';
import { BannerAd, BannerAdSize , TestIds } from '@react-native-admob/admob';

StoreReview.requestReview();

const drawer= createDrawerNavigator();

export default function App() {

const PLAY_STORE_LINK = `https://play.google.com/store/apps/details?id=com.allahnames`;

const STORE_LINK = Platform.select({
  android: PLAY_STORE_LINK,
});
 const openReviewInStore = () => Linking.openURL(STORE_LINK)


  return (
    <NavigationContainer>
      <drawer.Navigator
      drawerContent={props => {
        return (
          <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label="Share" onPress={onShare} />
            <DrawerItem label="Feedback" onPress={openReviewInStore} />
            <DrawerItem label="Contact developer" onPress={() => Linking.openURL('http://miraj.complete-om.com/')} />
          </DrawerContentScrollView>
        )
      }}
      
      
      initialRouteName="Home" >
        <drawer.Screen  name="Home" component={Home} options={{
          title:'Allah Names'

        }}/>
        <drawer.Screen name="About" component={About} />
      </drawer.Navigator>
    </NavigationContainer>
  )
}
const Stack= createNativeStackNavigator();
import Main from './component/Main';
import English from './component/English';
import Arabic from './component/Arabic';
import Sura from './component/Sura';
import Bangla from './component/Bangla';
function Home(){
  return(
      <SafeAreaView style={{flex:1}}>
      <Stack.Navigator>
      <Stack.Screen options={{headerShown: false}} name="Main" component={Main} />
      <Stack.Screen options={{headerShown: false}} name="English" component={English} />
      <Stack.Screen options={{headerShown: false}} name="Arabic" component={Arabic} />
      <Stack.Screen options={{headerShown: false}} name="Bangla" component={Bangla} />
      <Stack.Screen options={{headerShown: false}} name="Sura" component={Sura} />
    </Stack.Navigator>
    <BannerAd
    size={BannerAdSize.ADAPTIVE_BANNER}
    unitId="ca-app-pub-1662853246746272/5996236599"
    />
      </SafeAreaView>
  )
}
const onShare = async () => {
  try {
    const result = await Share.share({
      message:'https://play.google.com/store/apps/details?id=com.allahnames'
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};