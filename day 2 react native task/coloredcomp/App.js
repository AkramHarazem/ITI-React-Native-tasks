// import { StatusBar } from 'expo-status-bar';
import { FlatList, Platform, SafeAreaView, ScrollView, SectionList, StyleSheet, Text, View } from 'react-native';
import Box from './Components/Box';




export default function App() {
  const COLORS=[
    {colorName:'Base03',hexCode:'#002b36'},
    {colorName:'Base02',hexCode:'#073642'},
    {colorName:'Base01',hexCode:'#586e75'},
    {colorName:'Base00',hexCode:'#657b83'},
    {colorName:'Base0',hexCode:'#839496'},
    {colorName:'Base1',hexCode:'#93a1a1'},
    {colorName:'Base2',hexCode:'#eee8d5'},
    {colorName:'Base3',hexCode:'#fdf6e3'},
    {colorName:'Yellow',hexCode:'#b58900'},
    {colorName:'Orange',hexCode:'#cb4b16'},
    {colorName:'Red',hexCode:'#dc322f'},
    {colorName:'Magenta',hexCode:'#d33682'},
    {colorName:'Cyan',hexCode:'#2aa198'},
    {colorName:'Green',hexCode:'#859900'},
    {colorName:'Base03',hexCode:'#002b36'},
    ]

  return (
    <SafeAreaView style={styles.container}>
      {/* <Text style={styles.text}>Here are some boxes of different colors</Text>
    <ScrollView >
      {COLORS.map((element)=> <Box key={element.hexCode}{...element}></Box>)}
    </ScrollView> */}
    {/* <FlatList
     style={{}}
     data={COLORS}
     renderItem={({item})=> <Box {...item}></Box>}
     keyExtractor={(data)=>data.hexCode}
     ListHeaderComponent={<Text style={styles.text}>Here are some boxes of different colors</Text>}
     ItemSeparatorComponent={<View style={{backgroundColor:"black",height:2}}></View>}
     numColumns={2}
     key={2}
    >
    </FlatList> */}
    <SectionList
    >

    </SectionList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:Platform.OS === "android"?30:0,
    padding:20
  },
  text:{
    fontSize:18,
    fontWeight:"bold",
    textAlign: "center",
  }
});
