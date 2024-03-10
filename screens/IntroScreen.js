// IntroScreen.js
import { useEffect } from 'react';
import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native';


export default IntroScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignUp');
    }, 3000); // 3 seconds

    return () => clearTimeout(timer); // cleanup function
  }, [navigation]);

  return (
    <SafeAreaView styles={[styles.container]}>
        <View style={{top: 155}}>
            <Image
                source={require('../assets/6.png')}
                style={{ width: 300, height: 300, alignSelf: "center", borderRadius: 150}}
            />
            <Text style={[styles.text]}>Keeping our loved ones safe</Text>

        </View>
       

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#ffffff",
      paddingHorizontal:4,
      justifyContent: "center",
    },
    headingText: {
      fontSize: 30,
      textAlign: "center",
      paddingBottom: 5,
    },
    text: {
      fontSize: 18,
      textAlign: "center",
      top: 10,
    },    
  });
  