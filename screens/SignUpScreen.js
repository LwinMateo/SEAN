import { View, Text, SafeAreaView, StyleSheet, Platform, StatusBar, TextInput, Pressable} from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';

export default SignUpScreen = ({navigation}) => {

  

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{flexDirection:'column', justifyContent:'center', paddingTop:30}}>
        <Text style={[styles.headingText]}>NEAR</Text>

        <View style={{top:20}}>
          <Text style={[styles.text, {bottom:10}]}>Full Name</Text>
          <TextInput
            style={[styles.input]} 
          />
        </View>

        <View style={{top:50}}>
          <Text style={[styles.text, {bottom:10}]}>Email</Text>
          <TextInput
            style={[styles.input]} 
          />
        </View>


        <View style={{top:80}}>
          <Text style={[styles.text, {bottom:10}]}>Password</Text>
          <TextInput
            style={[styles.input]}
            secureTextEntry={true}
          />
        </View>

        <View style={{top:10}}>
          <Pressable style={[styles.press]}>
            <Text style={{fontSize: 18}}>Sign Up</Text>
          </Pressable>

          <Pressable style={[styles.press1]}>
            <Text style={{fontSize: 18, left:23}}>Sign up with Google</Text>
            <AntDesign name="google" size={24} color="black" style={{right:25}}/>
          </Pressable>

          <Pressable style={[styles.press2]}>
            <Text style={{fontSize: 18, left:23}}>Sign up with Facebook</Text>
            <FontAwesome name="facebook-f" size={24} color="black" style={{right: 29}}/>
          </Pressable>

        </View>
       

        <View style={{flexDirection:'row', bottom:-206, left:30}}>
            <Text>Already have an account?</Text>
            <Text style={{left: 10, color:"blue"}} onPress={() => {navigation.navigate('SignIn')}}>Sign in</Text>
        </View>

       
      </View>
    </SafeAreaView>
  );
};

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
  input:{
    height: 45,
    backgroundColor: '#f1f2f6',
    borderWidth: 1,
    left:25,
    width: 340,
    borderRadius: 15,
    paddingLeft: 15,
  },
  press:{
    backgroundColor: '#45aaf2',
    height: 45,
    width: 340,
    borderRadius: 15,
    top: 100,
    left: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  press1:{
    backgroundColor: '#a5b1c2',
    height: 45,
    width: 340,
    borderRadius: 15,
    top: 140,
    left: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  press2:{
    backgroundColor: '#a5b1c2',
    height: 45,
    width: 340,
    borderRadius: 15,
    top: 160,
    left: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }


});