/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import * as React from 'react';
import type { PropsWithChildren } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, Button, } from 'react-native';
import { Colors, DebugInstructions, Header, LearnMoreLinks, ReloadInstructions, } from 'react-native/Libraries/NewAppScreen';

const Stack = createNativeStackNavigator();

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

const Review = ({ navigation }) => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: Colors.darker,
      textAlign: 'center',
      borderWidth: 0,
      borderColor: '#fff',
      borderRadius: 6,
      padding: 100,
    },
    view: {
      flex: 1,
      justifyContent: 'space-around',
      alignContent: 'center',
      borderWidth: 0,
      borderColor: '#ff2',
      borderRadius: 6,
    },
    text: {
      justifyContent: 'space-around',
      alignContent: 'center',
      color: Colors.light,
      textAlign: 'center',
      fontSize: 30,
    }
  });
  const safePadding = '5%';
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Text style={styles.text}>
          React Native Test Apps
        </Text>
        <Button
          title="Start Up"
          onPress={() =>
            navigation.navigate('Home')
          }
        /></View>
    </View>
  );

}

const Home = () => {
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    }
  });

  return (
    <View style={styles.container}>
      <Text>Hallo World</Text>
    </View>
  );

}

const Preview = ({ route }) => {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignContent: 'center',
    }
  });
  return (
    <View style={styles.container}>
      <Text>Hallo Preview {route.params.name}</Text>
    </View>
  );
}
function App(): React.JSX.Element {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Review' component={Review} />
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Preview' component={Preview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
