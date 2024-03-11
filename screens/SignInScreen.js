import {View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, StatusBar, Platform, Pressable, ScrollView} from 'react-native';
import { Entypo, AntDesign } from '@expo/vector-icons';

export default SignInScreen = ({navigation}) => {
    return (
        <ScrollView style={[styles.container]}>
           
            <SafeAreaView style={{flexDirection:'column', justifyContent:'center', paddingTop:30, paddingBottom:350}}>
                <View style={{right:110, top:-25, flexDirection:'column'}}>
                    <Text style={[styles.headingText]}>Welcome!</Text>
                    <Text style={[styles.text, {left:130, color:'#747d8c'}]}>Sign in to continue</Text>
                </View>
                

                <View style={{top:40}}>
                    <Text style={[styles.text, {bottom:10}]}>Email</Text>
                    <TextInput
                        style={[styles.input]} 
                    />
                </View>

                <View style={{top:60}}>
                    <Text style={[styles.text, {bottom:10}]}>Password</Text>
                    <TextInput
                        style={[styles.input]}
                        secureTextEntry={true} 
                    />
                </View>

                <View style={{top:140}}>
                    <Pressable style={[styles.press]}>
                        <Text style={{fontSize: 18, color:'#ffff'}}>Login</Text>
                    </Pressable>
                    <Text style={{top: 60, left: 140}}>Forgot Password?</Text>
                </View>


                <View style={{top:195, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 70, marginBottom: 11, width: 150, right:-10}} />
                    <Text style={{top: 60, right:0, fontWeight:'bold'}}>Or</Text>
                    <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, marginTop: 70, marginBottom: 11, width: 150, right:10}} />

                </View>
                
                <View style={{top: 230, flexDirection:'row', justifyContent:'space-evenly'}}>
                    <AntDesign name="google" size={54} color="#ffa502" />
                    <Entypo name="facebook" size={54} color="#3742fa" />
                    <AntDesign name="apple1" size={54} color="#747d8c" />
                </View>

                <View style={{top: 280, flexDirection:'row', justifyContent:'space-evenly'}}>

                    <Text style={{fontSize:20, left: 5}}>Don't have an account?</Text>
                    <Text style={{fontSize:20, color:"blue", right:23}}>Sign up</Text>
                    
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