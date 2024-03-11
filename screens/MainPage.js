import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View, ScrollView, Platform, StatusBar, TextInput, SafeAreaView} from "react-native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";
import { Entypo, AntDesign, FontAwesome6, Feather } from "@expo/vector-icons";
// import from expo-font

const MainPage = () => {
  return (
    <ScrollView>
      <View style={styles.mainPage}>
      {/* <Image
        style={styles.mainPageChild}
        contentFit="cover"
        source={require("../assets/rectangle-8.png")}
      /> */}

      <TextInput style={[styles.mainPageChild, {width: "90%"}, {backgroundColor: '#ecf0f1'}, {height: "3%"}, {borderRadius: 10}, {padding:10}]} placeholder="Location"/>
      <Text style={styles.yourCurrentLocation}>{`Your Current Location `}</Text>

      <Text style={[styles.williamsBrown, styles.hudaZakyTypo]}>
        Williams Brown
      </Text>
      <Text style={[styles.hudaZaky, styles.hudaZakyTypo]}>{`Huda Zaky`}</Text>
      <Text
        style={[styles.rachaelSmith, styles.hudaZakyTypo]}
      >{`Rachael Smith `}</Text>
      <Text style={styles.recentEvents}>{`RECENT EVENTS `}</Text>
      {/* <Image
        style={[styles.vectorIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      /> */}

      <Entypo style={[styles.vectorIcon, styles.iconLayout1]} name="location-pin" size={24} color="black" />
      

      {/* <Image
        style={[styles.vectorIcon1, styles.vectorPosition]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      /> */}
      <Entypo style={[styles.vectorIcon1, styles.vectorPosition]} name="menu" size={24} color="black" />

      <Pressable
        style={[styles.vector, styles.vectorPosition]}
        onPress={() => {}}
      >

        {/* <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector2.png")}
        /> */}
      <AntDesign style={[styles.icon, styles.iconLayout1]} name="message1" size={24} color="black" />


      </Pressable>
      <View style={[styles.mainPageItem, styles.mainLayout]} />
      <View style={[styles.mainPageInner, styles.mainLayout]} />
      <View style={[styles.rectangleView, styles.mainLayout]} />
      <Text style={styles.danger}>{`Danger `}</Text>
      <Text style={[styles.warning, styles.noticeTypo]}>{`Warning `}</Text>
      <Text style={[styles.caution, styles.noticeTypo]}>{`Caution   `}</Text>
      <View style={styles.mainPageChild1} />
      <Text style={[styles.notice, styles.noticeTypo]}>Notice</Text>
      {/* <Image
        style={[styles.rectangleIcon, styles.rectangleIconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-33.png")}
      /> */}
      <TextInput style={[styles.rectangleIcon, styles.rectangleIconLayout, {width: "90%"}, {backgroundColor: '#ecf0f1'}, {height: "15%"}, {borderRadius: 10}, {padding:10}]}/>


      <TextInput style={[styles.mainPageChild2, styles.rectangleIconLayout, {width: "90%"}, {backgroundColor: '#ecf0f1'}, {height: "15%"}, {borderRadius: 10}, {padding:10}]} />
      <Text
        style={[styles.torontoOntario, styles.ontarioTypo]}
      >{`Toronto, Ontario `}</Text>
      <Text
        style={[styles.markhamOntario, styles.ontarioTypo]}
      >{`Markham, Ontario `}</Text>
      <Text
        style={[styles.guelphOntario, styles.ontarioTypo]}
      >{`Guelph, Ontario `}</Text>
      <Image
        style={[styles.img3057Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/img-3057.png")}
      />
      <View style={styles.frameView} />
      <Image
        style={[styles.img3060Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/img-3060.png")}
      />
      


      <Text style={styles.near}>
        <Text style={styles.near1}>NEAR</Text>
        <Text style={styles.text}>{`  `}</Text>
      </Text>
      <Image
        style={[styles.img3061Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/img-3061.png")}
      />
      {/* <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      /> */}
      <Feather style={[styles.vectorIcon2, styles.vectorIconLayout1]} name="heart" size={24} color="black" />

      
      {/* <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      /> */}
      <FontAwesome6 style={[styles.vectorIcon3, styles.vectorIconLayout]} name="message" size={24} color="black" />

      {/* <Image
        style={[styles.vectorIcon4, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      /> */}
      <Feather style={[styles.vectorIcon4, styles.vectorIconLayout1]} name="heart" size={24} color="black" />
      {/* <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      /> */}
      <FontAwesome6 style={[styles.vectorIcon5, styles.vectorIconLayout]} name="message" size={24} color="black" />



      {/* <Image
        style={[styles.vectorIcon6, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector7.png")}

      /> */}

      <AntDesign style={[styles.vectorIcon7, styles.vectorIconLayout1]} name="heart" size={24} color="pink" />

      <FontAwesome6 style={[styles.vectorIcon6, styles.vectorIconLayout]} name="message" size={24} color="black" />

      {/* <Image
        style={[styles.vectorIcon7, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      /> */}
     
    </View>

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor:"#ffff", 
     paddingHorizontal:10,
   },
   headingText: {
    fontSize:25,
    textAlign:"center",
    paddingBottom:5,
    fontWeight:"bold"
   },
   text: {
    fontSize:16
   },
  hudaZakyTypo: {
    height: 26,
    fontSize: 14,
    width: 257,
    textAlign: "left",
    color: "#000",
    // fontFamily: 'regular',
    position: "absolute",
  },
  iconLayout1: {
    // maxHeight: "200%",
    // maxWidth: "150%",
    //overflow: "hidden",
  },
  vectorPosition: {
    // bottom: "99.71%",
    position: "absolute",
  },
  mainLayout: {
    width: 85,
    borderRadius: 5,
    top: 143,
    height: 25,
    position: "absolute",
  },
  noticeTypo: {
    top: 146,
    width: 58,
    color: "#fff",
    fontSize: 14,
    height: 20,
    textAlign: "left",
    // fontFamily: 'regular',
    position: "absolute",
  },
  rectangleIconLayout: {
    height: 225,
    width: 397,
    position: "absolute",
  },
  ontarioTypo: {
    fontSize: 8,
    textAlign: "left",
    color: "#000",
    // fontFamily: FontFamily.interRegular,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: 100,
    position: "absolute",
  },
  vectorIconLayout1: {
    left: "6.74%",
    right: "7.13%",
    // width: "5.13%",
    // height: "1.72%",
    // maxHeight: "100%",
    // maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIconLayout: {
    left: "18.49%",
    right: "75.38%",
    // width: "5.13%",
    // height: "1.72%",
    // maxHeight: "100%",
    // maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mainPageChild: {
    marginTop: -470,
    marginLeft: -172,
    borderRadius: 2,
    width: 352,
    height: 25,
    left: "50%",
    top: "50%",
    position: "absolute",
    color: "rgba(0,0,0,0.35)"
  },
  yourCurrentLocation: {
    top: 82,
    left: 55,
    fontSize: 10,
    height: 20,
    width: 257,
    textAlign: "left",
    color: "#000",
    // fontFamily: 'regular',
    position: "absolute",
  },
  williamsBrown: {
    left: 59,
    top: 222,
  },
  hudaZaky: {
    left: 58,
    top: 521,
  },
  rachaelSmith: {
    left: 61,
    top: 821,
  },
  recentEvents: {
    top: 186,
    left: 29,
    fontSize: 14,
    height: 20,
    width: 257,
    textAlign: "left",
    color: "#000",
    // fontFamily: 'regular',
    position: "absolute",
  },
  vectorIcon: {
    // height: "0.94%",
    // width: "2.05%",
    top: "6.2%",
    // right: "90%",
    // bottom: "91.85%",
    left: "6.95%",
    position: "absolute",
  },
  vectorIcon1: {
    // height: "1.29%",
    width: "10.62%",
    top: "3.5%",
    right: "88.21%",
    left: "2.18%",
    // maxHeight: "100%",
    // maxWidth: "100%",
    overflow: "hidden",
  },
  icon: {
    // height: "100%",
    // width: "100%",
    top: "50%",
  },
  vector: {
    left: "89.74%",
    top: "2.4%",
    right: "4.36%",
    width: "5.9%",
    height: "1.89%",
  },
  mainPageItem: {
    left: 26,
    backgroundColor: "#fe8787",
  },
  mainPageInner: {
    left: 115,
    backgroundColor: "#ffa06a",
  },
  rectangleView: {
    left: 204,
    backgroundColor: "#ffe144",
  },
  danger: {
    marginTop: -423,
    marginLeft: -148,
    width: 58,
    color: "#fff",
    fontWeight: 'bold',
    // fontWeight: "700",
    fontSize: 14,
    height: 20,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  warning: {
    left: 130,
  },
  caution: {
    left: 222,
  },
  mainPageChild1: {
    left: 293,
    backgroundColor: "#85b6ff",
    width: 82,
    borderRadius: 5,
    top: 143,
    height: 25,
    position: "absolute",
  },
  notice: {
    left: 314,
  },
  rectangleIcon: {
    top: 275,
    left: 20,
  },
  mainPageChild2: {
    top: 575,
    left: 20,
    backgroundColor: "#d9d9d9",
  },
  torontoOntario: {
    top: 238,
    left: 59,
  },
  markhamOntario: {
    top: 538,
    width: 68,
    height: 9,
    left: 58,
  },
  guelphOntario: {
    top: 837,
    width: 151,
    left: 61,
  },
  img3057Icon: {
    left: 17,
    width: 38,
    height: 37,
    top: 222,
  },
  frameView: {
    top: 265,
    left: 132,
    borderRadius: 20,
    width: 40,
    height: 40,
    position: "absolute",
    overflow: "hidden",
  },
  img3060Icon: {
    left: 16,
    width: 39,
    height: 38,
    top: 521,
  },
  near1: {
    fontWeight: 'bold',
    //fontWeight: "700",
  },
  text: {
    // fontFamily: 'regular',
  },
  near: {
    marginTop: -540,
    marginLeft: -45,
    fontSize: 35,
    width: 197,
    height: 121,
    textAlign: "left",
    color: "#000",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  img3061Icon: {
    left: 20,
    width: 35,
    height: 36,
    top: 821,
  },
  vectorIcon2: {
    top: "65.98%",
    bottom: "32.5%",
  },
  vectorIcon3: {
    top: "66.19%",
    bottom: "32.59%",
  },
  vectorIcon4: {
    top: "39.80%",
    bottom: "58.23%",
  },
  vectorIcon5: {
    top: "39.97%",
    bottom: "58.32%",
  },
  vectorIcon6: {
    top: "91.68%",
    bottom: "6.6%",
  },
  vectorIcon7: {
    top: "91.6%",
    bottom: "6.69%",
  },
  mainPage: {
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flex: 1,
    height: 1166,
    overflow: "hidden",
    width: "100%",
    
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0

  },
});

export default MainPage;
