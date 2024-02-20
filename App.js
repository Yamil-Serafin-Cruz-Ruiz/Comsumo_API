import { StyleSheet, SafeAreaView, Text} from "react-native";
import ScreenProductsList from "./ScreenProductsList";

export default function App(){
  return (
  <SafeAreaView style={styles.container}>
    <ScreenProductsList />
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#444242',
    alignItems: "center",
    justifyContent: "center",
  }
});
