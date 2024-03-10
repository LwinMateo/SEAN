import {View, Text, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, StatusBar, Platform, Pressable} from 'react-native';

export default SignInScreen = () => {
    return (
        <SafeAreaView style={[styles.container]}>
            <View style={{flexDirection:'column', justifyContent:'center', paddingTop:30}}>
                <Text style={[styles.headingText]}>NEAR</Text>

                <View style={{top:20}}>
                    <Text style={[styles.text, {bottom:10}]}>Email</Text>
                    <TextInput
                        style={[styles.input]} 
                    />
                </View>

                <View style={{top:50}}>
                    <Text style={[styles.text, {bottom:10}]}>Password</Text>
                    <TextInput
                        style={[styles.input]} 
                    />
                </View>

                <View style={{top:70}}>
                    <Pressable style={[styles.press]}>
                        <Text style={{fontSize: 18}}>Sign In</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
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
    },
    text: {
      fontSize: 18,
      textAlign: "left",
      left: 25
    },
    input: {
        height: 45,
        backgroundColor: '#f1f2f6',
        borderWidth: 1,
        left:25,
        width: 340,
        borderRadius: 15,
        paddingLeft: 15,
    },
    press: {
        backgroundColor: '#45aaf2',
        height: 45,
        width: 340,
        borderRadius: 15,
        top: 50,
        left: 25,
        justifyContent: 'center',
        alignItems: 'center',
    },
  });