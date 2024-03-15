import * as React from "react";
import { StyleSheet, Image, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Pressable } from "react-native";


export default Post1 = ({navigation}) => {
    return(
        <SafeAreaView style={[styles.container]}>
            

            <View style={{flexDirection:'row', alignContent:'space-between'}}>
                <Image source={require('../assets/Allura Heart.png')} style={{left:120, top:110}}/>
                <Image source={require('../assets/Hands Give1.png')} style={{left:175}}/>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top:-290}}>
                <Image source={require('../assets/Allura Heart (1).png')} style={{left:280, top:150}}/>
                <Image source={require('../assets/Hands Give2.png')} style={{right:47}}/>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top:-540}}>
                <Image source={require('../assets/Allura Heart (2).png')} style={{left:80, top:190}}/>
                <Image source={require('../assets/Hands Give3.png')} style={{left:130}}/>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top:-750}}>
                <Image source={require('../assets/Allura Heart (3).png')} style={{left:280, top:100}}/>
                <Image source={require('../assets/Hands Give4.png')} style={{right:75}}/>
            </View>

            

            <View style={{justifyContent:'center', alignContent:'center'}}>
                <Text style={{fontSize: 24, fontWeight:'bold', top:-734, paddingLeft:35, paddingRight:35}}>The answer to our problem is in our hands. Found those near you.</Text>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top: -690}}>
                <Pressable onPress={()=>{navigation.navigate('MainPage')}}>
                    <Text style={{fontSize:24, paddingLeft:20, color:"#273c75"}}>Skip</Text>
                </Pressable>

                <Pressable onPress={()=>{navigation.navigate('Post2')}}>
                    <Text style={{fontSize:24, paddingLeft:255, color:"#273c75"}}>Next</Text>
                </Pressable>
                
                
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor:"#F9EBA6", 
      marginBottom:-600,
      marginTop:-70
     },
    
     
  });