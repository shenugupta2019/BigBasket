import React from 'react';
import { View } from 'react-native';
import Typography from '../components/atoms/Typography';

const ExampleScreen = () => {
  return (
    <View style={{ padding: 16 }}>
   <Typography variant="h1" color="blue" align="center">
  Heading 1
</Typography>

<Typography variant="body">
  This is body text without a custom style.
</Typography>
    </View>
  );
};

export default ExampleScreen;
