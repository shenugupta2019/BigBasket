import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/NavigationController';
import ImageComponent from '../components/atoms/ImageComponent';
import { globalStyles } from '../components/GlobalStyles/GlobalStyles';  // Import global styles
import StyledContainer from '../components/GlobalStyles/StylesContainer';
import Card from '../components/molecules/Card';
import HighPerformanceList from '../components/HighPerformanceFlatList';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

type Props = {
  navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    const handleCardPress = () => {
        console.log('Card pressed!');
      };
  return (
    <View style={styles.container}>
   
   <StyledContainer justifyContent='flex-start' flexDirection='column' style={styles.container}>
    <HighPerformanceList/>
   <Card
        title="Card Title 1"
        content="This is the content of the first card."
        onPress={handleCardPress}
        style={styles.customCard}
      />
      </StyledContainer>
      {/* <Text>Home Screen</Text> */}
      {/* <ImageComponent
        source="https://dummyimage.com/300x200/000/fff"
        width={250}
        height={250}
        borderRadius={10}
      />
      <Button
        title="Go to Details"
        onPress={() =>
          navigation.navigate('Details', { itemId: 86, otherParam: 'Anything' })
        }
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
   // flex: 1,
   // justifyContent: 'center',
   // alignItems: 'center',
  },
  text: {
    color:'red'
  },
  customCard:{
  width:60,
  height:60
  }
});

export default HomeScreen;
