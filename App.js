import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { global } from "./css/Styles.js";
import Header from "./components/Header";
import Stories from './components/Stories/index.js';


export default function App() {
  return (
   
    <View style = {global.container}>
      <Header/>
      <Stories/>
    </View>
  );
}