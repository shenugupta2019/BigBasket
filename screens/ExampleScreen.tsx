import React from 'react';
import { View } from 'react-native';
import Typography from '../components/atoms/Typography';
import Button from '../components/atoms/Button';


const ExampleScreen = () => {
  return (
    <View style={{ padding: 16 }}>
   <Typography variant="h1" color="blue" align="center">
  Heading 1
</Typography>

<Typography variant="body">
  This is body text without a custom style.
</Typography>
<Button 
  title="Click Me" 
  onPress={() => console.log('Button pressed!')} 
/>
<Button
  title="Secondary Button"
  variant="secondary"
  onPress={() => console.log('Secondary Button pressed!')}
  color="yellow"
  backgroundColor="darkgreen"
/>

<Button
  title="Custom Button"
  onPress={() => console.log('Custom Button pressed!')}
  style={{ borderRadius: 20, paddingVertical: 10 }}  // Custom container styles
  textStyle={{ fontSize: 20, fontWeight: 'normal' }} // Custom text styles
/>
<Button
  title="Disabled Button"
  onPress={() => console.log('This will not fire')}
  disabled={true}
/>
    </View>
  );
};

export default ExampleScreen;
