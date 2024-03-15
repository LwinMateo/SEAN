import { StyleSheet, Image, Text, View, SafeAreaView, Platform, StatusBar, ScrollView, Pressable } from "react-native";


export default Post2 = ({navigation}) => {
    return(
        <SafeAreaView style={[styles.container]}>
            

            <View style={{flexDirection:'column', alignContent:'space-between', top:74, left: 140}}>
                <Image source={require('../assets/The Little Things Idea.png')}/>

                <Image source={require('../assets/Brazuca Standing.png')} style={{right:100, top:56}}/>

                

                


            </View>

            <View style={{justifyContent:'center', alignContent:'center', paddingTop:145}}>
                <Text style={{fontSize: 24, fontWeight:'bold', paddingLeft:10, paddingRight:35}}>Take the lead</Text>
            </View>

            <View style={{justifyContent:'center', alignContent:'center', paddingTop:20}}>
                <Text style={{fontSize: 24, paddingLeft:35, paddingRight:35}}>Be apart of the change </Text>
            </View>

            <View style={{flexDirection:'row', alignContent:'space-between', top: 45}}>
                <Pressable onPress={()=>{navigation.navigate('MainPage')}}>
                    <Text style={{fontSize:24, paddingLeft:20, color:"#273c75"}}>Skip</Text>
                </Pressable>

                <Pressable onPress={()=>{navigation.navigate('Post3')}}>
                    <Text style={{fontSize:24, paddingLeft:255, color:"#273c75"}}>Next</Text>
                </Pressable>
                
                
            </View>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      backgroundColor:"#B2DAFF", 
      marginBottom:-34,
      paddingBottom:230
     
      
     },
    
     
  });