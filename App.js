import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const [text, setText] = useState("");

export default function App() {
  const buttonPressed = () => {
    console.log("Button pressed!");
  };

  return (
    <View style={{
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around'
    }}>
      <TextInput
        placeholder='Enter some text'
        onChangeText={text => setText(text)}
        value={text}
      />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="+" onPress={buttonPressed} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button title="-" onPress={buttonPressed} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
