import {View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, StatusBar, Platform, Pressable, ScrollView} from 'react-native';
import { Entypo, AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

export default Post = ({navigation}) => {
    return (
        <ScrollView style={[styles.container]}>
           
            <SafeAreaView style={{flexDirection:'column', justifyContent:'center', paddingTop:30, paddingBottom:350}}>
                <View style={{right:10, top:-25, flexDirection:'column'}}>
                    <Text style={[styles.headingText]}>See Something Say Something</Text>
                </View>
                

                <View style={{top:40}}>
                    <Text style={[styles.text, {bottom:10}]}>Email</Text>
                    <TextInput
                        style={[styles.input]} 
                    />
                </View>

                <View style={{top:60}}>
                    <Text style={[styles.text, {bottom:10}]}>Location</Text>
                    <TextInput
                        style={[styles.input]}
                    />
                </View>

                <View style={{top:80}}>
                    <Text style={[styles.text, {bottom:10}]}>Description</Text>
                    <TextInput
                        style={[styles.input]}
                    />
                </View>

                <View style={{top:195, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Text style={{top: 0, right:48, fontWeight:'bold'}}>Upload an Image </Text>
                    <MaterialCommunityIcons name="image-plus" size={24} color="black" style={{right:120}}/>

                </View>

                <View style={{top:250, right: -40, flexDirection:'column', justifyContent:'center'}}>
                    <Image
                        source={require("../assets/Group 2.png")}
                    />
                    <Image
                        source={require("../assets/Group 3.png")}
                        style={{top:-174, left:5}}
                    />
                </View>


                <View style={{top:170, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Text style={{fontSize: 20, top: 60, right:-13, fontWeight:'bold'}}>Pick your Option</Text>
                    <Entypo name="warning" size={24} color="#57606f" style={{top: 60, right: 40}} />

                </View>
                
                <View style={{top: 25, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{top:220, borderRadius:35, backgroundColor:"#ff6b81"}}>
                        <Text style={{paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15}}>Danger</Text>
                    </View>
                    <View style={{top:220, borderRadius:35, backgroundColor:'#ff7f50'}}>
                        <Text style={{paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15}}>Warning</Text>
                    </View>
                    <View style={{top:220, borderRadius:35, backgroundColor:'#eccc68'}}>
                        <Text style={{paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15}}>Caution</Text>
                    </View>
                    <View style={{top:220, borderRadius:35, backgroundColor:'#70a1ff'}}>
                        <Text style={{paddingBottom:10, paddingTop:10, paddingLeft:15, paddingRight:15}}>Notice</Text>
                    </View>
                </View>

                <View style={{top: 55, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{top:220, borderRadius:35, backgroundColor:"#dfe4ea"}}>
                        <Text style={{paddingBottom:20, paddingTop:20, paddingLeft:55, paddingRight:55}}>Cancel</Text>
                    </View>
                    <View style={{top:220, borderRadius:35, backgroundColor:'#000'}}>
                        <Text style={{paddingBottom:20, paddingTop:20, paddingLeft:55, paddingRight:55, color:'white'}}>Post</Text>
                    </View>
                    
                </View>
                


            </SafeAreaView>
       
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      paddingHorizontal:3,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    },
    headingText: {
      fontSize: 30,
      textAlign: "center",
      paddingBottom: 5,
      fontWeight: "bold"
    },
    text: {
      fontSize: 18,
      textAlign: "left",
      left: 25
    },
    input: {
        height: 45,
        backgroundColor: '#f1f2f6',
        borderBottomWidth: 2,
        left:25,
        width: 340,
        borderRadius: 5,
        paddingLeft: 15,
    },
    press: {
        backgroundColor: '#273c75',
        height: 45,
        width: 250,
        borderRadius: 25,
        top: 50,
        left: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });